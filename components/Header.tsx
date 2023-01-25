import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Projects",
    path: "/projects"
  },
  {
    name: "Talks",
    path: "/talks"
  },
  {
    name: "About",
    path: "/about"
  }
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="container px-4 py-4 flex items-center flex-col md:flex-row md:justify-between lg:px-0">
      <a href="/" className="flex">
        <h1 className="flex">
          <span className="font-bold">&lt;&nbsp;</span>
          <Image
            src="/logo-site.png"
            alt="SrHart logo"
            width={24}
            height={24}
            priority
          />
          <span className="font-bold">&nbsp;/&gt;</span>
        </h1>
      </a>
      <nav className="mt-4 md:mt-0">
        <ul className="flex flex-row">
          {navLinks.map(({name, path}) =>
            <li key={`item-${name}`}>
              <Link href={path} className={`font-semibold px-2 text-slate-500 ${
                pathname === path
                    ? "decoration-4 decoration-blue-400 underline underline-offset-4"
                    : "hover:decoration-4 hover:decoration-blue-400 hover:underline hover:underline-offset-4"
                  }`}
                >{name}
              </Link>
            </li>
          )}
          <li>
            <a
              className="font-semibold px-2 text-slate-500 hover:decoration-4 hover:decoration-blue-400 hover:underline hover:underline-offset-4"
              href="https://velocidadescape.com/"
              target="_blank"
              rel="noreferrer"
            >Blog</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
