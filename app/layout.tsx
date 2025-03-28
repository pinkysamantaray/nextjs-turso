import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styles/globals.css'
import HeroUIProvider from './HeroUIProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content={metadata.description ?? 'Generated by create next app'}
        />
        <title>Create Next App</title>
        <link rel="icon" href="../styles/favicon.ico" />
      </head>
      <body className={`${inter.className} text-foreground h-screen w-screen`}>
        <HeroUIProvider>{children}</HeroUIProvider>
      </body>
    </html>
  )
}
