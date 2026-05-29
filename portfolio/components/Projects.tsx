'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Code, FolderOpen, Star, GitFork, Shield, Terminal, FileCode } from 'lucide-react'
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
  ]

  return (
    <section id="projects" className="py-20 bg-black relative">
      {/* Matrix background */}
      <div className="absolute inset-0 matrix-bg opacity-20"></div>

      {/* Scanlines */}
      <div className="absolute inset-0 scanlines opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 font-mono"
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 mb-4">
            <Terminal className="w-6 h-6 text-green-500 terminal-glow" />
            <div className="text-green-500 text-lg">root@kali:~$</div>
            <div className="text-green-400">./list_projects.sh</div>
          </div>

          <h2 className="text-4xl font-bold mb-4 text-green-400 terminal-glow">
            <span className="text-green-500">&gt;</span> Featured Projects
          </h2>
          <p className="text-lg text-green-100/80 max-w-2xl">
            Enterprise-grade solutions built with modern technologies and best practices
          </p>
        </motion.div>

        {/* Terminal window for projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-2 border-green-500/30 rounded-lg bg-black/50 backdrop-blur-sm overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-0">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className={`p-6 border border-green-500/20 hover:border-green-500/40 transition-all ${
                  index % 2 === 0 ? 'md:border-r-0' : ''
                } ${index < projects.length - 1 ? 'border-b-0 md:border-b-0' : ''} ${
                  index === projects.length - 2 ? 'md:border-b-0' : ''
                }`}
              >
                <div className="font-mono h-full">
                  {/* Project number */}
                  <div className="text-green-500 text-xs mb-2">
                    PROJECT_{String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Icon with terminal style */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded bg-green-500/10 border border-green-500/30 p-2 flex-shrink-0">
                      <project.icon className="w-full h-full text-green-400 terminal-glow" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg text-green-300 mb-2 terminal-glow">{project.title}</h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-green-100/70 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <p className="text-xs text-green-500 mb-2 uppercase tracking-wider">
                      [Tech Stack]
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs font-normal px-2.5 py-1 bg-green-500/10 border border-green-500/20 text-green-300"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Command prompt style */}
                  <div className="mt-4 pt-4 border-t border-green-500/20">
                    <div className="text-green-500 text-xs">
                      <span className="text-green-500">root@kali:~$</span> ./view_details.sh --project={index + 1}
                      <span className="animate-blink">█</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Terminal footer */}
          <div className="border-t-2 border-green-500/30 bg-green-500/5 p-3">
            <div className="text-green-500 text-sm font-mono">
              <span className="text-green-500">root@kali:~$</span> <span className="text-green-400">projects_loaded=true</span>
              <span className="animate-blink">█</span>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8 font-mono"
        >
          <Button
            size="lg"
            className="bg-black border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-black px-8 py-6 text-base shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all"
          >
            <FileCode className="w-5 h-5 mr-2" />
            <a
              href="https://github.com/Akash9773312"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              ./explore_all_projects.sh
              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
