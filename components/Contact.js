import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM);
    return (<>
        <div className="container px-4 mx-auto">
            <h2 className="text-xl font-bold lg:text-3xl">Contact Me</h2>
            <div>
                
            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    Email Address
                </label>
                <input
                    id="email"
                    type="email" 
                    name="email"
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
                <label htmlFor="name">
                    Name
                </label>
                <input id="name"
                        type="text"
                        name="name"
                />
                <textarea
                    id="message"
                    name="message"
                />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" disabled={state.submitting}>
                    Submit
                </button>
            </form>
        </div>
    </>
)}

export default Contact;