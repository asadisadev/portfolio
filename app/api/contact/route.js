import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();

    // Basic validation
    const required = ["name", "email", "projectType", "description"];
    for (const field of required) {
      if (!data[field] || String(data[field]).trim() === "") {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 },
        );
      }
    }

    // TODO (V1): Plug in an email service here (e.g. Resend, SendGrid, Nodemailer).
    // Example:
    // await resend.emails.send({
    //   from: "portfolio@yourdomain.com",
    //   to: "hello@yourdomain.com",
    //   subject: `New project inquiry from ${data.name}`,
    //   text: JSON.stringify(data, null, 2),
    // });

    console.log("New project inquiry:", data);

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 },
    );
  }
}
