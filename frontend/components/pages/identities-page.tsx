"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  User, Plus, Search, MoreHorizontal, Edit, Trash2, 
  FileText, Shield, CheckCircle2, AlertCircle, Clock,
  Download, Mail, Phone, MapPin, Building2, LayoutGrid, List, Upload
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface Identity {
  id: string
  firstName: string
  lastName: string
  email: string
  phone?: string
  type: "Individual" | "Entity Representative"
  kycStatus: "Verified" | "Pending" | "Not Started" | "Failed"
  accreditationStatus: "Verified" | "Pending" | "Expired"
  linkedEntities: string[]
  investments: number
  dateAdded: string
  avatar?: string
}

const mockIdentities: Identity[] = [
  {
    id: "1",
    firstName: "Alex",
    lastName: "Martinez",
    email: "alex@allo.com",
    phone: "+1 (555) 123-4567",
    type: "Individual",
    kycStatus: "Verified",
    accreditationStatus: "Verified",
    linkedEntities: ["Oakwood Capital LP"],
    investments: 12,
    dateAdded: "2024-01-15",
  },
  {
    id: "2",
    firstName: "Sarah",
    lastName: "Mitchell",
    email: "sarah.m@example.com",
    phone: "+1 (555) 987-6543",
    type: "Individual",
    kycStatus: "Verified",
    accreditationStatus: "Pending",
    linkedEntities: ["TechFund Holdings LP", "Innovation Capital Corp"],
    investments: 8,
    dateAdded: "2024-02-20",
  },
  {
    id: "3",
    firstName: "Marcus",
    lastName: "Johnson",
    email: "marcus.j@company.io",
    type: "Entity Representative",
    kycStatus: "Pending",
    accreditationStatus: "Verified",
    linkedEntities: ["Family Trust Alpha"],
    investments: 3,
    dateAdded: "2024-03-10",
  },
  {
    id: "4",
    firstName: "Emily",
    lastName: "Rodriguez",
    email: "emily.r@startup.co",
    phone: "+1 (555) 456-7890",
    type: "Individual",
    kycStatus: "Not Started",
    accreditationStatus: "Expired",
    linkedEntities: [],
    investments: 0,
    dateAdded: "2024-04-05",
  },
  {
    id: "5",
    firstName: "David",
    lastName: "Kim",
    email: "david.kim@venture.fund",
    type: "Entity Representative",
    kycStatus: "Failed",
    accreditationStatus: "Pending",
    linkedEntities: ["Series A Holdings LLC"],
    investments: 5,
    dateAdded: "2023-12-01",
  },
]

const kycConfig = {
  "Verified": { color: "bg-sky-500/10 text-sky-600 border-sky-500/20", icon: CheckCircle2 },
  "Pending": { color: "bg-amber-500/10 text-amber-600 border-amber-500/20", icon: Clock },
  "Not Started": { color: "bg-muted text-muted-foreground border-border", icon: AlertCircle },
  "Failed": { color: "bg-destructive/10 text-destructive border-destructive/20", icon: AlertCircle },
}

const accreditationConfig = {
  "Verified": { color: "bg-sky-500/10 text-sky-600 border-sky-500/20" },
  "Pending": { color: "bg-amber-500/10 text-amber-600 border-amber-500/20" },
  "Expired": { color: "bg-destructive/10 text-destructive border-destructive/20" },
}

