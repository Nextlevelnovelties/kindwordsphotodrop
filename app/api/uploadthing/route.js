export async function POST(req) {
  try {
    // Simple fallback upload endpoint for local testing.
    // In production, replace with your UploadThing server route if desired.
    // The website still uses UPLOADTHING_TOKEN in your environment checklist.
    const form = await req.formData();
    const file = form.get('files');
    if (!file) return Response.json({ error: 'No file uploaded' }, { status: 400 });
    return Response.json({
      url: 'Uploaded through browser preview. Connect UploadThing route for permanent hosted file URL.',
      name: file.name || 'customer-photo'
    });
  } catch (error) {
    return Response.json({ error: String(error) }, { status: 500 });
  }
}
