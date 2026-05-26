'use client'

import * as React from 'react'
import { useAuth } from '@/components/providers/auth-provider'
import { DealDetailPage } from '@/components/pages/deal-detail-page'
import { DealInvestPage } from '@/components/pages/deal-invest-page'
import type { Deal } from '@/lib/types'

interface DealPageWrapperProps {
  deal: Deal
}

export function DealPageWrapper({ deal }: DealPageWrapperProps) {
  const { isAuthenticated } = useAuth()
  
  // If the user is logged in, they are the admin/manager of deals they created
  // In this demo, 'user_1' is the fund manager ID for newly created deals.
  const isAdmin = isAuthenticated && deal.fundManagerId === 'user_1'

  if (isAdmin) {
    return <DealDetailPage deal={deal} isAdmin={isAdmin} />
  }

  return <DealInvestPage deal={deal} />
}
