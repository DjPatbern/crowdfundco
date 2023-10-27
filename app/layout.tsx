import "./globals.css";
import type { Metadata } from "next";
import { lato } from "./utils/Fonts";

export const metadata: Metadata = {
  title: "Crowd Fund Co",
  description: "Funding App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lato}`}>
        {children}
      </body>
    </html>
  );
}
