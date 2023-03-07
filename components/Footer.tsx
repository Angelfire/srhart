import Link from "next/link"
import { Beer, Github, Linkedin, Twitter } from "@/components/icons"
import { ThemeToggle } from "@/components/ThemeToggle"

export default function Footer() {
  return (
    <footer className="border-t border-t-slate-200 py-2 dark:border-t-slate-700">
      <div className="flex flex-col-reverse items-center justify-between gap-2 sm:container sm:flex-row sm:gap-0">
        <p className="flex items-center gap-1 text-sm">
          Made with <strong>&#60; &#47;&#62;</strong> and{" "}
          <Beer className="w-4" /> in Colombia
        </p>
        <ThemeToggle />
      </div>
    </footer>
  )
}
