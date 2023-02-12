import Link from "next/link"
import { usePathname } from "next/navigation"
import { Logo } from "@/components/icons"

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Talks",
    path: "/talks",
  },
  {
    name: "About",
    path: "/about",
  },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="container flex flex-col items-center px-4 py-4 md:flex-row md:justify-between lg:px-0">
      <Link href="/">
        <Logo className="h-6 w-12 dark:text-slate-100" />
        <span className="sr-only">Andrés Bedoya - Sr.Hart</span>
      </Link>
      <nav className="mt-4 md:mt-0">
        <ul className="flex flex-row gap-1">
          {navLinks.map(({ name, path }) => (
            <li key={`item-${name}`}>
              <Link
                href={path}
                className={`rounded-md py-1.5 px-2 font-semibold text-slate-900 dark:text-slate-100 dark:hover:bg-slate-800 ${
                  pathname === path
                    ? "bg-slate-100 dark:bg-slate-800"
                    : "hover:bg-slate-100 hover:font-semibold dark:hover:bg-slate-800"
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              className="rounded-md px-2 py-1.5 font-semibold text-slate-900 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-800"
              href="https://velocidadescape.com/"
              target="_blank"
              rel="noreferrer"
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
