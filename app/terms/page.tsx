"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Scale, AlertTriangle, HelpCircle, Coins, Phone, MapPin, Mail } from "lucide-react"
import FAQSection from "@/components/sections/faq-section"

const termsFaqs = [
  {
    question: "Can I use your services for illegal activities?",
    answer:
      "No, our services may not be used for any illegal purposes or to conduct activities that violate any applicable laws or regulations. This includes but is not limited to unauthorized access to systems, distribution of malware, phishing, fraud, or any activities that infringe on intellectual property rights. We reserve the right to terminate services immediately if we discover they are being used for illegal purposes.",
  },
  {
    question: "What happens if I violate the Terms of Service?",
    answer:
      "If you violate our Terms of Service, we may take various actions depending on the severity and nature of the violation. These actions may include issuing a warning, temporarily suspending your account, permanently terminating your access to our services, pursuing legal remedies, or reporting you to law enforcement authorities. We evaluate each situation individually and take appropriate action to protect our services, users, and legal interests.",
  },
  {
    question: "How do you handle intellectual property rights?",
    answer:
      "We respect intellectual property rights and expect our users to do the same. Content you create and provide to us remains yours, but you grant us certain rights to use it for providing and improving our services. For content protected by intellectual property rights that you share through our services, you grant us a non-exclusive, transferable, sub-licensable, royalty-free license to use that content. If you believe someone is infringing on your intellectual property rights, please contact us with details of the alleged infringement.",
  },
  {
    question: "Can the Terms of Service change over time?",
    answer:
      "Yes, we may modify these Terms of Service from time to time to reflect changes in our services, business practices, or legal requirements. When we make material changes, we'll provide notice appropriate to the circumstances, which may include displaying a prominent notice on our website or sending you an email. Your continued use of our services after such changes constitutes your acceptance of the updated terms. We encourage you to periodically review our Terms of Service to stay informed about our practices.",
  },
  {
    question: "What governing law applies to these Terms?",
    answer:
      "These Terms are governed by the laws of Pakistan, including the Prevention of Electronic Crimes Act (PECA) 2016. Any disputes will be handled exclusively by courts within Pakistan. These laws help ensure both data security and contractual integrity.",
  },
]

