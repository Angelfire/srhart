// import Image from 'next/image'
import Link from "next/link"
import Layout from "@/components/Layout"

export const projects = [
  {
    name: "SrHart",
    linkTo: "https://srhart.co/",
    description: "Porftolio Website",
    tags: ["NextJS", "TailwindCSS"],
  },
  {
    name: "Velocidad de Escape",
    linkTo: "https://velocidadescape.com/",
    description: "My personal tech and personal blog",
    tags: ["GatsbyJS", "TailwindCSS"],
  },
  {
    name: "Traveling",
    linkTo: "https://traveling-omega.vercel.app/",
    description: "GPT-3 experiment using OpenAI API",
    tags: ["NextJS", "OpenAI"],
  },
  {
    name: "Markline",
    linkTo: "https://markline.vercel.app/",
    description: "Markdown online editor",
    tags: ["markdown"],
  },
  {
    name: "Colombian Holidays",
    linkTo: "https://esfestivo.co/",
    description: "Colombian Holidays",
    image:
      "https://user-images.githubusercontent.com/315504/168429832-2392f558-a9fa-456c-b0f5-5f5c8da58dd7.png",
    tags: ["React"],
  },
  {
    name: "Cryptocurrencies Visor",
    linkTo: "https://github.com/Angelfire/crypto-visor",
    description: "9 most popular cryptocurrencies of the moment",
    image:
      "https://camo.githubusercontent.com/354fc5fc9ab2b519c9ed149077f620b289371054/68747470733a2f2f692e696d6775722e636f6d2f4d5a5256714b702e706e67",
    tags: ["React"],
  },
  {
    name: "Sticket Notes Board",
    linkTo: "https://github.com/Angelfire/sticky-notes",
    description: "Simple Sticky board for adding your notes",
    image:
      "https://camo.githubusercontent.com/c258dd51fce03a8411d04ddc727ee666d0c3c29e/68747470733a2f2f692e696d6775722e636f6d2f674733714776732e706e67",
    tags: ["React"],
  },
  {
    name: "My Weather",
    linkTo: "https://github.com/Angelfire/weather-component",
    description: "Display the current weather at a given location",
    image:
      "https://user-images.githubusercontent.com/315504/89359870-7383bb80-d68c-11ea-8299-b6077b850e60.png",
    tags: ["Polymer"],
  },
  {
    name: "Feeling Hungry?",
    linkTo: "https://github.com/Angelfire/feeling-hungry",
    description: "Feeling hungry? Get a random meal recipe",
    image:
      "https://user-images.githubusercontent.com/315504/65554985-caf3bf80-def0-11e9-95dc-43763ee40811.png",
    tags: ["React"],
  },
  {
    name: "Word Counter",
    linkTo: "https://github.com/Angelfire/word-counter",
    description: "A simple word counter",
    image:
      "https://user-images.githubusercontent.com/315504/65899532-8bf2bd80-e379-11e9-86d4-6dc5e36af314.png",
    tags: ["React"],
  },
  {
    name: "Modal Hooks",
    linkTo: "https://github.com/Angelfire/modal-hooks",
    description: "A simple modal window using React hooks",
    image:
      "https://user-images.githubusercontent.com/315504/65899750-fdcb0700-e379-11e9-9b71-c0ab2688cb09.png",
    tags: ["React"],
  },
]

export default function Projects() {
  return (
    <Layout
      canonical="projects"
      description="Some of the most relevant projects of Andres Bedoya"
      keywords="APIs, NextJS, GatsbyJS, ReactJS, Tailwind CSS"
      title="Projects - Andrés Bedoya"
    >
      <div className="mx-8 mb-12 flex flex-col sm:container">
        <h2 className="mb-8 text-4xl lg:text-6xl">Projects</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {projects.map(({ description, linkTo, name, tags }) => (
            <div
              className="rounded border border-gray-200 p-2 shadow-md"
              key={`project-${name}`}
            >
              {/* <div className="flex-none w-48 relative">
                <Image src={image} alt="" className="absolute inset-0 w-full h-full object-cover" layout="fill" />
              </div> */}
              <div className="flex flex-col">
                <h1 className="font-mono text-lg font-semibold text-slate-900">
                  <Link href={linkTo} target="_blank" rel="noopener noreferrer">
                    {name}
                  </Link>
                </h1>
                <div className="flex">
                  {tags.map((tag, index) => (
                    <span
                      className="mr-2 self-start rounded bg-blue-400 p-1 font-mono text-xs text-white"
                      key={`tag-${index}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
