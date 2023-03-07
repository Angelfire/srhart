import Image from "next/image"
import Link from "next/link"

import { Github, Linkedin, Twitter } from "@/components/icons"

export default function Me() {
  return (
    <div className="mx-8 mb-8 flex justify-between sm:container">
      <div className="flex flex-col">
        <span className="text-4xl font-extrabold md:text-6xl">I am</span>
        <h1 className="bg-gradient-to-l from-rose-500 to-indigo-700 bg-clip-text py-2 text-4xl font-extrabold text-transparent md:text-6xl">
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
            className="underline hover:animate-ping hover:no-underline"
            href="https://www.velocidadescape.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Velocidad de Escape
          </Link>
          .
        </p>
        <p className="mt-2 flex gap-3">
          <Link
            className="h-9 cursor-pointer rounded-md py-1.5 px-2 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-100"
            aria-label="Twitter account"
            href="https://github.com/angelfire"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Github className="w-4" />
          </Link>
          <Link
            className="h-9 cursor-pointer rounded-md py-1.5 px-2 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-100"
            aria-label="Twitter account"
            href="https://twitter.com/intent/follow?screen_name=MonsieurHart"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Twitter className="w-4" />
          </Link>
          <Link
            className="h-9 cursor-pointer rounded-md py-1.5 px-2 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-100"
            aria-label="Twitter account"
            href="https://www.linkedin.com/in/sabedoya"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Linkedin className="w-4" />
          </Link>
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
