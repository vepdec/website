"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, CheckCircle, Users, Clock, BarChart, Database, Laptop } from "lucide-react"
import Link from "next/link"
import FAQSection from "@/components/sections/faq-section"

const techConsultingFaqs = [
  {
    question: "How do you approach digital transformation projects?",
    answer:
      "We approach digital transformation holistically, focusing on people, processes, and technology. We begin with a comprehensive assessment of your current state, business goals, and pain points. Based on this analysis, we develop a strategic roadmap that prioritizes initiatives for maximum impact. We emphasize change management and stakeholder engagement throughout implementation to ensure adoption. Our iterative approach allows for quick wins while working toward larger transformational goals, and we establish clear metrics to measure success and ROI.",
  },
  {
    question: "Can you help us choose the right technology stack for our project?",
    answer:
      "Yes, we provide technology stack consulting based on your specific requirements. We evaluate factors like your project scope, performance needs, scalability requirements, team expertise, timeline, budget, and long-term maintenance considerations. Rather than following trends, we recommend technologies that best align with your business objectives and constraints. We consider both immediate implementation needs and long-term supportability to ensure your technology choices remain viable and cost-effective over time.",
  },
  {
    question: "What's your approach to cloud migration?",
    answer:
      "Our cloud migration approach follows a structured methodology: assessment (evaluating current infrastructure and applications), planning (developing migration strategy and selecting cloud providers), preparation (creating detailed migration plans and establishing governance), migration execution (using appropriate strategies like rehosting, refactoring, or rebuilding), and optimization (monitoring performance and costs post-migration). We prioritize business continuity throughout the process and implement robust security measures to protect data during and after migration.",
  },
  {
    question: "How do you ensure knowledge transfer to our internal teams?",
    answer:
      "Knowledge transfer is integrated throughout our consulting engagements. We use a combination of formal training sessions, hands-on workshops, pair programming, comprehensive documentation, and shadowing opportunities. We create customized learning paths based on your team's existing skills and the specific technologies involved. Additionally, we offer post-project support periods where your team can ask questions as they take ownership. Our goal is to build your team's capabilities so you can maintain and extend solutions independently.",
  },
  {
    question: "How do you measure the success of consulting engagements?",
    answer:
      "We establish clear, measurable objectives at the beginning of each engagement, aligned with your business goals. These typically include quantitative metrics (ROI, cost savings, performance improvements, time-to-market reductions) and qualitative outcomes (improved processes, enhanced capabilities, knowledge transfer). We implement regular checkpoints to track progress and make adjustments as needed. At project completion, we conduct a formal review to evaluate outcomes against objectives and document lessons learned for continuous improvement.",
  },
]

export default function TechConsultingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-navy-900/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
                Tech Consulting
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Expert guidance on technology strategy, implementation, and optimization.
              </p>
              <p className="text-muted-foreground mb-6">
                Our technology consulting services help you navigate complex technology decisions, implement effective
                solutions, and optimize your IT investments. We provide strategic guidance and practical expertise to
                help you achieve your business goals.
              </p>
              <p className="text-muted-foreground mb-8">
                From technology strategy and digital transformation to IT infrastructure assessment and process
                optimization, we offer comprehensive consulting services tailored to your specific needs.
              </p>

              {/* Experience and Clients Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Clock className="h-5 w-5 text-blue-400" />
                    <h3 className="text-xl font-bold">9+ Years</h3>
                  </div>
                  <p className="text-sm text-blue-200">Experience in Tech Consulting</p>
                </div>
                <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-blue-400" />
                    <h3 className="text-xl font-bold">680+</h3>
                  </div>
                  <p className="text-sm text-blue-200">Clients Advised</p>
                </div>
              </div>

              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-purple-600 text-white shadow-glow transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]"
              >
                <Link href="/contact">Request a Consultation</Link>
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
                <Lightbulb className="h-32 w-32 text-blue-400 relative z-10 group-hover:scale-110 transition-transform duration-500" />
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
              Our Tech Consulting Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              We offer a comprehensive range of technology consulting services to help you make informed decisions and
              achieve your business goals.
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
                    <Lightbulb className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Technology Strategy</h3>
                  <p className="text-muted-foreground mb-4">
                    Develop a technology strategy aligned with your business goals and objectives.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>IT strategy development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Technology roadmap planning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>IT governance frameworks</span>
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
                    <BarChart className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Digital Transformation</h3>
                  <p className="text-muted-foreground mb-4">
                    Transform your business through strategic use of digital technologies.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Digital maturity assessment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Transformation roadmap</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Change management</span>
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
                    <Laptop className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">IT Infrastructure Assessment</h3>
                  <p className="text-muted-foreground mb-4">
                    Evaluate your IT infrastructure to identify opportunities for improvement.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Infrastructure audit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Performance optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Scalability planning</span>
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
                    <Database className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Technology Selection</h3>
                  <p className="text-muted-foreground mb-4">
                    Select the right technologies and vendors for your specific business needs.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Requirements analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Vendor evaluation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Technology stack recommendations</span>
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
              Our Consulting Approach
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              We follow a systematic approach to ensure our consulting engagements deliver tangible value.
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
                  <h3 className="text-xl font-bold mb-2">Assessment</h3>
                  <p className="text-muted-foreground">
                    We begin by thoroughly assessing your current technology landscape, identifying pain points, and
                    understanding your business objectives.
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
                  <h3 className="text-xl font-bold mb-2">Strategy Development</h3>
                  <p className="text-muted-foreground">
                    Based on the assessment, we develop a customized technology strategy that aligns with your business
                    goals and addresses your specific challenges.
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
                  <h3 className="text-xl font-bold mb-2">Implementation Planning</h3>
                  <p className="text-muted-foreground">
                    We create a detailed implementation plan that outlines the steps, resources, and timelines required
                    to execute the technology strategy effectively.
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
                  <h3 className="text-xl font-bold mb-2">Execution & Support</h3>
                  <p className="text-muted-foreground">
                    We provide expert guidance and support throughout the implementation process, ensuring a smooth
                    transition and optimal results.
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
                  <h3 className="text-xl font-bold mb-2">Optimization & Monitoring</h3>
                  <p className="text-muted-foreground">
                    We continuously monitor and optimize your technology infrastructure to ensure it delivers maximum
                    value and supports your evolving business needs.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Tech Consulting FAQs"
        description="Find answers to common questions about our tech consulting services."
        faqs={techConsultingFaqs}
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
              Ready to Transform Your Business with Technology?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground mb-8"
            >
              Contact us today to discuss how our technology consulting services can help you achieve your business
              goals.
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
