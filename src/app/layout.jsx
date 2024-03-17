import { Outfit } from 'next/font/google'
import './globals.css'

//componentes 
import Header from '@/components/Header'; 
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';


const outfit = Outfit ({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio Marcos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
        <Header />
         
        {children}
         <Footer />
         
         </ThemeProvider>
        </body>
    </html>
  )
}
