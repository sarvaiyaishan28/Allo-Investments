'use client'

import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  TrendingUp,
  Users,
  FileText,
  Search,
  Download,
  Plus,
  LayoutGrid,
  List,
  Building2,
  ChevronRight,
  X,
} from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Progress } from '@/components/ui/progress'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { identities } from '@/lib/mock-data'
import { useAuth } from '@/components/providers/auth-provider'
import { fetchDeals } from '@/lib/api-client'

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import type { DealStatus, DealType, Deal } from '@/lib/types'

const statusFilters: { id: DealStatus | 'all'; label: string }[] = [
  { id: 'all', label: 'All Status' },
  { id: 'draft', label: 'Draft' },
  { id: 'submitted', label: 'Submitted' },
  { id: 'onboarding', label: 'Onboarding' },
  { id: 'closing', label: 'Closing' },
  { id: 'closed', label: 'Closed' },
]

function formatCurrency(amount: number): string {
  if (amount >= 1000000) {
    return `$${(amount / 1000000).toFixed(1)}M`
  }
  if (amount >= 1000) {
    return `$${(amount / 1000).toFixed(0)}K`
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(amount)
}

function getStatusBadge(status: DealStatus) {
  const statusConfig: Record<DealStatus, { label: string; className: string }> = {
    draft: { label: 'Draft', className: 'bg-muted text-muted-foreground border-transparent' },
    submitted: { label: 'Submitted', className: 'bg-amber-500/10 text-amber-600 border-amber-500/20' },
    onboarding: { label: 'Onboarding', className: 'bg-primary/10 text-primary border-primary/20' },
    closing: { label: 'Closing', className: 'bg-sky-500/10 text-sky-600 border-sky-500/20' },
    close_requested: { label: 'Close Requested', className: 'bg-violet-500/10 text-violet-600 border-violet-500/20' },
    closed: { label: 'Closed', className: 'bg-muted text-muted-foreground border-transparent' },
    test: { label: 'Test', className: 'bg-primary/10 text-primary border-primary/20' },
    migration: { label: 'Migration', className: 'bg-violet-500/10 text-violet-600 border-violet-500/20' },
  }
  const config = statusConfig[status]
  return <Badge variant="outline" className={cn('text-[10px] font-medium', config.className)}>{config.label}</Badge>
}

// Create Deal Dialog
function CreateDealDialog({
  open,
  onOpenChange
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const router = useRouter()
  const { requireAuth } = useAuth()
  const [dealType, setDealType] = React.useState<DealType>('spv')
  const [dealName, setDealName] = React.useState('')
  const [selectedIdentity, setSelectedIdentity] = React.useState('')
  const [isCreating, setIsCreating] = React.useState(false)

  // Check auth when dialog opens
  React.useEffect(() => {
    if (open) {
      const isAuthed = requireAuth()
      if (!isAuthed) {
        onOpenChange(false)
      }
    }
  }, [open, requireAuth, onOpenChange])

  const handleCreate = async () => {
    if (!dealName.trim()) return

    setIsCreating(true)

    try {
      const response = await fetch('http://localhost:3001/api/deals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: dealName,
          type: dealType,
          entityName: `${dealName} LLC`,
          status: 'draft',
          productType: 'standard_spv',
          managementFee: 1,
          carry: 10,
          targetRaise: 1000000,
          minimumInvestment: 10000,
          totalSigned: 0,
          totalWired: 0,
          investorCount: 0,
          estimatedClosingDate: new Date().toISOString(),
          offeringType: '506b',
          fundManagerId: 'user_1'
        }),
      });
      const newDeal = await response.json();

      onOpenChange(false);
      router.push(`/deals/${newDeal.id}/admin`);
    } catch (error) {
      console.error('Failed to create deal', error);
      setIsCreating(false);
    }
  }

  React.useEffect(() => {
    if (open) {
      setDealType('spv')
      setDealName('')
      setSelectedIdentity('')
      setIsCreating(false)
    }
  }, [open])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create New Deal</DialogTitle>
          <DialogDescription>
            Start by selecting the deal type and giving it a name.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-2">
          {/* Deal Type Selection */}
          <div className="space-y-2">
            <Label className="text-xs font-medium">Deal Type</Label>
            <RadioGroup
              value={dealType}
              onValueChange={(v) => setDealType(v as DealType)}
              className="grid grid-cols-2 gap-3"
            >
              <Label
                htmlFor="spv"
                className={cn(
                  "flex flex-col items-center justify-center rounded-lg border-2 p-4 cursor-pointer transition-all",
                  dealType === 'spv'
                    ? "border-primary bg-primary/5"
                    : "border-muted hover:border-muted-foreground/30"
                )}
              >
                <RadioGroupItem value="spv" id="spv" className="sr-only" />
                <Building2 className={cn(
                  "size-8 mb-2",
                  dealType === 'spv' ? "text-primary" : "text-muted-foreground"
                )} />
                <span className={cn(
                  "font-medium text-sm",
                  dealType === 'spv' ? "text-primary" : "text-foreground"
                )}>SPV</span>
                <span className="text-[10px] text-muted-foreground text-center mt-1">
                  Single investment vehicle
                </span>
              </Label>

              <Label
                htmlFor="fund"
                className={cn(
                  "flex flex-col items-center justify-center rounded-lg border-2 p-4 cursor-pointer transition-all",
                  dealType === 'fund'
                    ? "border-primary bg-primary/5"
                    : "border-muted hover:border-muted-foreground/30"
                )}
              >
                <RadioGroupItem value="fund" id="fund" className="sr-only" />
                <TrendingUp className={cn(
                  "size-8 mb-2",
                  dealType === 'fund' ? "text-primary" : "text-muted-foreground"
                )} />
                <span className={cn(
                  "font-medium text-sm",
                  dealType === 'fund' ? "text-primary" : "text-foreground"
                )}>Fund</span>
                <span className="text-[10px] text-muted-foreground text-center mt-1">
                  Multiple investments
                </span>
              </Label>
            </RadioGroup>
          </div>

          {/* Deal Name */}
          <div className="space-y-2">
            <Label htmlFor="deal-name" className="text-xs font-medium">Deal Name</Label>
            <Input
              id="deal-name"
              placeholder={dealType === 'spv' ? "e.g., Series A Investment SPV" : "e.g., Venture Fund I"}
              value={dealName}
              onChange={(e) => setDealName(e.target.value)}
              className="h-10"
            />
            <p className="text-[10px] text-muted-foreground">
              This will be visible to investors. You can change it later.
            </p>
          </div>

          {/* Identity Selection */}
          <div className="space-y-2">
            <Label className="text-xs font-medium">Select Identity (Optional)</Label>
            <Select value={selectedIdentity} onValueChange={setSelectedIdentity}>
              <SelectTrigger className="h-10">
                <SelectValue placeholder="Select an identity" />
              </SelectTrigger>
              <SelectContent>
                {identities.map((identity) => (
                  <SelectItem key={identity.id} value={identity.id}>
                    {identity.name} - {identity.email}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-[10px] text-muted-foreground">
              Associate this deal with an existing identity.
            </p>
          </div>
        </div>

        <DialogFooter className="gap-2 sm:gap-0">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button
            onClick={handleCreate}
            disabled={!dealName.trim() || isCreating}
          >
            {isCreating ? 'Creating...' : 'Create Deal'}
            {!isCreating && <ChevronRight className="size-4 ml-1" />}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

function DealCard({ deal }: { deal: Deal }) {
  const fundingProgress = Math.min((deal.totalWired / deal.targetRaise) * 100, 100)

  return (
    <Link href={`/deals/${deal.id}`}>
      <Card className="h-full transition-colors hover:border-primary/30 cursor-pointer">
        <CardContent className="px-3 py-3">
          <div className="flex items-start gap-3 mb-3">
            <Avatar className="size-10 bg-primary/10 text-primary shrink-0">
              <AvatarFallback className="text-sm font-semibold bg-primary/10 text-primary">
                {deal.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm truncate">{deal.name}</h3>
              <p className="text-xs text-muted-foreground truncate mt-0.5">{deal.entityName}</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 mb-3">
            {getStatusBadge(deal.status)}
            <Badge variant="outline" className="uppercase text-[10px] font-medium">
              {deal.type}
            </Badge>
          </div>

          <div className="space-y-1.5 mb-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium">{Math.round(fundingProgress)}%</span>
            </div>
            <Progress value={fundingProgress} className="h-1" />
          </div>

          <div className="grid grid-cols-2 gap-3 pt-3 border-t text-xs">
            <div className="space-y-1">
              <p className="text-muted-foreground">Signed</p>
              <p className="font-semibold">{formatCurrency(deal.totalSigned)}</p>
            </div>
            <div className="space-y-1">
              <p className="text-muted-foreground">Wired</p>
              <p className="font-semibold">{formatCurrency(deal.totalWired)}</p>
            </div>
          </div>

          <div className="flex items-center justify-between pt-3 border-t mt-3 text-xs">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Users className="size-3.5" />
              {deal.investorCount}
            </div>
            <span className="text-muted-foreground">{deal.managementFee}% fee</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export function DealsPage() {
  const [deals, setDeals] = React.useState<Deal[]>([])
  const [loading, setLoading] = React.useState(true)
  const [searchQuery, setSearchQuery] = React.useState('')
  const [selectedStatus, setSelectedStatus] = React.useState<DealStatus | 'all'>('all')
  const [viewMode, setViewMode] = React.useState<'grid' | 'table'>('table')
  const [createDialogOpen, setCreateDialogOpen] = React.useState(false)
  const [currentPage, setCurrentPage] = React.useState(1)
  
  const itemsPerPage = viewMode === 'grid' ? 8 : 10

  const { isAuthenticated } = useAuth()

  React.useEffect(() => {
    fetchDeals()
      .then(data => {
        setDeals(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to fetch deals', err)
        setLoading(false)
      })
  }, [])

  const filteredDeals = React.useMemo(() => {
    return deals.filter((deal) => {
      const matchesSearch = deal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (deal.entityName || '').toLowerCase().includes(searchQuery.toLowerCase())
      const matchesStatus = selectedStatus === 'all' || deal.status === selectedStatus
      return matchesSearch && matchesStatus
    })
  }, [deals, searchQuery, selectedStatus])

  React.useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, selectedStatus, viewMode])

  const paginatedDeals = React.useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return filteredDeals.slice(startIndex, startIndex + itemsPerPage)
  }, [filteredDeals, currentPage, itemsPerPage])

  const totalPages = Math.ceil(filteredDeals.length / itemsPerPage)

  const stats = React.useMemo(() => {
    const totalAUM = deals.reduce((sum, deal) => sum + deal.totalWired, 0)
    const totalInvestors = deals.reduce((sum, deal) => sum + deal.investorCount, 0)
    return { aum: totalAUM, investors: totalInvestors, totalDeals: deals.length }
  }, [deals])

  if (loading) {
    return <div className="p-8 text-center text-muted-foreground">Loading deals...</div>
  }

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold tracking-tight">Deals</h1>
          <p className="text-sm text-muted-foreground">Manage and track your investment deals.</p>
        </div>
        <Button size="sm" onClick={() => setCreateDialogOpen(true)}>
          <Plus className="size-4 mr-1.5" />
          New Deal
        </Button>
      </div>

      {/* Stats */}
      {isAuthenticated && (
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-3">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="px-3 py-3">
                <div className="flex items-center gap-2 text-primary text-xs font-medium mb-1.5">
                  <TrendingUp className="size-3.5" />
                  AUM
                </div>
                <p className="text-2xl font-bold text-foreground">{formatCurrency(stats.aum + 21120)}</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
            <Card>
              <CardContent className="px-3 py-3">
                <div className="flex items-center gap-2 text-muted-foreground text-xs font-medium mb-1.5">
                  <Users className="size-3.5" />
                  Investors
                </div>
                <p className="text-2xl font-bold">{stats.investors}</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Card>
              <CardContent className="px-3 py-3">
                <div className="flex items-center gap-2 text-muted-foreground text-xs font-medium mb-1.5">
                  <FileText className="size-3.5" />
                  Deals
                </div>
                <p className="text-2xl font-bold">{stats.totalDeals}</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      )}

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            placeholder="Search deals..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 h-9"
          />
        </div>

        <div className="flex items-center gap-2">
          <Select value={selectedStatus} onValueChange={(v) => setSelectedStatus(v as DealStatus | 'all')}>
            <SelectTrigger className="w-32 h-9 text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {statusFilters.map((filter) => (
                <SelectItem key={filter.id} value={filter.id} className="text-xs">
                  {filter.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="flex border rounded-md overflow-hidden">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              size="icon"
              className="size-9 rounded-none"
              onClick={() => setViewMode('grid')}
            >
              <LayoutGrid className="size-4" />
            </Button>
            <Button
              variant={viewMode === 'table' ? 'default' : 'ghost'}
              size="icon"
              className="size-9 rounded-none"
              onClick={() => setViewMode('table')}
            >
              <List className="size-4" />
            </Button>
          </div>

          <Button variant="outline" size="sm" className="hidden sm:flex h-9 text-xs">
            <Download className="size-3.5 mr-1.5" />
            Export
          </Button>
        </div>
      </div>

      {/* Grid View */}
      {viewMode === 'grid' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {paginatedDeals.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </motion.div>
      )}

      {/* Table View */}
      {viewMode === 'table' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Card>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="min-w-[180px]">Deal</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead className="text-right">Signed</TableHead>
                    <TableHead className="text-right">Wired</TableHead>
                    <TableHead className="text-right">Investors</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedDeals.map((deal) => (
                    <TableRow key={deal.id} className="group">
                      <TableCell>
                        <Link href={`/deals/${deal.id}`} className="flex items-center gap-3 hover:text-primary">
                          <Avatar className="size-8 bg-primary/10 text-primary">
                            <AvatarFallback className="text-xs font-semibold bg-primary/10 text-primary">
                              {deal.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="min-w-0">
                            <p className="font-medium text-sm truncate">{deal.name}</p>
                            <p className="text-xs text-muted-foreground truncate">{deal.entityName}</p>
                          </div>
                        </Link>
                      </TableCell>
                      <TableCell>{getStatusBadge(deal.status)}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="uppercase text-[10px]">
                          {deal.type}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right font-medium text-sm">
                        {formatCurrency(deal.totalSigned)}
                      </TableCell>
                      <TableCell className="text-right font-medium text-sm">
                        {formatCurrency(deal.totalWired)}
                      </TableCell>
                      <TableCell className="text-right text-sm">{deal.investorCount}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm" asChild className="opacity-0 group-hover:opacity-100">
                          <Link href={`/deals/${deal.id}`}>View</Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </motion.div>
      )}

      {filteredDeals.length === 0 && (
        <div className="text-center py-12">
          <FileText className="size-10 mx-auto text-muted-foreground/40 mb-3" />
          <p className="text-sm text-muted-foreground">No deals found.</p>
        </div>
      )}

      {totalPages > 1 && (
        <Pagination className="mt-6">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  if (currentPage > 1) setCurrentPage(p => p - 1)
                }}
                className={currentPage <= 1 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }).map((_, i) => {
              const page = i + 1
              if (
                page === 1 ||
                page === totalPages ||
                (page >= currentPage - 1 && page <= currentPage + 1)
              ) {
                return (
                  <PaginationItem key={page}>
                    <PaginationLink
                      href="#"
                      isActive={page === currentPage}
                      onClick={(e) => {
                        e.preventDefault()
                        setCurrentPage(page)
                      }}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                )
              }
              if (page === currentPage - 2 || page === currentPage + 2) {
                return (
                  <PaginationItem key={page}>
                    <PaginationEllipsis />
                  </PaginationItem>
                )
              }
              return null
            })}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  if (currentPage < totalPages) setCurrentPage(p => p + 1)
                }}
                className={currentPage >= totalPages ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}

      {/* Create Deal Dialog */}
      <CreateDealDialog open={createDialogOpen} onOpenChange={setCreateDialogOpen} />
    </div>
  )
}
