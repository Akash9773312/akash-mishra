'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Code, Database, Network, Shield, Wrench, Globe, Terminal } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Services() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; char: string }>>([])

  useEffect(() => {
    const chars = ['0', '1', 'x', 'y', 'z', '@', '#', '$', '&']
    const newParticles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      char: chars[Math.floor(Math.random() * chars.length)]
    }))
    setParticles(newParticles)
  }, [])

  const services = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Designing and updating software applications and online applications using modern programming languages and frameworks. Creating responsive layouts, writing clean code, and implementing client requirements.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Shield,
      title: 'Penetration Testing',
      description: 'Performing simulated cyberattacks on computer systems, networks, and websites to identify security vulnerabilities before malicious hackers can exploit them.',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Network,
      title: 'Network Security',
      description: 'Setting up secure networks for small-scale businesses, implementing firewalls, and conducting network audits to ensure optimal security.',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Designing and maintaining efficient database systems, optimizing queries, and ensuring data integrity and security.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Wrench,
      title: 'Cloud Architecture',
      description: 'Architecting highly available cloud solutions across AWS, GCP, and OCI.',
      color: 'from-orange-500 to-amber-500',
    },
    {
      icon: Globe,
      title: 'Security Consulting',
      description: 'Offering expert advice on cybersecurity best practices, conducting risk assessments, and developing security strategies.',
      color: 'from-violet-500 to-purple-500',
    },
  ]

  return (
    <section id="services" className="py-20 bg-black relative overflow-hidden">
      {/* 3D Perspective Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(0, 255, 0, 0.06) 1px, transparent 1px),
              linear-gradient(rgba(0, 255, 0, 0.06) 1px, transparent 1px)
            `,
            backgroundSize: '70px 70px',
            transform: 'perspective(350px) rotateX(50deg)',
            transformOrigin: 'center',
            animation: 'gridMove 30s linear infinite'
          }}
        />
      </div>

      {/* Floating Code Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute text-green-500/15 font-mono text-xs pointer-events-none"
          initial={{ x: `${particle.x}%`, y: `${particle.y}%` }}
          animate={{
            y: [`${particle.y}%`, `${particle.y - 35}%`],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{
            duration: 10 + Math.random() * 5,
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
          className="absolute top-1/3 left-1/4 w-64 h-64 bg-green-500/6 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.18, 0.35, 0.18],
            x: [0, 35, 0],
            y: [0, 15, 0]
          }}
          transition={{ duration: 14, repeat: Infinity }}
          style={{ filter: 'blur(70px)' }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.35, 1],
            opacity: [0.12, 0.3, 0.12],
            x: [0, -25, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, delay: 3 }}
          style={{ filter: 'blur(85px)' }}
        />
      </div>

      {/* Floating 3D Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/5 right-1/5 w-14 h-14 border-2 border-green-500/8 rotate-45"
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.2, 1],
            y: [0, -20, 0]
          }}
          transition={{ duration: 14, repeat: Infinity }}
          style={{ boxShadow: '0 0 22px rgba(0, 255, 0, 0.22)' }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/6 w-18 h-18 border-2 border-emerald-500/6"
          animate={{
            rotate: [0, 360, 0],
            scale: [1, 0.9, 1],
            y: [0, 18, 0]
          }}
          transition={{ duration: 11, repeat: Infinity, delay: 2 }}
          style={{ boxShadow: '0 0 18px rgba(0, 255, 0, 0.18)' }}
        />
        <motion.div
          className="absolute top-2/3 right-1/3 w-28 h-28 border border-green-500/8 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.4, 0.15]
          }}
          transition={{ duration: 9, repeat: Infinity, delay: 4 }}
        />
      </div>

      {/* Matrix background */}
      <div className="absolute inset-0 matrix-bg opacity-12"></div>

      {/* Scanlines */}
      <div className="absolute inset-0 scanlines opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 font-mono"
          style={{ transform: 'translateZ(12px)' }}
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 mb-4">
            <Terminal className="w-6 h-6 text-green-500 terminal-glow" style={{ filter: 'drop-shadow(0 0 8px rgba(0, 255, 0, 0.8))' }} />
            <div className="text-green-500 text-lg">root@kali:~$</div>
            <div className="text-green-400">./services.sh</div>
          </div>

          <h2 className="text-4xl font-bold mb-4 text-green-400 terminal-glow" style={{ textShadow: '0 0 25px rgba(0, 255, 0, 0.7)' }}>
            <span className="text-green-500">&gt;</span> My Services
          </h2>
          <p className="text-lg text-green-100/80 max-w-2xl backdrop-blur-sm p-4 rounded-lg border border-green-500/10" style={{ boxShadow: '0 0 20px rgba(0, 255, 0, 0.15)' }}>
            Comprehensive solutions for web development and cybersecurity needs
          </p>
        </motion.div>

        {/* Terminal window for services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-2 border-green-500/30 rounded-lg bg-black/60 backdrop-blur-md overflow-hidden"
          style={{
            boxShadow: '0 0 45px rgba(0, 255, 0, 0.28), inset 0 0 45px rgba(0, 255, 0, 0.1)',
            transform: 'translateZ(18px)'
          }}
        >
          {/* Services grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`p-6 border border-green-500/20 hover:border-green-500/50 transition-all backdrop-blur-sm ${
                  index % 3 !== 2 ? 'border-r-0' : ''
                } ${index < services.length - 3 ? 'border-b-0' : ''} ${index % 2 !== 0 ? 'md:border-r-0' : ''} ${
                  index % 2 !== 1 ? 'lg:border-r-0' : ''
                }`}
                style={{
                  transform: `translateZ(${10 + index * 3}px)`,
                  boxShadow: `0 0 ${25 + index * 6}px rgba(0, 255, 0, 0.16)`,
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <div className="font-mono h-full">
                  {/* Service number */}
                  <div className="text-green-500 text-xs mb-2" style={{ textShadow: '0 0 8px rgba(0, 255, 0, 0.6)' }}>
                    [{String(index + 1).padStart(2, '0')}]
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded bg-green-500/10 border border-green-500/30 p-2.5 mb-4 relative" style={{ boxShadow: '0 0 20px rgba(0, 255, 0, 0.25), inset 0 0 15px rgba(0, 255, 0, 0.1)' }}>
                    <service.icon className="w-full h-full text-green-400 terminal-glow" style={{ filter: 'drop-shadow(0 0 6px rgba(0, 255, 0, 0.8))' }} />
                    <motion.div
                      className="absolute inset-0 bg-green-500/10 rounded-lg"
                      animate={{
                        opacity: [0, 0.3, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl text-green-300 mb-3 terminal-glow" style={{ textShadow: '0 0 16px rgba(0, 255, 0, 0.65)' }}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-green-100/70 text-sm leading-relaxed mb-4 backdrop-blur-sm p-2 rounded border border-green-500/5" style={{ boxShadow: 'inset 0 0 10px rgba(0, 255, 0, 0.08)' }}>
                    {service.description}
                  </p>

                  {/* Command prompt style */}
                  <div className="mt-4 pt-4 border-t border-green-500/20">
                    <div className="text-green-500 text-xs" style={{ textShadow: '0 0 8px rgba(0, 255, 0, 0.5)' }}>
                      <span className="text-green-500">root@kali:~$</span> ./execute --service={index + 1}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Terminal footer */}
          <div className="border-t-2 border-green-500/30 bg-green-500/5 p-3" style={{ boxShadow: 'inset 0 0 20px rgba(0, 255, 0, 0.1)' }}>
            <div className="text-green-500 text-sm font-mono" style={{ textShadow: '0 0 12px rgba(0, 255, 0, 0.6)' }}>
              <span className="text-green-500">root@kali:~$</span> <span className="text-green-400">service_list_loaded=true</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
