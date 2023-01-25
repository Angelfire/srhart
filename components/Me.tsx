import Image from "next/image"
import Link from 'next/link'

export default function Me() {
  return (
    <div className="flex justify-between mb-8 mx-8 sm:container">
      <div className="flex flex-col">
        <span className="text-6xl font-extrabold">I am</span>
        <h1 className="text-blue-600 text-6xl font-extrabold">Andrés Bedoya</h1>
        <p className="font-semibold mt-2 text-lg">
          I&apos;m a JavaScript Software Engineer from
          Colombia <span className="mr-1">&#127464;&#127476;</span> with
          an interest in fund investing, personal finance and Open Source.
        </p>
        <p className="font-semibold mt-2 text-lg">
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
      <div className="flex ml-24 rounded-full ring-8 ring-blue-400 hidden xl:block">
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
