"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "Cyber Security", href: "/services/cyber-security" },
      { name: "Penetration Testing", href: "/services/penetration-testing" },
      { name: "Vulnerability Assessment", href: "/services/vulnerability-assessment" },
      { name: "Web Development", href: "/services/web-development" },
      { name: "App Development", href: "/services/app-development" },
      { name: "SEO", href: "/services/seo" },
      { name: "Digital Marketing", href: "/services/digital-marketing" },
      { name: "Cloud Services", href: "/services/cloud-services" },
      { name: "Tech Consulting", href: "/services/tech-consulting" },
      { name: "Design Services", href: "/services/design-services" },
      { name: "Support & Maintenance", href: "/services/support-maintenance" },
    ],
  },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Resources", href: "/resources" },
  // { name: "Company", href: "/about" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 w-full z-50 px-4 py-4">
      <div
        className={cn(
          "mx-auto max-w-7xl backdrop-blur-xl transition-all duration-500 rounded-xl",
          scrolled ? "bg-white/10 shadow-lg border border-white/10" : "bg-white/5",
        )}
        style={{
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <div className="flex items-center justify-between px-4 py-2">
          <Link href="/" className="flex items-center gap-1 group">
            <div className="relative w-10 h-10 overflow-hidden">
              <Image
                src="/white-logo.png"
                alt="VepDec Logo"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-bold text-xl text-white">VepDec</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) =>
              item.submenu ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={cn(
                        "flex items-center gap-1 hover:bg-white/20 text-white bg-transparent transition-all duration-300",
                        pathname.startsWith(item.href) && "text-blue-400",
                      )}
                    >
                      {item.name} <ChevronDown size={16} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="bg-[#0a0f1f]/80 backdrop-blur-xl border-white/10"
                    style={{
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                    }}
                  >
                    {item.submenu.map((subItem) => (
                      <DropdownMenuItem key={subItem.name} asChild>
                        <Link href={subItem.href} className="hover:text-blue-400 transition-colors hover:bg-white/10">
                          {subItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-all duration-300 hover:text-blue-400 relative group text-white",
                    pathname === item.href ? "text-blue-400" : "",
                  )}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ),
            )}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Button asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-purple-600 text-white shadow-glow transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]">
              <Link href="/contact">
                <span className="relative z-10">Contact Us</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-white/20 transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0a0f1f]/80 backdrop-blur-xl"
              style={{
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              <div className="py-4 px-6 flex flex-col gap-4">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.submenu ? (
                      <div className="flex flex-col gap-2">
                        <div className="font-medium text-white">{item.name}</div>
                        <div className="pl-4 flex flex-col gap-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="text-sm text-blue-300 hover:text-blue-400 transition-colors hover:translate-x-1"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          "block text-base font-medium transition-colors text-white hover:text-blue-400",
                          pathname === item.href ? "text-blue-400" : "",
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <Button asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-purple-600 text-white shadow-glow transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)] w-full mt-2">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
