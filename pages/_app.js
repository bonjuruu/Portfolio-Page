import 'tailwindcss/tailwind.css'
import Navigation from "../components/Navigation";
import { ThemeProvider } from 'next-themes'
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return <>
    <div className="bg-circuit-light dark:bg-circuit-dark">
      <ThemeProvider attribute="class" enableSystem={true}>
      <Component {...pageProps} />
      </ThemeProvider>
    </div>

    </>
}

export default MyApp