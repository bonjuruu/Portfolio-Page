import {FiGithub, FiExternalLink} from "react-icons/fi"


const ProjectGrid = (props) => {
    return (
        <div className="p-4 rounded-md bg-slate-100 dark:bg-zinc-800 space-y-4">
            <div className="flex flex-row justify-between w-full m-2">
                <a className={`float-left text-xl font-bold mx-2 hover:text-sky-500 ${props.wip ? "after:content-['*WIP'] after:ml-0.5 after:text-sm after:italic" : ""}`} 
                    target="_blank"
                    href={props.titleLink}>{props.name}</a> 
                <span className="float-right mx-2 text-lg text-sky-500 font-mono">{props.date}</span>
            </div>
            <p className="m-4 text-md py-2 pb-8">{props.message}</p>
            <span className="mx-4 font-mono text-col">{props.stackList}</span>
            <div className="text-xl flex gap-2 pb-2 w-full mx-4">
                {props.github && 
                <a href={props.github} target="_blank">
                    <FiGithub className="cursor-pointer hover:text-sky-500"/>
                </a>}
                {props.link && 
                <a href={props.link} target="_blank">
                    <FiExternalLink className="cursor-pointer hover:text-sky-500"/>
                </a>}
            </div>
        </div>
    )
}

export default ProjectGrid;