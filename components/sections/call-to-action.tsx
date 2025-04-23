"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Headphones } from "lucide-react"

export default function CallToAction() {
  return (
    <section className="py-20 bg-navy-900/50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 mb-6 backdrop-blur-xl bg-white/10 border border-white/10 rounded-full flex items-center justify-center">
              <Headphones className="h-10 w-10 text-blue-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to secure your digital assets?</h2>
            <p className="text-muted-foreground mb-8">
              Get in touch with our team of experts to discuss how we can help you protect your business from cyber
              threats and grow your online presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-purple-600 text-white shadow-glow transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300"
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-xl p-6 md:p-8"
          >
            <h3 className="text-xl font-bold mb-4">Subscribe to our newsletter</h3>
            <p className="text-muted-foreground mb-6">
              Stay updated with the latest cybersecurity news, tips, and insights.
            </p>
            <form className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Your name"
                  className="backdrop-blur-xl bg-white/5 border-white/10 text-white focus:border-blue-500 transition-all duration-300 focus:bg-white/10"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your email"
                  className="backdrop-blur-xl bg-white/5 border-white/10 text-white focus:border-blue-500 transition-all duration-300 focus:bg-white/10"
                />
              </div>
              <Button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-purple-600 text-white shadow-glow transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)] w-full"
              >
                Subscribe
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                By subscribing, you agree to our{" "}
                <Link href="/privacy-policy" className="underline hover:text-primary">
                  Privacy Policy
                </Link>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
