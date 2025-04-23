"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Upload, ArrowLeft, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function CareersApplyPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    coverLetter: "",
    resume: null as File | null,
  })

  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]

      // Check file extension
      const allowedExtensions = [".pdf", ".docx", ".doc", ".rtf", ".txt"]
      const fileExtension = file.name.substring(file.name.lastIndexOf(".")).toLowerCase()

      if (!allowedExtensions.includes(fileExtension)) {
        setError("Invalid file type. Only PDF, DOCX, DOC, RTF, and TXT files are allowed.")
        return
      }

      // Check file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        setError("File size exceeds 5MB limit.")
        return
      }

      // Check file name for potential security issues
      if (
        file.name.includes("php") ||
        file.name.includes("shell") ||
        file.name.includes("exec") ||
        file.name.includes("..") ||
        file.name.includes("\\") ||
        file.name.includes("&") ||
        file.name.includes(";") ||
        file.name.includes("|")
      ) {
        setError("Invalid file name. Please rename your file.")
        return
      }

      setFormData((prev) => ({ ...prev, resume: file }))
      setError(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    // Validate form
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.position || !formData.resume) {
      setError("Please fill in all required fields")
      setIsSubmitting(false)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address")
      setIsSubmitting(false)
      return
    }

    try {
      // Create FormData object to handle file upload
      const formDataToSend = new FormData()
      formDataToSend.append("firstName", formData.firstName)
      formDataToSend.append("lastName", formData.lastName)
      formDataToSend.append("email", formData.email)
      formDataToSend.append("phone", formData.phone || "")
      formDataToSend.append("position", formData.position)
      formDataToSend.append("experience", formData.experience || "")
      formDataToSend.append("coverLetter", formData.coverLetter || "")
      if (formData.resume) {
        formDataToSend.append("resume", formData.resume)
      }

      // Send form data to API route
      const response = await fetch("/api/careers", {
        method: "POST",
        body: formDataToSend,
      })

      if (!response.ok) {
        throw new Error("Failed to submit application")
      }

      setIsSubmitting(false)
      setFormSubmitted(true)
    } catch (error) {
      console.error("Error submitting application:", error)
      setError("Failed to submit application. Please try again later.")
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container py-20 md:py-32">
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500"
        >
          Apply for a Position
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-blue-100 max-w-2xl mx-auto"
        >
          Join our team of talented professionals and help us build innovative solutions for our clients.
        </motion.p>
      </div>

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="backdrop-blur-xl bg-white/10 border border-white/10">
            <CardContent className="p-6">
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-20 h-20 mb-6 bg-green-500/20 backdrop-blur-xl rounded-full flex items-center justify-center">
                    <CheckCircle className="h-10 w-10 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white">Application Submitted!</h3>
                  <p className="text-blue-100 max-w-md mb-8">
                    Thank you for your interest in joining our team. We've received your application and will review it
                    shortly. We'll be in touch if your qualifications match our requirements.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      asChild
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-purple-600 text-white shadow-glow transition-all duration-300 hover:-translate-y-1"
                    >
                      <Link href="/careers" className="flex items-center gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Careers
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 text-white transition-all duration-300 hover:-translate-y-1"
                    >
                      <Link href="/">Go to Homepage</Link>
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <Alert className="bg-red-500/20 border-red-500/50 text-red-200 mb-6">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  <div className="flex items-center gap-2 mb-6">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 text-white transition-all duration-300"
                    >
                      <Link href="/careers" className="flex items-center gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Careers
                      </Link>
                    </Button>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="backdrop-blur-xl bg-white/5 border-white/10 text-white focus:border-blue-500"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="backdrop-blur-xl bg-white/5 border-white/10 text-white focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="backdrop-blur-xl bg-white/5 border-white/10 text-white focus:border-blue-500"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="backdrop-blur-xl bg-white/5 border-white/10 text-white focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="position">Position Applying For *</Label>
                      <Select
                        value={formData.position}
                        onValueChange={(value) => handleSelectChange("position", value)}
                      >
                        <SelectTrigger className="backdrop-blur-xl bg-white/5 border-white/10 text-white focus:border-blue-500">
                          <SelectValue placeholder="Select a position" />
                        </SelectTrigger>
                        <SelectContent className="backdrop-blur-xl bg-[#0a0f1f]/90 border-white/10 text-white">
                          {/* <SelectItem value="marketing-specialist">Marketing Specialist</SelectItem>
                          <SelectItem value="security-analyst">Security Analyst</SelectItem>
                          <SelectItem value="frontend-developer">Frontend Developer</SelectItem>
                          <SelectItem value="ux-designer">UX Designer</SelectItem>
                          <SelectItem value="other">Other</SelectItem> */}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience">Years of Experience</Label>
                      <Select
                        value={formData.experience}
                        onValueChange={(value) => handleSelectChange("experience", value)}
                      >
                        <SelectTrigger className="backdrop-blur-xl bg-white/5 border-white/10 text-white focus:border-blue-500">
                          <SelectValue placeholder="Select experience" />
                        </SelectTrigger>
                        <SelectContent className="backdrop-blur-xl bg-[#0a0f1f]/90 border-white/10 text-white">
                          <SelectItem value="0-1">0-1 years</SelectItem>
                          <SelectItem value="1-3">1-3 years</SelectItem>
                          <SelectItem value="3-5">3-5 years</SelectItem>
                          <SelectItem value="5-10">5-10 years</SelectItem>
                          <SelectItem value="10+">10+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="coverLetter">Cover Letter</Label>
                    <Textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleChange}
                      className="backdrop-blur-xl bg-white/5 border-white/10 text-white focus:border-blue-500 min-h-[150px]"
                      placeholder="Tell us why you're interested in this position and what makes you a good fit."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="resume">Resume/CV * (.pdf, .docx, .doc, .rtf, .txt only, max 5MB)</Label>
                    <div className="flex items-center justify-center w-full">
                      <label
                        htmlFor="resume"
                        className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer backdrop-blur-xl bg-white/5 border-white/20 hover:bg-white/10 transition-all duration-300"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-8 h-8 mb-3 text-blue-400" />
                          <p className="mb-2 text-sm text-white">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-blue-200">PDF, DOCX, DOC, RTF or TXT (MAX. 5MB)</p>
                        </div>
                        <Input
                          id="resume"
                          name="resume"
                          type="file"
                          accept=".pdf,.docx,.rtf"
                          className="hidden"
                          onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                              const file = e.target.files[0]
                              const fileExtension = file.name.split(".").pop()?.toLowerCase()
                              const allowedExtensions = ["pdf", "docx", "rtf"]

                              if (allowedExtensions.includes(fileExtension || "")) {
                                handleFileChange(e)
                              } else {
                                setError("Only PDF, DOCX, or RTF files are allowed")
                                e.target.value = ""
                              }
                            }
                          }}
                          required
                        />
                      </label>
                    </div>
                    {formData.resume && (
                      <p className="text-sm text-blue-300 mt-2">Selected file: {formData.resume.name}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-purple-600 text-white shadow-glow transition-all duration-300 hover:-translate-y-1 w-full"
                    disabled={isSubmitting}
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
                        Submitting...
                      </span>
                    ) : (
                      "Submit Application"
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
