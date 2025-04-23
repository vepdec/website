"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { Award, Users, CheckCircle, Lightbulb } from "lucide-react"
import FAQSection from "@/components/sections/faq-section"

const teamMembers = [
  {
    name: "Muhammad Waqas",
    role: "CEO & Founder",
    bio: "With years of experience in cybersecurity, web development, and business leadership, Waqas leads our team with vision and expertise.",
    avatar: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Hamza Ramadan",
    role: "Head of Engineering",
    bio: "Hamza brings cutting-edge engineering practices and innovation to every project, ensuring robust and scalable solutions.",
    avatar: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Muhammad Wajahat",
    role: "Head of Development",
    bio: "Wajahat leads the development team with a strong focus on secure, scalable, and high-performance web applications.",
    avatar: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Muhammad Talha",
    role: "Business Development Head",
    bio: "Talha oversees operations and project management, ensuring timely delivery and team coordination across departments.",
    avatar: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Usman Raza",
    role: "Head of Security",
    bio: "Usman leads all cybersecurity initiatives, ensuring the safety of our systems, data, and infrastructure.",
    avatar: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Alishba Aejaz",
    role: "Head of Design",
    bio: "Alishba crafts beautiful and intuitive user experiences, leading our design team with creativity and precision.",
    avatar: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Muhammad Kashif",
    role: "Head of Support",
    bio: "Kashif ensures top-notch client satisfaction by managing customer support and technical issue resolution with dedication.",
    avatar: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Ayesha Khan",
    role: "HR & Culture Manager",
    bio: "Ayesha fosters a collaborative team culture, manages talent, and ensures our workplace remains vibrant and inclusive.",
    avatar: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Zoya Anwar",
    role: "Head of QA",
    bio: "Zoya leads our quality assurance process, ensuring that every product meets the highest performance and security standards.",
    avatar: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Hira Naveed",
    role: "PR & Communications Manager",
    bio: "Hira drives our brand message across all platforms, building trust and engagement with every public interaction.",
    avatar: "/placeholder.svg?height=300&width=300",
  }
]

const values = [
  {
    title: "Security First",
    description: "We prioritize security in everything we do, ensuring our clients' digital assets are protected.",
    icon: CheckCircle,
  },
  {
    title: "Innovation",
    description: "We embrace new technologies and approaches to stay ahead of emerging threats and opportunities.",
    icon: Lightbulb,
  },
  {
    title: "Integrity",
    description: "We operate with honesty and transparency, building trust with our clients and partners.",
    icon: Award,
  },
  {
    title: "Excellence",
    description: "We strive for excellence in all our services, delivering the highest quality solutions.",
    icon: Users,
  },
]

const aboutFaqs = [
  {
    question: "When was VepDec founded?",
    answer:
      "VepDec was founded in 2024 by Muhammad Waqas in Pakistan. What began as a vision to bridge the gap between cybersecurity and digital development quickly evolved into a mission-driven company. With a foundation rooted in expertise and innovation, VepDec was established to provide integrated services that secure digital assets while enhancing online presence. Since its inception, the company has expanded its offerings, built a team of seasoned professionals, and grown into a full-spectrum digital solutions provider—serving clients globally while maintaining a strong focus on innovation, security, and excellence.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "While we serve clients across various sectors, we have particular expertise in financial services, healthcare, e-commerce, technology, and government. Our team has developed specialized knowledge of the unique challenges and regulatory requirements in these industries, allowing us to provide tailored solutions that address specific sector needs.",
  },
  {
    question: "What certifications do your team members hold?",
    answer:
      "Our team members hold a wide range of industry certifications including CISSP, CEH, OSCP, AWS Certified Solutions Architect, Google Cloud Professional, Microsoft Certified Azure Expert, PMP, CISA, CompTIA Security+, and many others. We invest heavily in ongoing education to ensure our team stays current with the latest technologies and security practices.",
  },
  {
    question: "Do you work with clients internationally?",
    answer:
      "Yes, we work with clients globally. Our team is distributed across multiple time zones, allowing us to provide support and services to clients regardless of their location. We have experience navigating international regulations and adapting our solutions to meet regional requirements and cultural considerations.",
  },
  {
    question: "What makes VepDec different from other agencies?",
    answer:
      "What sets us apart is our integrated approach to security and development. Unlike agencies that treat security as an afterthought, we build it into everything we do from the ground up. Our team combines deep technical expertise with creative problem-solving, and we focus on long-term partnerships rather than one-off projects. We're committed to measurable results and transparent communication throughout our engagements.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-navy-900/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
                About VepDec
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
              Uniting Innovation, Security, and Success since 2024 with a team of experienced and dedicated professionals.
              </p>
              <p className="text-muted-foreground mb-6">
                VepDec was founded with a mission to provide comprehensive cybersecurity solutions and web development
                services to businesses of all sizes. Our team of experts brings years of experience and a passion for
                security to every project.
              </p>
              <p className="text-muted-foreground mb-8">
                We believe that security and innovation go hand in hand, and we work tirelessly to ensure our clients'
                digital assets are protected while helping them grow their online presence.
              </p>
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-purple-600 text-white shadow-glow transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="w-full max-w-md aspect-square backdrop-blur-xl bg-white/10 border border-white/10 rounded-xl flex items-center justify-center">
                <Lightbulb className="h-32 w-32 text-blue-400" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500"
            >
              Our Mission
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              We are dedicated to providing the highest quality cybersecurity and web development services to help our
              clients protect their digital assets and grow their online presence.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground mb-6">
                To be the leading provider of integrated cybersecurity and web development solutions, recognized for our
                expertise, innovation, and commitment to client success.
              </p>
              <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
              <p className="text-muted-foreground mb-6">
                We take a holistic approach to security and development, considering all aspects of our clients' digital
                presence to deliver comprehensive solutions that address their unique needs and challenges.
              </p>
              <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
              <p className="text-muted-foreground">
                We are committed to staying at the forefront of cybersecurity and web development, continuously learning
                and adapting to new technologies and threats to provide the best possible service to our clients.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="order-1 md:order-2 flex justify-center"
            >
              <div className="w-full max-w-md aspect-square backdrop-blur-xl bg-white/10 border border-white/10 rounded-xl flex items-center justify-center">
                <Award className="h-32 w-32 text-blue-400" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-navy-900/30">
        <div className="container">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500"
            >
              Our Core Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              These principles guide everything we do and shape our approach to serving our clients.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="backdrop-blur-xl bg-white/10 border border-white/10 h-full transition-all duration-300 hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)] group">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 mb-4 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                      <value.icon className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all duration-300">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-blue-50 transition-colors duration-300">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500"
            >
              Meet Our Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Our team of experts brings years of experience and a passion for security and innovation to every project.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="backdrop-blur-xl bg-white/10 border border-white/10 h-full overflow-hidden transition-all duration-300 hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)]">
                  <CardContent className="p-0">
                    {/* <div className="aspect-square relative overflow-hidden">
                      <Avatar className="w-full h-full rounded-none">
                        <AvatarImage src={member.avatar} alt={member.name} className="object-cover" />
                        <AvatarFallback className="w-full h-full rounded-none">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    </div> */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-primary mb-3">{member.role}</p>
                      <p className="text-muted-foreground">{member.bio}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About FAQs */}
      <FAQSection
        title="About VepDec: FAQs"
        description="Common questions about our company, team, and approach."
        faqs={aboutFaqs}
      />
    </div>
  )
}
