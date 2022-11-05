
import Link from "next/link"
import { useState, useEffect } from "react"
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { useTheme } from 'next-themes'


const Navigation = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme, resolvedTheme } = useTheme()

    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), [])
    return (
        <div className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black">
            <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
                <Link href="/">
                    <a
                        className={"font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 dark:text-white"}
                    >
                        skim.run
                    </a>
                </Link>
                <ul >
                        <BsFillMoonStarsFill 
                        className="cursor-pointer h-full"
                        onClick={() => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')}
                        />
                </ul>
                
            </div>
        </div>
    )
}

export default Navigation;