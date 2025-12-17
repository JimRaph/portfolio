import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; 
import { Playfair_Display } from 'next/font/google'; 
import ThemeProvider from "./components/Theme";
import Script from "next/script";
import './globals.css'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
    variable: "--font-serif",
    subsets: ['latin'],
    weight: ['700', '900']
})

export const metadata: Metadata = {
  title: "Jimmy Esang | AI/ML & Full-Stack Engineer",
  description: `
    AI/ML Engineer and Full-Stack Developer building intelligent, high-performance digital products. 
    I design machine learning systems, deploy production-ready AI 
    pipelines, and craft scalable, elegant web applications with 
    Next.js, Python, and modern cloud tooling.
    Blending deep learning systems with elegant web interfaces.
    As an engineer fluent across the data and application stack, 
    I leverage Data Science for actionable insights, design and deploy scalable ML/AI models,
    and integrate them seamlessly using Full-Stack Web Development to create 
    high-performance, intelligent products.`,
  keywords: [
    "AI Engineer",
    "Machine Learning Engineer",
    "ML Portfolio",
    "Software Engineer Nigeria",
    "Full-Stack Developer",
    "Next.js Developer",
    "Python Developer",
    "RAG Systems",
    "AI Portfolio",
    "Machine Learning Projects",
    "Deep Learning Engineer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Jimmy Esang", url: "https://jimmyesang.vercel.app" }],
  creator: "Jimmy Esang",
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "ML/AI Engineer | Software Development Portfolio",
    description: `
      Portfolio of Jimmy Esang — AI/ML Engineer and Full-Stack Developer building
      scalable machine learning systems, 
      RAG pipelines, and modern web applications
      Blending deep learning systems with elegant web interfaces.
      As an engineer fluent across the data and application stack, 
      I leverage Data Science for actionable insights, design and deploy scalable ML/AI models,
      and integrate them seamlessly using Full-Stack Web Development to create 
      high-performance, intelligent products.
    `,
    url: "https://web-development-portfolio-seven.vercel.app/",
    siteName: "Web development portfolio",
    images: [
      {
        url: "https://jimmyesang.vercel.app/graphimage.pngg", 
        width: 1200,
        height: 630,
        alt: "Software Development Portfolio | ML/AI Engineer Portfolio — Jimmy Esang",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jimmy Esang | AI/ML Engineer & Full-Stack Developer",
    description: `
      Blending deep learning systems with elegant web interfaces.
      AI/ML Engineer building intelligent systems, scalable APIs, and production-grade
      web applications.`,
    creator: "@I_M_EJ",
    images: ["https://jimmyesang.vercel.app/graphimage.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark"> 
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>

        <Script
          id="schema-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Jimmy Esang",
              jobTitle: "AI/ML Engineer & Full-Stack Developer",
              url: "https://jimmyesang.vercel.app",
              image: "https://jimmyesang.vercel.app/graphimage.png",
              sameAs: [
                "https://twitter.com/I_M_EJ",
                "https://github.com/<your-github>",
                "https://www.linkedin.com/in/<your-linkedin>/",
              ],
              description:
                ` Blending deep learning systems with elegant web interfaces.
                  AI/ML Engineer building intelligent systems, scalable APIs, and production-grade
                  web applications`,
            }),
          }}
        />
      </body>
    </html>
  );
}