export const getContactTeamEmailTemplate = (name: string, email: string, subject: string, message: string) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #0a0f1f; padding: 20px; text-align: center;">
        <h1 style="color: #3b82f6; margin: 0;">New Contact Form Submission</h1>
      </div>
      <div style="padding: 20px; background-color: #f9fafb; border-radius: 0 0 5px 5px;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <div style="background-color: #ffffff; padding: 15px; border-radius: 5px; border-left: 4px solid #3b82f6;">
          ${message.replace(/\n/g, "<br>")}
        </div>
        <p><strong>User Email:</strong> ${email}</p>
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; font-size: 12px; color: #6b7280;">
          <p>This is an automated message from the VepDec contact system.</p>
        </div>
      </div>
    </div>
  `
}

export const getContactUserEmailTemplate = (name: string) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #0a0f1f; padding: 20px; text-align: center;">
        <h1 style="color: #3b82f6; margin: 0;">Thank You for Contacting VepDec</h1>
      </div>
      <div style="padding: 20px; background-color: #f9fafb; border-radius: 0 0 5px 5px;">
        <p>Dear ${name},</p>
        <p>We have received your message and appreciate your interest in our services. Our team will review your inquiry and get back to you as soon as possible.</p>
        <div style="background-color: #ffffff; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #3b82f6; margin-top: 0;">Our Services</h3>
          <ul style="padding-left: 20px;">
            <li><strong>Cyber Security:</strong> Comprehensive security solutions to protect your digital assets.</li>
            <li><strong>Penetration Testing:</strong> Identify security weaknesses before malicious actors can exploit them.</li>
            <li><strong>Vulnerability Assessment:</strong> Systematic review of security weaknesses in your systems.</li>
            <li><strong>Web Development:</strong> Custom web applications built with security and performance in mind.</li>
            <li><strong>App Development:</strong> Native and cross-platform mobile applications.</li>
            <li><strong>Digital Marketing:</strong> Strategic marketing solutions to boost your online presence.</li>
          </ul>
        </div>
        <p>If you have any urgent matters, please contact us directly at <a href="mailto:support@vepdec.com" style="color: #3b82f6;">support@vepdec.com</a> or call <a href="tel:+923333720166" style="color: #3b82f6;">+92 333 3720166</a>.</p>
        <p>Best regards,<br>The VepDec Team</p>
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; font-size: 12px; color: #6b7280;">
          <p>This is an automated message. Please do not reply to this email.</p>
        </div>
      </div>
    </div>
  `
}

export const getCareersTeamEmailTemplate = (
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  position: string,
  experience: string,
  coverLetter: string,
  resumeInfo: string,
) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #0a0f1f; padding: 20px; text-align: center;">
        <h1 style="color: #3b82f6; margin: 0;">New Job Application</h1>
      </div>
      <div style="padding: 20px; background-color: #f9fafb; border-radius: 0 0 5px 5px;">
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Experience:</strong> ${experience || "Not specified"}</p>
        <p><strong>Cover Letter:</strong></p>
        <div style="background-color: #ffffff; padding: 15px; border-radius: 5px; border-left: 4px solid #3b82f6;">
          ${coverLetter ? coverLetter.replace(/\n/g, "<br>") : "Not provided"}
        </div>
        <p><strong>Resume:</strong> ${resumeInfo}</p>
        <p><strong>User Email:</strong> ${email}</p>
        <p>Please review this application and contact the candidate if they meet the requirements.</p>
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; font-size: 12px; color: #6b7280;">
          <p>This is an automated message from the VepDec careers system.</p>
        </div>
      </div>
    </div>
  `
}

export const getCareersUserEmailTemplate = (firstName: string, lastName: string, position: string) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #0a0f1f; padding: 20px; text-align: center;">
        <h1 style="color: #3b82f6; margin: 0;">Thank You for Your Application</h1>
      </div>
      <div style="padding: 20px; background-color: #f9fafb; border-radius: 0 0 5px 5px;">
        <p>Dear ${firstName} ${lastName},</p>
        <p>We have received your application for the <strong>${position}</strong> position at VepDec. Thank you for your interest in joining our team.</p>
        <p>Our HR department will carefully review your application. If your qualifications match our requirements, we will contact you to discuss the next steps in the hiring process.</p>
        <div style="background-color: #ffffff; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #3b82f6; margin-top: 0;">What to Expect Next</h3>
          <ul style="padding-left: 20px;">
            <li>Our HR team will review your application within 5-7 business days.</li>
            <li>If selected, you'll be contacted for an initial interview.</li>
            <li>The interview process typically includes technical assessments and team interviews.</li>
            <li>Final decisions are usually made within 2-3 weeks of the application deadline.</li>
          </ul>
        </div>
        <p>Please note that due to the high volume of applications we receive, we may not be able to respond to every applicant individually. If you don't hear from us within two weeks, it means that we have decided to move forward with other candidates whose qualifications better match our current needs.</p>
        <p>We appreciate your interest in VepDec and wish you the best in your job search.</p>
        <p>Best regards,<br>The VepDec HR Team</p>
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; font-size: 12px; color: #6b7280;">
          <p>This is an automated message. Please do not reply to this email.</p>
        </div>
      </div>
    </div>
  `
}
