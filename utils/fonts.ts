import { Inter, Fira_Mono } from "next/font/google";


export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const firaMono = Fira_Mono({
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-fira-mono",
});