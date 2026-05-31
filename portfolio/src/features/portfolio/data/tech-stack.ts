import type { TechStack } from "../types/tech-stack"

// iconSlug = Simple Icons slug. Omit it for brands without a Simple Icons entry
// (e.g. cloud providers), which render as text-only chips.
export const TECH_STACK: TechStack[] = [
  // Languages
  {
    key: "python",
    title: "Python",
    href: "https://www.python.org/",
    categories: ["Languages"],
    iconSlug: "python",
  },
  {
    key: "bash",
    title: "Bash",
    href: "https://www.gnu.org/software/bash/",
    categories: ["Languages"],
    iconSlug: "gnubash",
  },
  {
    key: "sql",
    title: "SQL",
    href: "https://en.wikipedia.org/wiki/SQL",
    categories: ["Languages"],
  },
  {
    key: "javascript",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    categories: ["Languages"],
    iconSlug: "javascript",
  },
  // Cloud Platforms (no Simple Icons entries -> text-only)
  {
    key: "aws",
    title: "AWS",
    href: "https://aws.amazon.com/",
    categories: ["Cloud"],
  },
  {
    key: "gcp",
    title: "Google Cloud",
    href: "https://cloud.google.com/",
    categories: ["Cloud"],
  },
  {
    key: "azure",
    title: "Azure",
    href: "https://azure.microsoft.com/",
    categories: ["Cloud"],
  },
  {
    key: "oci",
    title: "OCI",
    href: "https://www.oracle.com/cloud/",
    categories: ["Cloud"],
  },
  {
    key: "hetzner",
    title: "Hetzner",
    href: "https://www.hetzner.com/",
    categories: ["Cloud"],
  },
  // Containers & Orchestration
  {
    key: "docker",
    title: "Docker",
    href: "https://www.docker.com/",
    categories: ["Containers & Orchestration"],
    iconSlug: "docker",
  },
  {
    key: "kubernetes",
    title: "Kubernetes",
    href: "https://kubernetes.io/",
    categories: ["Containers & Orchestration"],
    iconSlug: "kubernetes",
  },
  // IaC
  {
    key: "terraform",
    title: "Terraform",
    href: "https://www.terraform.io/",
    categories: ["IaC"],
    iconSlug: "terraform",
  },
  // CI/CD
  {
    key: "jenkins",
    title: "Jenkins",
    href: "https://www.jenkins.io/",
    categories: ["CI/CD"],
    iconSlug: "jenkins",
  },
  {
    key: "gitlab-ci",
    title: "GitLab CI/CD",
    href: "https://docs.gitlab.com/ee/ci/",
    categories: ["CI/CD"],
    iconSlug: "gitlab",
  },
  {
    key: "github-actions",
    title: "GitHub Actions",
    href: "https://github.com/features/actions",
    categories: ["CI/CD"],
    iconSlug: "githubactions",
  },
  {
    key: "aws-codepipeline",
    title: "AWS CodePipeline",
    href: "https://aws.amazon.com/codepipeline/",
    categories: ["CI/CD"],
  },
  // Databases
  {
    key: "postgresql",
    title: "PostgreSQL",
    href: "https://www.postgresql.org/",
    categories: ["Databases"],
    iconSlug: "postgresql",
  },
  {
    key: "mysql",
    title: "MySQL",
    href: "https://www.mysql.com/",
    categories: ["Databases"],
    iconSlug: "mysql",
  },
  {
    key: "mongodb",
    title: "MongoDB",
    href: "https://www.mongodb.com/",
    categories: ["Databases"],
    iconSlug: "mongodb",
  },
  {
    key: "sqlite",
    title: "SQLite",
    href: "https://www.sqlite.org/",
    categories: ["Databases"],
    iconSlug: "sqlite",
  },
  // Queuing
  {
    key: "redis",
    title: "Redis",
    href: "https://redis.io/",
    categories: ["Queuing"],
    iconSlug: "redis",
  },
  {
    key: "kafka",
    title: "Kafka",
    href: "https://kafka.apache.org/",
    categories: ["Queuing"],
    iconSlug: "apachekafka",
  },
  {
    key: "aws-sqs",
    title: "AWS SQS",
    href: "https://aws.amazon.com/sqs/",
    categories: ["Queuing"],
  },
  // Monitoring & Observability
  {
    key: "grafana",
    title: "Grafana",
    href: "https://grafana.com/",
    categories: ["Observability"],
    iconSlug: "grafana",
  },
  {
    key: "prometheus",
    title: "Prometheus",
    href: "https://prometheus.io/",
    categories: ["Observability"],
    iconSlug: "prometheus",
  },
  {
    key: "loki",
    title: "Loki",
    href: "https://grafana.com/oss/loki/",
    categories: ["Observability"],
  },
  {
    key: "jaeger",
    title: "Jaeger",
    href: "https://www.jaegertracing.io/",
    categories: ["Observability"],
    iconSlug: "jaeger",
  },
  {
    key: "sentry",
    title: "Sentry",
    href: "https://sentry.io/",
    categories: ["Observability"],
    iconSlug: "sentry",
  },
  // Web / Backend
  {
    key: "fastapi",
    title: "FastAPI",
    href: "https://fastapi.tiangolo.com/",
    categories: ["Backend"],
    iconSlug: "fastapi",
  },
  {
    key: "nestjs",
    title: "NestJS",
    href: "https://nestjs.com/",
    categories: ["Backend"],
    iconSlug: "nestjs",
  },
  {
    key: "nodejs",
    title: "Node.js",
    href: "https://nodejs.org/",
    categories: ["Backend"],
    iconSlug: "nodedotjs",
  },
  {
    key: "nginx",
    title: "NGINX",
    href: "https://nginx.org/",
    categories: ["Backend"],
    iconSlug: "nginx",
  },
  {
    key: "apache",
    title: "Apache",
    href: "https://httpd.apache.org/",
    categories: ["Backend"],
    iconSlug: "apache",
  },
  // Tools
  {
    key: "git",
    title: "Git",
    href: "https://git-scm.com/",
    categories: ["Tools"],
    iconSlug: "git",
  },
  {
    key: "postman",
    title: "Postman",
    href: "https://www.postman.com/",
    categories: ["Tools"],
    iconSlug: "postman",
  },
  {
    key: "claude-code",
    title: "Claude Code",
    href: "https://claude.ai/",
    categories: ["Tools"],
  },
  {
    key: "cursor",
    title: "Cursor",
    href: "https://cursor.com/",
    categories: ["Tools"],
  },
]
