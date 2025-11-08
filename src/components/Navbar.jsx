import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return ( <
        nav className = "mb-20 flex items-center justify-between py-1" >
        <
        div className = "flex flex-shrink-0 items-center" >
        <
        a className = "ml-4 font-bold"
        href = "#" > MirzaAffendy. < /a> < /
        div > <
        div className = "m-8 flex items-center justify-center gap-4 text-2xl" >
        <
        a href = "https://www.linkedin.com/in/mirza-affendy-3950ba253/"
        target = "_blank"
        rel = "noopener noreferrer" >
        <
        FaLinkedin / >
        <
        /a> <
        a href = "https://github.com/MirzaAffendy"
        target = "_blank"
        rel = "noopener noreferrer" >
        <
        FaGithub / >
        <
        /a> <
        a href = "https://www.instagram.com/__ziqz__/?igsh=b3RlNXFhcXNnZXRv&utm_source=qr#"
        target = "_blank"
        rel = "noopener noreferrer" >
        <
        FaInstagram / >
        <
        /a> < /
        div > <
        /nav>
    );
}

export default Navbar;