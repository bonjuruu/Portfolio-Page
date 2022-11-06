import React from "react"
import Image from "next/image"
import profile from "../public/profile.jpg"
import { AiFillLinkedin, AiFillGithub, AiFillFilePdf } from "react-icons/ai"
import Link from "next/link"

const About = () => {
    return (
        <div className="container px-4 mx-auto">
            <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-4 lg:mt-12 text-center">
                    <h1 className="text-3xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                        Sarah Kyoung Kim
                    </h1>
                    <h2 className="text-md lg:text-2xl">Graduate Computer Science Student</h2>
                    <div className="text-2xl flex justify-center gap-2 py-2">
                        <a href="/" target="_blank">
                            <AiFillGithub className="cursor-pointer hover:text-sky-500"/>
                        </a>
                        <a href="" target="_blank">
                            <AiFillLinkedin className="cursor-pointer hover:text-sky-500"/>
                        </a>
                        <a href="" target="_blank">
                            <AiFillFilePdf className="cursor-pointer hover:text-sky-500"/>
                        </a>
                    </div>
                    <div className="mt-6 text-gray-800 dark:text-white">
                        <p className="mb-4  px-2 sm:text-center">
                            I'm Sarah, a 20 year old Graduate Computer Science Student from the University of Auckland. 
                            I'm a tireless vaccuum for knowledge, striving to explore what I can produce with programming. 
                            I love it when I'm able to develop software that simplify problems and helps people. 
                            Below are a list of all my projects. My favourite is 'syntax'.
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