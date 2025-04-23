"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Palette, CheckCircle, Users, Clock, Layers, Monitor, Smartphone, PenTool } from "lucide-react"
import Link from "next/link"
import FAQSection from "@/components/sections/faq-section"

const designFaqs = [
  {
    question: "What's your design process like?",
    answer:
      "Our design process begins with discovery, where we understand your brand, goals, and users. We then move to research and strategy development, followed by concept creation and initial wireframing. After client feedback, we refine designs and develop high-fidelity mockups or prototypes. Once approved, we prepare assets for implementation and support the development team during integration. Throughout this process, we maintain open communication and incorporate user testing when appropriate to ensure the final product meets both business goals and user needs.",
  },
  {
    question: "How do you approach UX design to ensure a good user experience?",
    answer:
      "Our UX design approach is user-centered and data-informed. We start by creating user personas and journey maps to understand user needs and pain points. We conduct competitive analysis and usability research to identify best practices and opportunities. Our wireframing and prototyping process focuses on information architecture, interaction design, and accessibility. We validate designs through user testing and iterate based on feedback. Throughout the process, we balance user needs with business objectives to create experiences that are intuitive, efficient, and enjoyable while supporting conversion goals.",
  },
  {
    question: "Can you help with rebranding or refreshing our existing brand identity?",
    answer:
      "Yes, we specialize in both complete rebranding and brand refreshes. Our process begins with a brand audit to assess your current identity's strengths and weaknesses. We then conduct market research, competitor analysis, and stakeholder interviews to inform our strategy. Working collaboratively with your team, we develop brand elements that maintain valuable equity while evolving your identity to better align with your current business goals. We deliver comprehensive brand guidelines and assets to ensure consistent implementation across all touchpoints.",
  },
  {
    question: "How do you ensure designs are accessible to all users?",
    answer:
      "Accessibility is integrated throughout our design process. We follow WCAG guidelines and best practices to ensure our designs are usable by people with various disabilities. This includes using appropriate color contrast, providing text alternatives for non-text content, ensuring keyboard navigability, designing with screen readers in mind, and creating responsive layouts that work across devices and assistive technologies. We also conduct accessibility testing with real users when possible to validate our approach.",
  },
  {
    question: "What deliverables can we expect from a design project?",
    answer:
      "Deliverables vary based on project type but typically include: research findings and strategy documents, wireframes and user flows, visual design mockups, interactive prototypes, design specifications for developers, production-ready assets in appropriate formats, and comprehensive style guides or design systems. For branding projects, deliverables include logo files in various formats, color palettes, typography specifications, usage guidelines, and application examples. We ensure all deliverables are well-organized and properly documented for seamless implementation.",
  },
]

