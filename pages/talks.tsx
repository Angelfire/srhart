import Link from "next/link"
import Layout from "@/components/Layout"

export const talks = [
  {
    url: "https://slides.com/angelfire/how-to-stand-out-in-interviews",
    createdAt: "2019/11/18",
    name: "How to Stand Out in Interviews",
  },
  {
    url: "https://slides.com/angelfire/deck-6",
    createdAt: "2019/10/18",
    name: "Big O Notation",
  },
  {
    url: "https://slides.com/angelfire/deck-6f3ef006-b924-4cee-8e80-584bb162d867",
    createdAt: "2017/10/11",
    name: "Functional Programming",
  },
  {
    url: "https://slides.com/angelfire/deck-5",
    createdAt: "2017/02/03",
    name: "Vue.js 2.0 (Introduction)",
  },
  {
    url: "https://slides.com/angelfire/deck",
    createdAt: "2016/09/12",
    name: "JS Module Bundlers",
  },
  {
    url: "https://slides.com/angelfire/javascriptdp",
    createdAt: "2014/11/07",
    name: "Javascript Design Patterns",
  },
  {
    url: "https://slides.com/angelfire/grunt-vs-gulp",
    createdAt: "2014/02/27",
    name: "GRUNT VS GULP",
  },
  {
    url: "https://slides.com/angelfire/code-aa603e",
    createdAt: "2023/04/18",
    name: "Rendering Patterns for web apps",
  },
]

export default function Talks() {
  return (
    <Layout
      canonical="talks"
      description="Andrés Bedoya talks"
      keywords="JavaScript, Functional Programming"
      title="Talks - Andrés Bedoya"
    >
      <div className="mx-8 mb-12 flex flex-col sm:container">
        <h2 className="mb-8 text-4xl lg:text-6xl">Talks</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {talks.map(({ createdAt, name, url }) => (
            <div
              className="flex rounded border border-gray-200 p-2"
              key={`talk-${name}`}
            >
              <div className="flex flex-col justify-between">
                <h3 className="font-mono text-lg font-semibold text-slate-900 dark:text-slate-100">
                  <Link href={url} target="_blank" rel="noopener noreferrer">
                    {name}
                  </Link>
                </h3>
                <time
                  dateTime={createdAt}
                  className="mt-2 text-sm text-slate-600 dark:text-slate-100"
                >
                  date: {createdAt}
                </time>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
