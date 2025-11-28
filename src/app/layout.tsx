import Footer from "@/components/layout/footer";
import type { Metadata } from "next";
import { montserrat, openSans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Disrupt Legal",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} ${openSans.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