export default function DesignServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-navy-900/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
                Design Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Creative design solutions that enhance your brand identity and user experience.
              </p>
              <p className="text-muted-foreground mb-6">
                Our design team creates visually stunning and user-friendly designs that help you connect with your
                audience and achieve your business goals. We focus on creating designs that not only look great but also
                deliver results.
              </p>
              <p className="text-muted-foreground mb-8">
                From brand identity and UI/UX design to graphic design and motion graphics, we provide comprehensive
                design solutions tailored to your specific needs.
              </p>

              {/* Experience and Clients Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Clock className="h-5 w-5 text-blue-400" />
                    <h3 className="text-xl font-bold">8+ Years</h3>
                  </div>
                  <p className="text-sm text-blue-200">Experience in Design</p>
                </div>
                <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-blue-400" />
                    <h3 className="text-xl font-bold">180+</h3>
                  </div>
                  <p className="text-sm text-blue-200">Clients Served</p>
                </div>
              </div>

              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-purple-600 text-white shadow-glow transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]"
              >
                <Link href="/contact">Request a Design Consultation</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="w-full max-w-md aspect-square backdrop-blur-xl bg-white/10 border border-white/10 rounded-xl flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Palette className="h-32 w-32 text-blue-400 relative z-10 group-hover:scale-110 transition-transform duration-500" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              Our Design Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              We offer a comprehensive range of design services to help you create a compelling visual presence.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="backdrop-blur-xl bg-white/10 border border-white/10 h-full transition-all duration-300 hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)]">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mb-4 backdrop-blur-xl bg-white/10 border border-white/10 rounded-full flex items-center justify-center">
                    <Layers className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Brand Identity Design</h3>
                  <p className="text-muted-foreground mb-4">
                    Create a distinctive and memorable brand identity that resonates with your audience.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Logo design and brand marks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Color palette and typography</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Brand guidelines and assets</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="backdrop-blur-xl bg-white/10 border border-white/10 h-full transition-all duration-300 hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)]">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mb-4 backdrop-blur-xl bg-white/10 border border-white/10 rounded-full flex items-center justify-center">
                    <Monitor className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
                  <p className="text-muted-foreground mb-4">
                    Create intuitive and engaging user interfaces that enhance user experience.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>User research and personas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Wireframing and prototyping</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Interface design and testing</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="backdrop-blur-xl bg-white/10 border border-white/10 h-full transition-all duration-300 hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)]">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mb-4 backdrop-blur-xl bg-white/10 border border-white/10 rounded-full flex items-center justify-center">
                    <PenTool className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Graphic Design</h3>
                  <p className="text-muted-foreground mb-4">
                    Create visually appealing graphics for various marketing and communication needs.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Marketing materials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Social media graphics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Infographics and illustrations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="backdrop-blur-xl bg-white/10 border border-white/10 h-full transition-all duration-300 hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)]">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mb-4 backdrop-blur-xl bg-white/10 border border-white/10 rounded-full flex items-center justify-center">
                    <Smartphone className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Mobile App Design</h3>
                  <p className="text-muted-foreground mb-4">
                    Create intuitive and engaging mobile app interfaces for iOS and Android.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>App UI design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Interactive prototypes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Design systems for apps</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Design Process
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              We follow a systematic approach to ensure your design project delivers exceptional results.
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-6"
              >
                <div className="md:w-16 flex-shrink-0">
                  <div className="w-16 h-16 backdrop-blur-xl bg-white/10 border border-white/10 rounded-full flex items-center justify-center text-xl font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Discovery & Research</h3>
                  <p className="text-muted-foreground">
                    We begin by understanding your brand, goals, target audience, and competition. This research phase
                    helps us establish a solid foundation for the design process.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-6"
              >
                <div className="md:w-16 flex-shrink-0">
                  <div className="w-16 h-16 backdrop-blur-xl bg-white/10 border border-white/10 rounded-full flex items-center justify-center text-xl font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Strategy & Concept Development</h3>
                  <p className="text-muted-foreground">
                    Based on our research, we develop a design strategy and create initial concepts that align with your
                    brand and business objectives.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-6"
              >
                <div className="md:w-16 flex-shrink-0">
                  <div className="w-16 h-16 backdrop-blur-xl bg-white/10 border border-white/10 rounded-full flex items-center justify-center text-xl font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Design & Iteration</h3>
                  <p className="text-muted-foreground">
                    We create detailed designs and prototypes, refining them based on your feedback and user testing to
                    ensure they meet your needs and expectations.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-6"
              >
                <div className="md:w-16 flex-shrink-0">
                  <div className="w-16 h-16 backdrop-blur-xl bg-white/10 border border-white/10 rounded-full flex items-center justify-center text-xl font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Finalization & Delivery</h3>
                  <p className="text-muted-foreground">
                    We finalize the designs and prepare all necessary assets and specifications for implementation,
                    ensuring everything is ready for production.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-6"
              >
                <div className="md:w-16 flex-shrink-0">
                  <div className="w-16 h-16 backdrop-blur-xl bg-white/10 border border-white/10 rounded-full flex items-center justify-center text-xl font-bold">
                    5
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Implementation Support</h3>
                  <p className="text-muted-foreground">
                    We work closely with your development team or our own to ensure the designs are implemented
                    correctly and function as intended.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Design Services FAQs"
        description="Find answers to common questions about our design services."
        faqs={designFaqs}
      />

      {/* CTA Section */}
      <section className="py-20 bg-navy-900/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500"
            >
              Ready to Transform Your Brand's Visual Identity?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground mb-8"
            >
              Contact us today to discuss how our design services can help elevate your brand and create meaningful
              connections with your audience.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-purple-600 text-white shadow-glow transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]"
              >
                <Link href="/contact">Get Started</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
