"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code, CheckCircle, Users, Clock, Globe, Server, Palette, Gauge, Shield } from 'lucide-react'
import Link from "next/link"
import FAQSection from "@/components/sections/faq-section"

const webDevFaqs = [
  {
    question: "What technologies do you use for web development?",
    answer:
      "We use modern web technologies including React, Next.js, TypeScript, Node.js, and various database solutions depending on project requirements. For e-commerce sites, we often work with platforms like Shopify or custom solutions. Our tech stack is carefully selected based on each project's specific needs, ensuring optimal performance, security, and maintainability.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline for website development varies based on complexity, features, and scope. A simple informational website might take 2-4 weeks, while a complex web application or e-commerce platform could take 2-6 months. During our initial consultation, we'll assess your requirements and provide a detailed timeline. We follow an agile approach with regular milestones and updates to ensure transparency throughout the development process.",
  },
  {
    question: "Do you provide website maintenance after launch?",
    answer:
      "Yes, we offer comprehensive website maintenance services to ensure your site remains secure, up-to-date, and performing optimally. Our maintenance packages include regular updates, security patches, performance monitoring, content updates, and technical support. We can tailor a maintenance plan to meet your specific needs and budget, whether you need occasional support or ongoing dedicated maintenance.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. We specialize in website redesigns that improve both aesthetics and functionality. Our process begins with a thorough assessment of your current site to identify strengths, weaknesses, and opportunities for improvement. We then develop a redesign strategy that enhances user experience, modernizes the visual design, improves performance, and aligns with your current business goals, all while preserving your brand identity and SEO value.",
  },
  {
    question: "How do you ensure websites are secure?",
    answer:
      "Security is integrated throughout our development process. We implement secure coding practices, use HTTPS/SSL encryption, employ proper authentication and authorization mechanisms, validate all inputs to prevent injection attacks, keep dependencies updated, and follow the principle of least privilege. We also conduct security testing including vulnerability scanning and penetration testing before launch, and provide guidance on ongoing security maintenance.",
  },
]

export default function WebDevelopmentPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-navy-900/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
                Web Development Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Custom web applications built with security and performance in mind.
              </p>
              <p className="text-muted-foreground mb-6">
                In today's digital landscape, your website is often the first interaction customers have with your brand. Our web development team creates secure, responsive, and user-friendly websites that make a lasting impression and drive results.
              </p>
              <p className="text-muted-foreground mb-8">
                From simple informational sites to complex web applications, we deliver solutions tailored to your specific business needs and goals.
              </p>
              
              {/* Experience and Clients Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Clock className="h-5 w-5 text-blue-400" />
                    <h3 className="text-xl font-bold">10+ Years</h3>
                  </div>
                  <p className="text-sm text-blue-200">Experience in Web Development</p>
                </div>
                <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-blue-400" />
                    <h3 className="text-xl font-bold">200+</h3>
                  </div>
                  <p className="text-sm text-blue-200">Clients Served</p>
                </div>
              </div>
              
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-purple-600 text-white shadow-glow transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]"
              >
                <Link href="/contact">Request a Web Development Consultation</Link>
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
                <Code className="h-32 w-32 text-blue-400 relative z-10 group-hover:scale-110 transition-transform duration-500" />
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
              Our Web Development Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              We offer a comprehensive range of web development services to meet your business needs.
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
                    <Globe className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Custom Website Development</h3>
                  <p className="text-muted-foreground mb-4">
                    Tailored websites designed to meet your specific business requirements and goals.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Responsive design for all devices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>SEO-friendly architecture</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Performance optimization</span>
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
                    <Server className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Web Application Development</h3>
                  <p className="text-muted-foreground mb-4">
                    Complex web applications with advanced functionality and seamless user experiences.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Custom functionality development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>API integration and development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Secure authentication systems</span>
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
                    <Palette className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
                  <p className="text-muted-foreground mb-4">
                    User-centered design that enhances user experience and drives engagement.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>User research and persona development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Wireframing and prototyping</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Usability testing and optimization</span>
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
                    <Code className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">E-Commerce Development</h3>
                  <p className="text-muted-foreground mb-4">
                    Secure and scalable online stores that drive sales and enhance customer experience.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Custom e-commerce solutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Payment gateway integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Inventory and order management</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="backdrop-blur-xl bg-white/10 border border-white/10 h-full transition-all duration-300 hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)]">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mb-4 backdrop-blur-xl bg-white/10 border border-white/10 rounded-full flex items-center justify-center">
                    <Gauge className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Performance Optimization</h3>
                  <p className="text-muted-foreground mb-4">
                    Improve your website's speed, performance, and user experience.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Page speed optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Code and database optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Caching and CDN implementation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="backdrop-blur-xl bg-white/10 border border-white/10 h-full transition-all duration-300 hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)]">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mb-4 backdrop-blur-xl bg-white/10 border border-white/10 rounded-full flex items-center justify-center">
                    <Shield className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Website Security</h3>
                  <p className="text-muted-foreground mb-4">
                    Protect your website and user data from security threats and vulnerabilities.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Security audits and assessments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>SSL implementation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Security monitoring and maintenance</span>
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
              Our Web Development Process
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              We follow a systematic approach to ensure your web development project is successful.
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
                  <h3 className="text-xl font-bold mb-2">Discovery & Planning</h3>
                  <p className="text-muted-foreground">
                    We begin by understanding your business goals, target audience, and project requirements. This includes analyzing your competitors, defining project scope, and creating a detailed roadmap for development.
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
                  <h3 className="text-xl font-bold mb-2">Design</h3>
                  <p className="text-muted-foreground">
                    Our design team creates wireframes and mockups that align with your brand identity and user experience goals. We focus on creating intuitive navigation, clear calls-to-action, and visually appealing layouts that engage your users.
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
                  <h3 className="text-xl font-bold mb-2">Development</h3>
                  <p className="text-muted-foreground">
                    Our development team brings the designs to life using modern technologies and best practices. We follow agile methodologies, with regular sprints and updates to ensure transparency and flexibility throughout the development process.
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
                  <h3 className="text-xl font-bold mb-2">Testing & Quality Assurance</h3>
                  <p className="text-muted-foreground">
                    We rigorously test your website or application across different devices, browsers, and scenarios to ensure it functions flawlessly. This includes functionality testing, performance testing, security testing, and user acceptance testing.
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
                  <h3 className="text-xl font-bold mb-2">Deployment & Launch</h3>
                  <p className="text-muted-foreground">
                    Once testing is complete, we deploy your website or application to your production environment. We ensure a smooth launch with minimal downtime and provide comprehensive documentation for future reference.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-6"
              >
                <div className="md:w-16 flex-shrink-0">
                  <div className="w-16 h-16 backdrop-blur-xl bg-white/10 border border-white/10 rounded-full flex items-center justify-center text-xl font-bold">
                    6
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Maintenance & Support</h3>
                  <p className="text-muted-foreground">
                    Our relationship doesn't end at launch. We provide ongoing maintenance and support to ensure your website or application remains secure, up-to-date, and performing optimally. We also offer training and documentation to help you manage your site effectively.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Web Development FAQs"
        description="Find answers to common questions about our web development services."
        faqs={webDevFaqs}
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
              Ready to Build Your Next Web Project?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground mb-8"
            >
              Contact us today to discuss your web development needs and take the first step toward creating a powerful online presence for your business.
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
