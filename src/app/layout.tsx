import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "3Crypter - Encrypt your notes safely",
  description: "3Crypter - Encrypt your notes safely",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#1B1F24] h-screen p-16">
        {children}
      </body>
    </html>
  );
}
