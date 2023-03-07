import { Beer } from "@/components/icons"
import { ThemeToggle } from "@/components/ThemeToggle"

export default function Footer() {
  return (
    <footer className="border-t border-t-slate-200 py-2 dark:border-t-slate-700">
      <div className="mx-8 flex justify-between md:container">
        <p className="flex items-center gap-1 text-sm">
          Made with <strong>&#60; &#47;&#62;</strong> and{" "}
          <Beer className="w-4" /> in Colombia
        </p>
        <ThemeToggle />
      </div>
    </footer>
  )
}
