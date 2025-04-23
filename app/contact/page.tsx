"use client"

import { Label } from "@/components/ui/label"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { sanitizeInput, applyRateLimit } from "@/lib/utils"
import { Mail, Phone, MapPin, AlertCircle, CheckCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import FAQSection from "@/components/sections/faq-section"

const contactFaqs = [
  {
    question: "What information should I include in my inquiry?",
    answer:
      "To help us respond most effectively, please include your name, company name (if applicable), contact details, a clear description of your needs or issues, any relevant deadlines, and your preferred method of communication. The more specific you can be about your requirements, the better we can tailor our response to your needs.",
  },
  {
    question: "How quickly can I expect a response?",
    answer:
      "We typically respond to all inquiries within 1 business day. For urgent matters, please indicate this in your message subject line, and we'll prioritize your request. If you need immediate assistance, we recommend calling our support line directly.",
  },
  {
    question: "Do you offer free consultations?",
    answer:
      "Yes, we offer a complimentary 30-minute initial consultation to discuss your needs and determine how we can best assist you. During this consultation, we'll learn about your business, discuss your challenges, and provide preliminary recommendations. To schedule a consultation, please mention this in your message when contacting us.",
  },
  {
    question: "Can you sign an NDA before discussing my project?",
    answer:
      "Absolutely. We understand that many projects involve sensitive information. We're happy to sign a mutual non-disclosure agreement (NDA) before discussing the details of your project. Please let us know in your initial contact if you'd like us to provide our standard NDA or if you have your own that you'd prefer us to review.",
  },
  {
    question: "What are your payment terms?",
    answer:
      "Our payment terms vary depending on the type and scope of the project. For most services, we require a 50% deposit to begin work, with the remaining balance due upon completion. For ongoing services, we typically bill monthly. We accept payments via bank transfer, credit card, and major payment platforms. Detailed payment terms will be included in our proposal and service agreement.",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing again
    if (formError) {
      setFormError(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormError(null)

    // Validate inputs
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFormError("All fields are required")
      setIsSubmitting(false)
      return
    }

    // Validate name and subject (allow only alphanumeric characters and spaces)
    const nameRegex = /^[a-zA-Z0-9\s]*$/
    if (!nameRegex.test(formData.name)) {
      setFormError("Name cannot contain special characters")
      setIsSubmitting(false)
      return
    }

    if (!nameRegex.test(formData.subject)) {
      setFormError("Subject cannot contain special characters")
      setIsSubmitting(false)
      return
    }

    // Validate email (allow only @ character)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setFormError("Please enter a valid email address")
      setIsSubmitting(false)
      return
    }

    // Apply rate limiting (using email as identifier)
    const rateLimitResult = await applyRateLimit(formData.email)
    if (!rateLimitResult) {
      setFormError("Too many requests. Please try again later.")
      setIsSubmitting(false)
      return
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      subject: sanitizeInput(formData.subject),
      message: sanitizeInput(formData.message),
    }

    try {
      // Send form data to API route
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sanitizedData),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setIsSubmitting(false)
      setFormSubmitted(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("Error sending message:", error)
      setFormError("Failed to send message. Please try again later.")
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col">
      <div className="container py-20 md:py-32">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-xl rounded-full flex items-center justify-center"
          >
            <Mail className="h-10 w-10 text-blue-400" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-blue-100 max-w-2xl mx-auto"
          >
            Have a question or want to discuss a project? Get in touch with our team.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="backdrop-blur-xl bg-white/10 border border-white/10 p-6">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-20 h-20 mb-6 bg-green-500/20 backdrop-blur-xl rounded-full flex items-center justify-center">
                    <CheckCircle className="h-10 w-10 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-blue-100 max-w-md mb-8">
                    Thank you for contacting us. We've received your message and will get back to you as soon as
                    possible.
                  </p>
                  <Button
                    onClick={() => setFormSubmitted(false)}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-purple-600 text-white shadow-glow transition-all duration-300 hover:-translate-y-1"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {formError && (
                    <Alert className="bg-red-500/20 border-red-500/50 text-red-200">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{formError}</AlertDescription>
                    </Alert>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="backdrop-blur-xl bg-white/5 border-white/10 text-white focus:border-blue-500"
                      required
                      pattern="^[a-zA-Z0-9\s]*$"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Your Email *</Label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="backdrop-blur-xl bg-white/5 border-white/10 text-white focus:border-blue-500"
                      required
                      pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="backdrop-blur-xl bg-white/5 border-white/10 text-white focus:border-blue-500"
                      required
                      pattern="^[a-zA-Z0-9\s]*$"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message *</Label>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      className="backdrop-blur-xl bg-white/5 border-white/10 text-white focus:border-blue-500 min-h-[150px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-purple-600 text-white shadow-glow transition-all duration-300 hover:-translate-y-1 w-full"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="backdrop-blur-xl bg-white/10 border border-white/10 p-6 h-full">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 backdrop-blur-xl bg-white/10 border border-white/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-blue-100 mt-2 mb-1">Support:</p>
                    <a href="mailto:support@vepdec.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                      support@vepdec.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 backdrop-blur-xl bg-white/10 border border-white/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-blue-100 mb-1">Main Office:</p>
                    <a href="tel:+923333720166" className="text-blue-400 hover:text-blue-300 transition-colors">
                      +92 333 3720166
                    </a>
                    <p className="text-blue-100 mt-2 mb-1">Support Hotline:</p>
                    <a href="tel:+923333720166" className="text-blue-400 hover:text-blue-300 transition-colors">
                      +92 333 3720166
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 backdrop-blur-xl bg-white/10 border border-white/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Location</h3>
                    <p className="text-blue-100">
                      VepDec Offices
                      <br />
                      Karachi, Sindh
                      <br />
                      Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Contact FAQs */}
      <FAQSection
        title="Contact FAQs"
        description="Common questions about contacting and working with us."
        faqs={contactFaqs}
      />
    </div>
  )
}
