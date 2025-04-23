"use client"

import * as React from "react"
import { Moon, Sun, Laptop } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full flex items-center justify-center">
        <div className="w-5 h-5 rounded-full bg-white/20 animate-pulse"></div>
      </div>
    )
  }

  return (
    <div className="relative flex items-center backdrop-blur-xl bg-white/10 border border-white/10 rounded-full p-1">
      <button
        onClick={() => setTheme("light")}
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
          theme === "light"
            ? "bg-yellow-400/20 text-yellow-400 ring-2 ring-yellow-400/50"
            : "text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/10"
        }`}
        aria-label="Light mode"
      >
        <Sun className="h-4 w-4" />
      </button>

      <button
        onClick={() => setTheme("dark")}
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
          theme === "dark"
            ? "bg-blue-500/20 text-blue-400 ring-2 ring-blue-500/50"
            : "text-gray-400 hover:text-blue-400 hover:bg-blue-500/10"
        }`}
        aria-label="Dark mode"
      >
        <Moon className="h-4 w-4" />
      </button>

      <button
        onClick={() => setTheme("system")}
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
          theme === "system"
            ? "bg-purple-500/20 text-purple-400 ring-2 ring-purple-500/50"
            : "text-gray-400 hover:text-purple-400 hover:bg-purple-500/10"
        }`}
        aria-label="System preference"
      >
        <Laptop className="h-4 w-4" />
      </button>
    </div>
  )
}
