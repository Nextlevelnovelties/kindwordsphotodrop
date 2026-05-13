KINDWORDS PHOTO MESSAGE WEBSITE - FULL NEXT.JS PROJECT

WHAT THIS IS
A warm, spiritual, inviting QR-ready upload website where customers can upload a photo, write kind words up to 1000+ characters, choose from 40 frames/backgrounds, preview their image, download it, and submit the upload through UploadThing + Resend.

INCLUDED
- Next.js app router project
- UploadThing upload route
- Resend email route
- 40 warm/spiritual frames/backgrounds
- Multiple font choices
- 1000 character message box
- Live image preview/download
- PayPal + Cash App buttons
- QR-ready mobile-first design
- Netlify settings

HOW TO RUN IN VS CODE
1. Unzip this folder.
2. Open the folder that contains package.json in VS Code.
3. Open Terminal.
4. Run: npm install
5. Copy .env.local.example and rename it to .env.local
6. Add your real keys:
   UPLOADTHING_TOKEN=your UploadThing token beginning with eyJ
   RESEND_API_KEY=your Resend API key
   NOTIFICATION_EMAIL=photodrop.qrpay.upload@gmail.com
7. Run: npm run dev
8. Open: http://localhost:3000

NETLIFY DEPLOYMENT
Build command: npm run build
Publish directory: .next
Base directory: leave blank if package.json is in the root folder

After deploy, add environment variables inside Netlify:
UPLOADTHING_TOKEN
RESEND_API_KEY
NOTIFICATION_EMAIL

Then use: Deploys > Trigger deploy > Clear cache and deploy site

COMMON FIXES
- .env.local must be beside package.json
- Restart npm run dev after changing environment variables
- UploadThing token should begin with eyJ
- Do not upload node_modules or .next manually


PUBLIC QR CODE UPDATE
- The QR code is included at: public/qr-code.jpg
- The homepage displays it using: /qr-code.jpg
- Keep the public folder in the root next to app, package.json, and netlify.toml.
