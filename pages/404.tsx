import { IBM_Plex_Mono } from "@next/font/google"
import Layout from "@/components/Layout"

const ibm = IBM_Plex_Mono({ weight: "400", subsets: ["latin"] })

export default function Custom404() {
  return (
    <Layout
      canonical="404"
      description="404 - What are you looking for?"
      keywords="404, not found"
      title="404 - Not found"
    >
      <div className="mx-8 mb-12 flex flex-col sm:container">
        <h1 className={`${ibm.className} text-center text-9xl`}>404</h1>
        <p className={`${ibm.className} text-6xl`}>Oops!</p>
        <p className={`${ibm.className} text-6xl`}>
          We can not seem to find the page you are looking for.
        </p>
      </div>
    </Layout>
  )
}
