import Head from 'next/head'
import About from "../components/About";
import Contact from "../components/Contact"
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

export default function Home() {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Sarah Kyoung Kim Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-4xl mx-auto antialiased space-y-8 h-full p-4 bg-white dark:bg-neutral-900">
        <Navigation/>
        <About/>
        <Skills />
        <Projects />
        <Contact/>
        <Footer/>
      </main>
    </div>
  )
}