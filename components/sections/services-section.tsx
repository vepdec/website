"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Search, AlertTriangle, Code, BarChart, Smartphone, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: "cyber-security",
    title: "Cyber Security",
    description: "Comprehensive security solutions to protect your digital assets from threats and vulnerabilities.",
    icon: Shield,
  },
  {
    id: "penetration-testing",
    title: "Penetration Testing",
    description: "Identify security weaknesses in your systems before malicious actors can exploit them.",
    icon: Search,
  },
  {
    id: "vulnerability-assessment",
    title: "Vulnerability Assessment",
    description: "Systematic review of security weaknesses in your information systems.",
    icon: AlertTriangle,
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Custom web applications built with security and performance in mind.",
    icon: Code,
  },
  {
    id: "app-development",
    title: "App Development",
    description: "Native and cross-platform mobile applications for iOS and Android with robust security features.",
    icon: Smartphone,
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Strategic marketing solutions to boost your online presence and drive growth.",
    icon: BarChart,
  },
]

export default function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  return (
    <section id="services" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-blue-100 max-w-2xl mx-auto"
          >
            We offer a wide range of services to help you secure your digital assets and grow your online presence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              whileHover={{
                y: -15,
                transition: { duration: 0.3 },
              }}
            >
              <Card className="backdrop-blur-xl bg-white/10 border border-white/10 h-full overflow-hidden group transition-all duration-300 hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)]">
                <CardHeader>
                  <div className="w-16 h-16 mb-4 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                    <service.icon className="h-8 w-8 text-blue-400 group-hover:text-blue-300" />
                  </div>
                  <CardTitle className="text-white group-hover:text-gradient transition-all duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-blue-100 group-hover:text-blue-50 transition-colors duration-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button
                    asChild
                    variant="ghost"
                    className="bg-white/5 hover:bg-white/20 text-white hover:text-blue-300 transition-all duration-300"
                  >
                    <Link href={`/services#${service.id}`} className="flex items-center gap-2">
                      Learn More
                      <motion.div
                        animate={hoveredService === service.id ? { x: 5 } : { x: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.div>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button
            asChild
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-purple-600 text-white shadow-glow transition-all duration-300 hover:-translate-y-1 group"
          >
            <Link href="/services" className="flex items-center gap-2">
              View All Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
