import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import '@/app/globals.css';
import NextAuthWrapper from "@/library/next.auth.wrapper";
import "@/styles/styles.css"; 
import "@/styles/themify-icons/themify-icons.css"; 
import "@/styles/responsive.css"; 
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Identify and search products",
  description: "@taitnt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        />
      </head>
      <body className={inter.className}>
        <AntdRegistry>
          <NextAuthWrapper>
           {children}
          </NextAuthWrapper>
          
        </AntdRegistry>
        <Script src="https://code.jquery.com/jquery-3.6.0.min.js" />
      </body>
    </html>
  );
}
