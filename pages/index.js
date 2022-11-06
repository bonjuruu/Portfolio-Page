import Head from 'next/head'
import About from "../components/About";
import Contact from "../components/Contact"
import Projects from '../components/Projects';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Sarah Kyoung Kim Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto mt-16 antialiased space-y-8">
        <About/>
        <Projects />
        <Contact/>
      </main>
    </div>
  )
}