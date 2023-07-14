'use client'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import { Russo_One } from 'next/font/google'

import NavBar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'

const russo = Russo_One({
    subsets: ['latin'],
    weight: ['400'],
})

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${russo.className}`}>
                <ThemeProvider attribute="class">
                    <NavBar />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
}
