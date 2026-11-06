import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Lovely Pet BD | Everything They Love",
    template: "%s | Lovely Pet BD"
  },
  description:
    "Discover thoughtful food, playtime favourites and everyday care essentials for cats, dogs, birds and more at Lovely Pet BD.",
  applicationName: "Lovely Pet BD",
  keywords: [
    "pet shop Bangladesh",
    "cat food Bangladesh",
    "dog food Bangladesh",
    "pet accessories",
    "Lovely Pet BD"
  ],
  openGraph: {
    title: "Lovely Pet BD | Everything They Love",
    description:
      "A happier life for every pawprint. Explore pet food, accessories and everyday care at Lovely Pet BD.",
    type: "website",
    locale: "en_BD",
    siteName: "Lovely Pet BD"
  }
};

export const viewport: Viewport = {
  themeColor: "#f8f7f2",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
