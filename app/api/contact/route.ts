import { EmailTemplate } from '@/components/email-template';
import { NextResponse } from 'next/server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ success: false }, { status: 400 });
  }

  // Send email using resend API
  try {
    const { data, error } = await resend.emails.send({
      from: `${name} <hello@devcharles.com>`,
      to: ['c_ukasoanya@yahoo.com'],
      subject: `New message from ${name}`,
      //   html: `<div>
      //             <p>You have a new contact form submission</p>
      //             <p>
      //             <strong>Name: </strong> ${name}
      //             </p>
      //             <p>
      //             <strong>Email: </strong> ${email}
      //             </p>
      //             <p>
      //             <strong>Message: </strong> ${message}
      //             </p>
      //         </div>`,
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      console.error(error);
      return NextResponse.json(
        { success: false, error: error },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true, data: data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
}
