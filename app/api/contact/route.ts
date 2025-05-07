import { NextResponse } from 'next/server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { first_name, last_name, email, phone_number, message } =
    await request.json();

  if (!first_name || !last_name || !email || !phone_number || !message) {
    return NextResponse.json({ success: false }, { status: 400 });
  }

  // Send email using resend API
  try {
    const { data, error } = await resend.emails.send({
      from: `${first_name + ' ' + last_name} <onboarding@resend.dev>`,
      to: ['c_ukasoanya@yahoo.com'],
      subject: `New message from ${first_name + ' ' + last_name}`,
      html: `<div>
                <p>You have a new contact form submission</p>
                <p>
                <strong>Name: </strong> ${first_name + ' ' + last_name}
                </p>
                <p>
                <strong>Email: </strong> ${email}
                </p>
                <p>
                <strong>Phone Number: </strong> ${phone_number}
                </p>
                <p>
                <strong>Message: </strong> ${message}
                </p>
            </div>`,
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
