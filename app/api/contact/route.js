import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const data = await request.json();

    // Basic validation
    const required = ["name", "email", "projectType", "description"];

    for (const field of required) {
      if (!data[field] || String(data[field]).trim() === "") {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Send email
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "asad.dev750@gmail.com",
      subject: `New project inquiry from ${data.name}`,
      replyTo: data.email,
      text: `
New Project Inquiry

Name: ${data.name}
Email: ${data.email}
Project Type: ${data.projectType}

Description:
${data.description}
      `,
    });

    return NextResponse.json({
      ok: true,
      message: "Message sent successfully",
    });
  } catch (err) {
    console.error("Email error:", err);

    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}


// import { NextResponse } from "next/server";

// export async function POST(request) {
//   try {
//     const data = await request.json();

//     // Basic validation
//     const required = ["name", "email", "projectType", "description"];
//     for (const field of required) {
//       if (!data[field] || String(data[field]).trim() === "") {
//         return NextResponse.json(
//           { error: `Missing required field: ${field}` },
//           { status: 400 },
//         );
//       }
//     }

//     // TODO (V1): Plug in an email service here (e.g. Resend, SendGrid, Nodemailer).
//     // Example:
//     // await resend.emails.send({
//     //   from: "portfolio@yourdomain.com",
//     //   to: "hello@yourdomain.com",
//     //   subject: `New project inquiry from ${data.name}`,
//     //   text: JSON.stringify(data, null, 2),
//     // });

//     console.log("New project inquiry:", data);

//     return NextResponse.json({ ok: true });
//   } catch (err) {
//     return NextResponse.json(
//       { error: "Invalid request body" },
//       { status: 400 },
//     );
//   }
// }
