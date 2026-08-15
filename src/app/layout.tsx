import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { serif } from "@/app/fonts";
import "./globals.css";
import { AIAssistant } from "@/components/layout/AIAssistant";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adityachaturvedi.dev"),
  title: {
    default: "Aditya Chaturvedi | Data Analytics & Artificial Intelligence",
    template: "%s | Aditya Chaturvedi",
  },
  description:
    "Portfolio of Aditya Chaturvedi — B.Tech Computer Science Engineer (9.1+ CGPA) & Data Analytics Intern at Intime Tec. Specializing in Power BI, Python, AI Agents, Forecasting, Product Strategy & Web Development.",
  keywords: [
    "Aditya Chaturvedi",
    "Data Analytics Intern",
    "Computer Science Engineer",
    "Intime Tec",
    "Government Engineering College Jaipur",
    "GECJ",
    "Power BI",
    "Python",
    "AI Agents",
    "Agentic Workflows",
    "Machine Learning",
    "Product Management",
    "McKinsey Forward",
    "NVIDIA Certified",
    "Oracle Cloud AI",
    "Full Stack Developer",
  ],
  authors: [{ name: "Aditya Chaturvedi", url: "https://github.com/ze40xAditya" }],
  creator: "Aditya Chaturvedi",
  publisher: "Aditya Chaturvedi",
  icons: {
    icon: [
      { url: "/AC-logo.svg", type: "image/svg+xml" },
      { url: "/AC-logo.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/AC-logo.svg",
    apple: [
      { url: "/AC-logo.png", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Aditya Chaturvedi | Data Analytics Intern & CS Engineer",
    description:
      "Computer Science Engineer & Data Analytics Intern specializing in AI Agents, Power BI, Python, and Product Strategy.",
    url: "https://adityachaturvedi.dev",
    siteName: "Aditya Chaturvedi Portfolio",
    images: [
      {
        url: "/AC-logo.png",
        width: 1200,
        height: 630,
        alt: "Aditya Chaturvedi Brand Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Chaturvedi | Data Analytics Intern & CS Engineer",
    description:
      "Computer Science Engineer & Data Analytics Intern specializing in AI Agents, Power BI, Python, and Product Strategy.",
    images: ["/AC-logo.png"],
    creator: "@ze40xAditya",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
};

import { SmoothScroll } from "@/components/layout/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Aditya Chaturvedi",
    "jobTitle": "Data Analytics Intern & Computer Science Engineer",
    "url": "https://adityachaturvedi.dev",
    "image": "https://adityachaturvedi.dev/AC-logo.png",
    "worksFor": {
      "@type": "Organization",
      "name": "Intime Tec"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Government Engineering College Jaipur",
      "sameAs": "https://gecj.ac.in"
    },
    "sameAs": [
      "https://in.linkedin.com/in/adityachaturvedi26",
      "https://github.com/ze40xAditya"
    ],
    "knowsAbout": [
      "Data Analytics",
      "Power BI",
      "Python",
      "AI Agents",
      "Machine Learning",
      "Product Strategy",
      "Financial Analytics",
      "Full-Stack Web Development"
    ]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${serif.variable} dark antialiased`}
    >
      <head>
        <link rel="icon" href="/AC-logo.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/AC-logo.png" type="image/png" />
        <link rel="shortcut icon" href="/AC-logo.svg" />
        <link rel="apple-touch-icon" href="/AC-logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden">
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <AIAssistant />
      </body>
    </html>
  );
}
