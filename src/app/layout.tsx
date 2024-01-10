import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "./utils/StyledComponentWrapper";

export const metadata: Metadata = {
  metadataBase: new URL("https://velocilabs.com/"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  title: "Velocilabs:⚡Rapid Software & Product Development",
  description:
    "Velocilabs: Delivering quality engineering services with velocity. Validate and build your MVPs, mobile/web apps, backend services and cloud strategies with our product expertise.",
  openGraph: {
    countryName: "India",
    type: "website",
    url: "https://velocilabs.com",
    title: "Velocilabs:⚡Rapid Software & Product Development",
    description:
      "Velocilabs: Delivering quality engineering services with velocity. Validate and build your MVPs, mobile/web apps, backend services and cloud strategies with our product expertise.",
    images: [
      {
        url: "/logo.png",
        alt: "Velocilabs Logo",
        type: "image/png",
      },
    ],
    siteName: "⚡Velocilabs",
  },
  twitter: {
    creator: "@spykesocial",
    site: "@spykesocial",
    card: "summary_large_image",
    images: "/logo.png",
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
