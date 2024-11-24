export const githubUsername = "idelinebrisa";

export const Name = "Ideline";
export const LastName = "Brisa";
export const FullName = `${Name} ${LastName}`;
export const mail = "ideline.brisa@hotmail.fr";

// Meta information
export const metaTitle = "Ideline Brisa's Portfolio";
export const metaDescription = "Explore the portfolio of Ideline Brisa, showcasing skills in aerospace engineering, project management, and computational fluid dynamics.";
export const metaKeywords = "Ideline Brisa, aerospace engineer, portfolio, project management, certifications, CFD analysis";
export const metaAuthor = "Ideline Brisa";

// Contact information
export const contactInfo = `Send me an email at ${mail}, or find me on LinkedIn. Let’s connect to discuss aerospace innovations or project management!`;

export const bio = [
    "Meet Ideline Brisa: Aerospace Engineer, PMO Assistant, and Enthusiast for Innovation in Aerospace Technologies.",
    `As a recent graduate in Aerospace Engineering from Polytech Orléans and as a PMO Assistant at Airbus, I bring a strong foundation in aerospace engineering and hands-on experience in project management.`,
    `I am skilled in fluid dynamics, structure mechanics, aerodynamics, and project management, having led projects that range from mini-rocket prototyping to CFD visualization and analysis.`,
    `My passion for aerospace is driven by a commitment to continuous learning and a desire to contribute to advancements in the field.`,
    "Thank you for exploring my academic and professional journey in the dynamic world of aerospace engineering!",
];

export const languages = [
    {
        title: "English Communication",
        skillName: "English",
        color: "1",
        percentage: "100",
    },
    {
        title: "French Communication",
        skillName: "French",
        color: "2",
        percentage: "100",
    }
];

export const skills = {
    "Aerospace Simulation and Analysis Tools": [
        {
            skillName: "Ansys Workbench, Fluent, Mechanics",
            imagePath: "images/skills/ansys_logo.png",
            description: "Experienced in Ansys Workbench, Fluent, and Mechanical for advanced Computational Fluid Dynamics (CFD) simulations, including fluid flow, heat transfer, and turbulence modeling. Proficient in applying mechanical analysis techniques for structural integrity assessment, optimization, and performance evaluation of aerospace and mechanical components."
        },
        {
            skillName: "Catia V5",
            imagePath: "images/skills/catia_logo.png",
            description: "Proficient in CATIA V5, a powerful CAD software for 3D design, engineering, and manufacturing, widely used in aerospace and automotive industries."
        },
        {
            skillName: "Creo Parametric",
            imagePath: "images/skills/creo_logo.png",
            description: "Experienced in Creo Parametric, a CAD software that enables robust 3D modeling, engineering design, and product development, particularly for complex mechanical parts."
        },
        {
            skillName: "Abaqus",
            imagePath: "images/skills/abaqus_logo.png",
            description: "Skilled in Abaqus for finite element analysis (FEA) to conduct structural, thermal, and dynamic simulations for engineering applications."
        },
        {
            skillName: "MATLAB",
            imagePath: "images/skills/matlab_logo.png",
            description: "Proficient in MATLAB for numerical computing, data visualization, simulations, and algorithm development, applied in various engineering and scientific research contexts."
        },
        {
            skillName: "C / C++",
            imagePath: "images/skills/cpp_logo.png",
            description: "Experienced in C / C++ for developing high-performance software, object-oriented programming, and system-level applications, particularly for simulations and aerospace systems."
        }
    ],
    "Project Management Tools": [
        {
            skillName: "Planisware",
            imagePath: "images/skills/planisware_logo.png",
            description: "Proficient in Planisware for project portfolio management, resource planning, and project tracking, particularly suited to engineering and R&D projects."
        },
        {
            skillName: "AD Software",
            imagePath: "images/skills/ADSoftware_logo.png",
            description: "Experienced in AD Software for developing project plans, allocating resources, and tracking progress throughout project lifecycles."
        },
    ],
    "General Productivity Software": [
        {
            skillName: "Microsoft Office",
            imagePath: "images/skills/office_logo.png",
            description: "Proficient in Excel, Word, and PowerPoint for document creation, data analysis, and presentations."
        },
        {
            skillName: "Google Workspace",
            imagePath: "images/skills/google_logo.png",
            description: "Skilled in Docs, Sheets, Slides, LookerStudio, etc. for collaborative document creation, data analysis, and presentations."
        }
    ]
};

