import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
    return ( <
        div className = "border-b border-transparent pb-4" > { /* Section Title */ } <
        motion.h2 whileInView = {
            { opacity: 1, y: 0 } }
        initial = {
            { opacity: 0, y: -100 } }
        transition = {
            { duration: 0.5 } }
        className = "my-20 text-center text-4xl font-light" >
        Projects <
        /motion.h2>

        { /* Project List */ } <
        div className = "max-w-6xl mx-auto px-6 space-y-20" > {
            PROJECTS.map((project, index) => ( <
                div key = { index }
                className = "flex flex-wrap lg:flex-nowrap items-start gap-10" >
                { /* --- Left: Video or Images --- */ } <
                motion.div whileInView = {
                    { opacity: 1, x: 0 } }
                initial = {
                    { opacity: 0, x: -100 } }
                transition = {
                    { duration: 0.8 } }
                className = "w-full lg:w-1/2 flex justify-center lg:justify-start gap-4" >
                {
                    project.video ? ( <
                        video src = { project.video }
                        controls playsInline className = { `rounded-xl shadow-lg object-cover ${
                    project.isVertical
                      ? "w-[250px] h-[450px]" // 📱 vertical format (mobile UI demo)
                      : "w-full h-[300px]" // 🌐 standard landscape format
                  }` }
                        />
                    ) : ( <
                        >
                        <
                        img src = { project.image1 }
                        alt = { `${project.title} image 1` }
                        className = "w-1/2 h-[220px] object-cover rounded-xl shadow-lg" /
                        >
                        <
                        img src = { project.image2 }
                        alt = { `${project.title} image 2` }
                        className = "w-1/2 h-[220px] object-cover rounded-xl shadow-lg" /
                        >
                        <
                        />
                    )
                } <
                /motion.div>

                { /* --- Right: Project Details --- */ } <
                motion.div whileInView = {
                    { opacity: 1, x: 0 } }
                initial = {
                    { opacity: 0, x: 100 } }
                transition = {
                    { duration: 0.8 } }
                className = "w-full lg:w-1/2" >
                <
                h6 className = "mb-2 font-semibold text-lg" > { project.title } < /h6> <
                p className = "mb-4 text-neutral-700 leading-relaxed" > { project.description } <
                /p>

                { /* Technologies */ } <
                div className = "flex flex-wrap gap-2" > {
                    project.technologies.map((tech, i) => ( <
                        span key = { i }
                        className = "rounded bg-neutral-200 px-2 py-1 text-sm font-medium text-purple-900" >
                        { tech } <
                        /span>
                    ))
                } <
                /div> <
                /motion.div> <
                /div>
            ))
        } <
        /div> <
        /div>
    );
};

export default Projects;