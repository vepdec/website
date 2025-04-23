// "use client"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Search, Download, FileText, Video, Book } from "lucide-react"
// import Link from "next/link"
// import Image from "next/image"

// // Sample resources data
// const resources = [
//   {
//     id: "security-checklist",
//     title: "Web Application Security Checklist",
//     description: "A comprehensive checklist for securing your web applications against common vulnerabilities.",
//     type: "PDF",
//     icon: FileText,
//     image: "/placeholder.svg?height=400&width=600",
//     link: "#",
//   },
//   {
//     id: "seo-guide",
//     title: "Ultimate SEO Guide for 2023",
//     description: "Learn the latest SEO strategies to improve your website's visibility and drive organic traffic.",
//     type: "PDF",
//     icon: FileText,
//     image: "/placeholder.svg?height=400&width=600",
//     link: "#",
//   },
//   {
//     id: "penetration-testing-webinar",
//     title: "Penetration Testing Fundamentals",
//     description: "A recorded webinar explaining the basics of penetration testing and its importance for businesses.",
//     type: "Video",
//     icon: Video,
//     image: "/placeholder.svg?height=400&width=600",
//     link: "#",
//   },
//   {
//     id: "responsive-design-ebook",
//     title: "Responsive Design Best Practices",
//     description: "An e-book covering best practices for creating responsive and mobile-friendly websites.",
//     type: "E-Book",
//     icon: Book,
//     image: "/placeholder.svg?height=400&width=600",
//     link: "#",
//   },
//   {
//     id: "security-awareness-training",
//     title: "Security Awareness Training Materials",
//     description: "Training materials to help educate your team about cybersecurity best practices.",
//     type: "PDF",
//     icon: FileText,
//     image: "/placeholder.svg?height=400&width=600",
//     link: "#",
//   },
//   {
//     id: "api-security-guide",
//     title: "API Security Guide",
//     description: "Learn how to secure your APIs against common threats and vulnerabilities.",
//     type: "PDF",
//     icon: FileText,
//     image: "/placeholder.svg?height=400&width=600",
//     link: "#",
//   },
// ]

// const resourceTypes = ["All", "PDF", "Video", "E-Book"]

// export default function ResourcesPage() {
//   const [searchQuery, setSearchQuery] = useState("")
//   const [selectedType, setSelectedType] = useState("All")

//   const filteredResources = resources.filter((resource) => {
//     const matchesSearch =
//       resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       resource.description.toLowerCase().includes(searchQuery.toLowerCase())
//     const matchesType = selectedType === "All" || resource.type === selectedType

//     return matchesSearch && matchesType
//   })

//   return (
//     <div className="container py-20 md:py-32">
//       <div className="text-center mb-16">
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500"
//         >
//           Resources
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//           className="text-blue-100 max-w-2xl mx-auto"
//         >
//           Free guides, e-books, checklists, and other resources to help you improve your security posture and digital
//           presence.
//         </motion.p>
//       </div>

//       <div className="grid md:grid-cols-3 gap-8 mb-12">
//         <div className="md:col-span-2">
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
//             <Input
//               type="text"
//               placeholder="Search resources..."
//               className="pl-10 backdrop-blur-xl bg-white/5 border-white/10 text-white focus:border-blue-500 transition-all duration-300 focus:bg-white/10"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div>
//         </div>
//         <div className="flex items-center gap-2 overflow-x-auto pb-2">
//           {resourceTypes.map((type) => (
//             <Button
//               key={type}
//               variant={selectedType === type ? "default" : "outline"}
//               size="sm"
//               onClick={() => setSelectedType(type)}
//               className={
//                 selectedType === type
//                   ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-glow transition-all duration-300"
//                   : "backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 text-white transition-all duration-300"
//               }
//             >
//               {type}
//             </Button>
//           ))}
//         </div>
//       </div>

