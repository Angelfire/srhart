import Link from "next/link"
import { Github } from "@/components/icons/Github"
import { Twitter } from "@/components/icons/Twitter"

export default function Footer() {
  return (
    <footer className="border-t py-4">
      <div className="flex flex-col items-center justify-between gap-2 sm:container sm:flex-row sm:gap-0">
        <p className="text-sm">
          Made with <strong>&#60; &#47;&#62;</strong> and{" "}
          <span className="mr-1">&#127866;</span> in Colombia
        </p>
        <p className="flex gap-3">
          <Link
            className="w-5 hover:opacity-60"
            aria-label="Twitter account"
            href="https://github.com/angelfire"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Github />
          </Link>
          <a
            aria-label="Twitter account"
            className="w-5 hover:opacity-60"
            href="https://twitter.com/MonsieurHart"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Twitter />
          </a>
        </p>
      </div>
    </footer>
  )
}
