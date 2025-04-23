"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, MessageCircle , ArrowRight, Mail, Phone, MapPin, LucideMessageCircleMore } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10">
      <div
        className="bg-[#0a0f1f]/80 backdrop-blur-xl"
        style={{
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="flex items-center gap-1 backdrop-blur-xl">
                <motion.div
                  className="relative w-10 h-10 overflow-hidden "
                >
                  <Image src="/white-logo.png" alt="VepDec Logo" width={40} height={40} className="object-cover " />
                </motion.div>
                <motion.span
                  className="font-bold text-xl text-white " 
                >
                  VepDec
                </motion.span>
              </Link>
              <p className="text-blue-100">
                Uniting Innovation, Security, and Success. Specialized in Cyber Security and Web Development.
              </p>
              <div className="flex items-center gap-4">
                <motion.a
                  href="https://www.facebook.com/profile.php?id=61560627856342&mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-blue-400 transition-colors hover:scale-110"
                  whileHover={{ scale: 1.2 }}
                >
                  <Facebook size={20} />
                  <span className="sr-only">Facebook</span>
                </motion.a>
                <motion.a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-blue-400 transition-colors hover:scale-110"
                  whileHover={{ scale: 1.2 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                  </svg>
                  <span className="sr-only">X (Twitter)</span>
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/vepdec/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-blue-400 transition-colors hover:scale-110"
                  whileHover={{ scale: 1.2 }}
                >
                  <Instagram size={20} />
                  <span className="sr-only">Instagram</span>
                </motion.a>
                <motion.a
                  href="https://pk.linkedin.com/company/vepdec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-blue-400 transition-colors hover:scale-110"
                  whileHover={{ scale: 1.2 }}
                >
                  <Linkedin size={20} />
                  <span className="sr-only">LinkedIn</span>
                </motion.a>
                <motion.a
                  href="https://wa.me/923333720166?text=Hello%2C%20I%20need%20assistance%20with%20your%20services%2E"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-blue-400 transition-colors hover:scale-110"
                  whileHover={{ scale: 1.2 }}
                >
                  <MessageCircle size={20} />
                  <span className="sr-only">Whatsapp</span>
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-blue-300 hover:text-blue-400 transition-colors hover:translate-x-1 inline-flex"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-blue-300 hover:text-blue-400 transition-colors hover:translate-x-1 inline-flex"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-blue-300 hover:text-blue-400 transition-colors hover:translate-x-1 inline-flex"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-blue-300 hover:text-blue-400 transition-colors hover:translate-x-1 inline-flex"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className="text-blue-300 hover:text-blue-400 transition-colors hover:translate-x-1 inline-flex"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/testimonials"
                    className="text-blue-300 hover:text-blue-400 transition-colors hover:translate-x-1 inline-flex"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources"
                    className="text-blue-300 hover:text-blue-400 transition-colors hover:translate-x-1 inline-flex"
                  >
                    Resources
                  </Link>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg text-white">Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/services/cyber-security"
                    className="text-blue-300 hover:text-blue-400 transition-colors hover:translate-x-1 inline-flex"
                  >
                    Cyber Security
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/penetration-testing"
                    className="text-blue-300 hover:text-blue-400 transition-colors hover:translate-x-1 inline-flex"
                  >
                    Penetration Testing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/vulnerability-assessment"
                    className="text-blue-300 hover:text-blue-400 transition-colors hover:translate-x-1 inline-flex"
                  >
                    Vulnerability Assessment
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/web-development"
                    className="text-blue-300 hover:text-blue-400 transition-colors hover:translate-x-1 inline-flex"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/app-development"
                    className="text-blue-300 hover:text-blue-400 transition-colors hover:translate-x-1 inline-flex"
                  >
                    App Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/design-services"
                    className="text-blue-300 hover:text-blue-400 transition-colors hover:translate-x-1 inline-flex"
                  >
                    Design Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/seo"
                    className="text-blue-300 hover:text-blue-400 transition-colors hover:translate-x-1 inline-flex"
                  >
                    SEO
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/digital-marketing"
                    className="text-blue-300 hover:text-blue-400 transition-colors hover:translate-x-1 inline-flex"
                  >
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/cloud-services"
                    className="text-blue-300 hover:text-blue-400 transition-colors hover:translate-x-1 inline-flex"
                  >
                    Cloud Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/tech-consulting"
                    className="text-blue-300 hover:text-blue-400 transition-colors hover:translate-x-1 inline-flex"
                  >
                    Tech Consulting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/support-maintenance"
                    className="text-blue-300 hover:text-blue-400 transition-colors hover:translate-x-1 inline-flex"
                  >
                    Support & Maintenance
                  </Link>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg text-white">Contact</h3>
              <ul className="space-y-3">
              <li>
                <a
                  href="mailto:support@vepdec.com"
                  className="text-blue-300 hover:text-blue-400 transition-colors hover:translate-x-1 inline-flex items-center gap-2"
                >
                  <Mail size={16} />
                  support@vepdec.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+923333720166"
                  className="text-blue-300 hover:text-blue-400 transition-colors hover:translate-x-1 inline-flex items-center gap-2"
                >
                  <Phone size={16} />
                  +92 333 3720166
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/923333720166"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-blue-400 transition-colors hover:translate-x-1 inline-flex items-center gap-2"
                >
                  <LucideMessageCircleMore size={16} />
                  +92 333 3720166
                </a>
              </li>
              <li className="text-blue-300">
                <div className="inline-flex items-center gap-2">
                  <MapPin size={16} />
                  <span>VepDec Office, Karachi, Sindh, Pakistan</span>
                </div>
              </li>
            </ul>
            
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg text-white">Subscribe</h3>
              <p className="text-blue-100">
                Subscribe to our newsletter to get updates on our latest news and services.
              </p>
              <form className="space-y-3">
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="backdrop-blur-xl bg-white/5 border-white/10 text-white focus:border-blue-500 pr-10 transition-all duration-300 focus:bg-white/10"
                  />
                  <Button
                    type="submit"
                    size="icon"
                    className="absolute right-1 top-1 h-8 w-8 bg-blue-600 hover:bg-blue-500 rounded-md transition-colors duration-300"
                  >
                    <ArrowRight size={16} />
                  </Button>
                </div>
                <p className="text-xs text-blue-200">We respect your privacy. No spam, ever.</p>
              </form>
            </motion.div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-blue-200">© {new Date().getFullYear()} VepDec. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/vulnerability-disclosure" className="text-blue-300 hover:text-blue-400 transition-colors">
                Vulnerability Disclosure
              </Link>
              <Link href="/privacy-policy" className="text-blue-300 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/legal" className="text-blue-300 hover:text-blue-400 transition-colors">
                Legal Policy
              </Link>
              <Link href="/terms" className="text-blue-300 hover:text-blue-400 transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