export const certifications = {
    Certifications: [
        {
            certificationName: "",
            image: "images/Certifications/Driver_License_Certificate.jpg",
            preview: "http://127.0.0.1:5500/images/Certifications/Driver_License_Certificate.jpg"
        }
    ]
};

export const experience = [
    {
        title: "Mi-GSO | PCUBED / Airbus",
        subtitle: "Internship as a Project Management Officer (PMO) Assistant",
        duration: "March 2024 - Present",
        localization: "Toulouse, France", 
        pictures: [
            { src: "images/mi-gso_logo.png", size: "100px" },
            { src: "images/airbus_logo.png", size: "100px" }
        ],
        details: [
            "Deployment of governance frameworks to reduce qualification times for aircraft components:",
            "• Developed tools to facilitate the follow-up of qualification projects and a way of working to enhance cross-functional collaboration.",
            "• Stakeholders management and change management.",
            "• Conducted risk analysis, scheduling, and reporting to streamline project processes."
        ],
        tags: [
            "Project Management", 
            "Aerospace Engineering", 
            "Process Optimization", 
            "Stakeholder Collaboration"
        ],
        icon: "briefcase",
    },
    {
        title: "National Institute for Aviation Research (NIAR)",
        subtitle: "Academic Training as an engineer assistant within the CFD Advanced Virtual Engineering & Testing (AVET) group",
        duration: "May 2023 - August 2023",
        localization: "Wichita, KS, USA", 
        pictures: [{ src: "images/niar_logo.png", size: "100px" }],
        details: [
            "Conducted 3D studies on infinite airfoil and drone designs:",
            "• Created CFD (Computational Fluid Dynamics) grids, scripts, and numerical simulations.",
            "• Numerical analysis and comparison of parameters (meshes, turbulence models...).",
            "• Prepared reports, and documented findings to support engineering testing and analysis."
        ],
        tags: [
            "CFD Analysis", 
            "Technical Documentation", 
            "Numerical Analysis", 
            "Engineering Research"
        ],
        icon: "flask",
    },
    {
        title: "Rotor Team",
        subtitle: "Internship in the airworthiness department",
        duration: "June 2022 - July 2022",
        localization: "Annecy Meythet Airport, France",
        pictures: [{ src: "images/rotor-team_logo.png", size: "100px" }],
        details: [
            "• Evaluated maintenance program effectiveness for 19 helicopters and prepared detailed reports.",
            "• Maintained records of helicopter maintenance and physical surveys.",
            "• Drafted technical documentation in compliance with CS-STAN standards."
        ],
        tags: [
            "Airworthiness", 
            "Technical Documentation", 
            "Maintenance Evaluation", 
            "Helicopter Surveys"
        ],
        icon: "clipboard",
    }
];

