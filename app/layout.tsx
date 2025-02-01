import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pitchify",
  description: "Pitchify is a platform for sharing Ideas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