//       {filteredResources.length > 0 ? (
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredResources.map((resource, index) => (
//             <motion.div
//               key={resource.id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{
//                 y: -10,
//                 transition: { duration: 0.3 },
//               }}
//             >
//               <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)] group backdrop-blur-xl bg-white/10 border border-white/10">
//                 <div className="aspect-video relative overflow-hidden">
//                   <Image
//                     src={resource.image || "/placeholder.svg"}
//                     alt={resource.title}
//                     width={600}
//                     height={400}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                   <span className="absolute top-4 right-4 backdrop-blur-xl bg-white/10 border border-white/10 rounded-full px-3 py-1 text-xs font-medium flex items-center gap-1">
//                     <resource.icon className="h-3 w-3" />
//                     {resource.type}
//                   </span>
//                 </div>
//                 <CardContent className="p-6">
//                   <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">
//                     {resource.title}
//                   </h3>
//                   <p className="text-muted-foreground mb-4">{resource.description}</p>
//                   <Button
//                     asChild
//                     variant="ghost"
//                     className="bg-white/5 hover:bg-white/10 text-white hover:text-blue-300 transition-all duration-300 group-hover:translate-x-1 p-0"
//                   >
//                     <Link href={resource.link} className="flex items-center gap-2">
//                       <Download className="h-4 w-4" />
//                       Download Resource
//                     </Link>
//                   </Button>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       ) : (
//         <div className="text-center py-12">
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-8 max-w-lg mx-auto"
//           >
//             <h3 className="text-xl font-bold mb-2">No resources found</h3>
//             <p className="text-muted-foreground mb-4">
//               We couldn't find any resources matching your search criteria. Try adjusting your filters or search query.
//             </p>
//             <Button
//               onClick={() => {
//                 setSearchQuery("")
//                 setSelectedType("All")
//               }}
//               className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-purple-600 text-white shadow-glow transition-all duration-300"
//             >
//               Reset Filters
//             </Button>
//           </motion.div>
//         </div>
//       )}
//     </div>
//   )
// }

"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { ArrowRight, Clock, Home, Mail } from "lucide-react"

export default function ComingSoonPage() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
    }
  }

  useEffect(() => {
    // Set launch date to 30 days from now
    const launchDate = new Date()
    launchDate.setDate(launchDate.getDate() + 30)

    const timer = setInterval(() => {
      const now = new Date()
      const difference = launchDate.getTime() - now.getTime()

      if (difference <= 0) {
        clearInterval(timer)
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setCountdown({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="container flex flex-col items-center justify-center min-h-[80vh] py-20 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-24 h-24 mb-6 backdrop-blur-xl bg-white/10 border border-white/10 rounded-full flex items-center justify-center"
      >
        <Clock className="h-12 w-12 text-blue-400" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500"
      >
        Coming Soon
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl text-blue-100 mb-8 max-w-lg"
      >
        We're working hard to bring you something amazing. Stay tuned!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex gap-8 mb-12"
      >
        <div className="flex flex-col items-center">
          <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
            {countdown.days}
          </div>
          <div className="text-sm text-blue-200">Days</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
            {countdown.hours.toString().padStart(2, "0")}
          </div>
          <div className="text-sm text-blue-200">Hours</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
            {countdown.minutes.toString().padStart(2, "0")}
          </div>
          <div className="text-sm text-blue-200">Minutes</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
            {countdown.seconds.toString().padStart(2, "0")}
          </div>
          <div className="text-sm text-blue-200">Seconds</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-md w-full mb-8"
      >
        {submitted ? (
          <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-xl p-6 text-center">
            <Mail className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Thank You!</h3>
            <p className="text-blue-100">We'll notify you when we launch.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-xl font-bold mb-2">Get Notified When We Launch</h3>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="backdrop-blur-xl bg-white/5 border-white/10 text-white focus:border-blue-500"
                required
              />
              <Button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-purple-600 text-white shadow-glow transition-all duration-300 hover:-translate-y-1"
              >
                Notify Me
              </Button>
            </div>
            <p className="text-xs text-blue-200">We'll never share your email with anyone else.</p>
          </form>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Button
          asChild
          variant="outline"
          className="backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 group"
        >
          <Link href="/" className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            Back to Home
            <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </Link>
        </Button>
      </motion.div>
    </div>
  )
}
