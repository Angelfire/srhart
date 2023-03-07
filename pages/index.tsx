import type { DataResponse } from "@/types"

import Layout from "@/components/Layout"
import Me from "@/components/Me"
import Repos from "@/components/Repos"

export default function Home({ repos }: { repos: DataResponse }) {
  return (
    <Layout
      description="A little more about me, Andrés Bedoya - Javascript Software Engineer"
      keywords="Andres Bedoya, React, JavaScript, NextJS, GatsbyJS, HTML, CSS, Tailwind"
      title="Andrés Bedoya - Sr. Hart"
    >
      <Me />
      <Repos data={repos} />
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch("https://srhart.co/api/github")
  const { repos } = await res.json()

  return {
    props: {
      repos,
    },
    revalidate: 43200,
  }
}
