import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SIRC - IRC Reimagined for the Decentralized Era",
  description: "A hyper-clean, dark-mode native IRC client for macOS and Windows. Engineered for seamless file sharing and built to preserve history.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
