import SkillGrid from "./utils/SkillsGrid";

const Skills = () => {
    return (
        <div className="container px-4 mx-auto flex flex-col w-full">
            <h2 className="text-2xl font-bold lg:text-3xl mb-6">Skills</h2>
                <SkillGrid name="Front-End Development" list={"JavaScript, TypeScript, React, NodeJS, NextJS, Python, Jinja"} />
                <SkillGrid name="Back-End" list={"TypeScript, Express, Prisma, NodeJS, Python, Flask, C#, .NET"}/>
                <SkillGrid name="Data Analysis/Machine Learning" list={"Python, Pandas, SKlearn, Sci-Kit, Matplot"}/>
        </div>
    )
}

export default Skills;