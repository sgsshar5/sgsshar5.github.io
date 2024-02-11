/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Shivam's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Shivam Sharma Portfolio",
    type: "website",
    url: "http://shivamsharma.co.uk/",
  },
};

//Home Page
const greeting = {
  title: "Shivam Sharma",
  logo_name: "ShivamSharma",
  nickname: "Shivam",
  subTitle:
    "I thoroughly enjoy finding the hidden stories within big data sets (trillions of rows). I thrive in the discovery process, am driven to create proprietary analytical outputs, and love communicating the results in a story that everyone can understand.",
  resumeLink:
    "https://drive.google.com/file/d/1IGC0zJ7HR0h7CG4sma5y6oEoByhTcP2b/view?usp=share_link",
  portfolio_repository: "https://github.com/sgsshar5/sgsshar5.github.io",
  githubProfile: "https://github.com/sgsshar5",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/sgsshar5",
  // linkedin: "https://www.linkedin.com/in/shivam-sharma-1a40b0197/",
  // gmail: "shivamsharma0399@gmail.com",
  // gitlab: "https://gitlab.com/sgsshar5",
  // facebook: "https://www.facebook.com/profile.php?id=100002792745452",
  // twitter: "https://twitter.com/shivams48553440",
  // instagram: "https://www.instagram.com/shivams007/"

  {
    name: "Github",
    link: "https://github.com/sgsshar5",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shivam-sharma-1a40b0197/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:shivamsharma0399@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/shivams48553440",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100002792745452",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/shivams007/`",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Analytics",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Interpret data, analyze results using statistical techniques and provide ongoing reports.",
        "⚡ Develop and implement databases, data collection systems, data analytics and other strategies that optimize statistical efficiency and quality.",
        "⚡ Acquire data from primary or secondary data sources and maintain databases/data systems",
        "⚡ Identify, analyze, and interpret trends or patterns in complex data sets",
        "⚡ Filter and “clean” data by reviewing computer reports, printouts, and performance indicators to locate and correct code problems.",
        "⚡ Experience of working with Power BI, Advanced Excel, Google data studio and Python projects",
      ],
      softwareSkills: [
        {
          skillName: "PowerBI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            backgroundColor: "transparent",
            color: "#F2C811",
          },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "simple-icons:r",
          style: {
            backgroundColor: "white",
            color: "#276DC3",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    // {
    //   title: "Full Stack Development",
    //   fileName: "FullStackImg",
    //   skills: [
    //     "⚡ Building responsive website front end using React-Redux",
    //     "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
    //     "⚡ Creating application backend in Node, Express & Flask",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "HTML5",
    //       fontAwesomeClassname: "simple-icons:html5",
    //       style: {
    //         color: "#E34F26",
    //       },
    //     },
    //     {
    //       skillName: "CSS3",
    //       fontAwesomeClassname: "fa-css3",
    //       style: {
    //         color: "#1572B6",
    //       },
    //     },
    //     {
    //       skillName: "Sass",
    //       fontAwesomeClassname: "simple-icons:sass",
    //       style: {
    //         color: "#CC6699",
    //       },
    //     },
    //     {
    //       skillName: "JavaScript",
    //       fontAwesomeClassname: "simple-icons:javascript",
    //       style: {
    //         backgroundColor: "#000000",
    //         color: "#F7DF1E",
    //       },
    //     },
    //     {
    //       skillName: "ReactJS",
    //       fontAwesomeClassname: "simple-icons:react",
    //       style: {
    //         color: "#61DAFB",
    //       },
    //     },
    //     {
    //       skillName: "NodeJS",
    //       fontAwesomeClassname: "simple-icons:node-dot-js",
    //       style: {
    //         color: "#339933",
    //       },
    //     },
    //     {
    //       skillName: "NPM",
    //       fontAwesomeClassname: "simple-icons:npm",
    //       style: {
    //         color: "#CB3837",
    //       },
    //     },
    //     {
    //       skillName: "Yarn",
    //       fontAwesomeClassname: "simple-icons:yarn",
    //       style: {
    //         color: "#2C8EBB",
    //       },
    //     },
    //     {
    //       skillName: "Gatsby",
    //       fontAwesomeClassname: "simple-icons:gatsby",
    //       style: {
    //         color: "#663399",
    //       },
    //     },
    //     {
    //       skillName: "Flutter",
    //       fontAwesomeClassname: "simple-icons:flutter",
    //       style: {
    //         color: "#02569B",
    //       },
    //     },
    //   ],
    // },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server AWS",
      ],
      softwareSkills: [
        // {
        //   skillName: "GCP",
        //   fontAwesomeClassname: "simple-icons:googlecloud",
        //   style: {
        //     color: "#4285F4",
        //   },
        // },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        // {
        //   skillName: "Firebase",
        //   fontAwesomeClassname: "simple-icons:firebase",
        //   style: {
        //     color: "#FFCA28",
        //   },
        // },
        // {
        //   skillName: "PostgreSQL",
        //   fontAwesomeClassname: "simple-icons:postgresql",
        //   style: {
        //     color: "#336791",
        //   },
        // },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        // {
        //   skillName: "Docker",
        //   fontAwesomeClassname: "simple-icons:docker",
        //   style: {
        //     color: "#1488C6",
        //   },
        // },
        // {
        //   skillName: "Kubernetes",
        //   fontAwesomeClassname: "simple-icons:kubernetes",
        //   style: {
        //     color: "#326CE5",
        //   },
        // },
      ],
    },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/sgsshar5",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Liverepool",
      subtitle: "M.Sc in Big Data Analytics & High Performance Computing",
      logo_path: "UOL.PNG",
      alt_name: "UOL Liverpool, United Kingdom",
      duration: "Sep 2021 - Dec 2022",
      descriptions: [
        "⚡ I have taken varity of courses related to Big Data Analytics & HPC , Big Data Analytics, Multi-Core and Multi-Processor Programming, Linear Programming, Applied Algorithmics, DataMining and Visualization, Machine Learning, and Bioinspired Optimisation.",
        "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on AI player Connect 4 board game.",
      ],
      website_link: "https://www.liverpool.ac.uk/",
    },
    {
      title: "The Oxford College of Engineering",
      subtitle: "B.Tech. in Information Science & Engineering",
      logo_path: "TOCE.JPG",
      alt_name: "TOCE Bengaluru",
      duration: "Aug 2017 - July 2021",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "http://www.theoxfordengg.org/",
    },
    
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I have worked with many evolving startups as Data Analyst and Data Engineer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Data Administrator",
          company: "NHS Liverpool CCG",
          company_url: "https://www.cheshireandmerseyside.nhs.uk/",
          logo_path: "NHS.png",
          duration: "Jan 2024 - Present",
          location: "Liverpool",
          description: [
            "⚡ Proficiently involved in clinical coding, screening medical letters, and ensuring accurate data entry for GP attention.", 
            "⚡ Actively contributing to the development of Encoder Software at NHS for efficient medical information encoding.",
            "⚡ Driving enhanced patient care by strategically spearheading initiatives for growth in the healthcare technology sector through effective utilisation of EMIS software and patient administration systems.",
            "⚡ Orchestrating streamlined processes for medicines management, optimizing healthcare workflows, ensuring accuracy, and enhancing patient care.",
            "⚡ Cultivating and nurturing collaborative partnerships with key businesses in the healthcare domain to drive mutual engagements and contribute to overall enterprise success.",
            "⚡ Elevating patient-facing services by implementing initiatives for a seamless and patient-centric healthcare experience, prioritizing user satisfaction.",
            "⚡ Taking charge of comprehensive data and analytics processes, leveraging insights for strategic decision-making.",
            "⚡ Playing a pivotal role in advancing research and life sciences initiatives, aligning technology solutions with healthcare innovation.",
          ],
          color: "#0879bf",
          
        },
        {
          title: "Data Analyst",
          company: "Merasha Shaper",
          company_url: "https://merashagroup.com/",
          logo_path: "logo.png",
          duration: "Sept 2021 - Dec 2023",
          location: "Remote",
          description:[
            "⚡ Led the end-to-end development of multiple distinct and high-quality Power BI dashboards such as Commercial, KPI, Sustainability,Schedule, Design Horizon, Change Management etc catering to stakeholder requirements gathering, development, deployment, and maintenance and streamlined the process to automate on periodic basis.", 
            "⚡ Spearheaded the introduction of PowerBI into the company's analytics workflow, driving a 30% increase in the speed of deriving actionable insights from various datasets.",
            "⚡ My proficiency in advanced Excel functions and data modeling techniques has streamlined the data preparation process. This includes using PivotTables and VLOOKUP formulae to manipulate and structure data for analysis",
            "⚡ Utilised PowerBI's Power Query and advanced SQL scripting to aggregate, clean, and transform raw data from Merasha's multiple business units, resulting in a unified and reliable source of truth..",
            "⚡ Cultivating and nurturing collaborative partnerships with key businesses in the healthcare domain to drive mutual engagements and contribute to overall enterprise success.",
            "⚡ Conducted deep-dive analyses on market trends, customer preferences, and competitive positioning,assisting Merasha's marketing and sales teams in refining their strategies, leading to a 20% growth in quarterly revenue",
            "⚡ Organised regular training sessions for Merasha team members, boosting company-wide proficiency with PowerBI by 50% and ensuring sustainable, long-term adoption of data-driven practices.",
            "⚡ contributed to the expansion of the company's portfolio through innovative ventures like Anveet Arts, showcasing a commitment in the industry during 1 year and 6 months of employment. ",

          ],
          color: "#0879bf",
        },
        {
          title: "Data Analyst Trainee",
          company: "Cortex Solution",
          company_url: "https://www.cortexsolutions.in/",
          logo_path: "CORT.PNG",
          duration: "Aug 2020 - July 2021",
          location: "Mumbai, Maharastra",
          description:[
            "⚡Developed and maintained databases within MySQL and PostgreSQL servers, performed data-oriented operations such as ETL Data Processing, Transformation & Visualization.",
            "⚡Used Power BI to identify, analyse and interpret patterns and trends in complex data sets that could be helpful for diagnosis and Prediction of future trends.",
            "⚡Prepared final analysis reports using Power BI for stakeholders to understand various data analysis steps,helping them to take important decisions based on various facts and trends.",
            "⚡Successfully implemented client-based data analysis with little or no help within budget and on time. ",
          ],
          color: "#0879bf",
        },
        {
          title: "Data Engineer (Web Scrapping)",
          company: "ORGMACHINE PVT LTD",
          company_url: "https://www.orgmachine.com/",
          logo_path: "ORG.PNG",
          duration: "March 2020 - May 2020",
          location: "New Delhi, Delhi",
          description:[
            "⚡Worked as a web scrapping-focused Data Engineer; was responsible for extracting and ingesting data from equestrian business website throughout in India using web crawling tools.",
            "⚡Developed scalable code using python programming language.",
            "⚡Used different techniques and tools for crawling, extracting, and processing data (e.g., Scrapy, Pandas,MapReduce, SQL, etc).",
            "⚡Worked with version control, open-source practices, and code review.",
            "⚡Developed an application designed to display archived web content.",
          ],
            
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Information Technology Internship",
          company: "C.E.A., Ministry of Power, Govt. of India",
          company_url: "https://cea.nic.in/?lang=en",
          logo_path: "CEA.PNG",
          duration: "Oct 2019 - Nov 2019",
          location: "New Delhi, Delhi",
          description:[
            "Worked under the Chief Engineer of CEA on their ongoing project, Technical Standards for Communication in PowerSystems.",
            "Specified users and user access levels for each database segment.",
            "Coordinated with project teams on database development timelines.",
            "Planned and implemented security measures into CEA database systems and application servers.",
            "Provided support and assistance to the operations team in the design, development, testing, tuning, and implementation stages of enterprise applications and system.",
          ],
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Analytics, Machine Learnings and Artificial Intelligence related projects.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "shivams.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I am available on almost every social media. You can message me, and I will reply within 24 hours. I can provide data analyst solutions and data-driven insights, as well as expertise in Power BI, advanced Excel,MS Power Query,and Sql etc.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://medium.com/@shivamsharma0399",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "14 Hudson Garden, 136 Duke Street, Liverpool, United Kingdom - L1 5BB",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/SkRwfnzQrmytDLnV7m",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
