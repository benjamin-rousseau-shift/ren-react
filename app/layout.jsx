import './globals.css'
import { Inter } from 'next/font/google'
import Nav from './auth/Nav'
import { Roboto } from 'next/font/google'
import QueryWrapper from './auth/QueryWrapper'

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ["400", "700"],
  variable: "--font-roboto"
})
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Woof it',
  description: "Don't tweet it, woof it",
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={`ms-4 md:mx-48 xl:mx-96 ${roboto.variable} bg-gray-200`}>
        <QueryWrapper>
        <Nav />
        {children}
        </QueryWrapper>
        </body>
    </html>
  )
}
