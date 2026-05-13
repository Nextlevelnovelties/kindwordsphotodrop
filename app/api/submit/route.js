import { Resend } from 'resend';

export async function POST(req) {
  try {
    const body = await req.json();

    const resendKey = process.env.RESEND_API_KEY;
    const to = process.env.NOTIFICATION_EMAIL || 'photodrop.qrpay.upload@gmail.com';

    if (!resendKey) {
      return Response.json({ error: 'Missing RESEND_API_KEY' }, { status: 500 });
    }

    const resend = new Resend(resendKey);

    let previewBase64 = '';
    let hasAttachment = false;

    if (body.previewImage && body.previewImage.startsWith('data:image')) {
      previewBase64 = body.previewImage.split(',')[1];
      hasAttachment = true;
    }

    const html = `
      <div style="font-family:Arial,sans-serif;padding:24px;background:#120b15;color:#ffffff;">
        <h1 style="color:#ffd6a5;">🕊️ New KindWords Photo Message</h1>
        <p>A customer created a warm photo message.</p>

        <div style="background:#1f1424;padding:20px;border-radius:20px;margin:20px 0;">
          <p><strong>Customer Name:</strong> ${body.customerName || ''}</p>
          <p><strong>Customer Email:</strong> ${body.customerEmail || ''}</p>
          <p><strong>Payment Confirmation:</strong> ${body.payment || ''}</p>
          <hr />
          <p><strong>Frame:</strong> ${body.frameName || ''}</p>
          <p><strong>Font:</strong> ${body.font || ''}</p>
          <p><strong>Title:</strong> ${body.title || ''}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space:pre-wrap;line-height:1.6;">${body.message || ''}</p>
          <p><strong>Uploaded Photo:</strong> ${body.uploadedUrl || 'Uploaded through browser preview'}</p>
        </div>

        <h2 style="color:#ffd6a5;">Finished Image Preview</h2>

        ${
          hasAttachment
            ? `<p>The finished KindWords image is attached to this email.</p>`
            : `<p>No finished image attachment was received.</p>`
        }

        ${
          body.uploadedUrl
            ? `<p><a href="${body.uploadedUrl}" style="color:#ffd6a5;">Open Uploaded Photo</a></p>`
            : ''
        }
      </div>
    `;

    await resend.emails.send({
      from: 'KindWords PhotoDrop <onboarding@resend.dev>',
      to,
      subject: `New KindWords Upload - ${body.customerName || 'Customer'}`,
      html,
      attachments: hasAttachment
        ? [
            {
              filename: `kindwords-${Date.now()}.png`,
              content: previewBase64,
            },
          ]
        : [],
    });

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json({ error: String(error) }, { status: 500 });
  }
}