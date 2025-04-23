"use client"

import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { useEffect } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Add scroll to top effect on route change
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0)
    }
  }, [])

  return <div className="flex min-h-screen flex-col bg-[#0a0f1f] text-slate-50 overflow-hidden"></div>
}
