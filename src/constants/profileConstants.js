/**
 * List containing navigation route names and urls
 */
export const navigationRoutes = [
    { name: 'Home', route: '/' },
    { name: 'About', route: '/about' },
    { name: 'Projects', route: '/projects' },
    { name: 'Experience', route: '/experience' },
    { name: 'Contact', route: '/contact' }
];


/**
 * Object containing general information used throughout the site
 */
export const generalInfo = {
    resume: {
        src: '/files/Jotham_Teshome_Resume.pdf',
        name: 'Jotham_Teshome_resume.pdf'
    },
    images: {
        home_image: {
            src: "/images/jotham-teshome-glasses.png",
            alt: "Jotham's image with glasses"
        },
        about_image: {
            src: "/images/jotham-teshome.jpg",
            alt: "Image of Jotham at Mackinac Island"
        }
    },
    contact_info: {
        name: "Jotham Teshome",
        email: "teshomejotham@gmail.com",
        location: "West Bloomfield, Michigan"
    },
    typewriter_strings: ["Software Engineer", "Machine Learning Engineer", "Full-stack Developer"]
}


/**
 * Object containing icons necessary for loading webpage
 */
export const icons = {
    file_pdf: '/icons/file-pdf.svg',
    github: '/icons/github.svg',
    linkedin: '/icons/linkedin.svg',
    live_demo: '/icons/link-45deg.svg',
    aws_cloud_development_kit: '/icons/aws-cloud-development-kit.svg',
    hugging_face_logo: '/icons/hugging-face-logo.svg'
}


/**
 * Object containing text for About Me section
 */
export const aboutMeDescription = {
    about_me: [
        "Hi, I'm Jotham — a Computer Science graduate with a Master of Science from Michigan State University. My work sits at the intersection of Software Engineering, AI, and Cloud Infrastructure, with a strong focus on building scalable backend systems and intelligent applications.",
        "I thrive on solving complex technical problems and enjoy experimenting with new tools, whether it's deploying serverless architectures on AWS or fine-tuning machine learning models for NLP and Computer Vision tasks.",
        "I'm always open to new challenges and meaningful collaborations. If you're a recruiter, engineer, or founder looking to build something impactful, I’d love to connect."
    ]
};


/**
 * List containing skill names and icons that I am familiar with
 */
