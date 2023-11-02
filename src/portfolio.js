/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hey there",
  title2: "MBSA",
  logo_name: "< MBSA />",
  nickname: "hrishi1999 / picleric",
  full_name: "M.B.SAI ADITYA",
  subTitle:
    "Backend Web Developer, AI Enthusiast. Never stop Developing.",
  resumeLink:
    "https://drive.google.com/file/d/1FyAqYJOzhl-r0KAikUnMICO_NxcYwebU/view?usp=share_link",
  mail: "mailto:mbsaiaditya@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/MBSA-INFINITY",
  linkedin: "https://www.linkedin.com/in/mbsaiaditya/",
  gmail: "mbsaiaditya@gmail.com",
  gitlab: " ",
  facebook: "https://www.facebook.com/saiaditya.mantrarathnam/",
  instagram: "https://www.instagram.com/m.b.saiaditya/",
};

const skills = {
  data: [
    {
      title: "Backend Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing strong backend with Flask, FastAPI and NodeJS",
        "⚡ Implementing Secure Authentication using JWT, OpenId etc.",
        "⚡ Connecting Databases such as Firebase, MongoDB and PostgresSQL",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
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
        {
          skillName: "Flask",
          fontAwesomeClassname: "logos-flask",
          style: {
            backgroundColor: "transparent",

          },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            backgroundColor: "transparent",

          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            backgroundColor: "transparent",
            color: "#F7DF1E",

          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },


        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Researched in the field of NLP (Sarcasm Detection).",
        "⚡ Curoius to understand the mathematics behind the scenes.",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
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
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#6E6E6E",
          },
        },
      ],
    }
  ],
};

