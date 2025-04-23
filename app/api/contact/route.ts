import { NextResponse } from "next/server"
import { Resend } from "resend"
import { getContactTeamEmailTemplate, getContactUserEmailTemplate } from "@/lib/email-templates"

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Send email to support team
    const teamEmailResponse = await resend.emails.send({
      from: "VepDec No-Reply <no-reply@vepdec.com>",
      to: "VepDec Support Team <support@vepdec.com>",
      subject: `New Contact Form Submission: ${subject}`,
      html: getContactTeamEmailTemplate(name, email, subject, message + `<br><br>User Email: ${email}`),
    })

    // Send confirmation email to user
    const userEmailResponse = await resend.emails.send({
      from: "VepDec No-Reply <no-reply@vepdec.com>",
      to: email,
      subject: `Thank you for contacting VepDec for: ${subject}`,
      html: getContactUserEmailTemplate(name),
    })

    return NextResponse.json({
      message: "Emails sent successfully",
      teamEmailStatus: teamEmailResponse.data ? "success" : "error",
      userEmailStatus: userEmailResponse.data ? "success" : "error",
    })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
