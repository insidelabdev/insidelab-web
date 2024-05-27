import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google";
import { Roboto, Poppins } from "next/font/google";
import localFont from "next/font/local";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const roboto = Roboto({
  variable: "--font-roboto",
  weight: "400",
  subsets: ["latin"],
});

// Font files can be colocated inside of `pages`
export const Visby = localFont({
  variable: "--font-visby",
  src: [
    {
      path: "./fonts/VisbyCF/VisbyCF-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/VisbyCF/VisbyCF-Medium.otf",
      weight: "600",
    },
    {
      path: "./fonts/VisbyCF/VisbyCF-ExtraBold.otf",
      weight: "700",
    },
  ],
});
export const poppins = Poppins({
  variable: "--font-poppins",
  weight: "400",
  subsets: ["latin"],
});