export function IdentitiesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [typeFilter, setTypeFilter] = useState<string>("all")
  const [kycFilter, setKycFilter] = useState<string>("all")
  const [isCreateOpen, setIsCreateOpen] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("list")
  const [identityType, setIdentityType] = useState<string>("")
  const [kycDocuments, setKycDocuments] = useState<File[]>([])

  const filteredIdentities = mockIdentities.filter((identity) => {
    const fullName = `${identity.firstName} ${identity.lastName}`.toLowerCase()
    const matchesSearch = fullName.includes(searchQuery.toLowerCase()) || 
                          identity.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = typeFilter === "all" || identity.type === typeFilter
    const matchesKyc = kycFilter === "all" || identity.kycStatus === kycFilter
    return matchesSearch && matchesType && matchesKyc
  })

  return (
    <div className="p-6 lg:p-8 flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Identities</h1>
          <p className="text-muted-foreground">Manage investor identities and KYC verification</p>
        </div>
        <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="mr-2 h-4 w-4" />
              Add Identity
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Add New Identity</DialogTitle>
              <DialogDescription>
                Add a new investor identity for KYC verification
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              {/* Identity Type Selection - At Top */}
              <div className="grid gap-2">
                <Label htmlFor="type">Identity Type</Label>
                <Select value={identityType} onValueChange={setIdentityType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select identity type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="individual">Individual</SelectItem>
                    <SelectItem value="entity-rep">Entity Representative</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Conditional Fields Based on Identity Type */}
              {identityType === "individual" && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone (Optional)</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                </>
              )}

              {identityType === "entity-rep" && (
                <>
                  <div className="grid gap-2">
                    <Label htmlFor="entityLegalName">Entity Legal Name</Label>
                    <Input id="entityLegalName" placeholder="Enter entity legal name" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="repFirstName">Representative First Name</Label>
                      <Input id="repFirstName" placeholder="John" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="repLastName">Representative Last Name</Label>
                      <Input id="repLastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="repEmail">Representative Email</Label>
                    <Input id="repEmail" type="email" placeholder="john@company.com" />
                  </div>
                </>
              )}

              {/* KYC Document Upload - Show when type is selected */}
              {identityType && (
                <div className="grid gap-2">
                  <Label>KYC Documents</Label>
                  <div className="border-2 border-dashed rounded-lg p-4 text-center hover:border-primary/50 transition-colors">
                    <input
                      type="file"
                      id="kycDocuments"
                      multiple
                      accept=".pdf,.jpg,.jpeg,.png"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files) {
                          setKycDocuments(Array.from(e.target.files))
                        }
                      }}
                    />
                    <label htmlFor="kycDocuments" className="cursor-pointer">
                      <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                      <p className="text-sm font-medium">Upload KYC Documents</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Passport, PAN Card, ID Proof, etc.
                      </p>
                      <p className="text-xs text-muted-foreground">
                        PDF, JPG, PNG (Max 10MB each)
                      </p>
                    </label>
                  </div>
                  {kycDocuments.length > 0 && (
                    <div className="mt-2 space-y-1">
                      {kycDocuments.map((file, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm bg-muted/50 rounded px-2 py-1">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span className="truncate flex-1">{file.name}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => setKycDocuments(kycDocuments.filter((_, i) => i !== index))}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => {
                setIsCreateOpen(false)
                setIdentityType("")
                setKycDocuments([])
              }}>
                Cancel
              </Button>
              <Button 
                className="bg-primary hover:bg-primary/90" 
                onClick={() => {
                  setIsCreateOpen(false)
                  setIdentityType("")
                  setKycDocuments([])
                }}
                disabled={!identityType}
              >
                Add Identity
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-primary">Total Identities</p>
                <p className="text-3xl font-bold">{mockIdentities.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10">
                <Shield className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">KYC Verified</p>
                <p className="text-3xl font-bold">{mockIdentities.filter(i => i.kycStatus === "Verified").length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10">
                <Clock className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Pending Review</p>
                <p className="text-3xl font-bold">{mockIdentities.filter(i => i.kycStatus === "Pending").length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10">
                <CheckCircle2 className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Accredited</p>
                <p className="text-3xl font-bold">{mockIdentities.filter(i => i.accreditationStatus === "Verified").length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex gap-2">
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="Individual">Individual</SelectItem>
              <SelectItem value="Entity Representative">Entity Rep</SelectItem>
            </SelectContent>
          </Select>
          <Select value={kycFilter} onValueChange={setKycFilter}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="KYC Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All KYC</SelectItem>
              <SelectItem value="Verified">Verified</SelectItem>
              <SelectItem value="Pending">Pending</SelectItem>
              <SelectItem value="Not Started">Not Started</SelectItem>
              <SelectItem value="Failed">Failed</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
          <div className="flex border rounded-md">
            <Button
              variant={viewMode === "list" ? "secondary" : "ghost"}
              size="icon"
              className="rounded-r-none"
              onClick={() => setViewMode("list")}
            >
              <List className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "grid" ? "secondary" : "ghost"}
              size="icon"
              className="rounded-l-none"
              onClick={() => setViewMode("grid")}
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Identities Table View */}
      {viewMode === "list" && (
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>KYC Status</TableHead>
                <TableHead>Accreditation</TableHead>
                <TableHead>Investments</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredIdentities.map((identity) => {
                const KycIcon = kycConfig[identity.kycStatus].icon
                return (
                  <TableRow key={identity.id} className="cursor-pointer hover:bg-muted/50">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={identity.avatar} />
                          <AvatarFallback className="bg-primary/10 text-primary text-xs">
                            {identity.firstName.charAt(0)}{identity.lastName.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{identity.firstName} {identity.lastName}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{identity.type}</TableCell>
                    <TableCell className="text-muted-foreground">{identity.email}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={kycConfig[identity.kycStatus].color}>
                        <KycIcon className="mr-1 h-3 w-3" />
                        {identity.kycStatus}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className={accreditationConfig[identity.accreditationStatus].color}>
                        {identity.accreditationStatus}
                      </Badge>
                    </TableCell>
                    <TableCell>{identity.investments}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <User className="mr-2 h-4 w-4" />
                            View Profile
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit Identity
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Shield className="mr-2 h-4 w-4" />
                            Request KYC
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </Card>
      )}

      {/* Identities Grid */}
      {viewMode === "grid" && (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filteredIdentities.map((identity, index) => {
            const KycIcon = kycConfig[identity.kycStatus].icon
            return (
              <motion.div
                key={identity.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="group cursor-pointer transition-all hover:border-primary/50 hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-12 w-12 border-2 border-background shadow-sm">
                          <AvatarImage src={identity.avatar} />
                          <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                            {identity.firstName.charAt(0)}{identity.lastName.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold group-hover:text-primary transition-colors">
                            {identity.firstName} {identity.lastName}
                          </h3>
                          <p className="text-sm text-muted-foreground">{identity.type}</p>
                        </div>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <User className="mr-2 h-4 w-4" />
                            View Profile
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit Identity
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Shield className="mr-2 h-4 w-4" />
                            Request KYC
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Mail className="h-3.5 w-3.5" />
                        <span className="truncate">{identity.email}</span>
                      </div>
                      {identity.phone && (
                        <div className="flex items-center gap-2">
                          <Phone className="h-3.5 w-3.5" />
                          <span>{identity.phone}</span>
                        </div>
                      )}
                      {identity.linkedEntities.length > 0 && (
                        <div className="flex items-center gap-2">
                          <Building2 className="h-3.5 w-3.5" />
                          <span className="truncate">{identity.linkedEntities.join(", ")}</span>
                        </div>
                      )}
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <Badge variant="outline" className={kycConfig[identity.kycStatus].color}>
                        <KycIcon className="mr-1 h-3 w-3" />
                        KYC: {identity.kycStatus}
                      </Badge>
                      <Badge variant="outline" className={accreditationConfig[identity.accreditationStatus].color}>
                        Accred: {identity.accreditationStatus}
                      </Badge>
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t pt-4 text-sm">
                      <span className="text-muted-foreground">
                        {identity.investments} investment{identity.investments !== 1 ? "s" : ""}
                      </span>
                      <span className="text-muted-foreground">
                        Added {new Date(identity.dateAdded).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
      )}

      {filteredIdentities.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <User className="h-12 w-12 text-muted-foreground/50" />
          <h3 className="mt-4 font-semibold">No identities found</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  )
}
