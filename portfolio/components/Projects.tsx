'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Code, FolderOpen, Star, GitFork, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Projects() {
  const projects = [
    {
      title: 'Arzen - Digital Signage Solution',
      description: 'A comprehensive digital signage platform enabling remote content management, scheduling, and real-time updates across multiple display locations with enterprise-grade security.',
      tags: ['React', 'Node.js', 'NestJS' ,'AWS', 'OCI', 'Docker', 'Kubernetes', 'PostgreSQL', 'Redis'],
      // github: 'https://github.com/Akash9773312',
      gradient: 'from-blue-500 to-cyan-500',
      icon: Code,
    },
    {
      title: 'Cloud Infrastructure Automation',
      description: 'End-to-end infrastructure automation using Terraform, achieving 80% cost reduction through serverless architecture and multi-cloud deployment strategies.',
      tags: ['Terraform', 'AWS', 'GCP', 'Kubernetes', 'CI/CD', 'Python', 'Grafana', 'Promtheus'],
      // github: 'https://github.com/Akash9773312',
      gradient: 'from-purple-500 to-pink-500',
      icon: FolderOpen,
    },
    {
      title: 'Security Monitoring Dashboard',
      description: 'Real-time threat detection and analytics platform processing millions of events daily, with automated incident response and comprehensive reporting for SOC 2 compliance.',
      tags: ['Reactjs', 'Python', 'Elasticsearch', 'Grafana'],
      // github: 'https://github.com/Akash9773312',
      gradient: 'from-red-500 to-orange-500',
      icon: Shield,
    },
    {
      title: 'DevSecOps Pipeline Framework',
      description: 'Unified CI/CD framework integrating security scanning, compliance checks, and automated deployment across multi-account AWS environments with zero-downtime releases.',
      tags: ['Jenkins', 'Docker', 'SonarQube', 'AWS', 'GCP'],
      // github: 'https://github.com/Akash9773312',
      gradient: 'from-green-500 to-emerald-500',
      icon: GitFork,
    },
    {
      title: 'AI Voice & Generative AI Platform',
      description: 'Enterprise-grade platform for AI-powered voice generation, speech synthesis, and conversational AI with low-latency inference, scalable APIs, and real-time processing.',
      tags: ['Python', 'LLMs', 'TTS', 'FastAPI'],
      // github: 'https://github.com/Akash9773312',
      gradient: 'from-violet-500 to-purple-500',
      icon: Code,
    }
    // {
    //   title: 'Multi-Region CDN Solution',
    //   description: 'Global content delivery network with automatic failover, edge computing capabilities, and intelligent routing ensuring 99.99% availability across 8+ geographic regions.',
    //   tags: ['Cloudflare', 'AWS', 'Lambda', 'Route53'],
    //   github: 'https://github.com/Akash9773312',
    //   gradient: 'from-amber-500 to-yellow-500',
    //   icon: Star,
    // },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade solutions built with modern technologies and best practices
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 border-border/50 hover:border-primary/50 group relative overflow-hidden">
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Icon badge */}
                <div className="absolute top-4 right-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} p-2.5 opacity-80 group-hover:opacity-100 transition-opacity duration-300`}>
                    <project.icon className="w-full h-full text-white" />
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.gradient} p-2 flex-shrink-0`}>
                      <project.icon className="w-full h-full text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-xl mb-1 group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Tech Stack */}
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs font-normal px-2.5 py-1"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>

                {/* Hover glow effect */}
                <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 blur-3xl transition-opacity duration-500 rounded-full pointer-events-none`} />
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button size="lg" variant="outline" className="group">
            <a
              href="https://github.com/Akash9773312"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Explore All Projects
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
