import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";

import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import clsx from "clsx";
import * as layout from "../layouts";
import React from "react";
import Cover from "@/components/com/cover";
import Footer from "@/components/com/footer";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const layouts: any = {
    ...layout,
  };
  let { template } = siteConfig;
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "h-screen font-poppins antialiased overflow-x-hidden",
          fontSans.variable
        )}
      >
        <Providers
          themeProps={{
            attribute: "class",
            defaultTheme: "ligth",
          }}
        >
          <div className="flex flex-col h-screen w-screen">
            <Navbar options={template} />
            <main className="w-full flex-grow">{children}</main>
            <Footer template={template} />
          </div>
        </Providers>
      </body>
    </html>
  );
}
