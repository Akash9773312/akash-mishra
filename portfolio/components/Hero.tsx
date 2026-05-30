'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Zap, Shield } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 pt-16">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        {/* Profile image placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center"
        >
          <span className="text-4xl font-serif font-bold text-primary">AM</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
        >
          Hi, I'm <span className="text-primary">Akash Mishra</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-serif text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
        >
          I build products and I fix systems
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
        >
          Whether you need to ship an idea fast or untangle something that's been broken for months.
          From concept to clarity — I build products and fix systems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            <Zap className="w-4 h-4" />
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-border rounded-lg font-medium text-foreground hover:bg-accent transition-colors flex items-center gap-2"
          >
            <Shield className="w-4 h-4" />
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-sm">Scroll to explore</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}
