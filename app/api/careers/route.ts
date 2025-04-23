import { NextResponse } from "next/server"
import { Resend } from "resend"
import { getCareersTeamEmailTemplate, getCareersUserEmailTemplate } from "@/lib/email-templates"

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const formData = await request.formData()

    // Extract form fields
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const position = formData.get("position") as string
    const experience = formData.get("experience") as string
    const coverLetter = formData.get("coverLetter") as string
    const resume = formData.get("resume") as File | null

    // Validate required fields
    if (!firstName || !lastName || !email || !position || !resume) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In a real implementation, you would handle the resume file
    // For example, upload it to a storage service and get a URL
    // For this example, we'll just acknowledge its presence
    const resumeInfo = resume ? `Resume provided: ${resume.name} (${resume.size} bytes)` : "No resume provided"

    // Send email to careers team
    const teamEmailResponse = await resend.emails.send({
      from: "VepDec HR Team <careers@vepdec.com>",
      to: "careers@vepdec.com",
      subject: `New Job Application: ${position}`,
      html:
        getCareersTeamEmailTemplate(firstName, lastName, email, phone, position, experience, coverLetter, resumeInfo) +
        `<br><br>User Email: ${email}`,
    })

    // Send confirmation email to applicant
    const userEmailResponse = await resend.emails.send({
      from: "VepDec No-Reply <no-reply@vepdec.com>",
      to: email,
      subject: `Thank you for your Job Application: ${position} to VepDec`,
      html: getCareersUserEmailTemplate(firstName, lastName, position),
    })

    return NextResponse.json({
      message: "Application submitted successfully",
      teamEmailStatus: teamEmailResponse.data ? "success" : "error",
      userEmailStatus: userEmailResponse.data ? "success" : "error",
    })
  } catch (error) {
    console.error("Error processing application:", error)
    return NextResponse.json({ error: "Failed to process application" }, { status: 500 })
  }
}
