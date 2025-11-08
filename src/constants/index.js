import project2a from "../assets/projects/OutgoingSample.jpg";
import project2b from "../assets/projects/OutgoingSample1.jpg";
import project3a from "../assets/projects/PMRecall.jpg";
import project3b from "../assets/projects/PMRecall1.jpg";
import project4a from "../assets/projects/callabProject.jpg";
import project4b from "../assets/projects/callabProject1.jpg";
import agriVideo from "../assets/projects/IMG_2424.MOV";
import ecodoorVideo from "../assets/projects/IMG_5922.MOV";

import internshipImg from "../assets/projects/MirzaIntern3.jpg";
import jobImg from "../assets/projects/MirzaIntern1.jpg"

export const HERO_CONTENT = `I’m a Computer Science graduate passionate about building digital solutions and IT automation that make work smarter and more efficient. I have hands-on experience with Power Platform (Apps, Automate, BI) and web technologies like Python, Java, HTML, CSS, and JavaScript.

My background includes providing 2nd & 3rd level IT support in areas such as Microsoft OS, ServiceNow, servers, and networks, along with supporting global IT initiatives. I’m always eager to learn, adapt, and contribute to innovative in-house development projects.`;

export const ABOUT_TEXT = `Hi, I’m Mirza Affendy, a Computer Science graduate passionate about building smart, efficient, and user-focused digital solutions. I specialize in IT automation, system support, and web-based application development that help teams work better and faster.

I have hands-on experience with Power Platform (Apps, Automate, BI) and programming languages like Python, Java, HTML, CSS, and JavaScript.

My work involves providing 2nd & 3rd level IT support across Microsoft 365, ServiceNow, servers, and networks, while contributing to global IT projects such as Windows 11 migration and network security transformation.

I strongly value teamwork, adaptability, and accountability in every project I take on. Always eager to learn new technologies and broaden my knowledge, I strive to deliver efficient solutions that make a real impact. Outside of work, I’m active in volunteering initiatives and love spending time in nature — whether through traveling or hiking, which help me stay inspired, grounded, and creative.

I’m driven by curiosity, continuous growth, and a passion for solving technical challenges through innovation.`;


export const EXPERIENCES = [{
        year: "February 2025 - Present",
        role: "IT Software Development Engineer (Fresh Graduate)",
        company: "NXP Semiconductors",
        image: jobImg,
        description: `• Designed an automated Internal Inventory Tracking System for asset management at ATKL site.\n
• Develop regional Smart Lab Oven Reservation and Quality Specification Recall Systems using Power Platform tools(Power Apps,Power Automate Flow ,Power BI & SharePoint List).\n
• Provide 2nd & 3rd level IT support for hardware/software, ServiceNow, Intune, and network troubleshooting.\n
• Support global IT initiatives including Windows 11 migration, CrowdStrike deployment, and network security transformation.\n
• Handle SCCM, TPM 2.0 validation, BitLocker encryption, MFA reset, and Microsoft 365 user management.`,

        technologies: [
            "Python",
            "PowerApps",
            "Power Automate",
            "SharePoint",
            "Power BI",
            "ServiceNow",
            "Intune",
            "Windows OS",
            "BitLocker",
            "Redhat",
            "SCCM",
            "Software & Hardware Support",
            "Microsoft 365",
        ],
    },
    {
        year: "July 2024 - January 2025",
        role: "Internship",
        company: "NXP Semiconductors",
        image: internshipImg,
        description: `• Developed a web-based Calibration Instrument In/Out Tracking System using Python Django and MySQL.\n
• Created Periodic Maintenance & Calibration Recall System with SharePoint and Power Platform.\n
• Built Sample Collection Tracking System automating email reminders.\n
• Configured and troubleshot Raspberry Pi 4 Model B for lab display.`,
        technologies: [
            "Python",
            "Django",
            "MySQL",
            "SharePoint",
            "PowerApps",
            "Power Automate Flow",
            "HTML",
            "CSS",
            "SMTP API",
            "Raspberry Pi",
        ],
    },
];

export const PROJECTS = [{
        title: "Agriculture Trading Platform (Final Year Project)",
        video: agriVideo, // 🎥 Add your video file here
        description: `Developed a web-based agriculture trading dashboard using Python, Streamlit, HTML, CSS, and SQL to provide real-time commodity data, predictive market prices, and stock forecasts for traders and farmers.`,
        technologies: ["Python Django", "Streamlit", "SQL", "HTML", "CSS", "API", "PyTorch"],
    },
    {
        title: "Outgoing Sample Collection Tracking System (SCTS)",
        image1: project2a,
        image2: project2b,
        description: `Built a tracking system to monitor outgoing sample records and automate email notifications to owners after bias testing, improving sample traceability across departments.`,
        technologies: ["PowerApps", "Power Automate Flow", "SharePointList", "HTML", "CSS", "JSON"],
    },
    {
        title: "Periodic Maintenance & Calibration Recall System (PMCal)",
        image1: project3a,
        image2: project3b,
        description: `Developed a SharePoint-based recall system to track instrument calibration and maintenance status across departments using Power Apps and Power Automate for automated workflows.`,
        technologies: ["PowerApps", "Power Automate Flow", "SharePointList", "API SMTP"],
    },
    {
        title: "Calibration Instrument In/Out Tracking System (CIITS)",
        image1: project4a,
        image2: project4b,
        description: `Created a web-based tracking system to streamline instrument calibration processes using Python Django, MySQL, and API integration for real-time updates.`,
        technologies: ["Python", "Django", "MySQL", "API", "HTML", "CSS"],
    },
    {
        title: "Ecodoor MobileApp Figma Design Integrated AI Chatbot (Portotype)",
        video: ecodoorVideo,
        isVertical: true,
        description: `Designed a wireframe mobile app tourism which integrated with AI Chatbot using Figma `,
        technologies: ["Figma"],
    },
];

export const RESEARCH = [{
    title: "Leveraging Deep Learning for Agricultural Market Forecasting and Supply Chain Optimization in Malaysia",
    description: `Published a research paper on Leveraging Deep Learning for Agricultural Market Forecasting and Supply Chain Optimization in Malaysia — officially published in the Journal of Infrastructure, Policy and Development (Vol. 9, Issue 2, 2025).`,
    year: "2025",
    link: "https://systems.enpress-publisher.com/index.php/jipd/article/view/8966", // optional if you have one
}, ];


export const CONTACT = {
    address: "Jln PJS9/1 Bandar Sunway, 47500, Subang Jaya, Selangor, Malaysia.",
    phoneNo: "+601127876689",
    email: "mirzanurhaziq29@gmail.com",
};