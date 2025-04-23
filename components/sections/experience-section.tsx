"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Award, Users, CheckCircle } from "lucide-react"

interface StatProps {
  value: number
  label: string
  suffix?: string
  icon: React.ReactNode
}

function Stat({ value, label, suffix = "", icon }: StatProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      let startTime: number
      let animationFrame: number

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / 2000, 1)
        setCount(Math.floor(progress * value))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(step)
        }
      }

      animationFrame = requestAnimationFrame(step)

      return () => cancelAnimationFrame(animationFrame)
    }
  }, [isInView, value])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
    >
      <Card className="backdrop-blur-xl bg-white/10 border border-white/10 h-full transition-all duration-300 hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)] group">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div className="w-16 h-16 mb-4 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
            {icon}
          </div>
          <div ref={ref} className="text-4xl font-bold mb-2 text-gradient">
            {isInView ? count : 0}
            {suffix}
          </div>
          <p className="text-blue-100 group-hover:text-blue-50 transition-colors duration-300">{label}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function ExperienceSection() {
  return (
    <section className="py-20 relative">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gradient"
          >
            Years of Excellence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-blue-100 max-w-2xl mx-auto"
          >
            Our track record speaks for itself. We have been delivering exceptional results for our clients for years.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Stat
            value={10}
            label="Years of Experience"
            suffix="+"
            icon={<Award className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />}
          />
          <Stat
            value={900}
            label="Projects Completed"
            suffix="+"
            icon={
              <CheckCircle className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
            }
          />
          <Stat
            value={1200}
            label="Happy Clients"
            suffix="+"
            icon={<Users className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />}
          />
          <Stat
            value={50}
            label="Team Members"
            suffix="+"
            icon={<Shield className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />}
          />
        </div>
      </div>
    </section>
  )
}
