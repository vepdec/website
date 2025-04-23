import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";
import BackgroundEffects from "@/components/layout/background-effects";
import PageTransition from "@/components/layout/page-transition";

const inter = Inter({ subsets: ["latin"] });

// Export viewport separately
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

// Update metadata without viewport
export const metadata = {
  title: "VepDec - Uniting Innovation, Security and Success.",
  description:
    "VepDec unites innovation, security, and success. Specializing in Cybersecurity, Penetration Testing, Vulnerability Assessments, Web & App Development, SEO, Cloud Services, and more.",
  keywords: [
    "VepDec",
    "Cybersecurity Services",
    "Penetration Testing",
    "Vulnerability Assessment",
    "Web Development",
    "App Development",
    "Design Services",
    "SEO Experts",
    "Digital Marketing",
    "Cloud Services",
    "Tech Consulting",
    "IT Support & Maintenance",
    "Cyber Security Company",
    "Secure Web Applications",
    "Online Security Solutions",
    "Next.js SEO",
    "Secure Cloud Solutions",
    "Modern Web App Agency",
  ],
  robots: "index, follow",
  metadataBase: new URL("https://vepdec.com"),
  alternates: {
    canonical: "https://vepdec.com",
  },
  authors: [{ name: "VepDec Team", url: "https://vepdec.com/about" }],
  publisher: "VepDec",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vepdec.com",
    title: "VepDec - Cybersecurity, Web & App Development, SEO & More",
    description:
      "Explore VepDec’s expert Cybersecurity, Penetration Testing, Web Development, SEO, and Cloud Services. Trusted digital solutions for secure innovation.",
    siteName: "VepDec",
    images: [
      {
        url: "https://vepdec.com/logo.png",
        width: 1200,
        height: 630,
        alt: "VepDec - Cybersecurity and Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VepDec - Cybersecurity & Digital Innovation",
    description:
      "Secure your digital future with VepDec: Cybersecurity, Web Development, Cloud, SEO, and more.",
    site: "@VepDec",
    creator: "@VepDec",
    images: ["https://vepdec.com/logo.png"],
  },
    generator: 'v0.dev'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true} disableTransitionOnChange>
          <div className="flex min-h-screen flex-col bg-[#0a0f1f] text-slate-50 overflow-hidden">
            <BackgroundEffects />
            <Header />
            <PageTransition>
              <main className="flex-1 relative z-10">{children}</main>
            </PageTransition>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
