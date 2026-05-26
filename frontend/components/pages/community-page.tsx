'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import {
  Calendar,
  Video,
  ChevronRight,
  ChevronLeft,
  MessageSquare,
  ThumbsUp,
  ThumbsDown,
  Minus,
  Coffee,
  Diamond,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

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

const upcomingEvents = [
  {
    id: 1,
    date: '20 MAY 2026',
    title: 'The AI Imperative: Investing IN and WITH AI',
    location: 'Los Angeles, California',
    time: 'Wednesday 5:30 PM - 8:00 PM PDT',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 2,
    date: '5 JUN 2026',
    title: 'Private Markets Roundtable: NYC Edition',
    location: 'New York City, New York',
    time: 'Thursday 6:00 PM - 9:00 PM EDT',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=200&auto=format&fit=crop',
  }
]

const eventVideos = [
  {
    id: 1,
    title: 'Allo Deal Room: Inside Figure AI and the Robotics Revolution',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'QSBS Essentials for Founders, Investors and Advisors',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 3,
    title: '2026 Private Markets Outlook',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=400&auto=format&fit=crop',
  }
]

const pastEvents = [
  {
    id: 1,
    date: 'Apr 29, 2026',
    day: 'Wednesday',
    time: '19:00',
    title: 'Allo Supper Club - New York City',
    location: 'In Person - New York City, New York',
    description: 'A members-only curated evening - gathered around a private table in New York City for dinner, conversation, and the kind of exchange that doesn\'t happen at conferences.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 2,
    date: 'Apr 22, 2026',
    day: 'Tuesday',
    time: '17:00',
    title: 'AI Infrastructure Deep Dive: From Chips to Cloud',
    location: 'Virtual - Zoom',
    description: 'A deep dive into the AI infrastructure stack with leading investors and founders discussing opportunities from semiconductor design to cloud deployment.',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 3,
    date: 'Apr 15, 2026',
    day: 'Tuesday',
    time: '18:00',
    title: 'Allo Supper Club - San Francisco',
    location: 'In Person - San Francisco, California',
    description: 'An intimate dinner bringing together Allo members in the Bay Area for meaningful conversations about private market investing and emerging technology trends.',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 4,
    date: 'Apr 8, 2026',
    day: 'Tuesday',
    time: '12:00',
    title: 'Robotics and Physical AI: Investment Landscape 2026',
    location: 'Virtual - Zoom',
    description: 'Expert panel covering the rapidly evolving robotics space, from humanoid robots to autonomous drones, and how to evaluate investment opportunities.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=200&auto=format&fit=crop',
  }
]

