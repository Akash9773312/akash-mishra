'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Code, Database, Network, Shield, Wrench, Globe, Terminal } from 'lucide-react'

export default function Services() {
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
    <section id="services" className="py-20 bg-black relative">
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
            <div className="text-green-400">./services.sh</div>
          </div>

          <h2 className="text-4xl font-bold mb-4 text-green-400 terminal-glow">
            <span className="text-green-500">&gt;</span> My Services
          </h2>
          <p className="text-lg text-green-100/80 max-w-2xl">
            Comprehensive solutions for web development and cybersecurity needs
          </p>
        </motion.div>

        {/* Terminal window for services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-2 border-green-500/30 rounded-lg bg-black/50 backdrop-blur-sm overflow-hidden"
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
                whileHover={{ y: -5 }}
                className={`p-6 border border-green-500/20 hover:border-green-500/40 transition-all ${
                  index % 3 !== 2 ? 'border-r-0' : ''
                } ${index < services.length - 3 ? 'border-b-0' : ''} ${index % 2 !== 0 ? 'md:border-r-0' : ''} ${
                  index % 2 !== 1 ? 'lg:border-r-0' : ''
                }`}
              >
                <div className="font-mono h-full">
                  {/* Service number */}
                  <div className="text-green-500 text-xs mb-2">
                    [{String(index + 1).padStart(2, '0')}]
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded bg-green-500/10 border border-green-500/30 p-2.5 mb-4`}>
                    <service.icon className="w-full h-full text-green-400 terminal-glow" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl text-green-300 mb-3 terminal-glow">{service.title}</h3>

                  {/* Description */}
                  <p className="text-green-100/70 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Command prompt style */}
                  <div className="mt-4 pt-4 border-t border-green-500/20">
                    <div className="text-green-500 text-xs">
                      <span className="text-green-500">root@kali:~$</span> <span className="animate-blink">_</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Terminal footer */}
          <div className="border-t-2 border-green-500/30 bg-green-500/5 p-3">
            <div className="text-green-500 text-sm font-mono">
              <span className="text-green-500">root@kali:~$</span> <span className="text-green-400">service_list_loaded=true</span>
              <span className="animate-blink">█</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
