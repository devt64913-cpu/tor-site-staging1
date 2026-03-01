import type { Metadata } from "next";
import { Dancing_Script, Geist_Mono } from "next/font/google";
import './global.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import localFont from 'next/font/local'

const cabinetGrotesk = localFont({
	variable: '--font-cabinet-grotesk',
	src: [
		{
			path: '../public/fonts/CabinetGrotesk-Light.otf',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../public/fonts/CabinetGrotesk-Regular.otf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../public/fonts/CabinetGrotesk-Medium.otf',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../public/fonts/CabinetGrotesk-Bold.otf',
			weight: '700',
			style: 'normal',
		}
	],
	display: 'swap',
})

export const metadata: Metadata = {
  title: "Tema Oil Refinery (TOR) - Refining Crude Since 1963",
  description: "Tema Oil Refinery is Ghana's premier crude oil refinery. Refining crude since 1963—quality energy products to power Ghana's economic growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cabinetGrotesk.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
