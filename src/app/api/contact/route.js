// app/api/contact/route.js
import nodemailer from 'nodemailer';

export async function POST(req) {
    const body = await req.json();
    const { name, email, company, phone, subject, message } = body;

    // Validasi input
    if (!name || !email || !subject || !message) {
        return new Response(JSON.stringify({ error: 'Missing required fields' }), {
            status: 400,
        });
    }

    // Ganti createTransporter dengan createTransport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    // Rest of the code sama...
    let mailOptionsToAdmin = {
        from: process.env.SMTP_USER,
        to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
        subject: `New Contact Form Submission: ${subject}`,
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background-color: #8dbb3f; padding: 20px; text-align: center;">
                <h1 style="color: white; margin: 0; font-size: 28px;">People Impact</h1>
                <p style="color: white; margin: 5px 0 0; opacity: 0.9;">HR Consulting Excellence</p>
            </div>
            
            <h2 style="background-color: #35612f; padding: 16px; color: #FFFFFF; font-size: 24px; font-weight: bold; margin: 0;">
                New Contact Form Submission
            </h2>
            
            <div>
                <div style="background-color: #f8f9fa; padding: 16px; border-bottom: 1px solid #ddd;">
                    <p style="text-transform: uppercase; font-weight: bold; font-size: 14px; margin: 0; color: #35612f;">Name</p>
                    <p style="margin: 4px 0 0; font-size: 16px;">${name}</p>
                </div>
                
                <div style="background-color: #e8f1fc; padding: 16px; border-bottom: 1px solid #ddd;">
                    <p style="text-transform: uppercase; font-weight: bold; font-size: 14px; margin: 0; color: #119bd3;">Email</p>
                    <p style="margin: 4px 0 0; font-size: 16px;">${email}</p>
                </div>
                
                <div style="background-color: #f8f9fa; padding: 16px; border-bottom: 1px solid #ddd;">
                    <p style="text-transform: uppercase; font-weight: bold; font-size: 14px; margin: 0; color: #35612f;">Company</p>
                    <p style="margin: 4px 0 0; font-size: 16px;">${company || 'Not provided'}</p>
                </div>
                
                <div style="background-color: #e8f1fc; padding: 16px; border-bottom: 1px solid #ddd;">
                    <p style="text-transform: uppercase; font-weight: bold; font-size: 14px; margin: 0; color: #119bd3;">Phone</p>
                    <p style="margin: 4px 0 0; font-size: 16px;">${phone || 'Not provided'}</p>
                </div>
                
                <div style="background-color: #f8f9fa; padding: 16px; border-bottom: 1px solid #ddd;">
                    <p style="text-transform: uppercase; font-weight: bold; font-size: 14px; margin: 0; color: #35612f;">Subject</p>
                    <p style="margin: 4px 0 0; font-size: 16px;">${subject}</p>
                </div>
                
                <div style="background-color: #e8f1fc; padding: 16px; border-bottom: 1px solid #ddd;">
                    <p style="text-transform: uppercase; font-weight: bold; font-size: 14px; margin: 0; color: #119bd3;">Message</p>
                    <p style="margin: 4px 0 0; font-size: 16px; white-space: pre-wrap;">${message}</p>
                </div>
                
                <div style="background-color: #a8d08d; padding: 20px; text-align: center; margin-top: 20px;">
                    <p style="margin: 0; font-size: 12px; color: #333;">
                        This message was sent through the People Impact contact form on ${new Date().toLocaleString('id-ID')}
                    </p>
                </div>
            </div>
        </div>
        `,
    };

    let mailOptionsToUser = {
        from: process.env.SMTP_USER,
        to: email,
        subject: 'Thank you for contacting People Impact',
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background-color: #8dbb3f; padding: 20px; text-align: center;">
                <h1 style="color: white; margin: 0; font-size: 28px;">People Impact</h1>
                <p style="color: white; margin: 5px 0 0; opacity: 0.9;">HR Consulting Excellence</p>
            </div>
            
            <h2 style="background-color: #119bd3; padding: 16px; color: #FFFFFF; font-size: 24px; font-weight: bold; margin: 0;">
                Thank You for Contacting Us!
            </h2>
            
            <div style="padding: 30px 20px;">
                <p style="font-size: 18px; color: #35612f; margin: 0 0 20px;">Dear ${name},</p>
                <p style="font-size: 16px; line-height: 1.6; color: #333; margin: 0 0 20px;">
                    Thank you for reaching out to People Impact. We have received your message regarding 
                    <strong>"${subject}"</strong> and our team will review it carefully.
                </p>
                <p style="font-size: 16px; color: #333; margin: 30px 0 10px;">Best regards,</p>
                <p style="font-size: 16px; color: #35612f; font-weight: bold; margin: 0;">People Impact Team</p>
            </div>
        </div>
        `,
    };

    try {
        await transporter.sendMail(mailOptionsToAdmin);
        await transporter.sendMail(mailOptionsToUser);
        
        return new Response(JSON.stringify({ message: 'Email sent successfully!' }), {
            status: 200,
        });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ error: 'Failed to send email: ' + error.message }), {
            status: 500,
        });
    }
}