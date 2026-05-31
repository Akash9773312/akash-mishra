import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Akash",
  lastName: "Mishra",
  displayName: "Akash Mishra",
  username: "akashmishra",
  gender: "male",
  pronouns: "he/him",
  bio: "DevOps & Cloud Engineer. I build products and I fix systems.",
  flipSentences: [
    "DevOps & Cloud Engineer",
    "I build products and I fix systems",
    "DevSecOps · SOC 2 · Kubernetes",
  ],
  address: "Mumbai, India",
  phoneNumber: "", // E.164 format, base64 encoded (TODO: provide)
  email: "YW05NzczMzEyQGdtYWlsLmNvbQ==", // base64 encoded (am9773312@gmail.com)
  website: "https://akashmishra.dev",
  jobTitle: "Lead DevOps & Compliance Engineer",
  jobs: [
    {
      title: "Lead DevOps & Compliance Engineer",
      company: "AiVANTA Technologies",
      website: "",
      experienceId: "aivanta",
    },
  ],
  about: `
- Lead DevOps & Compliance Engineer specialising in cloud-native architecture, security, and reliability across AWS, GCP, Azure, and OCI.
- Cut cloud infrastructure costs by **80%** through serverless, auto-scaling architectures, and delivered multi-region, failover-capable infrastructure supporting **8,000+ devices** at **99.99% uptime**.
- Spearheaded an organisation's end-to-end **SOC 2 Type II** compliance journey, and serve clients across regulated sectors such as banking, insurance, and healthcare (Canara HSBC Life, Tata Capital, ICICI Bank, Kotak Mutual Fund, Al Wadha Insurance, SEHA).
- Strong on DevSecOps: WAFs, IAM least-privilege, KMS encryption, container security, CI/CD with secret injection, and continuous threat detection. Once identified and neutralised a high-severity attack that could have cost about USD 60,000.
`,
  avatar: "/akash/avatar.jpg",
  avatarVariants: {
    lightOff: "/akash/avatar.jpg",
    lightOn: "/akash/avatar.jpg",
    darkOff: "/akash/avatar.jpg",
    darkOn: "/akash/avatar.jpg",
  },
  ogImage: "/akash/og-image.png",
  namePronunciationUrl: "",
  timeZone: "Asia/Kolkata",
  keywords: [
    "Akash Mishra",
    "akashmishra",
    "DevOps Engineer",
    "Cloud Architect",
    "DevSecOps",
    "Kubernetes",
    "AWS",
    "SOC 2",
    "Mumbai",
  ],
  dateCreated: "2024-01-01", // YYYY-MM-DD
}
