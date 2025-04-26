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
    live_demo: '/icons/link-45deg.svg'
}


/**
 * Object containing text for About Me section
 */
export const aboutMeDescription = {
    about_me: [
        "I'm Jotham, a recent Computer Science graduate with a Master of Science from Michigan State University. \
        I specialize in Software Engineering and Machine Learning, with my current interests being Natural \
        Language Processing and Computer Vision.",
        "Driven by curiosity, I enjoy the challenge of tackling projects, both large and small. Each one provides me a unique \
        opportunity to expand my knowledge on new technologies.",
        "I'm always excited to explore new opportunities and discuss how I can contribute to innovative projects. If you're \
        a recruiter or a professional looking to collaborate, feel free to reach out. I look forward to hearing from you!"
    ]
};


/**
 * List containing skill names and icons that I am familiar with
 */
export const skills = [
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
    { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg" },
    { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" },
    { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
    { name: "Framer Motion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg" },
    { name: "GCP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "Javascript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    { name: "NextJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "Pytorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" }
];


/**
 * Object containing details for different project badge types
 */
export const projectBadgeDetails = {
    "Web": { bg_color: "#EC4E20", txt_color: "#FFFFFF", title: "Web Development" },
    "ML": { bg_color: "#1A535C", txt_color: "#FFFFFF", title: "Machine Learning" },
    "CV": { bg_color: "#C20114", txt_color: "#FFFFFF", title: "Computer Vision" },
    "NLP": { bg_color: "#55286F", txt_color: "#FFFFFF", title: "Natural Language Processing" }
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
        technologies: ["Bootstrap", "CSS", "Javascript", "React", "Next.js", "Framer Motion"]
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
        technologies: ["CNN", "OpenCV", "Python", "Pytorch"]
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
        technologies: ["Python", "Pytorch", "Sci-Kit Learn", "BeautifulSoup"]
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
        role: "Purolator Apps SCP Intern",
        tasks_completed: ["Refactored legacy C# AI chatbot logic into modular Python functions, enhancing code maintainability and enabling easier future development",
            "Engineered and deployed AWS Lambda functions to expose business logic as scalable, reusable APIs across chatbot platforms",
            "Automated the generation of SAP Business Process Documents (BPDs) using Python APIs, reducing manual workload and increasing consistency",
            "Analyzed and translated complex monolithic codebases to ensure accurate cross-language functionality and alignment with business requirements"
        ],
        logo: "https://media.licdn.com/dms/image/v2/D560BAQGxw8ejZKpVTA/company-logo_200_200/company-logo_200_200/0/1689014804966/stefanini_logo?e=1750896000&v=beta&t=47v-7Ci0rcYFhtUavSnQO2PkaiPoCy3l65AuVtk1wRs"
    },
    {
        employer: "Versive",
        start_date: "Jun 2024",
        end_date: "Dec 2024",
        role: "Machine Learning Engineer",
        tasks_completed: ["Developed CNN-based vision models using PyTorch to detect tumors in MRI scans, improving diagnostic accuracy and assisting doctors in providing patients with better outcomes",
            "Leveraged transfer learning with pretrained models (ImageNet) to enhance model precision and reduce training time",
            "Utilized YOLOv8 for image segmentation to precisely localize tumor regions within MRI scans, leading to a 10% increase in detection accuracy by focusing on relevant areas"
        ],
        logo: "https://versive.ca/img/widi/logo.svg"
    },
    {
        employer: "Michigan State Univerity",
        start_date: "Aug 2023",
        end_date: "May 2024",
        role: "Graduate Teaching Assistant",
        tasks_completed: ["Evaluated assignments to uphold rigorous academic standards in the Web Application Development course",
            "Assisted students with helpful insight on GitLab by describing the uses for HTML, CSS, and JavaScript in front-end design, including topics such as responsive sizing and dynamic retrieval of data",
            "Improved students’ understanding of Flask for back-end development by 7% through hosting regularly scheduled office hour sessions"
        ],
        logo: "https://upload.wikimedia.org/wikipedia/en/5/53/Michigan_State_University_seal.svg"
    },
    {
        employer: "Versive",
        start_date: "Jan 2023",
        end_date: "Jul 2023",
        role: "Software Development Engineer",
        tasks_completed: ["Developed a secure web application for hospitals powered by AWS services (Amplify, RDS), allowing doctors to verify tumors detected in patient MRI scans",
            "Implemented encryption, role-based access control, and multifactor authentication to ensure patient data security",
            "Designed backend architecture using Flask to manage communications between MySQL database and React frontend"
        ],
        logo: "https://versive.ca/img/widi/logo.svg"
    },
    {
        employer: "Michigan State University Federal Credit Union",
        start_date: "Aug 2022",
        end_date: "Dec 2022",
        role: "Software Engineering Intern",
        tasks_completed: ["Collaborated with colleagues to enhance MSU Federal Credit Union’s mobile banking apps using Flutter, Dart, and SQL",
            "Designed an aesthetically pleasing user interface using Flutter and Dart to enhance customers’ banking experience",
            "Implemented a modern peer-to-peer transfer system featuring usernames, QR codes, and NFC to increase usability",
            "Created a system using Google Places API to notify users of deals at local businesses based on shopping patterns"
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