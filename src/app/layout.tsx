import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gordon Hutchinson - Portfolio",
  description: "The professional portfolio for Gordon Hutchinson",
};

export default function RootLayout({ children }:Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en">
      <body className="m-0">
        {children}
      </body>
    </html>
  );
}
