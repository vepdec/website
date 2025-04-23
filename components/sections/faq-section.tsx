"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"
import Link from "next/link"

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  title?: string
  description?: string
  faqs: FAQItem[]
  showMoreLink?: boolean
  className?: string
}

export default function FAQSection({
  title = "Frequently Asked Questions",
  description = "Find answers to common questions about our services.",
  faqs,
  showMoreLink = true,
  className = "",
}: FAQSectionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className={`py-16 ${className}`}>
      <div className="container">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-16 h-16 mx-auto mb-4 backdrop-blur-xl bg-white/10 border border-white/10 rounded-full flex items-center justify-center"
          >
            <HelpCircle className="h-8 w-8 text-blue-400" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-blue-100 max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <Card
                className={`backdrop-blur-xl bg-white/10 border border-white/10 transition-all duration-300 ${
                  expandedIndex === index ? "shadow-[0_10px_30px_rgba(59,130,246,0.3)]" : ""
                }`}
              >
                <CardContent className="p-0">
                  <button
                    className="flex items-center justify-between w-full p-6 text-left"
                    onClick={() => toggleExpand(index)}
                  >
                    <h3 className="text-lg font-medium">{faq.question}</h3>
                    {expandedIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-blue-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-blue-400" />
                    )}
                  </button>
                  {expandedIndex === index && (
                    <div className="px-6 pb-6 pt-0 text-blue-100">
                      <div className="border-t border-white/10 pt-4">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {showMoreLink && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <Button
              asChild
              variant="outline"
              className="backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 text-white transition-all duration-300 hover:-translate-y-1"
            >
              <Link href="/faq">View All FAQs</Link>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
