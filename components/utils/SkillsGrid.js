const SkillGrid = (props) => {
    return (
        <div className="p-4 rounded-md bg-slate-100 dark:bg-zinc-800 space-y-4">
            <div className="flex flex-row justify-between w-full m-2">
                <h3 className= "text-xl font-bold mx-2">{props.name}</h3> 
            </div>
            <div className="mx-4 font-mono text-col">{props.list}</div>
        </div>
    )
}

export default SkillGrid;