export function CommunityPage() {
  return (
    <main className="flex-1 overflow-auto">
      <div className="container max-w-7xl py-6 px-4 md:px-6 space-y-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
      {/* Header */}
      <motion.div variants={item}>
        <h1 className="text-2xl font-bold">Community</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Register for upcoming webinars, roundtables, and exclusive member meetups. We think you'll love The AI Imperative event in Los Angeles next week!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Main Content Column */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Upcoming Events */}
          <motion.section variants={item} className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="size-4 text-muted-foreground" />
              <h2 className="text-sm font-semibold">Upcoming Events</h2>
            </div>
            
            <div className="space-y-4">
              {upcomingEvents.map((event) => {
                const [day, month, year] = event.date.split(' ')
                return (
                  <Card key={event.id} className="hover:border-primary/30 transition-colors cursor-pointer group">
                    <CardContent className="p-0 flex items-stretch">
                      <div className="w-24 border-r flex flex-col items-center justify-center p-4 bg-muted/30 shrink-0">
                        <span className="text-3xl font-bold">{day}</span>
                        <span className="text-xs font-semibold text-muted-foreground">{month} {year}</span>
                      </div>
                      <div className="flex-1 p-5 flex items-center justify-between">
                        <div className="flex items-start gap-4">
                          <img src={event.image} alt="" className="size-12 rounded-lg object-cover bg-muted" />
                          <div>
                            <h3 className="font-semibold text-base mb-1 group-hover:text-primary transition-colors">{event.title}</h3>
                            <p className="text-sm text-muted-foreground mb-1">{event.location}</p>
                            <p className="text-xs text-muted-foreground">{event.time}</p>
                          </div>
                        </div>
                        <ChevronRight className="size-5 text-muted-foreground opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0 ml-4" />
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </motion.section>

          {/* Event Videos */}
          <motion.section variants={item} className="space-y-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Video className="size-4 text-muted-foreground" />
                <h2 className="text-sm font-semibold">Event Videos</h2>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="size-8 rounded-full"><ChevronLeft className="size-4" /></Button>
                <Button variant="outline" size="icon" className="size-8 rounded-full"><ChevronRight className="size-4" /></Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {eventVideos.map((video) => (
                <div key={video.id} className="group cursor-pointer">
                  <div className="aspect-video bg-muted rounded-xl mb-3 overflow-hidden relative">
                    <img src={video.image} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="size-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                        <div className="w-0 h-0 border-t-4 border-t-transparent border-l-6 border-l-white border-b-4 border-b-transparent ml-1" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Past Events */}
          <motion.section variants={item} className="space-y-6 pt-4">
            <div className="flex items-center gap-2 border-b pb-4">
              <Badge variant="default" className="rounded-full">All</Badge>
              <Badge variant="secondary" className="rounded-full bg-muted/50 hover:bg-muted">Virtual</Badge>
              <Badge variant="secondary" className="rounded-full bg-muted/50 hover:bg-muted">In-person</Badge>
            </div>

            <div className="relative border-l ml-4 space-y-8 pb-8">
              {pastEvents.map((event) => (
                <div key={event.id} className="relative pl-8">
                  {/* Timeline Dot */}
                  <div className="absolute -left-1.5 top-2 size-3 rounded-full bg-muted-foreground border-2 border-background" />
                  
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Date Column */}
                    <div className="w-32 shrink-0 pt-1">
                      <p className="font-semibold text-sm">{event.date}</p>
                      <p className="text-xs text-muted-foreground">{event.day}</p>
                    </div>

                    {/* Event Card */}
                    <Card className="flex-1 hover:border-primary/20 transition-colors cursor-pointer group">
                      <CardContent className="p-5 flex gap-4">
                        <div className="flex-1 space-y-3">
                          <div>
                            <p className="text-xs font-medium text-muted-foreground mb-1">{event.time}</p>
                            <h3 className="font-semibold text-base group-hover:text-primary transition-colors">{event.title}</h3>
                          </div>
                          
                          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            {event.location.includes('In Person') ? (
                              <Coffee className="size-3.5" />
                            ) : (
                              <Video className="size-3.5" />
                            )}
                            {event.location}
                          </div>

                          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                            {event.description}
                          </p>
                        </div>
                        <img src={event.image} alt="" className="size-20 rounded-lg object-cover hidden sm:block bg-muted" />
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

        </div>

        {/* Right Sidebar Column */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Community Insights */}
          <motion.div variants={item}>
            <Card className="bg-card">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2">
                  <MessageSquare className="size-4 text-muted-foreground" />
                  <CardTitle className="text-sm font-semibold">Community Insights</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-5 rounded-xl border bg-muted/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="size-10 rounded-lg bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-700 dark:text-emerald-400 font-bold text-sm shrink-0">
                      FA
                    </div>
                    <div>
                      <h3 className="font-bold text-sm">Figure AI</h3>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    The overall sentiment among Allo members is strongly bullish regarding Figure AI, with enthusiasm for the company's rapid commercialization of humanoid robots and the BMW partnership. Key themes include the massive TAM in manufacturing and logistics. Some members note the high valuation as a risk factor.
                  </p>

                  <div className="flex items-center justify-between text-xs font-medium mb-6">
                    <div className="flex items-center gap-1.5 text-emerald-600">
                      <ThumbsUp className="size-3.5" />
                      92% bullish
                    </div>
                    <div className="flex items-center gap-1.5 text-red-500">
                      <ThumbsDown className="size-3.5" />
                      4% bearish
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Minus className="size-3.5" />
                      4% neutral
                    </div>
                  </div>

                  <Button variant="outline" className="w-full h-9 text-xs font-medium">
                    View Figure AI Deal →
                  </Button>
                </div>
                
                {/* Carousel indicators mock */}
                <div className="flex justify-center gap-1.5 pt-2">
                  <div className="size-1.5 rounded-full bg-primary" />
                  <div className="size-1.5 rounded-full bg-muted" />
                  <div className="size-1.5 rounded-full bg-muted" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Coffee Chats */}
          <motion.div variants={item}>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-semibold">Coffee Chats</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Get matched with fellow investors for meaningful 1-on-1 conversations. Expand your network and build lasting relationships.
                </p>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  Request a Match
                </Button>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
        </motion.div>
      </div>
    </main>
  )
}
