import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "pprithviraj18@gmail.com",
      subject: subject,
      html: `<p><strong>From:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
      reply_to: email,
    });

    return Response.json({ success: true, data }); 
  } catch (error) {
    console.error(error);
    return Response.json({ success: false, error });
  }
}
 
