import Layout from '@/components/Layout'
import Me from '@/components/Me'
import Repos from '@/components/Repos'


export default function Home() {
  return (
    <>
      <Layout
        description='A little more about me, Andrés Bedoya - Javascript Software Engineer'
        keywords='Andres Bedoya, React, JavaScript, NextJS, GatsbyJS, HTML, CSS, Tailwind'
        title='Andrés Bedoya - Sr. Hart'
      >
        <Me />
        <Repos />
      </Layout>
    </>
  )
}
