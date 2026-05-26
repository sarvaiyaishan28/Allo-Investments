import { notFound } from 'next/navigation'
import { AppLayout } from '@/components/layout/app-layout'
import { DealPageWrapper } from '@/components/pages/deal-page-wrapper'
import { deals } from '@/lib/mock-data'

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function Page({ params }: PageProps) {
  const { id } = await params
  let deal = deals.find(d => d.id === id)
  
  if (!deal) {
    try {
      const res = await fetch(`http://localhost:3001/deals/${id}`, { cache: 'no-store' })
      if (res.ok) {
        deal = await res.json()
      }
    } catch (e) {
      console.error('Failed to fetch deal from backend', e)
    }
  }

  if (!deal) {
    notFound()
  }

  return (
    <AppLayout>
      <DealPageWrapper deal={deal} />
    </AppLayout>
  )
}
