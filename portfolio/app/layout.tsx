import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="antialiased bg-black">
        {children}
      </body>
    </html>
  );
}
