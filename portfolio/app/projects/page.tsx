'use client'

import { motion } from 'framer-motion'
import { Zap, Shield, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const allProjects = [
  {
    title: 'Arzen',
    company: 'Co-founded (now exited)',
    description: 'An enterprise digital signage platform I built for cinema chains — custom ARM devices running a bespoke Linux image, a parallelised FFmpeg transcoding engine, and a central dashboard. Deployed across 130+ locations and ~4,500 screens.',
    tags: ['Full stack', 'Embedded Linux', 'Custom hardware', 'Kernel/drivers'],
    status: 'Exited',
    statusColor: 'bg-green-500/20 text-green-500 border-green-500/30',
    type: 'build',
  },
  {
    title: 'Unfold the Untold',
    company: 'NPCI (National Payments Corporation of India)',
    description: 'An Independence Day campaign for NPCI. Scan any tri-colour object with your phone — once, twice, three times — and unlock untold stories of remarkable people from remote parts of India. Single-day deployment, ~5 lakh users served in 10 hours.',
    tags: ['AI', 'LLM orchestration', 'Image understanding', 'Real-time inference'],
    status: 'Shipped',
    statusColor: 'bg-blue-500/20 text-blue-500 border-blue-500/30',
    type: 'build',
  },
  {
    title: 'Podcast Magic',
    company: 'Sublime (founded as feature)',
    description: 'A screenshot-to-note pipeline for podcasts. Take a screenshot while listening — on any device — and you get back a clipped moment, a transcript, a summary, and a shareable video. Shipped with paying users.',
    tags: ['Software', 'LLM orchestration', 'RAG', 'FFmpeg/media'],
    status: 'Ongoing',
    statusColor: 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30',
    type: 'build',
  },
  {
    title: 'MeetMemo',
    company: 'Enterprise',
    description: 'An enterprise meeting note-taker with a distributed bot fleet, a custom auto-scaling orchestrator, accurate diarised transcription, and a chat-with-your-meetings layer. Shipped with live customers.',
    tags: ['Software', 'LLM orchestration', 'RAG', 'Meeting AI'],
    status: 'Shipped',
    statusColor: 'bg-blue-500/20 text-blue-500 border-blue-500/30',
    type: 'build',
  },
  {
    title: 'Shaping 3D',
    company: 'Co-founded (delivered to Team Visual Solutions, Dubai)',
    description: 'An industrial 3D-printing company I co-founded and built the machines for — large-format pellet printers for visual merchandising at scale. Designed, engineered, and delivered two classes of machine end to end.',
    tags: ['Hardware + Software', 'Industrial manufacturing', '3D printing', 'Custom hardware'],
    status: 'Discontinued',
    statusColor: 'bg-gray-500/20 text-gray-500 border-gray-500/30',
    type: 'build',
  },
  {
    title: 'Novo Chatbot',
    company: 'Novo Cinemas (Qatar & UAE)',
    description: 'A bilingual (Arabic + English) AI assistant for Novo Cinemas — handles ticket booking, movie and showtime queries, policy questions, and complaint registration. Structured queries over a live database, RAG over unstructured content, streamed voice in both languages.',
    tags: ['AI', 'LLM orchestration', 'RAG', 'Voice AI'],
    status: 'Shipped',
    statusColor: 'bg-blue-500/20 text-blue-500 border-blue-500/30',
    type: 'build',
  },
  {
    title: 'Retello',
    company: 'Product',
    description: "India's first AI-powered shopping assistant. Ask it anything — best phone for gaming under ₹20k, best camera under budget — and it gives you a ranked, reasoned answer. I built the entire scraping infrastructure and the benchmarking engine that powers the rankings.",
    tags: ['AI', 'Distributed systems', 'AI pipelines', 'Web scraping infra'],
    status: 'Ongoing',
    statusColor: 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30',
    type: 'build',
  },
  {
    title: 'MeldIt',
    company: 'Youngun',
    description: 'End-to-end automation platform for Youngun\'s meme-marketing operation — from ad-campaign registration to creator distribution to verification of what creators actually posted, plus payments and analytics. The verification layer used Instagram scraping, video segmentation, and image/sub-section matching to confirm posts at scale.',
    tags: ['AI', 'Computer vision', 'Image matching', 'Video segmentation'],
    status: 'Shipped',
    statusColor: 'bg-blue-500/20 text-blue-500 border-blue-500/30',
    type: 'build',
  },
  {
    title: 'ViralX',
    company: 'Creator tool',
    description: 'A fully AI-powered platform for creators that finds what\'s trending on Instagram in real time, leaderboards it, and produces a transcript + script the creator can use to recreate that video in their own style. Honest description: a glorified plagiarism tool. Built end to end and handed off to a team.',
    tags: ['AI', 'LLM orchestration', 'Web scraping', 'Trend detection'],
    status: 'Shipped',
    statusColor: 'bg-blue-500/20 text-blue-500 border-blue-500/30',
    type: 'build',
  },
  {
    title: 'PeopleMatters Infra',
    company: 'PeopleMatters',
    description: 'Ran infra, deployment, and architectural consulting for PeopleMatters\' platform and CMS — deployment shapes, caching, routing, database management, edge cases, and the technical decisions the platform team needed help making.',
    tags: ['Full stack', 'DevOps', 'Infrastructure', 'Database management'],
    status: 'Shipped',
    statusColor: 'bg-blue-500/20 text-blue-500 border-blue-500/30',
    type: 'fix',
  },
  {
    title: 'Howler',
    company: 'Distributed manufacturing',
    description: 'A decentralised 3D-printing network. A small device plugs into any consumer 3D printer and turns it into a secure node that accepts and executes paid print jobs — G-code streamed over USB from RAM, never persisted, so designs can\'t be replicated.',
    tags: ['Full stack', 'Embedded Linux', '3D printing', 'Custom hardware'],
    status: 'Discontinued',
    statusColor: 'bg-gray-500/20 text-gray-500 border-gray-500/30',
    type: 'build',
  },
  {
    title: 'IIDE Hybrid Classroom',
    company: 'Indian Institute of Digital Education',
    description: 'A post-COVID hybrid classroom setup for IIDE — in-person students, remote students projected at the back of the room, custom desk microphones, and a camera layout that lets the trainer walk freely and talk to everyone.',
    tags: ['Hardware + Software', 'Custom hardware', 'PCB design', 'Real-time sync'],
    status: 'Shipped',
    statusColor: 'bg-blue-500/20 text-blue-500 border-blue-500/30',
    type: 'build',
  },
  {
    title: 'NGMA Multi-Projector Sync',
    company: 'National Gallery of Modern Art',
    description: 'My first project after moving to Mumbai — frame-accurate video sync across multiple floors and multiple projectors for an art installation at the National Gallery of Modern Art. Became the seed of what eventually turned into Arzen.',
    tags: ['Hardware + Software', 'Real-time sync', 'FFmpeg/media', 'Custom hardware'],
    status: 'Shipped',
    statusColor: 'bg-blue-500/20 text-blue-500 border-blue-500/30',
    type: 'build',
  },
  {
    title: 'Geo Target TRP Box',
    company: 'Update Geo Target',
    description: 'A replacement for India\'s TV-ratings measurement hardware. Instead of the incumbent\'s 650-channel audio-watermark approach, I built an HDMI pass-through device that identifies channels via EPG template matching — dynamic, channel-agnostic, and a fifth of the cost.',
    tags: ['Hardware + Software', 'Embedded Linux', 'Custom hardware', 'Computer vision'],
    status: 'Shipped',
    statusColor: 'bg-blue-500/20 text-blue-500 border-blue-500/30',
    type: 'build',
  },
  {
    title: 'Argust',
    company: 'Manyavar (POC)',
    description: 'An in-store customer analytics platform built on top of existing CCTV. Re-identification across days, demographic tracking, group composition, in-store journeys — correlated with what people actually buy. Built as a POC for Manyavar.',
    tags: ['AI', 'Computer vision', 'LLM orchestration', 'Custom hardware'],
    status: 'Discontinued',
    statusColor: 'bg-gray-500/20 text-gray-500 border-gray-500/30',
    type: 'build',
  },
  {
    title: 'Cubetto',
    company: 'ENIAC (edutech)',
    description: 'A programmable floor-robot for teaching young kids the shape of code — no screens. Children draw the program on the floor in coloured paths with physical obstacles and conditions, place the robot, and watch it execute.',
    tags: ['Hardware + Software', 'Custom hardware', 'Robotics', 'IoT'],
    status: 'Shipped',
    statusColor: 'bg-blue-500/20 text-blue-500 border-blue-500/30',
    type: 'build',
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Projects
          </h1>
          <p className="text-lg text-muted-foreground">
            Products I've built and systems I've fixed
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-5">
          {allProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
              whileHover={{ y: -3 }}
            >
              <article className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-serif text-xl font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${project.statusColor}`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{project.company}</p>
                  </div>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${project.type === 'build' ? 'bg-blue-500/10' : 'bg-green-500/10'}`}>
                    {project.type === 'build' ? (
                      <Zap className="w-5 h-5 text-blue-500" />
                    ) : (
                      <Shield className="w-5 h-5 text-green-500" />
                    )}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-full bg-muted/50 text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
