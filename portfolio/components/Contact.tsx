'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Send, Code, Link as LinkIcon, Terminal } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Using Formspree or similar service
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
        setTimeout(() => setSubmitStatus('idle'), 5000)
      }
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'am9773312@gmail.com',
      href: 'mailto:am9773312@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9137219514',
      href: 'tel:+919137219514',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Mumbai, India',
      href: '#',
    },
  ]

  const socialLinks = [
    {
      icon: LinkIcon,
      href: 'https://www.linkedin.com/in/akash-mishra-9b99451b9/',
      label: 'LinkedIn',
      color: 'hover:text-blue-400',
    },
    {
      icon: Code,
      href: 'https://github.com/Akash9773312',
      label: 'GitHub',
      color: 'hover:text-green-400',
    },
  ]

  return (
    <section id="contact" className="py-20 bg-black relative">
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
            <div className="text-green-400">./contact.sh</div>
          </div>

          <h2 className="text-4xl font-bold mb-4 text-green-400 terminal-glow">
            <span className="text-green-500">&gt;</span> Get In Touch
          </h2>
          <p className="text-lg text-green-100/80 max-w-2xl">
            Have a project in mind or want to discuss cybersecurity? Let's connect!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 font-mono"
          >
            <div className="border-2 border-green-500/30 rounded-lg bg-black/50 backdrop-blur-sm overflow-hidden">
              <div className="border-b-2 border-green-500/30 bg-green-500/5 p-4">
                <h3 className="text-xl text-green-400 terminal-glow">
                  [Contact Information]
                </h3>
              </div>
              <div className="p-6 space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-start gap-4 p-4 border border-green-500/20 rounded-lg hover:border-green-500/40 transition-all group"
                  >
                    <div className="w-12 h-12 rounded bg-green-500/10 border border-green-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                      <info.icon className="w-6 h-6 text-green-400 terminal-glow" />
                    </div>
                    <div>
                      <p className="text-sm text-green-500 mb-1">{info.label}:</p>
                      <p className="text-green-300">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="border-2 border-green-500/30 rounded-lg bg-black/50 backdrop-blur-sm overflow-hidden">
              <div className="border-b-2 border-green-500/30 bg-green-500/5 p-4">
                <h3 className="text-xl text-green-400 terminal-glow">
                  [Connect With Me]
                </h3>
              </div>
              <div className="p-6">
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center justify-center transition-colors text-green-400 ${social.color}`}
                    >
                      <social.icon className="w-6 h-6 terminal-glow" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-mono"
          >
            <div className="border-2 border-green-500/30 rounded-lg bg-black/50 backdrop-blur-sm overflow-hidden">
              <div className="border-b-2 border-green-500/30 bg-green-500/5 p-4">
                <h3 className="text-xl text-green-400 terminal-glow">
                  [Send Me a Message]
                </h3>
              </div>
              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-green-500 text-sm mb-2 block">
                      <span className="text-green-500">root@kali:~$</span> input --name
                    </label>
                    <Input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12 bg-black/50 border-green-500/30 text-green-300 placeholder:text-green-500/50 focus:border-green-500"
                      suppressHydrationWarning
                    />
                  </div>
                  <div>
                    <label className="text-green-500 text-sm mb-2 block">
                      <span className="text-green-500">root@kali:~$</span> input --email
                    </label>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-12 bg-black/50 border-green-500/30 text-green-300 placeholder:text-green-500/50 focus:border-green-500"
                      suppressHydrationWarning
                    />
                  </div>
                  <div>
                    <label className="text-green-500 text-sm mb-2 block">
                      <span className="text-green-500">root@kali:~$</span> input --message
                    </label>
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      className="resize-none bg-black/50 border-green-500/30 text-green-300 placeholder:text-green-500/50 focus:border-green-500"
                      suppressHydrationWarning
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-black border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-black shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="animate-spin">⚙</span>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        ./send_message.sh
                      </span>
                    )}
                  </Button>

                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-green-400 text-sm text-center p-3 border border-green-500/30 bg-green-500/10 rounded"
                    >
                      <span className="text-green-500">[SUCCESS]</span> Message sent successfully!
                    </motion.div>
                  )}
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm text-center p-3 border border-red-500/30 bg-red-500/10 rounded"
                    >
                      <span className="text-red-500">[ERROR]</span> Failed to send message. Please try again.
                    </motion.div>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