const degrees = {
  degrees: [
    {
      title: "National Institute of Technology Karnataka",
      subtitle: "Bachelors of Technology (Minors in Information Technology, Majors in Mechanical)",
      logo_path: "nitk.png",
      alt_name: "DAL",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ Minors in Information Technology",
        "⚡ Majors in Mechanical Engineering",
        "⚡ Courses: MERN Stack, DBMS, Prallel Computing",
      ],
      website_link: "https://nitk.ac.in/",
    },
    {
      title: "St.Xaviers High School, Bilaspur, Chhattisgarh",
      subtitle: "Senior Secondary Education",
      logo_path: "school.png",
      alt_name: "SETI",
      duration: "2008 - 2020",
      descriptions: [
        "⚡ Completed Class 10th and Class 12th (in Mathematics)",
        "⚡ Grade: CBSE XII - 95.2% , CBSE X - 92.8%",
      ],
      website_link: "https://stxaviersbilaspur.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Google Summer of Code 2019",
      subtitle: "Google / Sugar Labs",
      logo_path: "google_logo.png",
      certificate_link: " ",
      alt_name: "Google",
      color_code: "#ffc475",
    },
    {
      title: "Google Code-In Student",
      subtitle: "2014-2017",
      logo_path: "google_logo.png",
      certificate_link: " ",
      alt_name: "Google",
      color_code: "#1e70c1",
    },
    {
      title: "Google Summer of Code Mentor",
      subtitle: "2017 / 2018 / 2020",
      logo_path: "google_logo.png",
      certificate_link: " ",
      alt_name: "Google",
      color_code: "#ffbfae",
    },
    {
      title: "Google Code-In Mentor",
      subtitle: "2017 / 2018 / 2019",
      logo_path: "google_logo.png",
      certificate_link: " ",
      alt_name: "Google",
      color_code: "#b190b0",
    },
    {
      title: "Deep Learning Specialization",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://coursera.org/share/737a9587023c666b8e6cb303157aaeba",
      alt_name: "deeplearning.ai",
      color_code: "#47A048",
    },
    {
      title: "Sequence Models",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/FM5AKEZA9NUY",
      alt_name: "deeplearning.ai",
      color_code: "#F6B808",
    },
    {
      title: "Convolutional Neural Networks",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/U8BLDNUT9UUM",
      alt_name: "deeplearning.ai",
      color_code: "#2AAFED",
    },
    {
      title: "Structuring Machine Learning Projects",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/YLC25SJQKH3Y",
      alt_name: "deeplearning.ai",
      color_code: "#E2405F",
    },
    {
      title: "Machine Learning",
      subtitle: "deeplearning.ai",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/records/72KY93DT82MP",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Neural Networks and Deep Learning",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/records/25JXRB2RWHRX",
      alt_name: "Google",
      color_code: "#7A7A7A",
    },
    {
      title: "Improving Deep Neural Networks",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/records/PKR9M9LQ3JWC",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Android Developer Nanodegree",
      subtitle: "Part of Google India Scholarship Program",
      logo_path: "100.png",
      certificate_link: "https://graduation.udacity.com/confirm/HLE7K5V3",
      alt_name: "Google",
      color_code: "#C5E2EE",
    },
    {
      title: "InOut 4.0 Winner #2",
      subtitle: "2017",
      logo_path: "ino.png",
      certificate_link: " ",
      alt_name: "InOut",
      color_code: "#fffbf3",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed two internships. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Back End Developer",
          company: "Greyfeathers Pvt Ltd",
          company_url: "https://greyfeathers.in/",
          logo_path: "greyfeathers.jfif",
          duration: "Feb 2023 - Present",
          location: "Remote",
          description:
            "I am currently working on backend of various inductry level projects and also writing tests for these projects.",
          color: "#ee3c26",
        },
        {
          title: "Summer Research Intern",
          company: "Department of Mathematical and Computational Sciences, NITK",
          company_url: "https://sugarlabs.org/",
          logo_path: "nitk.png",
          duration: "May 2022 - Jul 2022",
          location: "Manglore,Karnataka",
          description:
            "Revamped the Product/Movie Review System with Sarcastic Comments/Reviews segregator & Researched on Sentiment Analysis, Word Embedddings (GloVe, Word2Vec)",
          color: "#4285F4",
        },
      ],
    },
    {
      title: "Club Positions",
      experiences: [
        {
          title: "Web Team Lead",
          company: "The Institute of Engineering and Technology(IET), NITK",
          company_url: "https://iet.nitk.ac.in/",
          logo_path: "iet.jfif",
          duration: "Apr 2022 - present",
          location: "Manglore,Karnataka",
          description:
            "Lead the maintenance of the Gatsby website for the club and Developing CEMS, Worboard to Continuously Improvise the website.",
          color: "#4285F4",
        },
        {
          title: "Lead Web Developer",
          company: "BAJA NITK (Media Team)",
          company_url: "https://iet.nitk.ac.in/",
          logo_path: "baja.png",
          duration: "Dec 2021 - Apr 2022",
          location: "Manglore,Karnataka",
          description:
            "Developed and Lead the maintenance of the website for the club and Improvising the website with new UI/UX and adding features such as Gallery, Alumni etc",
          color: "#4285F4",
        },

      ],
    },
    {
      title: "Freelancer",
      experiences: [
        {
          title: "Web Developer and Designer",
          company: "Digitalstep360",
          company_url: "https://www.digitalstep360.com/",
          logo_path: "digitalstep360.jfif",
          duration: "Jun 2021 - Aug 2021",
          location: "Manglore,Karnataka",
          description:
            "Developed Lead generating websites for various realstate companies with appealing desing and fuctionally smooth backend with SEO.",
          color: "#4285F4",
        },
   

      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "mbsa.png",
    description:
      "You can contact me at the places mentioned below. I am open to collaborate on projects that can impact. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Medium.",
    link: "https://medium.com/@hrishipatel99",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      name: "Sangyan (Government Project)",
      url: "http://sangyan.co.in/",
      description:
        "Automated the case diaries system for the Telecomm Department, High Court, Government of Chhattisgarh and helped in reducing manpower.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "logos-flask",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "Pandas",
          iconifyClass: "simple-icons:pandas",
        },
      ],
    },
    {
      name: "Sarcasm Detection using Recurrent Neural Networks",
      url: "https://drive.google.com/file/d/1WOdXxU5wplpz0395qY3foNyJxSCTIfQa/view?usp=share_link",
      description:
        "Revamped the Product/Movie Review System with Sarcastic Comments/Reviews segregator & Researched on Sentiment Analysis, Word Embedddings (GloVe, Word2Vec)",
      languages: [
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
        },
        {
          name: "Keras",
          iconifyClass: "simple-icons:keras",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "logos-flask",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      name: "Virtual Question Bank",
      url: "https://github/com/saiadityamb/mini_client",
      description:
        "Developed a system for heirarchical and categorical storage of Questions in the database with category creations and specific media storage.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "logos-flask",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      name: "Whatsapp Chat Analysis(EDA)",
      url: "https://github.com/MBSA-INFINITY/Whatsapp-Chat-Analysis-EDA",
      description:
        "Developed a system for heirarchical and categorical storage of Questions in the database with category creations and specific media storage.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "logos-flask",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      name: "Chat App (IT Minor Project)",
      url: "https://drive.google.com/file/d/1WOdXxU5wplpz0395qY3foNyJxSCTIfQa/view?usp=share_link",
      description:
        "Developed a chat app that can forward media/text in the exact sequence it was selected in, unlike Whatsapp. {Array of Dictionaries}",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "logos-flask",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      name: "Handwritten Equation Solver",
      url: "https://github.com/IET-NITK/HandwrittenEquationSolver",
      description:
        "Collaborated and Created a Deep CNN for detecting handwritten equation and then solved it using custom scripts.( Validation Accuracy of 95.4 %)",
        languages: [
          {
            name: "Tensorflow",
            iconifyClass: "logos-tensorflow",
          },
          {
            name: "Keras",
            iconifyClass: "simple-icons:keras",
          },
          {
            name: "Python",
            iconifyClass: "logos-python",
          },
          {
            name: "Flask",
            iconifyClass: "logos-flask",
          },
        ],
    },
   
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
