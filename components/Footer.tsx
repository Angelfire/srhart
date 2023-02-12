import Link from "next/link"
import { Beer, Github, Linkedin, Twitter } from "@/components/icons"
import { ThemeToggle } from "@/components/ThemeToggle"

export default function Footer() {
  return (
    <footer className="border-t border-t-slate-200 py-2 dark:border-t-slate-700">
      <div className="flex flex-col items-center justify-between gap-2 sm:container sm:flex-row sm:gap-0">
        <p className="flex items-center gap-1 text-sm">
          Made with <strong>&#60; &#47;&#62;</strong> and{" "}
          <Beer className="w-4" /> in Colombia
        </p>
        <p className="flex gap-3">
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
            href="https://twitter.com/MonsieurHart"
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
          <ThemeToggle />
        </p>
      </div>
    </footer>
  )
}
