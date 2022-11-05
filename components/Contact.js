import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM);
    return (<>
        <div className="container px-4 mx-auto flex flex-col space-y-4 w-full text-sm">
            <h2 className="text-xl font-bold lg:text-3xl ">Contact Me</h2>
            <div className='bg-slate-200 rounded '>
                <form onSubmit={handleSubmit}>
                    <div className='p-4 mx-auto flex flex-col space-y-4 w-full text-sm'>
                        <div className='flex space-x-4'>
                            <div className='flex flex-col space-y-2 basis-1/2 w-full'>
                                <label 
                                    className='basis'
                                    htmlFor="name"
                                >
                                    Name
                                </label>
                                <input  
                                    className='rounded'
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder='Sarah Kim'
                                />
                            </div>
                            <div className='flex flex-col space-y-2 basis-1/2 w-full'>
                                <label htmlFor="email">
                                    Email Address
                                </label>
                                <input
                                    className='rounded'
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
                                className='basis'
                                htmlFor="message"
                            >
                                Message
                            </label>
                            <textarea
                                className='rounded'
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
                        <button className='flex flex-row-reverse p-4' type="submit" disabled={state.submitting}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </>
)}

export default Contact;