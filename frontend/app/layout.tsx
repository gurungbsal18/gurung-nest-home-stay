import { Geist, Geist_Mono, DM_Sans, Playfair_Display } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import MainMenu from "@/components/MainMenu";

const playfairDisplayHeading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
})

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        dmSans.variable,
        playfairDisplayHeading.variable,
      )}
    >
      <body suppressHydrationWarning>
        <MainMenu/>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
