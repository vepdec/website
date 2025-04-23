"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { HelpCircle, Search, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"

interface FAQItem {
  question: string
  answer: string
  category: string
}

const faqs: FAQItem[] = [
  {
    question: "What cybersecurity services do you offer?",
    answer:
      "We offer a comprehensive range of cybersecurity services including vulnerability assessments, penetration testing, security audits, incident response planning, security awareness training, and managed security services.",
    category: "Services",
  },
  {
    question: "How often should my company undergo a security assessment?",
    answer:
      "We recommend conducting a comprehensive security assessment at least once a year. However, for organizations with high-risk profiles or those in regulated industries, more frequent assessments (quarterly or bi-annually) may be necessary. Additionally, assessments should be performed after significant changes to your IT infrastructure.",
    category: "Security",
  },
  {
    question: "What is the difference between a vulnerability assessment and penetration testing?",
    answer:
      "A vulnerability assessment identifies and reports potential vulnerabilities in your systems but doesn't exploit them. Penetration testing goes a step further by actively exploiting vulnerabilities to determine the potential impact and damage that could result from a real attack. Both are important components of a comprehensive security program.",
    category: "Security",
  },
  {
    question: "Do you offer web development services?",
    answer:
      "Yes, we provide comprehensive web development services including custom website design, e-commerce solutions, content management systems, progressive web applications, API development, and secure authentication systems. Our development team focuses on creating secure, performant, and user-friendly web applications.",
    category: "Development",
  },
  {
    question: "What technologies do you use for web development?",
    answer:
      "We use modern web technologies including React, Next.js, TypeScript, Node.js, and various database solutions depending on project requirements. We stay up-to-date with the latest frameworks and best practices to ensure our clients receive cutting-edge solutions.",
    category: "Development",
  },
  {
    question: "How do you ensure the security of the websites you develop?",
    answer:
      "We implement security best practices throughout the development lifecycle, including secure coding standards, regular dependency updates, input validation, proper authentication and authorization mechanisms, encryption for sensitive data, and security testing before deployment. We also provide guidance on ongoing security maintenance.",
    category: "Development",
  },
  {
    question: "What is your approach to SEO?",
    answer:
      "Our SEO approach combines technical optimization, content strategy, and off-page techniques. We start with a comprehensive audit, implement on-page optimizations, develop quality content aligned with target keywords, ensure mobile responsiveness, optimize site speed, and build high-quality backlinks. We provide regular reporting to track progress and adjust strategies as needed.",
    category: "Marketing",
  },
  {
    question: "How long does it take to see results from SEO efforts?",
    answer:
      "SEO is a long-term strategy that typically takes 3-6 months to show significant results. However, this timeline can vary based on factors such as your industry's competitiveness, your website's current state, the quality of content, and the effectiveness of your overall digital marketing strategy.",
    category: "Marketing",
  },
  {
    question: "Do you offer support after a project is completed?",
    answer:
      "Yes, we offer ongoing support and maintenance services to ensure your digital assets continue to perform optimally. Our support packages include regular updates, security patches, performance monitoring, content updates, and technical assistance. We can tailor a support plan to meet your specific needs and budget.",
    category: "General",
  },
  {
    question: "How do you handle client confidentiality?",
    answer:
      "We take client confidentiality very seriously. All our employees sign non-disclosure agreements, and we implement strict data access controls. We only collect information necessary for project completion and never share client data with third parties without explicit permission. Our security practices comply with industry standards to protect sensitive information.",
    category: "General",
  },
]

const categories = ["All", "Security", "Development", "Marketing", "Services", "General"]

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className="container py-20 md:py-32">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-20 h-20 mx-auto mb-4 backdrop-blur-xl bg-white/10 border border-white/10 rounded-full flex items-center justify-center"
        >
          <HelpCircle className="h-10 w-10 text-blue-400" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500"
        >
          Frequently Asked Questions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-blue-100 max-w-2xl mx-auto"
        >
          Find answers to common questions about our services, processes, and expertise.
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8"
        >
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search questions..."
              className="pl-10 backdrop-blur-xl bg-white/5 border-white/10 text-white focus:border-blue-500 transition-all duration-300 focus:bg-white/10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-glow transition-all duration-300"
                    : "backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 text-white transition-all duration-300"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {filteredFAQs.length > 0 ? (
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
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
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-8 max-w-lg mx-auto">
              <HelpCircle className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">No questions found</h3>
              <p className="text-muted-foreground mb-4">
                We couldn't find any questions matching your search criteria. Try adjusting your filters or search
                query.
              </p>
              <Button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("All")
                }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-purple-600 text-white shadow-glow transition-all duration-300"
              >
                Reset Filters
              </Button>
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-blue-100 mb-6">
            Can't find what you're looking for? Feel free to reach out to our team directly.
          </p>
          <Button
            asChild
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-purple-600 text-white shadow-glow transition-all duration-300 hover:-translate-y-1"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
