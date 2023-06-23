import Footer from './components/footer/Footer.component'
import Navbar from './components/layout/Navbar.component'
import { inter } from './fonts'
import './globals.css'


export const metadata = {
  title: 'FlyApp',
  description: 'Website mockup for booking airline tickets',
  icons:{
    icon: {
      rel: 'icon',
      type: 'image/svg',
      sizes: 'any',
      url: '/public/icon.svg',
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`h-screen w-screen flex flex-col bg-slate-600 px-3 p-1 ${inter.className}`}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