export const skills = [
    // Languages
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" },
    { name: "Bash", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" },

    // Web & Frontend
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "Framer Motion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg" },
    { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },

    // Backend/API/Frameworks
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" },
    { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
    { name: "Pytest", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytest/pytest-original.svg" },

    // AI/ML/DL
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
    { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
    { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
    { name: "Hugging Face", icon: icons.hugging_face_logo },

    // Databases
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },

    // Cloud & DevOps
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "AWS CDK", icon: icons.aws_cloud_development_kit },
    { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" },
    { name: "GCP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "CI/CD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg" },
];


/**
 * Object containing details for different project badge types
 */
export const projectBadgeDetails = {
    "Web": { bg_color: "#EC4E20", txt_color: "#FFFFFF", title: "Web Development" },
    "ML": { bg_color: "#1A535C", txt_color: "#FFFFFF", title: "Machine Learning" },
    "CV": { bg_color: "#C20114", txt_color: "#FFFFFF", title: "Computer Vision" },
    "NLP": { bg_color: "#55286F", txt_color: "#FFFFFF", title: "Natural Language Processing" },
    "Cloud": { bg_color: "#87e2ff", txt_color: "#000000", title: "Cloud Engineering/Deployment" }
}


/**
 * List containing projects I have worked on
 */
export const projectItems = [
    {
        name: "Portfolio Website",
        description: "My portfolio website built using Next.js, React, and Bootstrap. Animations were created using Framer Motion",
        image: "/images/projects/nextjs-portfolio-website.png",
        badges: ["Web"],
        links: {
            github: "https://github.com/jothamteshome/NextJS-Portfolio-Website"
        },
        technologies: ["Bootstrap", "CSS", "JavaScript", "React", "Next.js", "Framer Motion"]
    },
    {
        name: "Classification of Pokemon Sprites",
        description: "Collaborated with a team of four students to design and implement a convolutional neural network model. \
        Successfully utilized image processing and machine learning techniques to classify Pokémon sprites within a set of images, \
        achieving up to 86% accuracy in classifying sprites from battle images.",
        image: "/images/projects/classification-of-pokemon-sprites.png",
        badges: ["CV"],
        links: {
            github: "https://github.com/jothamteshome/Classification-of-Pokemon-Sprites"
        },
        technologies: ["CNN", "OpenCV", "Python", "PyTorch"]
    },
    {
        name: "Predicting NFL Betting Odds",
        description: "In this project, we aim to predict the points spread of an NFL game using many different factors, \
        including home and away team records and average per game metrics. To make these predictions effectively, \
        we tested various regression models, including linear regression, ridge regression, lasso regression, \
        random forest regression, voting regression, support vector regression, and a neural network. \
        We believe training all of these various models will give us better insight into where we can \
        improve model performance by introducing a different feature set, as well as being able to \
        compare the accuracy of a purely linear model with a non-linear model.",
        image: "/images/projects/predicting-nfl-betting-odds.jpg",
        badges: ["ML"],
        links: {
            github: "https://github.com/jothamteshome/Predicting-NFL-Betting-Odds"
        },
        technologies: ["Python", "PyTorch", "Sci-Kit Learn", "BeautifulSoup"]
    },
    {
        name: "Identifying and Removing Toxic Comments",
        description: "In this project, we propose a method to detect toxic statements and identify specific toxic words within \
        these statements. Additionally, we developed a method to completely censor these harmful words to prevent their negative \
        impact in online spaces.",
        image: "/images/projects/identifying-and-removing-toxic-comments.png",
        badges: ["NLP"],
        links: {
            github: "https://github.com/jothamteshome/Identifying-And-Removing-Toxic-Comments"
        },
        technologies: ["Python", "Tensorflow", "NLTK", "FastText"]
    },
    {
        name: "ChatGPT API with AWS CDK",
        description: "A serverless REST API that integrates OpenAI's GPT-4.1-mini model using AWS CDK, Lambda, and API Gateway. Designed for scalable, secure deployment of chat-based AI services.",
        image: "/images/projects/aws-chatgpt-api.png",
        badges: ["Cloud", "NLP"],
        links: {
            github: "https://github.com/jothamteshome/AWS-ChatGPT-API"
        },
        technologies: ["AWS CDK", "Lambda", "API Gateway", "OpenAI", "Python"]
    }
];


/**
 * List containing past job experiences that I have had
 */
export const experienceItems = [
    {
        employer: "Stefanini Group",
        start_date: "April 2025",
        end_date: "Present",
        role: "Application Development Intern, SAP Integration",
        tasks_completed: ["Created a Python accelerator to automate the generation of SAP Business Process Documents, cutting documentation time by 70%",
            "Integrated backend functions with an existing AI chatbot, enabling automation through conversational interfaces using REST APIs",
            "Designed and executed a phased migration strategy to merge AWS APIs into a unified Azure system, improving reliability by 25%",
            "Integrated a Plant Assistant tool with SAP PM solutions to improve process automation, reducing manual errors by 15%"
        ],
        logo: "https://media.licdn.com/dms/image/v2/D560BAQGxw8ejZKpVTA/company-logo_200_200/company-logo_200_200/0/1689014804966/stefanini_logo?e=1750896000&v=beta&t=47v-7Ci0rcYFhtUavSnQO2PkaiPoCy3l65AuVtk1wRs"
    },
    {
        employer: "Versive",
        start_date: "Jun 2024",
        end_date: "Dec 2024",
        role: "Machine Learning Engineer",
        tasks_completed: ["Built CNN models in PyTorch to detect tumors in MRI scans, enhancing diagnostic accuracy by 10% and supporting early detection",
            "Boosted model performance by 10% through YOLOv8 segmentation to focus on critical tumor regions during prediction",
            "Applied transfer learning with pretrained ImageNet weights to reduce training time 30% and improve precision across scans"
        ],
        logo: "https://versive.ca/img/widi/logo.svg"
    },
    {
        employer: "Michigan State Univerity",
        start_date: "Aug 2023",
        end_date: "May 2024",
        role: "Graduate Teaching Assistant",
        tasks_completed: ["Guided students in building responsive front-end projects using HTML, CSS, and JavaScript",
            "Improved student project outcomes by 7% through office hours and support with Flask back-end design and GitLab version control",
            "Reviewed and graded technical assignments for the Web Application Development course, ensuring rigorous academic standards"
        ],
        logo: "https://upload.wikimedia.org/wikipedia/en/5/53/Michigan_State_University_seal.svg"
    },
    {
        employer: "Versive",
        start_date: "Jan 2023",
        end_date: "Jul 2023",
        role: "Software Development Engineer",
        tasks_completed: ["Developed a secure hospital app with AWS Amplify and RDS, improving MRI access times and reducing verification time by 20%",
            "Built Flask APIs and connected MySQL backend with React frontend for seamless user experience",
            "Ensured patient data security with encryption, RBAC, and MFA, achieving 100% compliance with HIPAA standards",
            "Leveraged Docker containers and Git for deployment and version control, improving development cycle efficiency by 15%"
        ],
        logo: "https://versive.ca/img/widi/logo.svg"
    },
    {
        employer: "Michigan State University Federal Credit Union",
        start_date: "Aug 2022",
        end_date: "Dec 2022",
        role: "Software Engineering Intern",
        tasks_completed: ["Designed a peer-to-peer transfer system in Flutter/Dart with QR code and NFC support, increasing user transaction speed by 25%",
            "Integrated Google Places API to send personalized deal notifications based on shopping patterns, boosting app engagement by 18%",
            "Contributed to app improvements using Flutter, Dart, and SQL, enhancing overall app stability and reducing crash rates by 12%"
        ],
        logo: "https://assets.bizclikmedia.net/576/9e74408088209589917c0ec30d0f5898:9fddd8f3760b713e18c51d4cde47fa63/404no22rkiiusfca101220200429.jpeg"
    }
];


/**
 * List containing past academic institutions that I have attended
 */
export const educationItems = [
    {
        institution: "Michigan State University",
        start_date: "Jan 2023",
        end_date: "August 2024",
        degree_aquired: "MS, Computer Science",
        gpa: "3.85",
        coursework: ["Natural Language Processing",
            "Computer Vision",
            "Pattern Recognition",
            "Deep Learning",
            "Algorithmic Graph Theory",
            "Distributed Systems"
        ],
        logo: "https://upload.wikimedia.org/wikipedia/en/5/53/Michigan_State_University_seal.svg"
    },
    {
        institution: "Michigan State University",
        start_date: "Sep 2019",
        end_date: "Dec 2022",
        degree_aquired: "BS, Computer Science",
        gpa: "3.69",
        coursework: [
            "Data Structures & Algorithms",
            "Operating Systems",
            "Computer Networks",
            "Algorithm Engineering",
            "Web Application Development",
            "Database Systems",
        ],
        logo: "https://upload.wikimedia.org/wikipedia/en/5/53/Michigan_State_University_seal.svg"
    }
];


/**
 * List containing links to my social media pages
 */
export const socialMediaLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/jothamteshome/", icon: icons.linkedin, bg_color: "#0072b1", title: "Check out my Linkedin profile!" },
    { name: "Github", url: "https://github.com/jothamteshome", icon: icons.github, bg_color: "#2d3748", title: "Check out my Github profile!" },
    { name: "Resume", url: generalInfo.resume.src, icon: icons.file_pdf, bg_color: "#d86556", title: "Check out my Resume!" }
];