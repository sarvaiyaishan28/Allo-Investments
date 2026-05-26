'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  DollarSign,
  Briefcase,
  TrendingUp,
  ArrowUpRight,
  ArrowRight,
  Building2,
  Users,
  ChevronRight,
  Diamond,
  Sparkles,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { currentUser } from '@/lib/mock-data'
import { fetchDeals } from '@/lib/api-client'
import { useAuth } from '@/components/providers/auth-provider'
import type { Deal } from '@/lib/types'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
}

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 }
}

function formatNumber(num: number): string {
  if (num >= 1000000) return (num / 1000000).toFixed(2) + 'M'
  if (num >= 1000) return (num / 1000).toFixed(num >= 10000 ? 1 : 2) + 'K'
  return num.toLocaleString()
}

function StatCard({ 
  title, 
  value, 
  change, 
  icon: Icon,
  trend = 'up',
  primary = false
}: { 
  title: string
  value: string
  change?: string
  icon: React.ElementType
  trend?: 'up' | 'down' | 'neutral'
  primary?: boolean
}) {
  return (
    <motion.div variants={item}>
      <Card className={cn(primary && "bg-primary/5 border-primary/20")}>
        <CardContent className="px-4 py-4">
          <div className="flex items-center gap-2 text-xs font-medium mb-2">
            <Icon className={cn("size-3.5", primary ? "text-primary" : "text-muted-foreground")} />
            <span className={cn(primary ? "text-primary" : "text-muted-foreground")}>{title}</span>
          </div>
          <p className="text-2xl font-bold">{value}</p>
          {change && (
            <p className={cn(
              "text-xs mt-1 flex items-center gap-0.5",
              trend === 'up' && "text-emerald-600",
              trend === 'down' && "text-destructive",
              trend === 'neutral' && "text-muted-foreground"
            )}>
              {trend === 'up' && <ArrowUpRight className="size-3" />}
              {change}
            </p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

import { DealCard } from '@/components/shared/deal-card'

function MyDealsSection() {
  const [myDeals, setMyDeals] = React.useState<Deal[]>([])
  
  React.useEffect(() => {
    fetchDeals().then(data => {
      setMyDeals(data.filter((d: Deal) => d.fundManagerId === currentUser.id).slice(0, 3))
    }).catch(console.error)
  }, [])

  return (
    <motion.div variants={item}>
      <Card>
        <CardHeader className="pb-3 px-4 pt-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-semibold">My Deals</CardTitle>
            <Button variant="ghost" size="sm" className="h-7 text-xs gap-1" asChild>
              <Link href="/deals">
                View All <ArrowRight className="size-3" />
              </Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="pt-0 px-4 pb-4">
          <div className="space-y-2">
            {myDeals.map((deal) => (
              <Link
                key={deal.id}
                href={`/deals/${deal.id}`}
                className="flex items-center gap-3 p-3 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors group"
              >
                <div className="size-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 font-semibold text-sm shrink-0">
                  {deal.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate group-hover:text-orange-500 transition-colors">
                    {deal.name}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="secondary" className="text-[10px] h-4 px-1.5 bg-muted/50 border-transparent">{deal.type.toUpperCase()}</Badge>
                    <span className="text-[10px] text-muted-foreground">
                      Target: ${(deal.targetRaise / 1000000).toFixed(1)}M
                    </span>
                  </div>
                </div>
                <ChevronRight className="size-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function InvestmentOpportunitiesSection() {
  const [opportunities, setOpportunities] = React.useState<Deal[]>([])

  React.useEffect(() => {
    fetchDeals().then(data => {
      setOpportunities(data.filter((d: Deal) => d.fundManagerId !== currentUser.id).slice(0, 3))
    }).catch(console.error)
  }, [])

  return (
    <motion.div variants={item}>
      <Card>
        <CardHeader className="pb-3 px-4 pt-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-semibold">Investment Opportunities</CardTitle>
            <Button variant="ghost" size="sm" className="h-7 text-xs gap-1" asChild>
              <Link href="/deals">
                Explore <ArrowRight className="size-3" />
              </Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="pt-0 px-4 pb-4">
          <div className="space-y-2">
            {opportunities.map((deal) => {
              const progress = (deal.totalWired / deal.targetRaise) * 100
              return (
                <Link
                  key={deal.id}
                  href={`/deals/${deal.id}`}
                  className="block p-3 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors group"
                >
                  <div className="flex items-start gap-3">
                    <div className="size-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 font-semibold text-sm shrink-0">
                      {deal.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm font-medium truncate group-hover:text-orange-500 transition-colors">
                          {deal.name}
                        </p>
                        <Badge 
                          variant="secondary" 
                          className={cn(
                            "text-[10px] h-4 px-1.5 shrink-0",
                            progress >= 100 && "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                          )}
                        >
                          {progress >= 100 ? 'Funded' : `${progress.toFixed(0)}%`}
                        </Badge>
                      </div>
                      <p className="text-[10px] text-muted-foreground mt-0.5 truncate">{deal.entityName}</p>
                      <div className="flex items-center gap-3 mt-1.5">
                        <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                          <Building2 className="size-3" />
                          <span>{deal.type.toUpperCase()}</span>
                        </div>
                        <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                          <Users className="size-3" />
                          <span>{deal.investorCount}</span>
                        </div>
                        <span className="text-[10px] text-muted-foreground">
                          Min ${formatNumber(deal.minimumInvestment)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2.5 h-1 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-all"
                      style={{ width: `${Math.min(progress, 100)}%` }}
                    />
                  </div>
                </Link>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function HomePage() {
  const { isAuthenticated } = useAuth()
  const [dashboardDeals, setDashboardDeals] = React.useState<Deal[]>([])

  React.useEffect(() => {
    if (isAuthenticated) return;
    fetchDeals()
      .then(data => setDashboardDeals(data.length > 0 ? data.slice(0, 3) : []))
      .catch(err => setDashboardDeals([]))
  }, [isAuthenticated])

  if (!isAuthenticated) {
    return (
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="p-6 lg:p-8 space-y-6"
      >
        {/* Preview Banner */}
        <motion.div variants={item} className="bg-primary/10 border border-primary/20 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-primary flex items-center gap-2 mb-1">
              <Sparkles className="size-5" />
              Allo Platform Preview
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              You are viewing a demo of the Allo dashboard. Sign in to access real-time data, manage your portfolio, form entities, and syndicate deals.
            </p>
          </div>
          <Button className="shrink-0 shadow-sm" asChild>
            <Link href="/login">Connect Wallet / Sign In</Link>
          </Button>
        </motion.div>

        {/* Header */}
        <motion.div variants={item}>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Your portfolio overview and investment opportunities
          </p>
        </motion.div>

        {/* Feature Summary */}
        <motion.div variants={item} className="grid md:grid-cols-3 gap-4 pt-4">
            <Card className="bg-muted/30 border-dashed hover:bg-muted/50 transition-colors">
                <CardHeader className="pb-2">
                    <Building2 className="size-6 text-primary mb-2" />
                    <CardTitle className="text-lg">Entity Formation</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">Instantly form series LLCs and manage entity structures directly within the platform. All legal templates included.</p>
                </CardContent>
            </Card>
            <Card className="bg-muted/30 border-dashed hover:bg-muted/50 transition-colors">
                <CardHeader className="pb-2">
                    <Briefcase className="size-6 text-blue-500 mb-2" />
                    <CardTitle className="text-lg">Deal Syndication</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">Launch deals, invite investors, and track capital commitments with our streamlined fund manager dashboard.</p>
                </CardContent>
            </Card>
            <Card className="bg-muted/30 border-dashed hover:bg-muted/50 transition-colors">
                <CardHeader className="pb-2">
                    <TrendingUp className="size-6 text-emerald-500 mb-2" />
                    <CardTitle className="text-lg">Portfolio Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">Monitor your investments in real-time, view detailed ledger entries, and track your total AUM effortlessly.</p>
                </CardContent>
            </Card>
        </motion.div>

        {/* Open Opportunities */}
        <motion.div variants={item} className="pt-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-semibold">Featured Opportunities</h2>
              <p className="text-sm text-muted-foreground mt-0.5">Explore active deals currently raising capital on Allo.</p>
            </div>
            <Button variant="ghost" size="sm" asChild className="hidden sm:flex">
              <Link href="/deals">View All <ArrowRight className="size-4 ml-1.5" /></Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {dashboardDeals.map(deal => (
              <DealCard key={deal.id} deal={deal} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="p-6 lg:p-8 space-y-6"
    >
      {/* Header */}
      <motion.div variants={item}>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Your portfolio overview and investment opportunities
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Invested"
          value="$1.2M"
          change="+12.5% from last month"
          icon={DollarSign}
          trend="up"
          primary
        />
        <StatCard
          title="My Deals"
          value="3"
          change="2 active"
          icon={Briefcase}
          trend="neutral"
        />
        <StatCard
          title="Portfolio Value"
          value="$2.1M"
          change="+15% returns"
          icon={TrendingUp}
          trend="up"
        />
        <StatCard
          title="Investments"
          value="8"
          change="5 positions"
          icon={TrendingUp}
          trend="neutral"
        />
      </div>

      {/* Deals Sections */}
      <div className="grid gap-4 lg:grid-cols-2">
        <MyDealsSection />
        <InvestmentOpportunitiesSection />
      </div>
    </motion.div>
  )
}
