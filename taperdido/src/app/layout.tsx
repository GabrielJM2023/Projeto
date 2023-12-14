import dotenv from 'dotenv';

import { Inter } from 'next/font/google'
import './globals.css'

dotenv.config();
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="PT-BR">
      <head>

        <link rel="manifest" href="/manifest.json" />
        <title>Ta Perdido</title>
        <link rel='icon' href='/static/favicon.ico' />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />

      </head>

      <body className={inter.className}>{children}</body>
    </html>
  )
}
