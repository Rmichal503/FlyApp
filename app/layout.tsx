import Link from "next/link";
import Image from "next/image";
import Footer from "./components/footer/Footer.component";
import Navbar from "./components/layout/Navbar.component";
import { inter } from "./fonts";
import "./globals.css";

export const metadata = {
  title: "FlyApp",
  description: "Website mockup for booking airline tickets",
  icons: {
    icon: {
      rel: "icon",
      type: "image/svg",
      sizes: "any",
      url: "/public/icon.svg",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`h-screen w-screen flex flex-col bg-slate-600 px-3 p-1 ${inter.className}`}
      >
        {/* <nav className="mb-1 w-full h-14 bg-slate-900 place-self-center rounded-t-2xl flex justify-around items-center">
          <Link
            href={"/"}
            className="mr-auto flex justify-center items-center hover:cursor-pointer hover:animate-pulse"
          >
            <Image
              className="ml-4"
              src={"/plane-ticket.png"}
              alt="logo"
              width={44}
              height={44}
            />
            <span className="text-2xl text-center text-slate-300 ml-4">
              Flyapp
            </span>
          </Link>
          <div className="bg-slate-100 rounded-lg w-1/6 h-5/6 items-center text-center justify-center flex mx-4 hover:rounded-2xl transition-all duration-300">
            przycisk1
          </div>
          <div className="bg-slate-100 rounded-lg w-1/6 h-5/6 items-center text-center justify-center flex mx-4 hover:rounded-2xl transition-all duration-300">
            przycisk2
          </div>
          <div className="bg-slate-100 rounded-lg w-1/6 h-5/6 items-center text-center justify-center flex mx-4 hover:rounded-2xl transition-all duration-300">
            przycisk3
          </div>
        </nav> */}
        <Navbar/>
        {children}
        <Footer/>
        {/* <footer className="mt-1 w-full h-14 bg-slate-900 place-self-center rounded-2xl"></footer> */}
      </body>
    </html>
  );
}
