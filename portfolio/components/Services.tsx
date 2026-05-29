'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Code, Database, Network, Shield, Wrench, Globe } from 'lucide-react'

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
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">My Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for web development and cybersecurity needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border/50 hover:border-primary/50">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} p-2.5 mb-4`}>
                    <service.icon className="w-full h-full text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
