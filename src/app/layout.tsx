import type { Metadata } from "next";
import "./globals.css";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;

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
