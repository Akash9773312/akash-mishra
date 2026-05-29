'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar, MapPin, ExternalLink, Terminal, Cpu, FileText, GraduationCap } from 'lucide-react'

export default function About() {
  const [activeTab, setActiveTab] = useState('skills')
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; char: string }>>([])

  useEffect(() => {
    const chars = ['0', '1', '{', '}', '<', '>', '/', '*', '+', '=']
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      char: chars[Math.floor(Math.random() * chars.length)]
    }))
    setParticles(newParticles)
  }, [])

  const skills = [
    {
      category: 'Full Stack Development',
      items: ['React', 'Nest.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'Python', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      category: 'Cloud Architecture',
      items: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Jenkins', 'CI/CD', 'Serverless Architecture', 'Cloudflare', 'Vercel', 'Netlify', 'Firebase', 'DigitalOcean', 'Linode', 'VPS', 'Cloud Hosting', 'OCI', 'Hetzner'],
    },
    {
      category: 'DevSecOps',
      items: ['Git', 'Docker', 'Linux', 'SQL', 'MongoDB', 'REST APIs', 'CI/CD', 'Jenkins', 'Ansible', 'Terraform', 'Kubernetes', 'AWS', 'Azure', 'GCP'],
    },
    {
      category: 'Security',
      items: ['Web Pentesting', 'Network Security', 'Burp Suite', 'Metasploit', 'Wireshark'],
    },
    {
      category: 'Tools & Technologies',
      items: ['Git', 'Docker', 'Linux', 'SQL', 'MongoDB', 'REST APIs', 'CI/CD', 'Jenkins', 'Ansible', 'Terraform', 'Kubernetes', 'AWS', 'Azure', 'GCP'],
    },
  ]

  const experiences = [
    {
      title: 'Lead DevOps and Compliance Engineer',
      company: 'AiVANTA Technologies LLP',
      period: '2025 - Current',
      location: 'Remote, India',
      description: 'Lead DevOps and Compliance Engineer with expertise in AWS, GCP, security, automation, and large-scale infrastructure, reducing cloud costs by 80% through architecture optimization and serverless adoption. Built secure, compliant, and highly available cloud platforms using Infrastructure as Code, CI/CD, Kubernetes, and multi-account AWS environments while driving SOC 2 Type II compliance initiatives. Strengthened enterprise security by automating vulnerability management, implementing zero-trust access controls, and mitigating critical cyber threats, supporting clients across banking, healthcare, insurance, and government sectors.'
    },
    {
      title: 'Full Stack Developer and DevSecOps Engineer',
      company: 'Enpointe IT Services Private Limited',
      period: '2023 - 2025',
      location: 'Mumbai, India',
      description: 'Building secure, scalable, and cloud-native platforms across AWS, OCI, Kubernetes, and Linux environments.Delivered multi-region infrastructure supporting 8,000+ devices globally, achieving 99.99% uptime and reducing costs by 50%. Specialized in DevSecOps, SRE, CI/CD automation, Full-Stack Development, and production security.'
    },
    {
      title: 'Cyber Security Intern',
      company: 'Olcademy',
      period: '2022',
      location: 'Remote',
      description: 'Conducted security assessments and penetration testing.',
    },
  ]

  const education = [
    {
      degree: 'BS in Computer Science',
      institution: 'University of Mumbai',
      year: '2023',
      location: 'Mumbai, India',
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Bhavans College',
      year: '2019',
      location: 'Mumbai, India',
    },
    {
      degree: 'ICSE',
      institution: 'Sharada Gyan Peeth International School',
      year: '2017',
      location: 'Mumbai, India',
    },
  ]

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* 3D Perspective Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(0, 255, 0, 0.08) 1px, transparent 1px),
              linear-gradient(rgba(0, 255, 0, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: 'perspective(400px) rotateX(45deg)',
            transformOrigin: 'center',
            animation: 'gridMove 25s linear infinite'
          }}
        />
      </div>

      {/* Floating Code Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute text-green-500/20 font-mono text-xs pointer-events-none"
          initial={{ x: `${particle.x}%`, y: `${particle.y}%` }}
          animate={{
            y: [`${particle.y}%`, `${particle.y - 40}%`],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          {particle.char}
        </motion.div>
      ))}

      {/* Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-green-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 40, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 12, repeat: Infinity }}
          style={{ filter: 'blur(80px)' }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-emerald-500/6 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.15, 0.35, 0.15],
            x: [0, -30, 0],
            y: [0, -25, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 2 }}
          style={{ filter: 'blur(90px)' }}
        />
      </div>

      {/* Floating 3D Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-16 h-16 border-2 border-green-500/10 rotate-45"
          animate={{
            rotate: [45, 180, 45],
            scale: [1, 1.15, 1],
            y: [0, -25, 0]
          }}
          transition={{ duration: 12, repeat: Infinity }}
          style={{ boxShadow: '0 0 25px rgba(0, 255, 0, 0.25)' }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/5 w-20 h-20 border-2 border-emerald-500/8"
          animate={{
            rotate: [0, 90, 0],
            scale: [1, 0.85, 1],
            y: [0, 20, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          style={{ boxShadow: '0 0 20px rgba(0, 255, 0, 0.2)' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-24 h-24 border border-green-500/10 rounded-full"
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 3 }}
        />
      </div>

      {/* Matrix background */}
      <div className="absolute inset-0 matrix-bg opacity-15"></div>

      {/* Scanlines */}
      <div className="absolute inset-0 scanlines opacity-25"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 font-mono"
          style={{ transform: 'translateZ(10px)' }}
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 mb-4">
            <Terminal className="w-6 h-6 text-green-500 terminal-glow" style={{ filter: 'drop-shadow(0 0 8px rgba(0, 255, 0, 0.8))' }} />
            <div className="text-green-500 text-lg">root@kali:~$</div>
            <div className="text-green-400">./about.sh</div>
          </div>

          <h2 className="text-4xl font-bold mb-4 text-green-400 terminal-glow" style={{ textShadow: '0 0 25px rgba(0, 255, 0, 0.7)' }}>
            <span className="text-green-500">&gt;</span> About Me
          </h2>
          <p className="text-lg text-green-100/80 max-w-3xl backdrop-blur-sm p-4 rounded-lg border border-green-500/10" style={{ boxShadow: '0 0 20px rgba(0, 255, 0, 0.15)' }}>
            Being from a Technical Background, my field of interest revolves around the domain of
            Computer Science. I consider myself an enthusiast who is always willing to be a team
            player in solving real-world problems with autonomous programmatic solutions.
          </p>
        </motion.div>

        {/* Terminal window for tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-2 border-green-500/30 rounded-lg bg-black/60 backdrop-blur-md overflow-hidden"
          style={{
            boxShadow: '0 0 40px rgba(0, 255, 0, 0.25), inset 0 0 40px rgba(0, 255, 0, 0.08)',
            transform: 'translateZ(15px)'
          }}
        >
          {/* Terminal header with tabs */}
          <div className="border-b-2 border-green-500/30 bg-green-500/5 p-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-transparent border border-green-500/30 rounded" style={{ boxShadow: 'inset 0 0 20px rgba(0, 255, 0, 0.1)' }}>
                <TabsTrigger
                  value="skills"
                  className="data-[state=active]:bg-green-500/20 data-[state=active]:text-green-300 text-green-400 font-mono flex items-center gap-2 data-[state=active]:shadow-lg"
                  style={{ transition: 'all 0.3s ease' }}
                >
                  <Cpu className="w-4 h-4" />
                  ./skills.sh
                </TabsTrigger>
                <TabsTrigger
                  value="experience"
                  className="data-[state=active]:bg-green-500/20 data-[state=active]:text-green-300 text-green-400 font-mono flex items-center gap-2 data-[state=active]:shadow-lg"
                  style={{ transition: 'all 0.3s ease' }}
                >
                  <FileText className="w-4 h-4" />
                  ./experience.sh
                </TabsTrigger>
                <TabsTrigger
                  value="education"
                  className="data-[state=active]:bg-green-500/20 data-[state=active]:text-green-300 text-green-400 font-mono flex items-center gap-2 data-[state=active]:shadow-lg"
                  style={{ transition: 'all 0.3s ease' }}
                >
                  <GraduationCap className="w-4 h-4" />
                  ./education.sh
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Terminal content */}
          <div className="p-6 font-mono">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsContent value="skills" className="space-y-6 mt-0">
                <div className="text-green-500 text-sm mb-4 backdrop-blur-sm p-2 rounded border border-green-500/10" style={{ boxShadow: '0 0 15px rgba(0, 255, 0, 0.15)' }}>
                  <span className="text-green-500">root@kali:~$</span> cat skills.txt
                </div>
                {skills.map((skillGroup, index) => (
                  <motion.div
                    key={skillGroup.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="mb-6 backdrop-blur-sm p-4 rounded-lg border border-green-500/10 hover:border-green-500/20 transition-all"
                    style={{
                      transform: `translateZ(${5 + index * 2}px)`,
                      boxShadow: `0 0 ${20 + index * 5}px rgba(0, 255, 0, 0.15)`,
                      transition: 'all 0.3s ease'
                    }}
                    whileHover={{
                      boxShadow: `0 0 ${30 + index * 5}px rgba(0, 255, 0, 0.3)`,
                      borderColor: 'rgba(0, 255, 0, 0.3)'
                    }}
                  >
                    <h3 className="text-lg text-green-300 mb-3 terminal-glow" style={{ textShadow: '0 0 15px rgba(0, 255, 0, 0.6)' }}>
                      [{skillGroup.category}]
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-300 font-mono text-sm hover:bg-green-500/20 transition-all"
                          style={{
                            transform: `translateZ(${2 + skillIndex}px)`,
                            boxShadow: '0 0 8px rgba(0, 255, 0, 0.2)'
                          }}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </TabsContent>

              <TabsContent value="experience" className="space-y-4 mt-0">
                <div className="text-green-500 text-sm mb-4 backdrop-blur-sm p-2 rounded border border-green-500/10" style={{ boxShadow: '0 0 15px rgba(0, 255, 0, 0.15)' }}>
                  <span className="text-green-500">root@kali:~$</span> cat experience.log
                </div>
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border border-green-500/20 rounded-lg p-4 hover:border-green-500/40 transition-all backdrop-blur-sm"
                    style={{
                      transform: `translateZ(${8 + index * 2}px)`,
                      boxShadow: `0 0 ${25 + index * 5}px rgba(0, 255, 0, 0.18)`,
                      transition: 'all 0.3s ease'
                    }}
                    whileHover={{
                      boxShadow: `0 0 ${40 + index * 5}px rgba(0, 255, 0, 0.35)`,
                      borderColor: 'rgba(0, 255, 0, 0.4)',
                      transform: `translateZ(${12 + index * 2}px) scale(1.02)`
                    }}
                  >
                    <div className="text-green-500 text-xs mb-2" style={{ textShadow: '0 0 8px rgba(0, 255, 0, 0.5)' }}>
                      [ENTRY_{String(index + 1).padStart(2, '0')}]
                    </div>
                    <h3 className="text-lg text-green-300 mb-2 terminal-glow" style={{ textShadow: '0 0 18px rgba(0, 255, 0, 0.7)' }}>{exp.title}</h3>
                    <p className="text-green-400 mb-3" style={{ textShadow: '0 0 10px rgba(0, 255, 0, 0.4)' }}>{exp.company}</p>
                    <div className="flex items-center gap-4 text-sm text-green-100/70 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                    <p className="text-sm text-green-100/80 leading-relaxed">{exp.description}</p>
                  </motion.div>
                ))}
              </TabsContent>

              <TabsContent value="education" className="space-y-4 mt-0">
                <div className="text-green-500 text-sm mb-4 backdrop-blur-sm p-2 rounded border border-green-500/10" style={{ boxShadow: '0 0 15px rgba(0, 255, 0, 0.15)' }}>
                  <span className="text-green-500">root@kali:~$</span> cat education.txt
                </div>
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border border-green-500/20 rounded-lg p-4 hover:border-green-500/40 transition-all backdrop-blur-sm"
                    style={{
                      transform: `translateZ(${8 + index * 2}px)`,
                      boxShadow: `0 0 ${25 + index * 5}px rgba(0, 255, 0, 0.18)`,
                      transition: 'all 0.3s ease'
                    }}
                    whileHover={{
                      boxShadow: `0 0 ${40 + index * 5}px rgba(0, 255, 0, 0.35)`,
                      borderColor: 'rgba(0, 255, 0, 0.4)',
                      transform: `translateZ(${12 + index * 2}px) scale(1.02)`
                    }}
                  >
                    <div className="text-green-500 text-xs mb-2" style={{ textShadow: '0 0 8px rgba(0, 255, 0, 0.5)' }}>
                      [EDU_{String(index + 1).padStart(2, '0')}]
                    </div>
                    <h3 className="text-lg text-green-300 mb-2 terminal-glow" style={{ textShadow: '0 0 18px rgba(0, 255, 0, 0.7)' }}>{edu.degree}</h3>
                    <p className="text-green-400 mb-3" style={{ textShadow: '0 0 10px rgba(0, 255, 0, 0.4)' }}>{edu.institution}</p>
                    <div className="flex items-center gap-4 text-sm text-green-100/70">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.year}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </TabsContent>
            </Tabs>
          </div>

          {/* Terminal footer */}
          <div className="border-t-2 border-green-500/30 bg-green-500/5 p-3">
            <div className="text-green-500 text-sm font-mono" style={{ textShadow: '0 0 12px rgba(0, 255, 0, 0.6)' }}>
              <span className="text-green-500">root@kali:~$</span> <span className="text-green-400">about_data_loaded=true</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
