import Image from "next/image"
import Link from 'next/link'

export default function Me() {
  return (
    <div className="flex justify-between mb-8 mx-8 sm:container">
      <div className="flex flex-col">
        <span className="text-6xl font-extrabold">I am</span>
        <h1 className="text-blue-600 text-6xl font-extrabold">Andrés Bedoya</h1>
        <div className="mt-3 inline-flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-sm font-medium tracking-tight">
            Currently in Medellín, Colombia <span className="mr-1">&#127464;&#127476;</span>
          </span>
        </div>
        <p className="font-medium mt-2 text-lg">
          JavaScript Software Engineer with an interest in fund investing, personal finance and Open Source.
          See my <Link className="text-blue-400 hover:underline" href="https://read.cv/anbedoyag" rel="noopener noreferrer" target="_blank">Curriculum Vitae</Link>.
        </p>
        <p className="font-medium mt-2 text-lg">
          Blogger Evangelist at{' '}
        <Link
          aria-label="Velocidad de Escape blog"
          className="text-blue-400 hover:underline"
          href="https://www.velocidadescape.com/"
          rel="noopener noreferrer"
          target="_blank"
        >Velocidad de Escape</Link>.
        </p>
      </div>
      <div className="ml-24 rounded-full ring-8 ring-blue-400 hidden xl:block">
        <Image
          className="rounded-full"
          src="/me.jpg"
          alt="Andres Bedoya"
          width="300"
          height="300"
          priority
        />
      </div>
    </div>
  )
}
