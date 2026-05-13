import './globals.css';

export const metadata = {
  title: 'KindWords PhotoDrop | Warm Photo Messages',
  description: 'Upload a photo, write kind words, choose a beautiful frame, and create a warm keepsake image.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
