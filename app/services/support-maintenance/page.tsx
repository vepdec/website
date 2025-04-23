"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Headphones, CheckCircle, Users, Clock, Settings, ShieldCheck } from "lucide-react"
import Link from "next/link"
import FAQSection from "@/components/sections/faq-section"

const supportMaintenanceFaqs = [
  {
    question: "What types of support do you offer?",
    answer:
      "We offer a range of support options including phone support, email support, live chat, and on-site support. Our support services cover technical troubleshooting, bug fixes, security updates, performance monitoring, and general guidance on using our products and services. We tailor our support approach to meet your specific needs and preferences.",
  },
  {
    question: "What is your response time for support requests?",
    answer:
      "Our response times vary based on the severity of the issue and your support plan. We offer tiered support levels with guaranteed response times ranging from 15 minutes for critical issues to 24 hours for low-priority requests. We prioritize all support requests and strive to provide timely and effective solutions to minimize any disruption to your business.",
  },
  {
    question: "Do you offer proactive maintenance services?",
    answer:
      "Yes, we offer proactive maintenance services to prevent issues before they occur. This includes regular system monitoring, performance optimization, security patching, and software updates. Our proactive approach helps ensure your systems remain stable, secure, and performing optimally, reducing the risk of downtime and costly repairs.",
  },
  {
    question: "Can you help with third-party integrations?",
    answer:
      "Yes, we have extensive experience integrating our products and services with various third-party systems. We can assist with API integrations, data migration, custom development, and ongoing support for integrated solutions. Our team works closely with you to ensure seamless integration and optimal performance across all systems.",
  },
  {
    question: "What is included in your maintenance packages?",
    answer:
      "Our maintenance packages are customizable to meet your specific needs. Standard packages include regular system monitoring, security updates, bug fixes, performance optimization, and technical support. We also offer advanced options such as dedicated account managers, on-site support, and custom development services. We work with you to create a maintenance plan that fits your budget and ensures your systems remain reliable and secure.",
  },
]

export default function SupportMaintenancePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-navy-900/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
                Support & Maintenance
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Ongoing support and maintenance services to keep your systems running smoothly.
              </p>
              <p className="text-muted-foreground mb-6">
                Our support and maintenance services ensure your systems remain secure, reliable, and up-to-date. We
                provide proactive monitoring, rapid response to issues, and ongoing optimization to keep your business
                running smoothly.
              </p>
              <p className="text-muted-foreground mb-8">
                From technical support and bug fixes to security updates and performance enhancements, we offer
                comprehensive maintenance packages tailored to your specific needs.
              </p>

              {/* Experience and Clients Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Clock className="h-5 w-5 text-blue-400" />
                    <h3 className="text-xl font-bold">10+ Years</h3>
                  </div>
                  <p className="text-sm text-blue-200">Experience in Support & Maintenance</p>
                </div>
                <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-blue-400" />
                    <h3 className="text-xl font-bold">400+</h3>
                  </div>
                  <p className="text-sm text-blue-200">Clients Supported</p>
                </div>
              </div>

              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-purple-600 text-white shadow-glow transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]"
              >
                <Link href="/contact">Request a Support Plan</Link>
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
                <Headphones className="h-32 w-32 text-blue-400 relative z-10 group-hover:scale-110 transition-transform duration-500" />
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
              Our Support & Maintenance Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              We offer a comprehensive range of support and maintenance services to keep your systems running smoothly.
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
                    <Headphones className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Technical Support</h3>
                  <p className="text-muted-foreground mb-4">
                    Expert technical assistance to resolve issues and keep your systems running smoothly.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>24/7 support availability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Remote troubleshooting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>On-site support options</span>
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
                    <Settings className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">System Maintenance</h3>
                  <p className="text-muted-foreground mb-4">
                    Proactive maintenance services to prevent issues and optimize performance.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Regular system updates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Performance monitoring and optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Security patching and vulnerability management</span>
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
                    <ShieldCheck className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Security Updates</h3>
                  <p className="text-muted-foreground mb-4">
                    Timely security updates and patching to protect your systems from the latest threats.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Security vulnerability monitoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Rapid security patch deployment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Security audit and compliance support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Support & Maintenance FAQs"
        description="Find answers to common questions about our support and maintenance services."
        faqs={supportMaintenanceFaqs}
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
              Ready to Ensure Your Systems Run Smoothly?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground mb-8"
            >
              Contact us today to discuss how our support and maintenance services can help you keep your business
              running smoothly.
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
