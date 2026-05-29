'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

export default function About() {
  const [activeTab, setActiveTab] = useState('skills')

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
      description: 'Building secure, scalable, and cloud-native platforms across AWS, OCI, Kubernetes, and Linux environments.Delivered multi-region infrastructure supporting 8,000+ devices globally, achieving 99.99% uptime and reducing costs by 50%. Specialized in DevSecOps, SRE, CI/CD automation, Full-Stack Development, and production security.',
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
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Being from a Technical Background, my field of interest revolves around the domain of
            Computer Science. I consider myself an enthusiast who is always willing to be a team
            player in solving real-world problems with autonomous programmatic solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/about.png"
                alt="Akash Mishra"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl" />
          </motion.div>

          {/* Tabs side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
              </TabsList>

              <TabsContent value="skills" className="space-y-6">
                {skills.map((skillGroup, index) => (
                  <motion.div
                    key={skillGroup.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h3 className="text-lg font-semibold mb-3">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <Badge key={skill} variant="secondary" className="px-3 py-1">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </TabsContent>

              <TabsContent value="experience" className="space-y-4">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-2">{exp.title}</h3>
                        <p className="text-primary font-medium mb-2">{exp.company}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </span>
                        </div>
                        <p className="text-sm">{exp.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </TabsContent>

              <TabsContent value="education" className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-2">{edu.degree}</h3>
                        <p className="text-primary font-medium mb-2">{edu.institution}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {edu.year}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {edu.location}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
