import type { Metadata } from "next";
import './global.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FooterShowcase from "@/components/FooterShowcase";
import localFont from 'next/font/local'


const dax = localFont({
	variable: '--font-dax',
	src: [
		{
			path: '../public/fonts/Dax Light.ttf',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../public/fonts/Dax Regular.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../public/fonts/Dax Medium.ttf',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../public/fonts/Dax Bold.otf',
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
        className={`${dax.variable} antialiased min-h-screen flex flex-col bg-white`}
      >
        <Header />
        <main className="min-w-0 grow overflow-x-clip">{children}</main>
        {/* <Footer /> */}
        <FooterShowcase />
      </body>
    </html>
  );
}
