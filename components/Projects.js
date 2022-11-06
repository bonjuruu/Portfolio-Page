import React from "react"
import ProjectGrid from "./utils/ProjectGrid";

const Projects = () => {
    return (
        <div className="container px-4 mx-auto flex flex-col w-full">
            <h2 className="text-2xl font-bold lg:text-3xl mb-6">Projects</h2>
                <div className='space-y-4'>
                <div className='mx-auto grid grid-rows-1 space-y-4 w-full'>
                        <ProjectGrid name="Portfolio"
                                    wip={true}
                                    date="November 2022"
                                    titleLink="https://syntaxapp.vercel.app/"
                                    link="https://syntaxapp.vercel.app/"
                                    github="https://github.com/bonjuruu/Portfolio-Page"
                                    message="This portfolio was created to expand my skills in front-end development and to motivate me to expand my skills. 
                                                Tailwincss has been used to simplify styling to support responsive website and dark/light mode."
                                    stackList="Next.js React JavaScript Tailwindcss"
                        />
                    </div>
                    <div className='mx-auto grid grid-rows-1 space-y-4 w-full'>
                        <ProjectGrid name="syntax"
                                    date="August 2022"
                                    titleLink="https://syntaxapp.vercel.app/"
                                    link="https://syntaxapp.vercel.app/"
                                    github="https://github.com/uoa-compsci399-s2-2022/syntax"
                                    message="syntax is a 5-person team project for a capstone. It is a multi-platform note-taking application designed for programming students.
                                                The application supports writing, compiling and executing code. It also contains additional features 
                                                including searchable code snippets, drawing and stylus support, expportable notes, image upload, Youtube video embed and collaborative note creation."
                                    stackList="Next.js React JavaScript Prisma MongoDB Vercel"
                        />
                    </div>
            </div>
        </div>
    )
}

export default Projects;