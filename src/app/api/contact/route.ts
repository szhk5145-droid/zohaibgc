import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, company, budget, service, details } = data;

    // Create a transporter using SMTP
    // You should use environment variables for real credentials
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER || '"Zohaib Global Contact" <noreply@zohaibglobal.com>', // sender address
      to: 'zhk5145@gmail.com', // User wants emails to go here
      subject: `New Project Inquiry from ${name}`, // Subject line
      text: `
Name: ${name}
Email: ${email}
Company: ${company || 'N/A'}
Budget: ${budget || 'N/A'}
Service: ${service || 'N/A'}

Project Details:
${details}
      `,
      html: `
        <h3>New Project Inquiry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Budget:</strong> ${budget || 'N/A'}</p>
        <p><strong>Service:</strong> ${service || 'N/A'}</p>
        <br/>
        <h4>Project Details:</h4>
        <p>${details.replace(/\n/g, '<br/>')}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
