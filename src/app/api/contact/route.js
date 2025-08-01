// app/api/contact/route.js
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const contentType = req.headers.get('content-type');
        let body, name, email, company, phone, subject, message, file = null;

        // Handle different content types
        if (contentType && contentType.includes('multipart/form-data')) {
            // Handle file upload (from JobBoard component)
            const formData = await req.formData();
            name = formData.get('name');
            email = formData.get('email');
            company = formData.get('company');
            phone = formData.get('phone');
            subject = formData.get('subject') || 'CV Submission';
            message = formData.get('message') || 'CV submission for talent pool';
            file = formData.get('cv'); // file object
        } else {
            // Handle regular contact form (from ContactUs component)
            body = await req.json();
            ({ name, email, company, phone, subject, message } = body);
        }

        // Validasi input
        if (!name || !email || !subject || !message) {
            return new Response(JSON.stringify({ error: 'Missing required fields' }), {
                status: 400,
            });
        }

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

        // Prepare attachment if file exists
        let attachments = [];
        if (file && file.size > 0) {
            const buffer = Buffer.from(await file.arrayBuffer());
            attachments.push({
                filename: file.name,
                content: buffer,
                contentType: file.type
            });
        }

        // Email untuk admin - disesuaikan berdasarkan ada file atau tidak
        let mailOptionsToAdmin = {
            from: process.env.SMTP_USER,
            to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
            subject: file ? `New CV Submission: ${name}` : `New Contact Form Submission: ${subject}`,
            attachments: attachments, // Attach file jika ada
            html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <div style="background-color: #8dbb3f; padding: 20px; text-align: center;">
                    <h1 style="color: white; margin: 0; font-size: 28px;">People Impact</h1>
                    <p style="color: white; margin: 5px 0 0; opacity: 0.9;">HR Consulting Excellence</p>
                </div>
                
                <h2 style="background-color: #35612f; padding: 16px; color: #FFFFFF; font-size: 24px; font-weight: bold; margin: 0;">
                    ${file ? 'New CV Submission' : 'New Contact Form Submission'}
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
                    
                    ${file ? `
                    <div style="background-color: #fff3cd; padding: 16px; border-bottom: 1px solid #ddd; border-left: 4px solid #ffc107;">
                        <p style="text-transform: uppercase; font-weight: bold; font-size: 14px; margin: 0; color: #856404;">CV ATTACHMENT</p>
                        <p style="margin: 4px 0 0; font-size: 16px; color: #856404;">📎 ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)</p>
                    </div>
                    ` : ''}
                    
                    <div style="background-color: #e8f1fc; padding: 16px; border-bottom: 1px solid #ddd;">
                        <p style="text-transform: uppercase; font-weight: bold; font-size: 14px; margin: 0; color: #119bd3;">Message</p>
                        <p style="margin: 4px 0 0; font-size: 16px; white-space: pre-wrap;">${message}</p>
                    </div>
                    
                    <div style="background-color: #a8d08d; padding: 20px; text-align: center; margin-top: 20px;">
                        <p style="margin: 0; font-size: 12px; color: #333;">
                            This message was sent through the People Impact ${file ? 'job application' : 'contact'} form on ${new Date().toLocaleString('id-ID')}
                        </p>
                    </div>
                </div>
            </div>
            `,
        };

        // Email konfirmasi untuk user - disesuaikan berdasarkan ada file atau tidak
        let mailOptionsToUser = {
            from: process.env.SMTP_USER,
            to: email,
            subject: file ? 'Thank you for your CV submission - People Impact' : 'Thank you for contacting People Impact',
            html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <div style="background-color: #8dbb3f; padding: 20px; text-align: center;">
                    <h1 style="color: white; margin: 0; font-size: 28px;">People Impact</h1>
                    <p style="color: white; margin: 5px 0 0; opacity: 0.9;">HR Consulting Excellence</p>
                </div>
                
                <h2 style="background-color: #119bd3; padding: 16px; color: #FFFFFF; font-size: 24px; font-weight: bold; margin: 0;">
                    ${file ? 'CV Submission Received!' : 'Thank You for Contacting Us!'}
                </h2>
                
                <div style="padding: 30px 20px;">
                    <p style="font-size: 18px; color: #35612f; margin: 0 0 20px;">Dear ${name},</p>
                    
                    ${file ? `
                    <p style="font-size: 16px; line-height: 1.6; color: #333; margin: 0 0 20px;">
                        Thank you for submitting your CV to our talent pool. We have successfully received your application and CV file.
                    </p>
                    <div style="background-color: #d4edda; border: 1px solid #c3e6cb; border-radius: 5px; padding: 15px; margin: 20px 0;">
                        <p style="margin: 0; color: #155724; font-weight: bold;">✅ CV Received: ${file.name}</p>
                        <p style="margin: 5px 0 0; color: #155724; font-size: 14px;">Our recruitment team will review your profile and contact you if there's a suitable opportunity that matches your qualifications.</p>
                    </div>
                    <p style="font-size: 16px; line-height: 1.6; color: #333; margin: 0 0 20px;">
                        We typically review applications within 3-5 business days. Thank you for your interest in working with our clients!
                    </p>
                    ` : `
                    <p style="font-size: 16px; line-height: 1.6; color: #333; margin: 0 0 20px;">
                        Thank you for reaching out to People Impact. We have received your message regarding 
                        <strong>"${subject}"</strong> and our team will review it carefully.
                    </p>
                    <p style="font-size: 16px; line-height: 1.6; color: #333; margin: 0 0 20px;">
                        We will get back to you within 24 hours during business days.
                    </p>
                    `}
                    
                    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6;">
                        <p style="font-size: 14px; color: #6c757d; margin: 0;">
                            <strong>People Impact Consulting</strong><br>
                            Epicentrum Walk, Lt. 3 A306<br>
                            Jl. HR. Rasuna Said, Kuningan<br>
                            Jakarta Selatan 12940<br>
                            Phone: +62 812 9777 0201<br>
                            Email: support@peopleimpact.co.id
                        </p>
                    </div>
                    
                    <p style="font-size: 16px; color: #333; margin: 30px 0 10px;">Best regards,</p>
                    <p style="font-size: 16px; color: #35612f; font-weight: bold; margin: 0;">People Impact Team</p>
                </div>
            </div>
            `,
        };

        await transporter.sendMail(mailOptionsToAdmin);
        await transporter.sendMail(mailOptionsToUser);
        
        return new Response(JSON.stringify({ 
            message: file ? 'CV uploaded and email sent successfully!' : 'Email sent successfully!' 
        }), {
            status: 200,
        });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ error: 'Failed to send email: ' + error.message }), {
            status: 500,
        });
    }
}