'use client'

import { motion } from 'framer-motion'
import { Zap, Shield, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const featuredProjects = [
  {
    title: 'Arzen',
    company: 'Co-founded (now exited)',
    description: 'An enterprise digital signage platform for cinema chains — custom ARM devices, bespoke Linux image, parallelised FFmpeg transcoding. Deployed across 130+ locations and ~4,500 screens.',
    tags: ['Full stack', 'Embedded Linux', 'Custom hardware'],
    status: 'Exited',
    statusColor: 'bg-green-500/20 text-green-500',
    type: 'build',
  },
  {
    title: 'Unfold the Untold',
    company: 'NPCI (National Payments Corporation of India)',
    description: 'An Independence Day campaign for NPCI. Scan any tri-colour object with your phone — once, twice, three times — and unlock untold stories of remarkable people from remote parts of India. Single-day deployment, ~5 lakh users served in 10 hours.',
    tags: ['AI', 'LLM orchestration', 'Image understanding', 'Real-time inference'],
    status: 'Shipped',
    statusColor: 'bg-blue-500/20 text-blue-500',
    type: 'build',
  },
  {
    title: 'PeopleMatters Infra',
    company: 'PeopleMatters',
    description: 'Ran infra, deployment, and architectural consulting for PeopleMatters\' platform and CMS — deployment shapes, caching, routing, database management, edge cases, and the technical decisions the platform team needed help making.',
    tags: ['Full stack', 'DevOps', 'Infrastructure', 'Database management'],
    status: 'Shipped',
    statusColor: 'bg-blue-500/20 text-blue-500',
    type: 'fix',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Selected Work
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Products I've built and systems I've fixed
          </p>
          <Link href="/projects" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all">
            View all projects
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="space-y-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <article className="project-card p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-serif text-xl font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${project.statusColor}`}>
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
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </motion.div>
          ))}
        </div>

        {/* View all link at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg hover:border-primary transition-colors"
          >
            View all projects
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
