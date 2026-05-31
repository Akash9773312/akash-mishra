import type { Project } from "../types/projects"

// NOTE: Project periods are approximate and links are placeholders ("#").
// Provide real repo/demo/case-study URLs and dates to finalise.
export const PROJECTS: Project[] = [
  {
    id: "aivanta-personalized-video",
    title: "AiVANTA Personalized Video Solution",
    period: {
      start: "09.2025",
    },
    link: "#",
    skills: ["Python", "FastAPI", "Docker", "MySQL", "Redis", "Terraform", "Git"],
    description: `A personalized video platform, re-architected for scale and speed.
- Improved page load time by up to 60% via optimized caching layers, CDN integration, database query tuning, and asset compression.
- Designed a high-performance Redis caching strategy, cutting backend load and response times.
- Broke a monolith into scalable microservice based REST APIs for independent deployments and faster cycles.
- Introduced Infrastructure as Code with Terraform to standardize and automate provisioning.`,
    isExpanded: true,
  },
  {
    id: "digital-signage-solutions",
    title: "Digital Signage Solutions",
    period: {
      start: "01.2023",
      end: "09.2025",
    },
    link: "#",
    skills: [
      "NestJS",
      "NodeJS",
      "ElectronJS",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Embedded Linux",
    ],
    description: `A scalable, real time content management system for digital signage, plus a custom embedded Linux distribution for the player devices.
- Built dynamic signage with NestJS, ElectronJS, and NodeJS for centralized, cross platform control.
- Developed high performance REST APIs with FastAPI and NodeJS for device to server communication.
- Part of a multi region, failover capable fleet serving 8,000+ devices globally.`,
  },
  {
    id: "meetmemo-ai",
    title: "MeetMemo AI",
    period: {
      start: "01.2024",
    },
    link: "#",
    skills: ["Python", "Selenium", "Docker", "MySQL", "Git"],
    description: `An AI meeting assistant that captures, stores, and surfaces insights from meetings.
- Used Selenium for automated web scraping to support AI model training.
- Designed and maintained MySQL databases for user data, meeting records, and AI generated insights.
- Optimized scalability and performance to handle large scale meeting data.`,
  },
  {
    id: "unfold-the-untold",
    title: "Unfold the Untold (NPCI)",
    period: {
      start: "08.2023",
      end: "08.2023",
    },
    link: "#",
    skills: [
      "AI",
      "LLM orchestration",
      "Image understanding",
      "Real-time inference",
    ],
    description: `An Independence Day campaign for NPCI. Scan a tri colour object with your phone to unlock untold stories of remarkable people from remote parts of India. Single day deployment, roughly 5 lakh users served in 10 hours.`,
  },
  {
    id: "peoplematters-infra",
    title: "PeopleMatters Infra",
    period: {
      start: "01.2023",
    },
    link: "#",
    skills: [
      "DevOps",
      "Infrastructure",
      "Caching",
      "Routing",
      "Database management",
    ],
    description: `Infra, deployment, and architectural consulting for PeopleMatters' platform and CMS: deployment shapes, caching, routing, database management, edge cases, and the technical decisions the platform team needed help making.`,
  },
]
