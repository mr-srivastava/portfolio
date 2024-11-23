import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "Aadarsh Srivastava - Portfolio",
  description: "Aadarsh Srivastava - Portfolio",
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark'>
      <Head>
        <link
          rel='preload'
          href='https://ik.imagekit.io/9omfkfrhk/tr:h-400,w-400:q-20,bl-10/images/profile.jpg'
          as='image'
        />
      </Head>
      <body className={epilogue.className}>{children}</body>
    </html>
  );
}
