import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

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
      <Link href="/" className="flex">
        <span className="font-bold">&lt;&nbsp;</span>
        <Image
          src="/logo-site.png"
          alt="SrHart logo"
          width={24}
          height={24}
          priority
        />
        <span className="font-bold">&nbsp;/&gt;</span>
        <span className="sr-only">Andrés Bedoya - Sr.Hart</span>
      </Link>
      <nav className="mt-4 md:mt-0">
        <ul className="flex flex-row">
          {navLinks.map(({ name, path }) => (
            <li key={`item-${name}`}>
              <Link
                href={path}
                className={`px-2 font-semibold text-slate-500 ${
                  pathname === path
                    ? "underline decoration-blue-600 decoration-4 underline-offset-4"
                    : "hover:underline hover:decoration-blue-600 hover:decoration-4 hover:underline-offset-4"
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              className="px-2 font-semibold text-slate-500 hover:underline hover:decoration-blue-600 hover:decoration-4 hover:underline-offset-4"
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
