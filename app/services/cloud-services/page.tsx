"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Cloud, Server, Database, Users, Award } from "lucide-react"
import Link from "next/link"
import FAQSection from "@/components/sections/faq-section"

const cloudFaqs = [
  {
    question: "How do you approach cloud migration for businesses?",
    answer:
      "Our cloud migration approach follows a structured methodology: assessment (evaluating current infrastructure and applications), planning (developing migration strategy and selecting cloud providers), preparation (creating detailed migration plans and establishing governance), migration execution (using appropriate strategies like rehosting, refactoring, or rebuilding), and optimization (monitoring performance and costs post-migration). We prioritize business continuity throughout the process and implement robust security measures to protect data during and after migration.",
  },
  {
    question: "How do you ensure security in cloud environments?",
    answer:
      "We implement a comprehensive cloud security framework that includes identity and access management with least privilege principles, network security with proper segmentation and firewalls, data encryption both in transit and at rest, continuous security monitoring and threat detection, regular vulnerability assessments and penetration testing, and compliance management for relevant regulations. We also provide security training for your team and establish incident response procedures specifically for cloud environments.",
  },
  {
    question: "Can you help optimize our cloud costs?",
    answer:
      "Yes, our cloud cost optimization services include: right-sizing computing resources to match actual usage, implementing auto-scaling to adjust resources based on demand, identifying and removing unused or orphaned resources, leveraging reserved instances and savings plans for predictable workloads, using spot instances for non-critical, interruptible workloads, implementing storage lifecycle policies to move data to lower-cost tiers, and providing detailed cost allocation and reporting to identify optimization opportunities.",
  },
  {
    question: "What cloud providers do you work with?",
    answer:
      "We have expertise across all major cloud providers including Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP), and IBM Cloud. We're also experienced with specialized providers like DigitalOcean, Linode, and Oracle Cloud. Our team holds numerous certifications across these platforms, and we maintain partnerships with the major providers. We can recommend the best provider(s) for your specific needs or work with your existing cloud infrastructure.",
  },
  {
    question: "How do you handle multi-cloud and hybrid cloud environments?",
    answer:
      "For multi-cloud and hybrid environments, we implement unified management tools for consistent operations across platforms, establish standardized security policies and controls, create centralized monitoring and logging solutions, develop clear data governance strategies to manage data across environments, implement network solutions for secure connectivity between clouds and on-premises systems, and design disaster recovery plans that leverage multiple environments. Our approach focuses on maximizing the benefits of each platform while maintaining operational simplicity.",
  },
]

const features = [
  "Cloud migration & strategy",
  "Infrastructure as a Service (IaaS)",
  "Platform as a Service (PaaS)",
  "Software as a Service (SaaS)",
  "Cloud security implementation",
  "DevOps & CI/CD pipelines",
  "Serverless architecture",
  "Cloud cost optimization",
]

const methodologySteps = [
  {
    title: "Assessment & Planning",
    description: "We evaluate your current infrastructure and develop a tailored cloud strategy.",
    icon: Cloud,
  },
  {
    title: "Architecture Design",
    description: "We design a secure, scalable cloud architecture aligned with your business needs.",
    icon: Server,
  },
  {
    title: "Migration",
    description: "We execute a seamless migration with minimal disruption to your operations.",
    icon: Database,
  },
  {
    title: "Implementation & Integration",
    description: "We implement cloud services and integrate them with your existing systems.",
    icon: Cloud,
  },
  {
    title: "Security & Compliance",
    description: "We implement robust security measures and ensure compliance with regulations.",
    icon: Server,
  },
  {
    title: "Optimization & Management",
    description: "We continuously optimize your cloud environment for performance and cost efficiency.",
    icon: Database,
  },
]

const cloudServices = [
  {
    id: "aws",
    name: "AWS Cloud Services",
    description: "Comprehensive solutions leveraging Amazon Web Services' robust infrastructure and services.",
    features: [
      "EC2 & ECS implementation",
      "S3 storage solutions",
      "RDS database management",
      "Lambda serverless functions",
    ],
  },
  {
    id: "azure",
    name: "Microsoft Azure Services",
    description: "Enterprise-grade cloud solutions built on Microsoft's powerful Azure platform.",
    features: ["Azure Virtual Machines", "Azure App Services", "Azure SQL Database", "Azure Functions"],
  },
  {
    id: "gcp",
    name: "Google Cloud Platform",
    description: "Innovative cloud solutions powered by Google's cutting-edge infrastructure.",
    features: ["Google Compute Engine", "Google Kubernetes Engine", "Cloud SQL", "Cloud Functions"],
  },
]

export default function CloudServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-navy-900/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
                Cloud Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Scalable, secure, and efficient cloud solutions for modern businesses.
              </p>
              <p className="text-muted-foreground mb-6">
                Our cloud services help you leverage the power of cloud computing to improve agility, reduce costs, and
                accelerate innovation. We provide end-to-end cloud solutions, from strategy and migration to
                optimization and management.
              </p>
              <p className="text-muted-foreground mb-8">
                Whether you're looking to migrate to the cloud, optimize your existing cloud infrastructure, or
                implement a hybrid or multi-cloud strategy, our experts can help you achieve your goals.
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-blue-400" />
                  <span className="text-lg font-semibold">7+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-400" />
                  <span className="text-lg font-semibold">300+ Clients Served</span>
                </div>
              </div>
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-purple-600 text-white shadow-glow transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]"
              >
                <Link href="/contact">Request a Cloud Consultation</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="w-full max-w-md aspect-square backdrop-blur-xl bg-white/10 border border-white/10 rounded-xl flex items-center justify-center">
                <Cloud className="h-32 w-32 text-blue-400" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Comprehensive Cloud Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              We offer a full range of cloud services to help you harness the power of cloud computing.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="backdrop-blur-xl bg-white/10 border border-white/10 h-full transition-all duration-300 hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)]">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <CheckCircle className="text-blue-400 mr-2 h-5 w-5 mt-0.5 shrink-0" />
                      <p>{feature}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
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
              Our Cloud Methodology
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              We follow a structured approach to ensure successful cloud implementation and management.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methodologySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <Card className="backdrop-blur-xl bg-white/10 border border-white/10 h-full transition-all duration-300 hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)]">
                  <CardHeader>
                    <div className="w-12 h-12 mb-4 backdrop-blur-xl bg-white/10 border border-white/10 rounded-full flex items-center justify-center">
                      <step.icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <CardTitle>{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Platforms Section */}
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
              Cloud Platforms We Support
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              We have expertise across all major cloud platforms to meet your specific needs.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <Card className="backdrop-blur-xl bg-white/10 border border-white/10 h-full transition-all duration-300 hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)]">
                  <CardHeader>
                    <CardTitle>{service.name}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Cloud Services FAQs"
        description="Find answers to common questions about our cloud services."
        faqs={cloudFaqs}
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
              Ready to Transform Your Business with Cloud?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground mb-8"
            >
              Contact us today to discuss how our cloud services can help you achieve your business goals.
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
