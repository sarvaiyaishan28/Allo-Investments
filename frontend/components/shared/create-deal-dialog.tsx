'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { Building2, TrendingUp, ChevronRight } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  RadioGroup,
  RadioGroupItem,
} from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { identities } from '@/lib/mock-data'

interface CreateDealDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CreateDealDialog({ open, onOpenChange }: CreateDealDialogProps) {
  const router = useRouter()
  
  const [dealType, setDealType] = React.useState('spv')
  const [dealName, setDealName] = React.useState('')
  const [identityId, setIdentityId] = React.useState('')
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  // Reset state when opened
  React.useEffect(() => {
    if (open) {
      setDealType('spv')
      setDealName('')
      setIdentityId('')
      setIsSubmitting(false)
    }
  }, [open])

  const handleCreate = () => {
    if (!dealName.trim()) return
    setIsSubmitting(true)
    
    // Generate a new ID and push to the admin page
    // Using a timeout to simulate a brief loading state
    setTimeout(() => {
      onOpenChange(false)
      const newDealId = `deal_new_${Date.now()}`
      // Update the mock data or just pass via query string? The page handles deal_new_ ids.
      router.push(`/deals/${newDealId}/admin`)
    }, 500)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] p-6">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-xl font-bold">Create New Deal</DialogTitle>
          <DialogDescription className="text-muted-foreground mt-1.5">
            Start by selecting the deal type and giving it a name.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Deal Type Selection */}
          <div className="space-y-3">
            <Label className="text-sm font-semibold">Deal Type</Label>
            <RadioGroup
              value={dealType}
              onValueChange={setDealType}
              className="grid grid-cols-2 gap-4"
            >
              <Label
                htmlFor="spv"
                className={cn(
                  "flex flex-col items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all",
                  dealType === 'spv'
                    ? "border-primary bg-primary/5 text-primary"
                    : "border-muted hover:border-muted-foreground/30 text-muted-foreground"
                )}
              >
                <RadioGroupItem value="spv" id="spv" className="sr-only" />
                <Building2 className={cn("size-8 mb-3", dealType === 'spv' ? "text-primary" : "text-muted-foreground")} />
                <span className={cn("font-bold text-sm mb-1", dealType === 'spv' ? "text-primary" : "text-foreground")}>SPV</span>
                <span className="text-[11px] text-center opacity-80 font-medium">Single investment vehicle</span>
              </Label>
              
              <Label
                htmlFor="fund"
                className={cn(
                  "flex flex-col items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all",
                  dealType === 'fund'
                    ? "border-primary bg-primary/5 text-primary"
                    : "border-muted hover:border-muted-foreground/30 text-muted-foreground"
                )}
              >
                <RadioGroupItem value="fund" id="fund" className="sr-only" />
                <TrendingUp className={cn("size-8 mb-3", dealType === 'fund' ? "text-primary" : "text-muted-foreground")} />
                <span className={cn("font-bold text-sm mb-1", dealType === 'fund' ? "text-primary" : "text-foreground")}>Fund</span>
                <span className="text-[11px] text-center opacity-80 font-medium">Multiple investments</span>
              </Label>
            </RadioGroup>
          </div>

          {/* Deal Name */}
          <div className="space-y-2">
            <Label htmlFor="dealName" className="text-sm font-semibold">Deal Name</Label>
            <Input
              id="dealName"
              placeholder="e.g., Series A Investment SPV"
              value={dealName}
              onChange={(e) => setDealName(e.target.value)}
              className="h-11"
            />
            <p className="text-[11px] text-muted-foreground font-medium">
              This will be visible to investors. You can change it later.
            </p>
          </div>

          {/* Select Identity */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold">Select Identity (Optional)</Label>
            <Select value={identityId} onValueChange={setIdentityId}>
              <SelectTrigger className="h-11">
                <SelectValue placeholder="Select an identity" />
              </SelectTrigger>
              <SelectContent>
                {identities.map((identity) => (
                  <SelectItem key={identity.id} value={identity.id}>
                    {identity.name} ({identity.type})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-[11px] text-muted-foreground font-medium">
              Associate this deal with an existing identity.
            </p>
          </div>
        </div>

        <DialogFooter className="mt-8 gap-3 sm:gap-0">
          <Button variant="ghost" className="font-semibold" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6"
            onClick={handleCreate} 
            disabled={!dealName.trim() || isSubmitting}
          >
            {isSubmitting ? 'Creating...' : (
              <>
                Create Deal <ChevronRight className="ml-1 size-4" />
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
