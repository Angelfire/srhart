import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Seo from "../components/Seo";

const About = () => (
  <Layout>
    <Seo title="About Me" />
    <div className="container mt-10 px-4 md:px-0">
      <h2 className="text-4xl">About me - Andrés Bedoya G.</h2>
      <p className="mb-4">
        I&apos;m a full time Front-end developer (System Engineering and
        Informatics) living in Medellín, Colombia.{' '}
      </p>
      <p className="mb-4">
        Passionate JavaScript developer with more than 10 years of experience.
        I developed applications and web pages using open source technologies;
        I mainly work as a Frontend developer creating user interfaces and
        visualizing data.
      </p>
      <p className="mb-4">
        I have experience with free platforms and operating systems Linux / OS
        X management with web trends knowledge, basic server management and
        computer information security...
      </p>
      <p className="mb-4">Currently focused on web application development using React and Vue.js.</p>
      <h3 className="text-4xl">Professional Interests</h3>
      <ul className="list-disc mb-4 ml-4">
        <li>JavaScript programming</li>
        <li>Python Programming</li>
        <li>Web apps Security</li>
        <li>Node.js</li>
      </ul>
      <h3 className="text-4xl">Languages</h3>
      <ul className="list-disc mb-4 ml-4">
        <li>Spanish: Native</li>
        <li>English: Upper-Intermediate</li>
      </ul>
      <h3 className="text-4xl">Tools</h3>
      <ul className="list-disc mb-4 ml-4">
        <li>
          Text editor: <strike>Netscape Composer</strike>,{' '}
          <strike>FrontPage</strike>, <strike>Dreamweaver</strike>,{' '}
          <strike>Gedit</strike>, <strike>Sublime Text</strike>, VSCode{' '}
        </li>
        <li>
          Version control system: <strike>SVN</strike>, Git
        </li>
        <li>Terminal: iTerm (macOS) - Terminator (GNU/Linux)</li>
        <li>OS: Experienced in macOS and GNU/Linux distros</li>
      </ul>
      <h3 className="text-4xl">Me</h3>
      <ul className="list-disc mb-4 ml-4">
        <li>
          <a
            href="https://github.com/Angelfire"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/sabedoya/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <Link to="/contact">Email</Link>
        </li>
      </ul>
    </div>
  </Layout>
);

export default About;
