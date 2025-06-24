import './globals.css';

export const metadata = {
  title: 'Artistly',
  description: 'Performing Artist Booking Platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
