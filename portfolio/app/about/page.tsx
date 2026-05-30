'use client'

import { motion } from 'framer-motion'
import { Code, Code2, Cloud, Shield, Cpu, Database, Globe, Zap, Brain, FileCode, HardDrive, GraduationCap, Briefcase, Heart, MapPin, Mail, Link as LinkIcon, Calendar, Award, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
            <span className="text-4xl font-serif font-bold text-primary">AM</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
            About Me
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full Stack Developer • Cloud Architect • Security Researcher
          </p>
        </motion.div>

        {/* Profile Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16 p-8 rounded-2xl border border-border bg-card"
        >
          <h2 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-primary" />
            Profile
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p className="text-foreground">
              Hi, I'm <strong className="text-foreground">Akash Mishra</strong> — a technologist who builds products and fixes systems.
              I work across the full stack: from embedded Linux kernels to AI orchestration, from custom hardware
              to distributed systems.
            </p>
            <p>
              Currently based in Mumbai, India, I've spent years building systems that actually work — from cinema
              digital signage platforms serving 4,500+ screens to AI dictation products with sub-200ms latency. I've
              co-founded companies shipped products for enterprise clients, and debugged systems that were broken for months.
            </p>
            <p>
              I believe in understanding problems deeply before writing code — and in building things that can
              withstand real users, real traffic, and real problems.
            </p>
          </div>
        </motion.section>

        {/* Journey Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mb-16"
        >
          <h2 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <MapPin className="w-6 h-6 text-primary" />
            Journey
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-32 text-right">
                <span className="text-sm font-medium text-primary">Current</span>
              </div>
              <div className="flex-1 p-6 rounded-xl border border-border bg-card">
                <h3 className="font-semibold text-foreground mb-2">Lead DevOps & Compliance Engineer</h3>
                <p className="text-sm text-muted-foreground mb-2">AiVANTA Technologies LLP • Remote, India</p>
                <p className="text-sm text-muted-foreground">
                  Reducing cloud costs by 80% through architecture optimization and driving SOC 2 Type II compliance
                  initiatives across banking, healthcare, insurance, and government sectors.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-32 text-right">
                <span className="text-sm text-muted-foreground">2023-2025</span>
              </div>
              <div className="flex-1 p-6 rounded-xl border border-border bg-card">
                <h3 className="font-semibold text-foreground mb-2">Full Stack Developer & DevSecOps Engineer</h3>
                <p className="text-sm text-muted-foreground mb-2">Enpointe IT Services • Mumbai, India</p>
                <p className="text-sm text-muted-foreground">
                  Built secure, cloud-native platforms across AWS, OCI, and Kubernetes. Delivered multi-region
                  infrastructure supporting 8,000+ devices with 99.99% uptime while reducing infrastructure costs by 50%.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-32 text-right">
                <span className="text-sm text-muted-foreground">2022</span>
              </div>
              <div className="flex-1 p-6 rounded-xl border border-border bg-card">
                <h3 className="font-semibold text-foreground mb-2">Cyber Security Intern</h3>
                <p className="text-sm text-muted-foreground mb-2">Olcademy • Remote</p>
                <p className="text-sm text-muted-foreground">
                  Conducted security assessments and penetration testing while building foundational
                  knowledge in network security and vulnerability analysis.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-32 text-right">
                <span className="text-sm text-muted-foreground">2023</span>
              </div>
              <div className="flex-1 p-6 rounded-xl border border-border bg-card">
                <h3 className="font-semibold text-foreground mb-2">BS in Computer Science</h3>
                <p className="text-sm text-muted-foreground mb-2">University of Mumbai • Mumbai, India</p>
                <p className="text-sm text-muted-foreground">
                  Focused on computer science fundamentals while building practical skills in software
                  development and security through hands-on projects and internships.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Two Things I Do */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Zap className="w-6 h-6 text-primary" />
            Two things I do
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            I build products and I fix systems. Whether you need to ship an idea fast or untangle something that's been broken for months.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: 'Product Development',
                description: 'You have an idea you want to test — I assess the product potential, build to production conditions, and ship. Prototypes built to withstand launch, not just demos.',
              },
              {
                icon: Shield,
                title: 'Resilient Systems',
                description: 'Complex problem plaguing your system? I troubleshoot, rebuild, and harden it. Fail-safes, disaster recovery, and the foresight to solve problems before they surface.',
              },
              {
                icon: Code2,
                title: 'Full-Stack, One Person',
                description: 'Architecture, implementation, integration, and production — I work across the entire stack end-to-end, or deep in a single layer, depending on where the problem lives.',
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Process Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mb-16"
        >
          <h2 className="font-serif text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
            <Cpu className="w-6 h-6 text-primary" />
            From concept to clarity
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Two paths, one principle: understand the problem deeply, then build with foresight
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                phase: 'Building Products',
                steps: [
                  { number: '01', title: 'Assess', description: 'Define the product vision and map what it requires at launch and at scale' },
                  { number: '02', title: 'Architect', description: 'Design the system for production conditions from day one — not prototype conditions' },
                  { number: '03', title: 'Build & Ship', description: 'Working product, delivered fast, built to withstand real traffic and real users' },
                ],
              },
              {
                phase: 'Fixing Systems',
                steps: [
                  { number: '01', title: 'Troubleshoot', description: 'Identify the root cause — not the surface symptoms, the actual failure point' },
                  { number: '02', title: 'Rebuild', description: 'Redesign and fix with resilience in mind — backups, fail-safes, and scalability' },
                  { number: '03', title: 'Harden', description: 'Ensure the system can survive what\'s coming next, not just what broke it last time' },
                ],
              },
            ].map((proc) => (
              <div key={proc.phase}>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                  {proc.phase}
                </h3>
                <div className="space-y-6">
                  {proc.steps.map((step) => (
                    <div key={step.number} className="flex gap-4">
                      <span className="text-2xl font-serif text-primary/60 flex-shrink-0">{step.number}</span>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="font-serif text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
            <Database className="w-6 h-6 text-primary" />
            The stack I work with
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Skills I learned through building and solving — an interdisciplinary stack shaped by the requirements of each project
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              {
                icon: Brain,
                title: 'AI & Machine Learning',
                items: ['TensorFlow', 'OpenCV', 'LLMs', 'Edge AI', 'Computer Vision'],
              },
              {
                icon: Zap,
                title: 'Product Development',
                items: ['React', 'Node.js', 'FastAPI', 'Flask', 'Express', 'Socket.io', 'GraphQL'],
              },
              {
                icon: Code,
                title: 'Languages',
                items: ['Python', 'C++', 'JavaScript', 'HTML5', 'CSS', 'GNU Bash'],
              },
              {
                icon: Database,
                title: 'Databases',
                items: ['PostgreSQL', 'MongoDB', 'Redis', 'SQLite', 'Vector DBs'],
              },
              {
                icon: Cloud,
                title: 'Cloud & DevOps',
                items: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Git', 'GitHub Actions', 'Infrastructure', 'Security'],
              },
              {
                icon: Cpu,
                title: 'Hardware & Embedded',
                items: ['Arduino', 'Raspberry Pi', 'Linux', 'STM32', 'FPGA', 'RF & Comms', 'Power Systems', 'CAN / I2C / SPI'],
              },
              {
                icon: FileCode,
                title: 'Fabrication & CAD',
                items: ['Autodesk', '3D Printing', 'CNC', 'PCB Design', 'Laser Cutting'],
              },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm">{category.title}</h3>
                </div>
                <ul className="space-y-1.5">
                  {category.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground">
                      • {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Beyond Code */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mb-16"
        >
          <h2 className="font-serif text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
            <Heart className="w-6 h-6 text-primary" />
            What I bring beyond code
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            The less visible things that shape how I approach every project
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Multidisciplinary lens', description: 'Working across cloud, security, and infrastructure gives me perspectives most single-domain engineers don\'t carry into a problem.' },
              { title: 'Creative problem-solving', description: 'I don\'t just apply patterns — I think laterally across domains to find solutions others wouldn\'t consider.' },
              { title: 'Clear communication', description: 'I can explain deeply technical work in simple terms. Fluent in English and Hindi.' },
              { title: 'Product intuition', description: 'I don\'t just build to spec. I think about what the product needs to succeed, not just what the ticket says.' },
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl border border-border bg-card"
              >
                <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                  {skill.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Personal Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <GraduationCap className="w-6 h-6 text-primary" />
            Background
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-muted-foreground">
              <p>
                Growing up, I was always curious about how things worked — taking apart electronics,
                writing my first programs, and trying to understand the systems behind everyday technology.
              </p>
              <p>
                This curiosity led me to computer science, but I learned the most by building — from my first
                art installation at the National Gallery of Modern Art to scaling platforms for enterprise clients.
              </p>
              <p>
                I believe the best engineers are tinkerers at heart — people who aren't satisfied with
                abstractions and need to understand what's happening at every layer of the stack.
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                When I'm not building, you'll find me exploring new technologies, reading about system
                design, or experimenting with hardware projects in my lab.
              </p>
              <p>
                I'm always learning, always building, and always looking for the next interesting problem to solve.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Contact CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="text-center"
        >
          <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
            Let's work together
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Have a product to build or a system to fix?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            Get in touch
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </motion.section>
      </div>
    </div>
  )
}
