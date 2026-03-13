import { Geist, Geist_Mono, Playfair_Display } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const fontSerif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn("antialiased", fontMono.variable, "font-sans", fontSans.variable, fontSerif.variable)}
    >
      <body>
        {children}
      </body>
    </html>
  )
}
