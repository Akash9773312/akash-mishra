'use client'

import { motion } from 'framer-motion'
import { Heart, Terminal } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t-2 border-green-500/30 bg-black py-8 relative">
      {/* Scanlines */}
      <div className="absolute inset-0 scanlines opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono"
        >
          <div className="flex items-center gap-2 text-green-400">
            <Terminal className="w-4 h-4 terminal-glow" />
            <p className="text-sm">
              &copy; {currentYear} Akash Mishra. All rights reserved.
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 text-sm text-green-300 terminal-glow"
          >
            <span className="text-green-500">root@kali:~$</span> echo "Built with"
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            <span>by Akash</span>
            <span className="animate-blink text-green-500">█</span>
          </motion.div>
        </motion.div>

        {/* Terminal status bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 pt-4 border-t border-green-500/20"
        >
          <div className="flex items-center justify-between text-xs text-green-500/70">
            <div className="flex items-center gap-4">
              <span>[SYSTEM: ONLINE]</span>
              <span>[STATUS: OPERATIONAL]</span>
              <span>[UPTIME: 99.9%]</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span>CONNECTION SECURE</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
