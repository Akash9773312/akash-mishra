'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, Shield, Code, Network, Terminal, Command, Cpu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useEffect, useState } from 'react'

export default function Hero() {
  const roles = [
    { icon: Code, text: 'Full Stack Developer' },
    { icon: Shield, text: 'Cloud Architect' },
    { icon: Network, text: 'Security Researcher' },
  ]

  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; speed: number; char: string }>>([])

  useEffect(() => {
    // Generate floating code particles
    const chars = ['0', '1', '{', '}', '<', '>', '/', '*', '+', '-', '=', 'x', 'y', 'z']
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      speed: 0.5 + Math.random() * 1.5,
      char: chars[Math.floor(Math.random() * chars.length)]
    }))
    setParticles(newParticles)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* 3D Perspective Grid */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px),
              linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: 'perspective(500px) rotateX(60deg)',
            transformOrigin: 'center top',
            animation: 'gridMove 20s linear infinite'
          }}
        />
      </div>

      {/* Floating Code Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute text-green-500/30 font-mono text-xs pointer-events-none"
          initial={{ x: `${particle.x}%`, y: `${particle.y}%` }}
          animate={{
            y: [`${particle.y}%`, `${particle.y - 30}%`],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: particle.speed * 5,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          {particle.char}
        </motion.div>
      ))}

      {/* Glowing Orbs with 3D Depth */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ filter: 'blur(60px)' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          style={{ filter: 'blur(80px)' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          style={{ filter: 'blur(100px)' }}
        />
      </div>

      {/* Matrix rain effect */}
      <div className="absolute inset-0 matrix-bg opacity-15"></div>

      {/* CRT scanlines */}
      <div className="absolute inset-0 scanlines opacity-30"></div>

      {/* Holographic Projection Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 via-transparent to-green-500/5 animate-hologram"></div>
      </div>

      {/* Floating 3D Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-20 h-20 border-2 border-green-500/20 rotate-45"
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.1, 1],
            y: [0, -20, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{ boxShadow: '0 0 20px rgba(0, 255, 0, 0.3)' }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-16 h-16 border-2 border-emerald-500/20"
          animate={{
            rotate: [0, 180, 0],
            scale: [1, 0.9, 1],
            y: [0, -15, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          style={{ boxShadow: '0 0 15px rgba(0, 255, 0, 0.2)' }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-24 h-24 border border-green-500/10 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* Scanline animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/10 to-transparent animate-scan"></div>
      </div>

      {/* Terminal frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10"
      >
        <div className="font-mono">
          {/* Terminal header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8 p-4 border-2 border-green-500 rounded-t-lg bg-black backdrop-blur-sm"
            style={{
              boxShadow: '0 0 30px rgba(0, 255, 0, 0.3), inset 0 0 30px rgba(0, 255, 0, 0.1)',
              transform: 'translateZ(20px)'
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              <span className="ml-2 text-green-500 text-sm terminal-glow">root@kali:~</span>
            </div>
            <div className="text-green-400 text-sm">
              <span className="text-green-500">root@kali:~$</span> <span className="animate-blink">_</span>
            </div>
          </motion.div>

          {/* Terminal content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Boot sequence */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-green-400 text-sm space-y-1 mb-8 backdrop-blur-sm p-4 rounded-lg border border-green-500/10"
              style={{
                boxShadow: '0 0 20px rgba(0, 255, 0, 0.2)',
                transform: 'translateZ(10px)'
              }}
            >
              <div><span className="text-green-500">[</span><span className="text-yellow-400">OK</span><span className="text-green-500">]</span> Initializing system...</div>
              <div><span className="text-green-500">[</span><span className="text-yellow-400">OK</span><span className="text-green-500">]</span> Loading profile data...</div>
              <div><span className="text-green-500">[</span><span className="text-yellow-400">OK</span><span className="text-green-500">]</span> Establishing secure connection...</div>
              <div><span className="text-green-500">[</span><span className="text-green-400">SUCCESS</span><span className="text-green-500">]</span> System ready</div>
            </motion.div>

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 border-2 border-green-500 bg-black/80 backdrop-blur-sm rounded-lg mb-8 shadow-lg shadow-green-500/20"
              style={{
                boxShadow: '0 0 25px rgba(0, 255, 0, 0.4), inset 0 0 15px rgba(0, 255, 0, 0.1)',
                transform: 'translateZ(15px)'
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 35px rgba(0, 255, 0, 0.6), inset 0 0 20px rgba(0, 255, 0, 0.2)'
              }}
            >
              <Cpu className="w-4 h-4 text-green-500 terminal-glow" />
              <span className="text-green-400 text-sm">status: </span>
              <span className="text-green-300">Available for anything interesting.</span>
              <span className="animate-blink text-green-500">█</span>
            </motion.div>

            {/* Main heading with terminal style */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-6"
              style={{ transform: 'translateZ(10px)' }}
            >
              <div className="text-lg text-green-500 mb-2">
                <span className="text-green-500">root@kali:~$</span> cat profile.txt
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-green-400 terminal-glow">
                Hi, I'm <span className="text-green-300" style={{ textShadow: '0 0 20px rgba(0, 255, 0, 0.8)' }}>Akash Mishra</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mb-8"
              style={{ transform: 'translateZ(8px)' }}
            >
              <div className="text-lg text-green-500 mb-2">
                <span className="text-green-500">root@kali:~$</span> cat skills.txt
              </div>
              <p className="text-xl sm:text-2xl text-green-100/80 max-w-4xl leading-relaxed backdrop-blur-sm p-4 rounded-lg border border-green-500/10">
                Cloud Architect • DevSecOps Engineer • Full-Stack Developer — Building systems that scale with confidence.
              </p>
            </motion.div>

            {/* Role badges with CLI style */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mb-8"
              style={{ transform: 'translateZ(12px)' }}
            >
              <div className="text-lg text-green-500 mb-4">
                <span className="text-green-500">root@kali:~$</span> ./list_roles.sh
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {roles.map((role, index) => (
                  <motion.div
                    key={role.text}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: '0 0 30px rgba(0, 255, 0, 0.6), inset 0 0 15px rgba(0, 255, 0, 0.2)'
                    }}
                    className="flex items-center gap-2 px-4 py-2 border border-green-500/30 bg-black/80 backdrop-blur-sm rounded-lg shadow-lg shadow-green-500/10 hover:shadow-green-500/20 hover:border-green-500/50 transition-all text-sm group"
                    style={{
                      transform: `translateZ(${15 + index * 2}px)`,
                      boxShadow: '0 0 15px rgba(0, 255, 0, 0.3)'
                    }}
                  >
                    <div className="p-1.5 rounded bg-green-500/10 border border-green-500/30">
                      <role.icon className="w-4 h-4 text-green-400 terminal-glow" />
                    </div>
                    <span className="text-green-300">[{index + 1}]</span>
                    <span className="text-green-300">{role.text}</span>
                    <span className="animate-blink text-green-500">█</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons with terminal style */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              style={{ transform: 'translateZ(18px)' }}
            >
              <div className="text-lg text-green-500 mb-2 w-full text-center">
                <span className="text-green-500">root@kali:~$</span> ./execute.sh
              </div>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 40px rgba(0, 255, 0, 0.8), inset 0 0 20px rgba(0, 255, 0, 0.3)'
                }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  size="lg"
                  className="bg-black/80 backdrop-blur-sm border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-black px-8 py-6 text-base shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all flex items-center gap-2 font-mono"
                  style={{
                    boxShadow: '0 0 25px rgba(0, 255, 0, 0.5)'
                  }}
                >
                  <Terminal className="w-5 h-5" />
                  <Command className="w-5 h-5" />
                  <a href="#projects" className="flex items-center gap-2">
                    ./view_projects.sh
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 35px rgba(0, 255, 0, 0.6)'
                }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-green-500/50 text-green-400 hover:bg-green-500/10 hover:text-green-300 bg-black/80 backdrop-blur-sm px-8 py-6 text-base shadow-lg hover:shadow-green-500/20 transition-all flex items-center gap-2 font-mono"
                  style={{
                    boxShadow: '0 0 20px rgba(0, 255, 0, 0.4)'
                  }}
                >
                  <Download className="w-5 h-5" />
                  <a href="/Akash_CV.pdf" download className="flex items-center gap-2">
                    wget resume.pdf
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Terminal scrolling indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
              <div className="flex flex-col items-center gap-2 font-mono text-xs text-green-500/70 backdrop-blur-sm px-4 py-2 rounded-full border border-green-500/20">
                <span>[ Press Enter or scroll to continue... ]</span>
                <div className="flex items-center gap-2">
                  <span className="animate-blink">_</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
