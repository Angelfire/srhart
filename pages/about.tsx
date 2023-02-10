import Layout from "@/components/Layout"
import Link from "next/link"

export default function About() {
  return (
    <Layout
      canonical="about"
      description="About Andrés Bedoya, professional interests, languages, tools"
      title="About - Andrés Bedoya"
      keywords="professional interests, languages, tools"
    >
      <div className="mx-8 mb-12 flex flex-col sm:container">
        <h2 className="mb-8 text-4xl lg:text-6xl">About Me</h2>
        <p className="mb-4">
          Social Engineering Specialist / JavaScript Software Engineer / Web
          Engineer / Hardcore JavaScript Developer / Python - Node.js Enthusiast
          / I Love /[Dd]ogs?/
        </p>
        <ul className="mb-4 list-disc pl-8">
          <li>
            Resume:{" "}
            <Link
              className="text-blue-600 hover:underline"
              href="https://read.cv/anbedoyag"
              rel="noopener noreferrer"
              target="_blank"
            >
              read.cv
            </Link>
          </li>
          <li>
            Schedule a meeting:{" "}
            <Link
              className="text-blue-600 hover:underline"
              href="          https://cal.com/anbedoyag"
              rel="noopener noreferrer"
              target="_blank"
            >
              cal.com
            </Link>
          </li>
        </ul>
        <div className="justify-between lg:flex">
          <div>
            <h3 className="mb-2 text-3xl lg:text-4xl">
              Professional interests
            </h3>
            <ul className="mb-4 list-disc pl-8">
              <li>JavaScript</li>
              <li>NodeJS</li>
              <li>Python</li>
              <li>WebApps security</li>
            </ul>

            <h3 className="mb-2 text-3xl lg:text-4xl">Languages</h3>
            <ul className="mb-4 list-disc pl-8">
              <li>Spanish: Native</li>
              <li>English: Upper-intermediate</li>
            </ul>

            <h3 className="mb-2 text-3xl lg:text-4xl">Tools</h3>
            <ul className="mb-4 list-disc pl-8">
              <li>
                Text editor/IDE:{" "}
                <del>
                  Netscape Composer, FrontPage, Dreamweaver, Gedit, Sublime Text
                </del>
                , VSCode
              </li>
              <li>
                Version control system: <del>SVN</del>, Git
              </li>
              <li>API: Postman</li>
              <li>SQL client: DBeaver</li>
              <li>
                Terminal: iTerm (macOS) - Warp (macOS) - Terminator (GNU/Linux)
              </li>
              <li>OS: Experienced in macOS and GNU/Linux distros</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}
