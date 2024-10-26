export const githubUsername = "IdelineBrisa";

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
            skillName: "Ansys Fluent",
            imagePath: "images/skills/ansys_fluent_logo.png",
            description: "A computational fluid dynamics (CFD) tool for simulating fluid flow, heat transfer, and related phenomena."
        },
        {
            skillName: "Abaqus (FEA)",
            imagePath: "images/skills/abaqus_logo.png",
            description: "A finite element analysis (FEA) software used for structural analysis in engineering."
        },
        {
            skillName: "MATLAB",
            imagePath: "images/skills/matlab_logo.png",
            description: "A tool for numerical computing, simulations, and model-based design applications."
        }
    ],
    "Project Management Tools": [
        {
            skillName: "Microsoft Project",
            imagePath: "images/skills/microsoft_project_logo.png",
            description: "A software product designed to assist project managers in developing plans, assigning resources to tasks, and tracking progress."
        },
        {
            skillName: "Planisware",
            imagePath: "images/skills/planisware_logo.png",
            description: "A project portfolio management software used for resource planning and project tracking."
        }
    ],
    "Engineering Design Software": [
        {
            skillName: "CATIA",
            imagePath: "images/skills/catia_logo.png",
            description: "A multi-platform CAD software suite for design and engineering applications in aerospace."
        },
        {
            skillName: "Creo",
            imagePath: "images/skills/creo_logo.png",
            description: "A 3D CAD software used in engineering design and development, especially for mechanical parts."
        }
    ],
    "General Productivity Software": [
        {
            skillName: "Microsoft Office / Google Suite",
            imagePath: "images/skills/office_google_logo.png",
            description: "Proficient in tools like Excel, Word, and PowerPoint for document creation, data analysis, and presentation."
        }
    ]
};

export const certifications = {
    technicalCertifications: [
        {
            certificationName: "Driver's License",
            image: "images/Certifications/Driver_License_Certificate.jpg",
            preview: "http://127.0.0.1:5500/images/Certifications/Driver_License_Certificate.jpg"
        }
    ]
};

export const experience = [
    {
        title: "MI-GSO-PCUBED / Airbus",
        subtitle: "Project Management Officer (PMO) Assistant",
        duration: "September 2024 - Present",
        details: [
            "Supported the deployment of governance frameworks with stakeholders to reduce qualification times for aircraft components.",
            "Developed tools to track project qualifications, enhancing cross-functional collaboration.",
            "Conducted risk analysis, scheduling, and reporting to streamline project processes."
        ],
        tags: ["Project Management", "Aerospace Engineering", "Process Optimization", "Stakeholder Collaboration"],
        icon: "briefcase",
    },
    {
        title: "National Institute for Aviation Research (NIAR)",
        subtitle: "Engineering Assistant - Advanced Virtual Engineering & Testing Group",
        duration: "May 2023 - August 2023",
        details: [
            "Conducted CFD studies on airfoil and drone designs, focusing on numerical analysis and technical documentation.",
            "Created CFD grids and contributed to numerical analysis using MATLAB and other tools.",
            "Prepared reports and documented findings to support engineering testing and analysis."
        ],
        tags: ["CFD Analysis", "Technical Documentation", "Numerical Analysis", "Engineering Research"],
        icon: "flask",
    },
    {
        title: "Rotor Team - Annecy Meythet Airport",
        subtitle: "Airworthiness Intern",
        duration: "June 2022 - July 2022",
        details: [
            "Evaluated maintenance program effectiveness for 19 helicopters, preparing detailed reports for customer feedback.",
            "Maintained records of helicopter maintenance and physical surveys.",
            "Drafted technical documentation in compliance with CS-STAN standards."
        ],
        tags: ["Airworthiness", "Technical Documentation", "Maintenance Evaluation", "Helicopter Surveys"],
        icon: "clipboard",
    }
];

export const education = [
    {
        title: "Polytech Engineering School - University of Orléans, France",
        duration: "2021 - 2024",
        subtitle: "Engineering Degree in Aerospace and Energy Technologies",
        details: [
            "Focused on fluid dynamics, structural mechanics, aerodynamics, and project management.",
            "Led a mini-rocket prototyping project and completed CFD projects on airflow over aircraft wings.",
            "Collaborated on a project with MBDA to improve high-speed aircraft aerodynamics through fluidic actuators."
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
        title: "Student Exchange Program",
        duration: "May 2023",
        subtitle: "Wichita State University, Kansas, USA",
        details: [
            "Specialized in aerodynamics and propulsion in an aerospace engineering environment.",
            "Participated in team-based aerodynamic analysis projects focusing on varying thickness-to-chord ratios and leading-edge shapes."
        ],
        tags: [
            "Aerodynamics",
            "Propulsion Systems",
            "Experimental Methods",
            "Team Projects"
        ],
        icon: "plane-departure",
    }
];

export const testimonials = {
    reviewer: "Anonymous Colleagues",
    period: "Annual Performance Review",
    company: "MI-GSO-PCUBED / Airbus",
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
                link: "https://github.com/i2line",
            },
        ],
    },
    {
        label: "Resources",
        data: [
            {
                text: "send me a mail",
                link: "mailto:ideline.brisa@hotmail.fr",
            },
            {
                text: "Download Resume",
                link: "https://IdelineBrisagh.github.io/IdelineBrisa.github.io/assets/Ideline_Weiss_Resume.pdf",
                target: "_blank"
            }
        ],
    },
    {
        label: "Social Profiles",
        data: [
            {
                text: "LinkedIn",
                link: "https://www.linkedin.com/in/IdelineBrisa/",
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
