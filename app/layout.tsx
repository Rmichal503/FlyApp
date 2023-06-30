import { TicketProvider } from "./context/ticket.context";
import Link from "next/link";
import Image from "next/image";
import Footer from "./components/footer/Footer.component";
import Navbar from "./components/navbar/Navbar.component";
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
        className={`h-screen w-screen flex flex-col bg-background px-3 font-SC`}
      >
        <Navbar />
        <TicketProvider>{children}</TicketProvider>
        <Footer />
      </body>
    </html>
  );
}
