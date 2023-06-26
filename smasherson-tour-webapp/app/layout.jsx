'use client'
import './globals.css'
import { Bayon } from 'next/font/google'
import NavBar from '@/components/Navbar'
import { ThemeProvider } from 'next-themes'
import Footer from '@/components/shared/Footer'

const bayon = Bayon({
    subsets: ['latin'],
    weight: '400',
})

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={[bayon.className]}>
                <ThemeProvider attribute="class">
                    <NavBar />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
}
