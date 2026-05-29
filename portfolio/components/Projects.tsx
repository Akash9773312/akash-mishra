'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Code, FolderOpen, Star, GitFork, Shield, Terminal, FileCode } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

export default function Projects() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; char: string }>>([])

  useEffect(() => {
    const chars = ['{', '}', '<', '>', '/', '*', '=', '+', '-', 'x']
    const newParticles = Array.from({ length: 35 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      char: chars[Math.floor(Math.random() * chars.length)]
    }))
    setParticles(newParticles)
  }, [])

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
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      {/* 3D Perspective Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(0, 255, 0, 0.07) 1px, transparent 1px),
              linear-gradient(rgba(0, 255, 0, 0.07) 1px, transparent 1px)
            `,
            backgroundSize: '65px 65px',
            transform: 'perspective(380px) rotateX(55deg)',
            transformOrigin: 'center',
            animation: 'gridMove 28s linear infinite reverse'
          }}
        />
      </div>

      {/* Floating Code Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute text-green-500/18 font-mono text-xs pointer-events-none"
          initial={{ x: `${particle.x}%`, y: `${particle.y}%` }}
          animate={{
            y: [`${particle.y}%`, `${particle.y - 45}%`],
            opacity: [0.18, 0.35, 0.18]
          }}
          transition={{
            duration: 9 + Math.random() * 4,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          {particle.char}
        </motion.div>
      ))}

      {/* Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/3 w-80 h-80 bg-green-500/7 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.35, 1],
            opacity: [0.22, 0.42, 0.22],
            x: [0, -40, 0],
            y: [0, 25, 0]
          }}
          transition={{ duration: 16, repeat: Infinity }}
          style={{ filter: 'blur(75px)' }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-emerald-500/6 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.16, 0.38, 0.16],
            x: [0, 35, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, delay: 2.5 }}
          style={{ filter: 'blur(88px)' }}
        />
      </div>

      {/* Floating 3D Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/5 left-1/4 w-16 h-16 border-2 border-green-500/12 rotate-45"
          animate={{
            rotate: [45, 270, 45],
            scale: [1, 1.25, 1],
            y: [0, -30, 0],
            x: [0, 20, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          style={{ boxShadow: '0 0 28px rgba(0, 255, 0, 0.28)' }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-20 h-20 border-2 border-emerald-500/10"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 0.85, 1],
            y: [0, 25, 0],
            x: [0, -15, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 1.5 }}
          style={{ boxShadow: '0 0 24px rgba(0, 255, 0, 0.24)' }}
        />
        <motion.div
          className="absolute top-2/3 left-1/3 w-32 h-32 border border-green-500/12 rounded-full"
          animate={{
            scale: [1, 1.35, 1],
            opacity: [0.2, 0.45, 0.2],
            rotate: [0, -180, -360]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 3.5 }}
        />
      </div>

      {/* Matrix background */}
      <div className="absolute inset-0 matrix-bg opacity-14"></div>

      {/* Scanlines */}
      <div className="absolute inset-0 scanlines opacity-22"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 font-mono"
          style={{ transform: 'translateZ(14px)' }}
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 mb-4">
            <Terminal className="w-6 h-6 text-green-500 terminal-glow" style={{ filter: 'drop-shadow(0 0 8px rgba(0, 255, 0, 0.8))' }} />
            <div className="text-green-500 text-lg">root@kali:~$</div>
            <div className="text-green-400">./list_projects.sh</div>
          </div>

          <h2 className="text-4xl font-bold mb-4 text-green-400 terminal-glow" style={{ textShadow: '0 0 25px rgba(0, 255, 0, 0.7)' }}>
            <span className="text-green-500">&gt;</span> Featured Projects
          </h2>
          <p className="text-lg text-green-100/80 max-w-2xl backdrop-blur-sm p-4 rounded-lg border border-green-500/10" style={{ boxShadow: '0 0 20px rgba(0, 255, 0, 0.15)' }}>
            Enterprise-grade solutions built with modern technologies and best practices
          </p>
        </motion.div>

        {/* Terminal window for projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-2 border-green-500/30 rounded-lg bg-black/60 backdrop-blur-md overflow-hidden"
          style={{
            boxShadow: '0 0 50px rgba(0, 255, 0, 0.3), inset 0 0 50px rgba(0, 255, 0, 0.12)',
            transform: 'translateZ(20px)'
          }}
        >
          <div className="grid md:grid-cols-2 gap-0">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className={`p-6 border border-green-500/20 hover:border-green-500/50 transition-all backdrop-blur-sm ${
                  index % 2 === 0 ? 'md:border-r-0' : ''
                } ${index < projects.length - 1 ? 'border-b-0 md:border-b-0' : ''} ${
                  index === projects.length - 2 ? 'md:border-b-0' : ''
                }`}
                style={{
                  transform: `translateZ(${12 + index * 4}px)`,
                  boxShadow: `0 0 ${28 + index * 7}px rgba(0, 255, 0, 0.18)`,
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <div className="font-mono h-full">
                  {/* Project number */}
                  <div className="text-green-500 text-xs mb-2" style={{ textShadow: '0 0 8px rgba(0, 255, 0, 0.6)' }}>
                    PROJECT_{String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Icon with terminal style */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded bg-green-500/10 border border-green-500/30 p-2 flex-shrink-0 relative" style={{ boxShadow: '0 0 20px rgba(0, 255, 0, 0.3), inset 0 0 15px rgba(0, 255, 0, 0.12)' }}>
                      <project.icon className="w-full h-full text-green-400 terminal-glow" style={{ filter: 'drop-shadow(0 0 6px rgba(0, 255, 0, 0.8))' }} />
                      <motion.div
                        className="absolute inset-0 bg-green-500/10 rounded-lg"
                        animate={{
                          opacity: [0, 0.35, 0],
                          scale: [1, 1.15, 1]
                        }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.2 }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg text-green-300 mb-2 terminal-glow" style={{ textShadow: '0 0 18px rgba(0, 255, 0, 0.75)' }}>{project.title}</h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-green-100/70 text-sm leading-relaxed mb-4 backdrop-blur-sm p-3 rounded border border-green-500/5" style={{ boxShadow: 'inset 0 0 12px rgba(0, 255, 0, 0.1)' }}>
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <p className="text-xs text-green-500 mb-2 uppercase tracking-wider" style={{ textShadow: '0 0 8px rgba(0, 255, 0, 0.5)' }}>
                      [Tech Stack]
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs font-normal px-2.5 py-1 bg-green-500/10 border border-green-500/20 text-green-300 hover:bg-green-500/20 transition-all"
                          style={{
                            transform: `translateZ(${2 + tagIndex * 2}px)`,
                            boxShadow: '0 0 10px rgba(0, 255, 0, 0.22)'
                          }}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Command prompt style */}
                  <div className="mt-4 pt-4 border-t border-green-500/20">
                    <div className="text-green-500 text-xs" style={{ textShadow: '0 0 8px rgba(0, 255, 0, 0.5)' }}>
                      <span className="text-green-500">root@kali:~$</span> ./view_details.sh --project={index + 1}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Terminal footer */}
          <div className="border-t-2 border-green-500/30 bg-green-500/5 p-3" style={{ boxShadow: 'inset 0 0 25px rgba(0, 255, 0, 0.12)' }}>
            <div className="text-green-500 text-sm font-mono" style={{ textShadow: '0 0 12px rgba(0, 255, 0, 0.6)' }}>
              <span className="text-green-500">root@kali:~$</span> <span className="text-green-400">projects_loaded=true</span>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8 font-mono"
          style={{ transform: 'translateZ(22px)' }}
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 50px rgba(0, 255, 0, 0.9)'
            }}
            transition={{ duration: 0.3 }}
          >
            <Button
              size="lg"
              className="bg-black/80 backdrop-blur-md border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-black px-8 py-6 text-base shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all"
              style={{
                boxShadow: '0 0 30px rgba(0, 255, 0, 0.6)'
              }}
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
        </motion.div>
      </div>
    </section>
  )
}
