import React from "react";

const Footer = () => {
    return (
        <div className="mt-12 lg:mt-18 py-6">
            <div className="max-w-4xl px-4 mx-auto text-gray-800 dark:text-white">
                <div className="pb-8 mb-2 border-t-2 border-gray-300 dark:border-white-300"></div>
                <div className="flex flex-col-reverse justify-between lg:flex-row items-center">
                    <p>Copyright ©️ 2022 Sarah Kyoung Kim</p>
                    <div className="flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
                        <a
                            href="#"
                            className={"transition-colors hover:text-sky-500"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="#"
                            className={"transition-colors hover:text-sky-500"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                        <a
                            href="#"
                            className={"transition-colors hover:text-sky-500"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;