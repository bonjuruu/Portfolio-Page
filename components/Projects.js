import React from "react"
import Image from "next/image"
import profile from "../public/profile.jpg"
import { AiFillLinkedin, AiFillGithub, AiFillFilePdf } from "react-icons/ai"

const Projects = () => {
    return (
<div className="container px-4 mx-auto flex flex-col w-full text-sm">
            <h2 className="text-2xl font-bold lg:text-3xl mb-6">Contact Me</h2>
            <div className='rounded-md bg-slate-100 dark:bg-zinc-800'>
                    <div className='p-4 mx-auto flex flex-col space-y-4 w-full text-sm'>
                        <div className=' sm:flex sm:space-x-4'>
                            <div className='flex flex-col space-y-2 sm:basis-1/2 w-full mb-4'>
                                <label 
                                    className='font-bold'
                                    htmlFor="name"
                                >
                                    Name
                                </label>
                                <input  
                                    className='p-2 rounded-md border-2 border-fuchsia-800 focus:outline-none hover:border-purple-900'
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder='Sarah Kim'
                                />
                            </div>
                            <div className='flex flex-col space-y-2 sm:basis-1/2 w-full sm:mb-4'>
                                <label
                                    className='font-bold' 
                                    htmlFor="email"
                                >
                                    Email Address
                                </label>
                                <input
                                    className='p-2 rounded-md border-2 border-fuchsia-800 focus:outline-none hover:border-purple-900'
                                    id="email"
                                    type="email" 
                                    name="email"
                                    placeholder='example@mail.com'
                                    required
                                />
                                <ValidationError 
                                    prefix="Email" 
                                    field="email"
                                    errors={state.errors}
                                />
                            </div>
                        </div>
                        <div className='flex flex-col space-y-2 w-full'>
                           <label 
                                className='font-bold'
                                htmlFor="message"
                            >
                                Message
                            </label>
                            <textarea
                                className='p-2 rounded-md border-2 border-fuchsia-800 focus:outline-none hover:border-purple-900'
                                id="message"
                                name="message"
                                rows="6"
                                maxLength="3000"
                                placeholder='Your Message'
                            /> 
                        </div>
                        <ValidationError 
                            prefix="Message" 
                            field="message"
                            errors={state.errors}
                        />
                        <div>
                            <button 
                                className='float float-right rounded px-4 py-2 bg-teal-400 hover:text-white hover:bg-teal-600' 
                                type="submit" disabled={state.submitting}
                            >
                                Send
                            </button>
                        </div>
                        
                    </div>
            </div>
        </div>
    )
}

export default Projects;