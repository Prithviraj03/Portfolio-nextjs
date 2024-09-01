import { NextResponse } from "next/server";
import Nodemailer from "nodemailer";
import { MailtrapTransport } from "mailtrap";

const TOKEN = process.env.MAILTRAP_TOKEN || 
const fromEmail = process.env.FROM_EMAIL || 

const transport = Nodemailer.createTransport(
    MailtrapTransport({
        token: TOKEN,
        testInboxId: 3111505, 
    })
);

export async function POST(req, res) {
   
    const { email, subject, message } = await req.json();
    console.log(email, subject, message);
    try {
   
        const data = await transport.sendMail({
            from: fromEmail, 
            to: [fromEmail, email], 
            subject: subject || "No Subject", 
            text: message || "No Message", 
            react: (
                <>
                    <h1>{subject}</h1>
                    <p>Thank you for contacting us!</p>
                    <p>New message submitted:</p>
                    <p>{message}</p>
                </>
            ),
        });

        console.log("Email sent: ", data);

        
        return NextResponse.json({ success: true, message: "Email sent successfully", data });
    } catch (error) {
        console.error("Error sending email: ", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
