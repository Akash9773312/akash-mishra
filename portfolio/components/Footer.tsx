'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/50 bg-muted/30 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Akash Mishra. All rights reserved.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Akash
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
