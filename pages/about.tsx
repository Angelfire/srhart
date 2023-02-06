import Layout from "@/components/Layout"

export default function About() {
  return (
    <Layout
      canonical="about"
      description="About Andrés Bedoya, professional interests, languages, tools"
      title="About - Andrés Bedoya"
      keywords="professional interests, languages, tools"
    >
      <div className="flex flex-col mb-12 mx-8 sm:container">
        <h2 className="text-4xl mb-8 lg:text-6xl">About Me</h2>
        <p className="mb-4">
          Social Engineering Specialist / JavaScript Software Engineer / Web Engineer / Hardcore JavaScript Developer / Python - Node.js Enthusiast / I Love /[Dd]ogs?/
        </p>
        <div className="justify-between lg:flex">
          <div>
            <h3 className="text-3xl mb-2 lg:text-4xl">Professional interests</h3>
            <ul className="list-disc pl-8 mb-4">
              <li>JavaScript</li>
              <li>NodeJS</li>
              <li>Python</li>
              <li>WebApps security</li>
            </ul>

            <h3 className="text-3xl mb-2 lg:text-4xl">Languages</h3>
            <ul className="list-disc pl-8 mb-4">
              <li>Spanish: Native</li>
              <li>English: Upper-intermediate</li>
            </ul>

            <h3 className="text-3xl mb-2 lg:text-4xl">Tools</h3>
            <ul className="list-disc pl-8 mb-4">
              <li>Text editor/IDE: <del>Netscape Composer, FrontPage, Dreamweaver, Gedit, Sublime Text</del>, VSCode</li>
              <li>Version control system: <del>SVN</del>, Git</li>
              <li>API: Postman</li>
              <li>SQL client: DBeaver</li>
              <li>Terminal: iTerm (macOS) - Warp (macOS) - Terminator (GNU/Linux)</li>
              <li>OS: Experienced in macOS and GNU/Linux distros</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}
