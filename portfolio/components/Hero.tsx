'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, Shield, Code, Network, Terminal, Command, Cpu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function Hero() {
  const roles = [
    { icon: Code, text: 'Full Stack Developer' },
    { icon: Shield, text: 'Cloud Architect' },
    { icon: Network, text: 'Security Researcher' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Matrix rain effect */}
      <div className="absolute inset-0 matrix-bg opacity-30"></div>

      {/* CRT scanlines */}
      <div className="absolute inset-0 scanlines opacity-40"></div>

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
            className="mb-8 p-4 border-2 border-green-500 rounded-t-lg bg-black"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
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
              className="text-green-400 text-sm space-y-1 mb-8"
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
              className="inline-flex items-center gap-2 px-4 py-2 border-2 border-green-500 bg-black rounded-lg mb-8 shadow-lg shadow-green-500/20"
            >
              <Cpu className="w-4 h-4 text-green-500 terminal-glow" />
              <span className="text-green-400 text-sm">status: </span>
              <span className="text-green-300">Available for freelance projects</span>
              <span className="animate-blink text-green-500">█</span>
            </motion.div>

            {/* Main heading with terminal style */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-6"
            >
              <div className="text-lg text-green-500 mb-2">
                <span className="text-green-500">root@kali:~$</span> cat profile.txt
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-green-400 terminal-glow">
                Hi, I'm <span className="text-green-300">Akash Mishra</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mb-8"
            >
              <div className="text-lg text-green-500 mb-2">
                <span className="text-green-500">root@kali:~$</span> cat skills.txt
              </div>
              <p className="text-xl sm:text-2xl text-green-100/80 max-w-4xl leading-relaxed">
                Cloud Architect • DevSecOps Engineer • Full-Stack Developer — Building systems that scale with confidence.
              </p>
            </motion.div>

            {/* Role badges with CLI style */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mb-8"
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
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 border border-green-500/30 bg-black rounded-lg shadow-lg shadow-green-500/10 hover:shadow-green-500/20 hover:border-green-500/50 transition-all text-sm group"
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
            >
              <div className="text-lg text-green-500 mb-2 w-full text-center">
                <span className="text-green-500">root@kali:~$</span> ./execute.sh
              </div>
              <Button
                size="lg"
                className="bg-black border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-black px-8 py-6 text-base shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all flex items-center gap-2 font-mono"
              >
                <Terminal className="w-5 h-5" />
                <Command className="w-5 h-5" />
                <a href="#projects" className="flex items-center gap-2">
                  ./view_projects.sh
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-green-500/50 text-green-400 hover:bg-green-500/10 hover:text-green-300 bg-black px-8 py-6 text-base shadow-lg hover:shadow-green-500/20 transition-all flex items-center gap-2 font-mono"
              >
                <Download className="w-5 h-5" />
                <a href="/Akash_CV.pdf" download className="flex items-center gap-2">
                  wget resume.pdf
                </a>
              </Button>
            </motion.div>

            {/* Terminal scrolling indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
              <div className="flex flex-col items-center gap-2 font-mono text-xs text-green-500/70">
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
