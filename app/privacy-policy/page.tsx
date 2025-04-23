"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Lock, Shield, Eye, FileText, Phone, MapPin, Mail } from "lucide-react"
import FAQSection from "@/components/sections/faq-section"

const privacyFaqs = [
  {
    question: "What personal information do you collect?",
    answer:
      "We collect information you provide directly to us, such as when you create an account, fill out a form, or communicate with us. This may include your name, email address, phone number, company information, and any other information you choose to provide. We also automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and information about your usage of our site.",
  },
  {
    question: "How do you use cookies and similar technologies?",
    answer:
      "We use cookies and similar technologies to collect information about your browsing activities and to distinguish you from other users of our website. These technologies help us analyze website traffic, customize content, and improve your experience. We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device until you delete them or they expire). You can control cookies through your browser settings, though disabling certain cookies may limit your ability to use some features of our site.",
  },
  {
    question: "How do you protect my personal information?",
    answer:
      "We implement a variety of security measures to protect your personal information, including encryption, access controls, regular security assessments, and employee training. We store data in secure environments and regularly review our information collection, storage, and processing practices. While we strive to use commercially acceptable means to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    question: "Do you share my information with third parties?",
    answer:
      "We may share your information with service providers who perform services on our behalf, such as hosting providers, payment processors, and analytics services. We may also share information when required by law, to protect rights and safety, during corporate transactions, or with your consent. We do not sell your personal information to third parties for their marketing purposes without your explicit consent.",
  },
  {
    question: "How can I access, update, or delete my personal information?",
    answer:
      "You can access, update, or request deletion of your personal information by contacting us at privacy@vepdec.com. We will respond to your request within 30 days. Please note that we may need to retain certain information for record-keeping purposes, to complete transactions, or to comply with our legal obligations. We may also ask you to verify your identity before responding to your request.",
  },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-20 md:py-32">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-20 h-20 mx-auto mb-4 backdrop-blur-xl bg-white/10 border border-white/10 rounded-full flex items-center justify-center"
        >
          <Lock className="h-10 w-10 text-blue-400" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500"
        >
          Privacy Policy
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-blue-100 max-w-2xl mx-auto"
        >
          We are committed to protecting your privacy and ensuring the security of your personal information.
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="backdrop-blur-xl bg-white/10 border border-white/10 mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-blue-400" />
                Introduction
              </h2>
              <p className="text-blue-100 mb-4">
                This Privacy Policy explains how VepDec ("we", "us", or "our") collects, uses, and discloses your
                personal information when you visit our website, use our services, or otherwise interact with us.
              </p>
              <p className="text-blue-100">
                We take your privacy seriously and are committed to protecting your personal information. Please read
                this Privacy Policy carefully to understand our practices regarding your personal information.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="backdrop-blur-xl bg-white/10 border border-white/10 mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Eye className="h-6 w-6 text-blue-400" />
                Information We Collect
              </h2>
              <p className="text-blue-100 mb-4">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2 text-blue-100">
                <li>
                  <strong>Personal Information:</strong> Name, email address, phone number, and other contact details
                  you provide when you contact us, sign up for our newsletter, or use our services.
                </li>
                <li>
                  <strong>Usage Information:</strong> Information about how you use our website and services, including
                  your IP address, browser type, referring/exit pages, operating system, date/time stamps, and
                  clickstream data.
                </li>
                <li>
                  <strong>Device Information:</strong> Information about the device you use to access our website,
                  including hardware model, operating system and version, unique device identifiers, and mobile network
                  information.
                </li>
                <li>
                  <strong>Cookies and Similar Technologies:</strong> We use cookies and similar technologies to collect
                  information about your browsing activities and to distinguish you from other users of our website.
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card className="backdrop-blur-xl bg-white/10 border border-white/10 mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <FileText className="h-6 w-6 text-blue-400" />
                How We Use Your Information
              </h2>
              <p className="text-blue-100 mb-4">
                We may use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-blue-100">
                <li>Providing, maintaining, and improving our services</li>
                <li>Processing and completing transactions</li>
                <li>Sending you technical notices, updates, security alerts, and support messages</li>
                <li>Responding to your comments, questions, and requests</li>
                <li>Communicating with you about products, services, offers, promotions, and events</li>
                <li>Monitoring and analyzing trends, usage, and activities in connection with our services</li>
                <li>Detecting, investigating, and preventing fraudulent transactions and other illegal activities</li>
                <li>Personalizing and improving your experience on our website</li>
                <li>Complying with legal obligations</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="backdrop-blur-xl bg-white/10 border border-white/10 mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-blue-400" />
                Information Sharing and Disclosure
              </h2>
              <p className="text-blue-100 mb-4">We may share your information in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2 text-blue-100">
                <li>
                  With vendors, consultants, and other service providers who need access to such information to carry
                  out work on our behalf
                </li>
                <li>
                  In response to a request for information if we believe disclosure is in accordance with, or required
                  by, any applicable law, regulation, or legal process, including the laws of Pakistan, such as the
                  Protection of Personal Data Privacy Bill, 2020, and other relevant legislation.
                </li>
                <li>
                  If we believe your actions are inconsistent with our user agreements or policies, or to protect the
                  rights, property, and safety of VepDec or others
                </li>
                <li>
                  In connection with, or during negotiations of, any merger, sale of company assets, financing, or
                  acquisition of all or a portion of our business by another company
                </li>
                <li>
                  Between and among VepDec and our current and future parents, affiliates, subsidiaries, and other
                  companies under common control and ownership
                </li>
                <li>With your consent or at your direction</li>
              </ul>
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
              If you have any questions about these Privacy Policy, please contact us at:
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

      {/* Privacy Policy FAQs */}
      <FAQSection
        title="Privacy Policy FAQs"
        description="Common questions about how we handle your data."
        faqs={privacyFaqs}
        className="mt-16"
      />
    </div>
  )
}
