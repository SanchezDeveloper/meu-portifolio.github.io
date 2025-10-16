import "./globals.css";
import type { Metadata } from "next";
import { Inter, Work_Sans } from "next/font/google";
import ClientLayout from "@/components/ClientLayout";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meu Portfólio - Vinícius Caio",
  description: "Desenvolvedor Web - Full Stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${workSans.variable} antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
