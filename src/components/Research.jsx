import { RESEARCH } from "../constants";
import { motion } from "framer-motion";
import researchImg from "../assets/projects/MirzaResearch.jpg";

const Research = () => {
    return ( <
        div className = "border-b border-transparent pb-4" > { /* Section Title */ } <
        motion.h2 whileInView = {
            { opacity: 1, y: 0 }
        }
        initial = {
            { opacity: 0, y: -100 }
        }
        transition = {
            { duration: 0.5 }
        }
        className = "my-20 text-center text-4xl font-light" >
        Research & Publications <
        /motion.h2>

        { /* Research Items */ } <
        div className = "flex flex-wrap lg:flex-nowrap items-center justify-center gap-10 max-w-6xl mx-auto px-6" > { /* Left side: Image */ } <
        motion.div whileInView = {
            { opacity: 1, x: 0 }
        }
        initial = {
            { opacity: 0, x: -100 }
        }
        transition = {
            { duration: 0.8 }
        }
        className = "w-full lg:w-1/2 flex justify-center" >
        <
        a href = { RESEARCH[0].link }
        target = "_blank"
        rel = "noopener noreferrer" >
        <
        img src = { researchImg }
        alt = "Research Publication"
        className = "rounded-2xl shadow-lg object-cover w-full lg:w-[500px] h-[350px] hover:scale-105 transition-transform duration-300" /
        >
        <
        /a> < /
        motion.div >

        { /* Right side: Description */ } <
        motion.div whileInView = {
            { opacity: 1, x: 0 }
        }
        initial = {
            { opacity: 0, x: 100 }
        }
        transition = {
            { duration: 0.8 }
        }
        className = "w-full lg:w-1/2 text-neutral-700 font-light" >
        <
        p className = "text-center lg:text-left mb-4 font-semibold text-lg" > { RESEARCH[0].title }({ RESEARCH[0].year }) <
        /p> <
        p className = "mb-6 text-center lg:text-left" > { RESEARCH[0].description } <
        /p>

        { /* Clickable publication link */ } <
        a href = { RESEARCH[0].link }
        target = "_blank"
        rel = "noopener noreferrer"
        className = "inline-block mt-4 text-purple-700 font-medium underline hover:text-purple-500" >
        View Published Paper→ <
        /a> < /
        motion.div > <
        /div> < /
        div >
    );
};

export default Research;