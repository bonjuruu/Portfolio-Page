import React from "react"
import Image from "next/image"
import profile from "../public/profile.jpg"

const About = () => {
    return (
        <div className="container px-4 mx-auto">
            <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-4 lg:mt-12 ">
                    <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                        Hey there!
                    </h1>
                    <div className="mt-6 text-gray-800 dark:text-white">
                        <p className="mb-4">
                            I'm Sarah, a 20 year old Graduate Computer Science Student from the University of Auckland. 
                            I'm a tireless vaccuum for knowledge, striving to explore what I can produce with programming. 
                            <br/>
                            I love it when I'm able to develop software that simplify problems and helps people. 
                            Below are a list of all my projects. My favourite is 'syntax', my final project with four other team mates.
                        </p>
                    </div>
                </div>
                <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
                    <Image
                        src={profile}
                        alt="Profile"
                        priority={true}
                        className="rounded-full"
                        width={250}
                        height={250}
                        placeholder="blur"
                    />
                </div>
            </div>
        </div>
    )
}

export default About;