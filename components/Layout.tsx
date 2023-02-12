import Head from "next/head"
import { Analytics } from "@/components/Analytics"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

type LayoutProps = {
  canonical?: string
  children: React.ReactNode
  description: string
  keywords: string
  title: string
}

export default function Layout({
  canonical = "",
  children,
  description,
  keywords,
  title,
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="canonical" href={`https://srhart.co/${canonical}`} />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" />
        <link rel="apple-touch-icon" sizes="48x48" href="/icon-48x48.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="96x96" href="/icon-96x96.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="256x256" href="/icon-256x256.png" />
        <link rel="apple-touch-icon" sizes="384x384" href="/icon-384x384.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/icon-512x512.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#60a5fa" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:image" content="https://srhart.co/srhart-logo.svg" />
        <meta property="og:url" content={`https://srhart.co/${canonical}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:image"
          content="https://srhart.co/srhart-logo.svg"
        />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:alt" content={description} />
        <meta name="twitter:title" content={`https://srhart.co/${canonical}`} />
      </Head>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="mt-11 flex w-full flex-1 flex-col">{children}</main>
        <Footer />
      </div>
      <Analytics />
    </>
  )
}
