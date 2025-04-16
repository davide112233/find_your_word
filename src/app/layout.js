import "./globals.css";
import DOMPurify from "isomorphic-dompurify";
import { metadata } from "./utils/metaData";
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(metadata.title) }} />
        <meta name="description" content={DOMPurify.sanitize(metadata.description)} />
        <meta name="keywords" content={DOMPurify.sanitize(metadata.keywords)} />
        <meta name="author" content={DOMPurify.sanitize(metadata.author)} />
        <meta name="robots" content={DOMPurify.sanitize(metadata.robots)} />
        <meta name="viewport" content={DOMPurify.sanitize(metadata.viewport)} />
        <meta name="type" content={DOMPurify.sanitize(metadata.type)} />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
