import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
    return ( <
        div className = "border-b border-transparent pb-4" >
        <
        motion.h2 whileInView = {
            { opacity: 1, y: 0 } }
        initial = {
            { opacity: 0, y: -100 } }
        transition = {
            { duration: 0.5 } }
        className = "my-20 text-center text-4xl font-light" >
        Working Experience <
        /motion.h2>

        <
        div className = "space-y-24 max-w-6xl mx-auto px-6" > {
            EXPERIENCES.map((experience, index) => ( <
                div key = { index }
                className = "flex flex-wrap lg:flex-nowrap items-start gap-10" >
                { /* --- Left side: Image --- */ } <
                motion.div whileInView = {
                    { opacity: 1, x: 0 } }
                initial = {
                    { opacity: 0, x: -100 } }
                transition = {
                    { duration: 0.8 } }
                className = "w-full lg:w-1/3 flex justify-center lg:justify-start" >
                <
                img src = { experience.image }
                alt = { experience.company }
                className = "rounded-2xl shadow-lg object-cover w-full h-[500px]" /
                >
                <
                /motion.div>

                { /* --- Right side: Details --- */ } <
                motion.div whileInView = {
                    { opacity: 1, x: 0 } }
                initial = {
                    { opacity: 0, x: 100 } }
                transition = {
                    { duration: 0.8 } }
                className = "w-full lg:w-2/3" >
                <
                p className = "mb-2 text-sm text-neutral-700" > { experience.year } < /p> <
                h6 className = "mb-2 font-semibold" > { experience.role } - { " " } <
                span className = "text-sm text-purple-950" > { experience.company } <
                /span> <
                /h6> <
                p className = "mb-4 text-neutral-700 whitespace-pre-line" > { experience.description } <
                /p> {
                    experience.technologies.map((tech, index) => ( <
                        span key = { index }
                        className = "mr-2 mt-4 inline-block rounded bg-neutral-200 px-2 text-sm font-medium text-purple-900" >
                        { tech } <
                        /span>
                    ))
                } <
                /motion.div> <
                /div>
            ))
        } <
        /div> <
        /div>
    );
};

export default Experience;