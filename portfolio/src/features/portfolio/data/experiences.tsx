import {
  CloudIcon,
  GraduationCapIcon,
  ServerCogIcon,
} from "lucide-react"

import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "aivanta",
    companyName: "AiVANTA Technologies LLP",
    companyIcon: <CloudIcon strokeWidth={1.8} />,
    positions: [
      {
        id: "1",
        title: "Lead, DevOps & Compliance",
        employmentPeriod: {
          start: "09.2025",
        },
        employmentType: "Full-time · Mumbai, India",
        icon: <CloudIcon />,
        description: `- Reduced cloud infrastructure costs by **80%** by migrating workloads to cost-efficient providers and implementing serverless, auto-scaling architecture on **AWS, GCP, and Azure**.
- Spearheaded the organisation's end-to-end **SOC 2 Type II** compliance journey: security controls, risk management, documentation workflows, and audit readiness.
- Hardened the platform with **AWS WAF & Google Cloud Armor**, IAM least-privilege, VPC segmentation, TLS + **KMS** encryption (100% of sensitive data), and **Secrets Manager** to eliminate hardcoded credentials.
- Automated vulnerability scanning/patching (AWS Inspector, GCP Security Scanner), resolving 90%+ of critical findings; applied rate-limiting and DDoS protection (AWS Shield, API Gateway).
- Built secure CI/CD pipelines with role-based access, secret injection, and artifact validation across AWS and GCP; container security via image scanning, minimal base images, and runtime controls.
- Identified, mitigated, and neutralised a high-severity cyber attack that could have caused ~**USD 60,000** in losses.
- Partnered with clients across regulated sectors such as Canara HSBC Life, Tata Capital, ICICI Bank, Kotak Mutual Fund, Al Wadha Insurance (UAE), and SEHA (UAE). Represented the company at **GITEX 2025**.`,
        skills: [
          "AWS",
          "GCP",
          "Azure",
          "SOC 2 Type II",
          "DevSecOps",
          "Terraform",
          "CI/CD",
          "AWS WAF",
          "KMS",
          "IAM",
          "Serverless",
          "Cost Optimisation",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "enpointe",
    companyName: "Enpointe IT Services Pvt Ltd",
    companyIcon: <ServerCogIcon strokeWidth={1.8} />,
    positions: [
      {
        id: "1",
        title: "DevOps Engineer",
        employmentPeriod: {
          start: "01.2023",
          end: "09.2025",
        },
        employmentType: "Full-time · Mumbai, India",
        icon: <ServerCogIcon />,
        description: `- Managed cloud infrastructure across **AWS, OCI, and Hetzner** with **0 breaches**; ran **Docker** and **Kubernetes** for scalable, high-availability deployments.
- Delivered a multi-region, failover-capable infrastructure supporting **8,000+ devices** globally; built a custom embedded Linux distribution for digital signage.
- Built automated CI/CD pipelines, cutting deployment time to minutes and ensuring **99.99% uptime** with self-healing, failover-ready infrastructure.
- Reduced server costs by **50%** via containerisation, scaling strategies, and migration to cost-effective cloud solutions.
- Advanced threat detection and monitoring with AWS Security Hub, AWS Inspector, and OCI Cloud Guard; audit trails via CloudTrail and OCI Audit.
- Designed disaster-recovery and backup strategies with regular DR drills; built scalable RESTful APIs that cut page load times by **30%**.`,
        skills: [
          "AWS",
          "OCI",
          "Hetzner",
          "Docker",
          "Kubernetes",
          "CI/CD",
          "Embedded Linux",
          "Disaster Recovery",
          "Monitoring",
          "REST APIs",
        ],
      },
    ],
  },
  {
    id: "education",
    companyName: "University of Mumbai",
    companyIcon: <GraduationCapIcon strokeWidth={1.8} />,
    positions: [
      {
        id: "1",
        title: "Bachelor of Science in Computer Science",
        employmentPeriod: {
          start: "08.2020",
          end: "03.2023",
        },
        employmentType: "Mumbai, India",
        icon: <GraduationCapIcon />,
        skills: ["Computer Science", "Software Development", "Networking"],
      },
    ],
  },
]
