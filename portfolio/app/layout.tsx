import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const heading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Akash Mishra | Full Stack Developer & Cloud Architect",
  description: "Portfolio of Akash Mishra - Cloud Architect, DevSecOps Engineer, and Full-Stack Developer.",
  keywords: ["Full Stack Developer", "Cloud Architect", "DevSecOps Engineer", "React", "Next.js", "Python"],
  authors: [{ name: "Akash Mishra" }],
  openGraph: {
    title: "Akash Mishra | Full Stack Developer & Cloud Architect",
    description: "Portfolio of Akash Mishra - Cloud Architect, DevSecOps Engineer, and Full-Stack Developer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akash Mishra | Full Stack Developer & Cloud Architect",
    description: "Portfolio of Akash Mishra - Full Stack Developer, Cloud Architect, and DevSecOps Engineer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="antialiased bg-background text-foreground font-body">
        {children}
      </body>
    </html>
  );
}
