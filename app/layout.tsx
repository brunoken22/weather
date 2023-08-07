import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Layout } from "@/components/layout";
import React from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Clima",
   description: "Clima,Tiempo",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang='es'>
         <body className={inter.className}>
            <Layout>{children}</Layout>
         </body>
      </html>
   );
}
