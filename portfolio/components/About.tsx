'use client'

import { motion } from 'framer-motion'
import { Code2, Cloud, Shield, Cpu, Database, Globe, Zap, Brain, Code, FileCode, HardDrive } from 'lucide-react'

const services = [
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
]

const process = [
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
]

const skillCategories = [
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
]

const softSkills = [
  { title: 'Multidisciplinary lens', description: 'Working across cloud, security, and infrastructure gives me perspectives most single-domain engineers don\'t carry into a problem.' },
  { title: 'Creative problem-solving', description: 'I don\'t just apply patterns — I think laterally across domains to find solutions others wouldn\'t consider.' },
  { title: 'Clear communication', description: 'I can explain deeply technical work in simple terms. Fluent in English and Hindi.' },
  { title: 'Product intuition', description: 'I don\'t just build to spec. I think about what the product needs to succeed, not just what the ticket says.' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Two Things I Do */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Two things I do
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            I build products and I fix systems. Whether you need to ship an idea fast or untangle something that's been broken for months.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
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
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            From concept to clarity
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Two paths, one principle: understand the problem deeply, then build with foresight
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {process.map((proc) => (
              <div key={proc.phase}>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                  {proc.phase}
                </h3>
                <div className="space-y-6">
                  {proc.steps.map((step) => (
                    <div key={step.number} className="flex gap-4">
                      <span className="text-2xl font-serif text-primary/60">{step.number}</span>
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
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            The stack I work with
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Skills I learned through building and solving — an interdisciplinary stack shaped by the requirements of each project
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
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
                  <h3 className="font-semibold text-foreground">{category.title}</h3>
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
        </motion.div>

        {/* Beyond Code */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What I bring beyond code
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            The less visible things that shape how I approach every project
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {softSkills.map((skill, index) => (
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
        </motion.div>
      </div>
    </section>
  )
}