export default function TermsPage() {
  return (
    <div className="container py-20 md:py-32">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-20 h-20 mx-auto mb-4 backdrop-blur-xl bg-white/10 border border-white/10 rounded-full flex items-center justify-center"
        >
          <FileText className="h-10 w-10 text-blue-400" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500"
        >
          Terms and Conditions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-blue-100 max-w-2xl mx-auto"
        >
          Please read these terms and conditions carefully before using our services.
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Introduction */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
          <Card className="backdrop-blur-xl bg-white/10 border border-white/10 mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <FileText className="h-6 w-6 text-blue-400" />
                Introduction
              </h2>
              <p className="text-blue-100 mb-4">
                These Terms and Conditions ("Terms") govern your use of the VepDec website and services (collectively,
                the "Services") provided by VepDec ("we", "us", or "our").
              </p>
              <p className="text-blue-100">
                By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these
                Terms, please do not use our Services.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Use of Services */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
          <Card className="backdrop-blur-xl bg-white/10 border border-white/10 mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Scale className="h-6 w-6 text-blue-400" />
                Use of Services
              </h2>
              <p className="text-blue-100 mb-4">
                You may use our Services only as permitted by these Terms and any applicable laws and regulations.
              </p>
              <h3 className="text-xl font-semibold mb-2">License</h3>
              <p className="text-blue-100 mb-4">
                Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable,
                and revocable license to access and use our Services for your personal or internal business purposes.
              </p>
              <h3 className="text-xl font-semibold mb-2">Restrictions</h3>
              <p className="text-blue-100 mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 text-blue-100">
                <li>Use our Services in any way that violates any applicable laws or regulations</li>
                <li>Use our Services for any illegal or unauthorized purpose</li>
                <li>Attempt to gain unauthorized access to any portion of our Services or any systems or networks connected to our Services</li>
                <li>Interfere with or disrupt the integrity or performance of our Services</li>
                <li>Reproduce, duplicate, copy, sell, resell, or exploit any portion of our Services without our express written permission</li>
                <li>Use our Services to transmit any malware, viruses, or other harmful code</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Limitation of Liability */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
          <Card className="backdrop-blur-xl bg-white/10 border border-white/10 mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-blue-400" />
                Limitation of Liability
              </h2>
              <p className="text-blue-100 mb-4">
                To the maximum extent permitted by law, in no event shall VepDec, its directors, employees, partners,
                agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or
                punitive damages, including without limitation, loss of profits, data, use, goodwill, or other
                intangible losses, resulting from:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-blue-100">
                <li>Your access to or use of or inability to access or use the Services</li>
                <li>Any conduct or content of any third party on the Services</li>
                <li>Any content obtained from the Services</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              </ul>
              <p className="text-blue-100 mt-4">
                The limitations of liability set forth above are fundamental elements of the basis of the bargain
                between VepDec and you.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Payment & Legal Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
          <Card className="backdrop-blur-xl bg-white/10 border border-white/10 mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Coins className="h-6 w-6 text-blue-400" />
                Payment & Legal Terms
              </h2>

              <h3 className="text-xl font-semibold mb-2 text-blue-100">Payment Terms</h3>
              <p className="text-blue-100 mb-4">
                All payments for services must be made in full prior to project initiation, unless otherwise agreed in
                writing. Failure to complete payments on time may result in service disruption or termination.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-blue-100">Accepted Payment Methods</h3>
              <ul className="list-disc pl-6 mb-4 text-blue-100 space-y-1">
                <li>Cryptocurrency (Bitcoin, Ethereum, USDT, etc.)</li>
                <li>Bank Wire Transfer</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2 text-blue-100">Late Payment & Penalties</h3>
              <p className="text-blue-100 mb-4">
                A penalty of 5% of the outstanding balance will be applied for every 7 days past the due date.
                Continuous non-payment may lead to permanent suspension and legal proceedings.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-blue-100">Breach of Contract</h3>
              <p className="text-blue-100 mb-4">
                In case of breach, the non-breaching party has the right to terminate the agreement and seek
                compensation for damages. Breaches include, but are not limited to: misuse of service, failure to pay,
                and violation of intellectual property clauses.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-blue-100">Governing Law</h3>
              <p className="text-blue-100">
                These Terms and Conditions shall be governed in accordance with the laws of the Islamic Republic of
                Pakistan. This includes the Prevention of Electronic Crimes Act (PECA) 2016 and any other relevant IT or
                contractual legislation. Disputes shall fall under the jurisdiction of courts located in Pakistan.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="backdrop-blur-xl bg-white/10 border border-white/10">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Mail className="h-6 w-6 text-blue-400" />
                Contact Us
              </h2>
              <p className="text-blue-100 mb-4">
              If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <address className="not-italic text-blue-100 space-y-1">
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <a
                    href="mailto:support@vepdec.com"
                    className=" hover:text-blue-400"
                  >
                    support@vepdec.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <a
                    href="wa.me/+923333720166"
                    className=" hover:text-blue-400"
                  >
                    +92 333 3720166
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                  <span>
                    VepDec Office,
                    <br />
                    Karachi, Sindh,
                    <br />
                    Pakistan
                  </span>
                </div>
              </address>
              <p className="text-blue-100 mt-4">Last updated: April 8, 2025</p>
            </CardContent>
          </Card>
        </motion.div> 
      </div>

      {/* Terms FAQs */}
      <FAQSection
        title="Terms & Conditions FAQs"
        description="Common questions about our terms of service."
        faqs={termsFaqs}
        className="mt-16"
      />
    </div>
  )
}
