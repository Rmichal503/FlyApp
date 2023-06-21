import { inter } from './fonts'
import './globals.css'


export const metadata = {
  title: 'FlyApp',
  description: 'Website mockup for booking airline tickets',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
