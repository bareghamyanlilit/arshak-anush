import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Արշակ և Անուշ",
  description: "Արշակ և Անուշ",
  openGraph: {
    title: "Արշակի և Անուշի հարսանեկան հրավիրատոմս",
    description: "Հարսանեկան հրավիրատոմս",
    url: "https://site-up-l014.vercel.app",
    siteName: "Արշակ և Անուշ",
    images: [
      {
        url: "/img1.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ whiteSpace: "pre-line" }}
      >
        {children}
      </body>
    </html>
  );
}