export const education = [
    {
        title: "Polytech Engineering School - University of Orléans, France",
        duration: "2021 - 2024",
        subtitle: "Engineering Degree - TEAM “Technologies for Energy, Aerospace and Motorization” Departement",
        details: [
            "• Trained in fluid dynamics (boundary layer, turbulent, aerodynamics, gas dynamics,aeroelasticity, aeroacoustic), structure mechanics, combustion, heat transfer, acoustics and vibrations & project management.",
            "• Project leader for creating a guide for building a mini-rocket and assembling a prototype.",
            "• CFD project on the 3D visualization of airflow over aircraft wings",
            "• CFD project in collaboration with MBDA focusing on the use of fluidic actuators for the aerodynamic improvement of high-speed aircraft wings in the transonic regime."
        ],
        tags: [
            "Aerospace Engineering",
            "Project Leadership",
            "Fluid Dynamics",
            "Structural Mechanics",
            "CFD Analysis",
            "Collaboration with Industry"
        ],
        icon: "graduation-cap",
    },
    {
        title: "Student exchange program - Wichita State University, KS, USA",
        duration: "January - May 2023",
        subtitle: "Aerospace Engineering Department",
        details: [
            "• Trained in aerodynamics and propulsion and experimental methods in aerospace.",
            "• Team project about aerodynamic analysis of flat plates with varying thickness-to-chord ratios and leading-edge shapes at low Reynolds numbers."
        ],
        tags: [
            "Aerodynamics",
            "Propulsion Systems",
            "Experimental Methods",
            "Team Projects"
        ],
        icon: "plane-departure",
    },
    {
        title: "Polytech Engineering School – University of Lyon 1, France",
        duration: "2019 - 2021",
        subtitle: "Polytech Network’s program (PEIP)",
        details: [
            "Mechanics option."
        ],
        tags: [
            "Mechanical",
            "Coding",
            "Mathematics"
        ],
        icon: "",
    }
];

export const testimonials = {
    reviewer: "Anonymous Colleagues",
    period: "Annual Performance Review",
    company: "",
    feedback: [
      {
        title: "Structured and Clear Communication",
        detail: "Ideline expresses ideas and presents concepts in a structured and clear manner, making complex project details accessible to all team members."
      },
      {
        title: "Professionalism and Positive Attitude",
        detail: "Ideline consistently displays professionalism and maintains a positive demeanor, significantly enhancing team morale and the work environment."
      },
      {
        title: "Proactive Problem-Solving",
        detail: "Ideline demonstrates a proactive approach in addressing project challenges, often solving problems independently before escalating issues, showcasing her initiative and determination."
      },
      {
        title: "Innovative Use of Technology",
        detail: "Actively incorporates advanced engineering tools and software to improve design efficiency and project workflows, showcasing her adeptness at leveraging technology."
      },
      {
        title: "Commitment to Team Growth",
        detail: "Shows great enthusiasm in collaborative projects and training sessions, actively contributing to the team’s skills development in aerospace engineering."
      },
      {
        title: "Technical Skills and Analytical Abilities",
        detail: "Ideline is exceptionally talented in fluid dynamics and structural mechanics, utilizing her technical expertise to analyze and solve complex engineering problems."
      },
      {
        title: "Team Collaboration and Support",
        detail: "During the MBDA project, Ideline was meticulous and supportive, playing a pivotal role in our project's success through her teamwork and technical insights."
      },
      {
        title: "Efficiency in Project Management",
        detail: "She manages her project tasks quickly and efficiently, maintaining clear and effective communication with all stakeholders involved."
      },
      {
        title: "Passion for Learning and Improvement",
        detail: "Ideline shows a remarkable desire to continuously learn and improve. She is particularly driven when tackling new and challenging engineering problems."
      },
      {
        title: "Contributions to Team Knowledge",
        detail: "Ideline is always willing to share her knowledge and expertise, notably in creating innovative solutions to enhance our project outcomes."
      },
      {
        title: "Innovative Problem Solving",
        detail: "Ideline took the initiative in our recent aerospace design project to refine our simulation processes, providing invaluable insights that enhanced our results."
      }
    ]
};

export const footer = [
    {
        label: "Dev Profiles",
        data: [
            {
                text: "GitHub",
                link: "https://github.com/idelinebrisa",
            },
        ],
    },
    {
        label: "Resources",
        data: [
            {
                text: "Send me a mail",
                link: "mailto:ideline.brisa@hotmail.fr",
            },
            {
                text: "Download Resume",
                link: "https://idelinebrisa.github.io/assets/CV_2410_English_Management_grad.pdf",
                target: "_blank"
            }
        ],
    },
    {
        label: "Social Profiles",
        data: [
            {
                text: "LinkedIn",
                link: "https://www.linkedin.com/in/ideline-brisa/",
            },
        ],
    },
    {
        label: "copyright-text",
        data: [
            "Made with &hearts; by IdelineBrisa.",
            "&copy; No Copyrights. Feel free to use this template.",
        ],
    },
];
