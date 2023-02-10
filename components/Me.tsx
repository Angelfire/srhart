import Image from "next/image"
import Link from "next/link"

export default function Me() {
  return (
    <div className="mx-8 mb-8 flex justify-between sm:container">
      <div className="flex flex-col">
        <span className="text-4xl font-extrabold md:text-6xl">I am</span>
        <h1 className="bg-gradient-to-l from-pink-600 to-blue-600 bg-clip-text py-2 text-4xl font-extrabold text-transparent md:text-6xl">
          Andrés Bedoya
        </h1>
        <div className="mt-3 inline-flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-sm font-medium tracking-tight">
            Currently in Medellín, Colombia{" "}
            <span className="mr-1">&#127464;&#127476;</span>
          </span>
        </div>
        <p className="mt-2 text-base font-medium md:text-lg">
          JavaScript Software Engineer with an interest in fund investing,
          personal finance, web development and Open Source.
        </p>
        <p className="mt-2 text-base font-medium md:text-lg">
          Blogger Evangelist at{" "}
          <Link
            aria-label="Velocidad de Escape blog"
            className="text-blue-600 hover:underline"
            href="https://www.velocidadescape.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Velocidad de Escape
          </Link>
          .
        </p>
      </div>
      <div className="ml-24 hidden xl:block">
        <Image
          className="rounded-full"
          src="/me.jpg"
          alt="Andres Bedoya"
          width="330"
          height="330"
          priority
        />
      </div>
    </div>
  )
}
