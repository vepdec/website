"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, CheckCircle, Users, Clock, Lock, FileWarning, Eye } from "lucide-react"
import Link from "next/link"
import FAQSection from "@/components/sections/faq-section"

const cyberSecurityFaqs = [
  {
    question: "What types of cyber threats can your security services protect against?",
    answer:
      "Our security services protect against a wide range of threats including malware, ransomware, phishing attacks, DDoS attacks, insider threats, and zero-day exploits. We employ a multi-layered security approach that combines preventive measures, detection systems, and response protocols to safeguard your digital assets against both known and emerging threats.",
  },
  {
    question: "How do you stay updated with the latest security threats?",
    answer:
      "We maintain partnerships with leading threat intelligence providers, participate in security communities, and conduct ongoing research to stay ahead of emerging threats. Our security team undergoes regular training and certification to ensure they're equipped with the latest knowledge and skills. We also perform continuous monitoring of global threat landscapes to quickly adapt our security strategies.",
  },
  {
    question: "Can you help with security compliance requirements like GDPR, HIPAA, or PCI DSS?",
    answer:
      "Yes, we have extensive experience helping organizations achieve and maintain compliance with various regulatory frameworks including GDPR, HIPAA, PCI DSS, ISO 27001, SOC 2, and others. Our compliance services include gap assessments, implementation of required controls, documentation development, staff training, and assistance with audit preparation.",
  },
  {
    question: "Do you offer employee security awareness training?",
    answer:
      "Yes, we provide comprehensive security awareness training programs tailored to your organization's specific needs. Our training covers phishing awareness, password security, social engineering defense, safe browsing habits, mobile device security, and data protection practices. We use a combination of interactive workshops, simulated phishing campaigns, online modules, and regular reinforcement activities to build a strong security culture within your organization.",
  },
  {
    question: "How do you handle security incidents if they occur?",
    answer:
      "We follow a structured incident response process: identification, containment, eradication, recovery, and lessons learned. Our team works quickly to identify the scope of the incident, contain the threat to prevent further damage, eliminate the root cause, restore systems to normal operation, and document lessons learned to prevent similar incidents. Throughout this process, we maintain clear communication with stakeholders and can coordinate with law enforcement or regulatory bodies when necessary.",
  },
]

export default function CyberSecurityPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-navy-900/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
                Cyber Security
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Comprehensive security solutions to protect your digital assets from threats and vulnerabilities.
              </p>
              <p className="text-muted-foreground mb-6">
                In today's digital landscape, cyber threats are constantly evolving. Our cyber security services help
                you stay ahead of these threats with proactive protection, detection, and response strategies tailored
                to your business needs.
              </p>
              <p className="text-muted-foreground mb-8">
                From security assessments and penetration testing to incident response and security monitoring, we
                provide end-to-end solutions to safeguard your critical assets and data.
              </p>

              {/* Experience and Clients Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Clock className="h-5 w-5 text-blue-400" />
                    <h3 className="text-xl font-bold">10+ Years</h3>
                  </div>
                  <p className="text-sm text-blue-200">Experience in Cyber Security</p>
                </div>
                <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-blue-400" />
                    <h3 className="text-xl font-bold">250+</h3>
                  </div>
                  <p className="text-sm text-blue-200">Clients Protected</p>
                </div>
              </div>

              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-purple-600 text-white shadow-glow transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]"
              >
                <Link href="/contact">Request a Security Consultation</Link>
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
                <Shield className="h-32 w-32 text-blue-400 relative z-10 group-hover:scale-110 transition-transform duration-500" />
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
              Our Cyber Security Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              We offer a comprehensive range of security services to protect your business from evolving cyber threats.
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
                    <Shield className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Security Assessments</h3>
                  <p className="text-muted-foreground mb-4">
                    Comprehensive evaluation of your security posture to identify vulnerabilities and risks.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Risk assessments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Vulnerability assessments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Security architecture review</span>
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
                    <Lock className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Security Implementation</h3>
                  <p className="text-muted-foreground mb-4">
                    Design and implementation of robust security controls and solutions.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Firewall and network security</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Endpoint protection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Data encryption solutions</span>
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
                    <Eye className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Security Monitoring</h3>
                  <p className="text-muted-foreground mb-4">
                    Continuous monitoring of your systems to detect and respond to security threats.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>24/7 security monitoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Threat detection and analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Security incident alerting</span>
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
                    <FileWarning className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Incident Response</h3>
                  <p className="text-muted-foreground mb-4">
                    Rapid response to security incidents to minimize damage and restore operations.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>24/7 incident response</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Breach investigation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Recovery and remediation</span>
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
              Our Security Approach
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              We follow a comprehensive approach to ensure your organization's security.
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
                    We begin by thoroughly assessing your current security posture, identifying vulnerabilities, and
                    understanding your specific business risks and compliance requirements.
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
                    Based on the assessment, we develop a comprehensive security strategy tailored to your
                    organization's specific needs, risk profile, and business objectives.
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
                  <h3 className="text-xl font-bold mb-2">Implementation</h3>
                  <p className="text-muted-foreground">
                    We implement security controls, technologies, and processes to protect your critical assets,
                    including networks, systems, applications, and data.
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
                  <h3 className="text-xl font-bold mb-2">Monitoring & Detection</h3>
                  <p className="text-muted-foreground">
                    We continuously monitor your environment for security threats and vulnerabilities, using advanced
                    tools and techniques to detect potential security incidents.
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
                  <h3 className="text-xl font-bold mb-2">Response & Recovery</h3>
                  <p className="text-muted-foreground">
                    We respond quickly to security incidents, containing threats, eradicating their cause, and helping
                    your organization recover normal operations as quickly as possible.
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
                  <h3 className="text-xl font-bold mb-2">Continuous Improvement</h3>
                  <p className="text-muted-foreground">
                    We regularly review and update your security program to address new threats, technologies, and
                    business changes, ensuring your security posture remains strong over time.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Cyber Security FAQs"
        description="Find answers to common questions about our cyber security services."
        faqs={cyberSecurityFaqs}
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
              Ready to Secure Your Business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground mb-8"
            >
              Contact us today to discuss how our cyber security services can help protect your organization from
              evolving threats.
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
