'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Code, Link2, Send, Zap } from 'lucide-react'

export default function Contact() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Add your newsletter service here (e.g., ConvertKit, Substack, etc.)
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setEmail('')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    { icon: Code, href: 'https://github.com/Akash9773312', label: 'GitHub' },
    { icon: Link2, href: 'https://www.linkedin.com/in/akash-mishra-9b99451b9/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:am9773312@gmail.com', label: 'Email' },
  ]

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Let's work together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a product to build or a system to fix? Let's talk.
          </p>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-xl mx-auto mb-16"
        >
          <div className="p-8 rounded-2xl border border-border bg-card">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="w-5 h-5 text-primary" />
              <h3 className="font-serif text-xl font-semibold text-foreground">
                Get in touch
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 text-center">
              Send me a message and let's discuss your project.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>

            {submitStatus === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-primary mt-3 text-center"
              >
                Thanks! I'll get back to you soon.
              </motion.p>
            )}
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-6"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="p-3 rounded-full border border-border bg-card hover:border-primary transition-colors"
              title={social.label}
            >
              <social.icon className="w-5 h-5 text-foreground" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
