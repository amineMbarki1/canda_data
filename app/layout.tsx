import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const lato = Lato({ weight: ["400", "700", "300"], subsets: ["latin"] }, );

export const metadata: Metadata = {
  title: "Canada's most frequent ;)",
  description:
    "A simple tool detailing some info on Canada's most frequent names and emails ;)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " " + lato.className}>{children}</body>
    </html>
  );
}
