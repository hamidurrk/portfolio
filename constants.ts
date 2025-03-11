export const METADATA = {
  title: "Portfolio | Md Hamidur Rahman Khan",
  description:
    "Pushing the boundaries of innovation with intelligent robots, machine learning, blockchain, and dynamic web solutions.",
  siteUrl: "https://www.hamidurrk.com/",
  imgUrl: "https://i.ibb.co/drmYKsc/og-image.jpg"
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Projects",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I develop innovative software solutions",
  "Experienced in Full-stack WebApps",
  "Experienced in Blockchain",
  "Experienced in Blockchain and DApps",
  "Robotics Systems Developer",
  "Skilled GFX Designer",
  "Skilled GFX Designer &amp; Video Editor",
];

// full-stack web developer | 
// blockchain developer | 
// data analysis & web scraping |
// software as a service developer | 
// robotics systems developer | 

export const EMAIL = "hamidurrk@gmail.com";

export const SOCIAL_LINKS = {
  github: "https://github.com/hamidurrk",
  linkedin: "https://www.linkedin.com/in/hamidurrk/",
  twitter: "https://twitter.com/hamidurrk",
  // email: "mailto:hamidurrk@gmail.com",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  details: string;
  gradient: [string, string];
  url: string;
  github: string;
  embed: string;
  tech?: string[];
}

export const HIGHLIGHTS: IProject[] = [
  {
    name: "Tethr",
    image: "/projects/tethr.jpg",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "Network Tower Location Estimation Using Mean Shift Clustering",
    details: "This project aims to estimate network tower locations using the Mean Shift clustering algorithm based on signal strength measurements collected by a robot at various locations. The software provides visualization tools to analyze signal strength data and identify areas with poor network coverage.",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://vimeo.com/938780239?share=copy",
    github: "https://github.com/hamidurrk/ground-station",
    embed: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/938780239?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Network Tower Location Estimation Using Mean Shift Clustering"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
    tech: ["python", "sklearn", "yolo", "opencv", "ros", "pandas", "ctk"],
  },
  {
    name: "Block Meter",
    image: "/projects/ibcol_paper.jpg",
    blurImage: "/projects/blur/dl-unify-blur.jpg",
    description: "An Immutable Electricity Billing System to Eliminate Non-Technical Loss Using Blockchain",
    details: "Invented an electricity billing system that eliminated non-technical losses by 100% and ensures transparency and immutability.Won a Silver Medal in SDG 12 national teams from 44 countries at the International Blockchain Olympiad 2022 (Hong Kong). Secured Bronze Medal as the youngest developer to secure top national position in the Bangladesh Blockchain Olympiad 2022.",
    gradient: ["#003052", "#167187"],
    url: "",
    github: "https://github.com/hamidurrk/PyWebIDE",
    embed:'<div style="padding:54.27% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1044933067?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Block Meter - Prototype Demonstration"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
    tech: ["python", "solidity", "etherium", "ipfs", "ESP32", "cpp", "php", "javascript", "thingspeak"],
  },
  {
    name: "Awake Website",
    image: "/projects/awake.jpg",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "A platform for social change for Awake in Kenya",
    details: "A platform for social change and youth empowerment. Features include Responsive design, Dynamic content, Custom pages for blog, shop, cart, resources, testimonials, team, and more, Integration with PayPal and Venmo for online payments",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://awakeyi.org/",
    github: "https://github.com/hamidurrk/awake_website",
    embed:'<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/939540129?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Awake Youth Initiative - Official Website"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
    tech: ["html", "css", "javascript", "sass", "figma"],
  },
  {
    name: "Social Media Scraper",
    image: "/projects/scraper.jpg",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "Scrapes post data from Facebook for research purposes",
    details: "Currently writing a paper with researchers at University of Kassel and Technical University of Dortmund on Political Propaganda Cycle using the data collected by the bot from the political parties on the social media platforms.",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "",
    github: "https://github.com/hamidurrk/awake_website",
    embed:'<div style="padding:59.62% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1044935287?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Scraping Facebook posts from May 2010 to Nov 2024 - Social Media Scraper"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
    tech: ["python", "selenium", "bs4", "opencv", "ctk", "matplotlib", "sqlite"],
  },
  // {
  //   name: "PyWebIDE",
  //   image: "/projects/pywebide.png",
  //   blurImage: "/projects/blur/dl-unify-blur.jpg",
  //   description: "A web browser IDE for Python programming",
  //   details: "PyWebIDE is a full-stack web application built with React, Firebase, CSS, and javascript. It serves as an integrated development environment (IDE) for Python programming, providing users with a seamless coding experience right in their web browser.",
  //   gradient: ["#003052", "#167187"],
  //   url: "",
  //   github: "https://github.com/hamidurrk/PyWebIDE",
  //   embed:'<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/939622522?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="PyWebIDE Demo"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
  //   tech: ["react", "figma", "firebase", "css"],
  // },
  // {
  //   name: "Dynamic Quizzer",
  //   image: "/projects/quiz.png",
  //   blurImage: "/projects/blur/dl-unify-blur.jpg",
  //   description: "A dynamic quiz application built with React and Firebase for authentication.",
  //   details: "Dynamic Quizzer offers an engaging quiz experience with a series of 10 dynamic questions. At the end of the quiz, your score out of 10 will be displayed, providing instant feedback on your performance. Plus, with Firebase Authentication integration, you can easily log in using your existing Firebase credentials or sign up.",
  //   gradient: ["#003052", "#167187"],
  //   url: "",
  //   github: "https://github.com/hamidurrk/Dynamic-Quizzer",
  //   embed:'<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/940021036?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Dynamic Quizzer Demo"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
  //   tech: ["react", "figma", "firebase", "css"],
  // },
  {
    name: "Spectre Bot & Operating System",
    image: "/projects/haunt.png",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "Custom line follower robot programmed for competitive national tournaments",
    details: "Spectre OS is a specialized operating system designed to provide advanced control and debugging capabilities for the Spectre bot. It enables the robot to tweak settings, adjust parameters, and reprogram functionalities on-the-run without connecting to an external computer, which is advantageous in a competitive field. ",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "",
    github: "https://github.com/hamidurrk/haunt-os",
    embed: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/939581502?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="HauntOS LFR Demo Run"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
    tech: ["cpp", "arduino", "esp32"],
  },
  {
    name: "Assistive Device for Visually Impaired People",
    image: "/projects/nasa.jpg",
    blurImage: "/projects/blur/dlt-website-blur.jpg",
    description: "A hand-glove-like device to assist visually impaired people in reading text from any digital platform",
    details: "The hand-glove-like device converts characters into a 3x2 dot matrix braille cell and provides tactile feedback using 6 vibration motors embedded into the fabric of the index and middle fingers of the hand glove. The device is designed to receive strings via Bluetooth, process the data using a microcontroller (ESP32), and deliver haptic feedback to the user.",
    gradient: ["#245B57", "#004741"],
    url: "",
    github: "https://github.com/hamidurrk/Assistive-Device-for-Visually-Impaired-People",
    embed:'<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/939592174?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="nasa"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
    tech: ["cpp", "python", "arduino", "esp32"],
  },
  {
    name: "EduKit",
    image: "/projects/edukit.jpg",
    blurImage: "/projects/blur/dlt-website-blur.jpg",
    description: "An Educational Module to teach intermediate Electronics",
    details: "Designed a teaching module for the ICT department of my school to improve the understanding of electronics among Notre Dame College students: a combined demonstration of clock pulse generators, flip flops, registers, binary counters, and a 7-segment display on a breadboard.",
    gradient: ["#245B57", "#004741"],
    url: "",
    github: "",
    embed:'<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/940094146?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="EduKit - Electronics Teaching Module"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
    tech: [""],
  },
];

export const PROJECTS: IProject[] = [
  {
    name: "Tethr",
    image: "/projects/tethr.jpg",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "Network Tower Location Estimation Using Mean Shift Clustering",
    details: "This project aims to estimate network tower locations using the Mean Shift clustering algorithm based on signal strength measurements collected by a robot at various locations. The software provides visualization tools to analyze signal strength data and identify areas with poor network coverage.",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://vimeo.com/938780239?share=copy",
    github: "https://github.com/hamidurrk/ground-station",
    embed: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/938780239?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Network Tower Location Estimation Using Mean Shift Clustering"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
    tech: ["python", "sklearn", "yolo", "opencv", "ros", "pandas", "ctk"],
  },
  {
    name: "Block Meter",
    image: "/projects/ibcol_paper.jpg",
    blurImage: "/projects/blur/dl-unify-blur.jpg",
    description: "An Immutable Electricity Billing System to Eliminate Non-Technical Loss Using Blockchain",
    details: "Invented an electricity billing system that eliminated non-technical losses by 100% and ensures transparency and immutability.Won a Silver Medal in SDG 12 national teams from 44 countries at the International Blockchain Olympiad 2022 (Hong Kong). Secured Bronze Medal as the youngest developer to secure top national position in the Bangladesh Blockchain Olympiad 2022.",
    gradient: ["#003052", "#167187"],
    url: "",
    github: "https://github.com/hamidurrk/PyWebIDE",
    embed:'<div style="padding:54.27% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1044933067?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Block Meter - Prototype Demonstration"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
    tech: ["python", "solidity", "etherium", "ipfs", "ESP32", "cpp", "php", "javascript", "thingspeak"],
  },
  {
    name: "Awake Website",
    image: "/projects/awake.jpg",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "A platform for social change for Awake in Kenya",
    details: "A platform for social change and youth empowerment. Features include Responsive design, Dynamic content, Custom pages for blog, shop, cart, resources, testimonials, team, and more, Integration with PayPal and Venmo for online payments",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://awakeyi.org/",
    github: "https://github.com/hamidurrk/awake_website",
    embed:'<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/939540129?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Awake Youth Initiative - Official Website"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
    tech: ["javascript", "figma", "html", "sass", "css"],
  },
  {
    name: "Social Media Scraper",
    image: "/projects/scraper.jpg",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "Scrapes post data from Facebook for research purposes",
    details: "Currently writing a paper with researchers at University of Kassel and Technical University of Dortmund on Political Propaganda Cycle using the data collected by the bot from the political parties on the social media platforms.",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "",
    github: "https://github.com/hamidurrk/awake_website",
    embed:'<div style="padding:59.62% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1044935287?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Scraping Facebook posts from May 2010 to Nov 2024 - Social Media Scraper"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
    tech: ["python", "selenium", "sqlite", "opencv", "matplotlib", "bs4"],
  },
  {
    name: "E-paper Scraper",
    image: "/projects/epaper.png",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "Python-based web scraper for extracting img/text data from online newspapers",
    details: "Tested on Bangladeshi national daily's like Jugantor and Prothom Alo newspaper from 2012 to 2024 in a Windows 11 machine. It utilizes selenium and bs4 to get the image files of the articles and uses pytesseract to extract text from the images. Also it can scrape article text data from the epaper website if it exists. The data is stored in a sqlite database for further analysis. NVIDIA CUDA is used for parallel processing of the images and multithreading implementation has been done to parallelize the downloading process.",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "",
    github: "https://github.com/hamidurrk/epaper-scraper",
    embed:'<div style="padding:53.75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1050315295?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="E-paper Scraper"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
    tech: ["python", "selenium", "bs4", "opencv", "ctk", "sqlite"],
  },
  {
    name: "PyWebIDE",
    image: "/projects/pywebide.png",
    blurImage: "/projects/blur/dl-unify-blur.jpg",
    description: "A web browser IDE for Python programming",
    details: "PyWebIDE is a full-stack web application built with React, Firebase, CSS, and javascript. It serves as an integrated development environment (IDE) for Python programming, providing users with a seamless coding experience right in their web browser.",
    gradient: ["#003052", "#167187"],
    url: "",
    github: "https://github.com/hamidurrk/PyWebIDE",
    embed:'<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/939622522?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="PyWebIDE Demo"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
    tech: ["react", "figma", "firebase", "css"],
  },
  {
    name: "Portfolio Website",
    image: "/projects/sdportfolio.jpg",
    blurImage: "/projects/blur/dl-unify-blur.jpg",
    description: "Academic portfolio website for a client",
    details: "This portfolio website is designed to highlight the professional journey of Sourav Das, a Research Associate at the University of Kassel. The website includes sections such as Hero, About, Resume, and Contact, providing a comprehensive overview of his work and achievements.",
    gradient: ["#003052", "#167187"],
    url: "https://www.sourav-das.com/",
    github: "https://github.com/hamidurrk/portfolio-souravdas",
    embed:'<div style="padding:54.61% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1049934056?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Portfolio Website for a client"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
    tech: ["javascript", "figma", "html", "css"],
  },
  {
    name: "Dynamic Quizzer",
    image: "/projects/quiz.png",
    blurImage: "/projects/blur/dl-unify-blur.jpg",
    description: "A dynamic quiz application built with React and Firebase for authentication.",
    details: "Dynamic Quizzer offers an engaging quiz experience with a series of 10 dynamic questions. At the end of the quiz, your score out of 10 will be displayed, providing instant feedback on your performance. Plus, with Firebase Authentication integration, you can easily log in using your existing Firebase credentials or sign up.",
    gradient: ["#003052", "#167187"],
    url: "",
    github: "https://github.com/hamidurrk/Dynamic-Quizzer",
    embed:'<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/940021036?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Dynamic Quizzer Demo"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
    tech: ["react", "figma", "firebase", "css"],
  },
  {
    name: "Spectre Bot & Operating System",
    image: "/projects/haunt.png",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "Custom line follower robot programmed for competitive national tournaments",
    details: "Spectre OS is a specialized operating system designed to provide advanced control and debugging capabilities for the Spectre bot. It enables the robot to tweak settings, adjust parameters, and reprogram functionalities on-the-run without connecting to an external computer, which is advantageous in a competitive field. ",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "",
    github: "https://github.com/hamidurrk/haunt-os",
    embed: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/939581502?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="HauntOS LFR Demo Run"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
    tech: ["cpp", "arduino", "esp32"],
  },
  {
    name: "Assistive Device for Visually Impaired People",
    image: "/projects/nasa.jpg",
    blurImage: "/projects/blur/dlt-website-blur.jpg",
    description: "A hand-glove-like device to assist visually impaired people in reading text from any digital platform",
    details: "The hand-glove-like device converts characters into a 3x2 dot matrix braille cell and provides tactile feedback using 6 vibration motors embedded into the fabric of the index and middle fingers of the hand glove. The device is designed to receive strings via Bluetooth, process the data using a microcontroller (ESP32), and deliver haptic feedback to the user.",
    gradient: ["#245B57", "#004741"],
    url: "",
    github: "https://github.com/hamidurrk/Assistive-Device-for-Visually-Impaired-People",
    embed:'<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/939592174?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="nasa"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
    tech: ["cpp", "python", "arduino", "esp32"],
  },
  {
    name: "3D Simulation of Dijkstra's Algorithm",
    image: "/projects/kibo.png",
    blurImage: "/projects/blur/dlt-website-blur.jpg",
    description: "Testing the shortest path algorithm in a 3D environment",
    details: "To visualize the Dijkstra's algorithm in a 3D environment, I created a simulation using vpython. The simulation demonstrates the shortest path algorithm in action, showing how the algorithm calculates the shortest path between two points in a 3D space. Participated in Kibo Robot Programming Challenge 2023.",
    gradient: ["#245B57", "#004741"],
    url: "",
    github: "https://github.com/hamidurrk/Kibo-RPC-Python",
    embed:'<div style="padding:54.06% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1050323205?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="3D Simulation of Shortest Path Algorithm"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
    tech: ["python"],
  },
  {
    name: "2D Pong Game",
    image: "/projects/pong.png",
    blurImage: "/projects/blur/dlt-website-blur.jpg",
    description: "Simple 2D pong game in Java",
    details: "A classic Pong game written in Java, with two-player compatibility, pause/resume functionality, score tracking, and restart options.",
    gradient: ["#245B57", "#004741"],
    url: "",
    github: "https://github.com/hamidurrk/Pong_Game",
    embed:'<div style="padding:54.17% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1050324361?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Java Pong Game"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
    tech: ["java"],
  },
  {
    name: "EduKit",
    image: "/projects/edukit.jpg",
    blurImage: "/projects/blur/dlt-website-blur.jpg",
    description: "An Educational Module to teach intermediate Electronics",
    details: "Designed a teaching module for the ICT department of my school to improve the understanding of electronics among Notre Dame College students: a combined demonstration of clock pulse generators, flip flops, registers, binary counters, and a 7-segment display on a breadboard.",
    gradient: ["#245B57", "#004741"],
    url: "",
    github: "",
    embed:'<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/940094146?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="EduKit - Electronics Teaching Module"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
    tech: [""],
  },
  {
    name: "Friend Finder Bot - Facebook",
    image: "/projects/friend_finder.png",
    blurImage: "/projects/blur/dlt-website-blur.jpg",
    description: "Surfs through profile lists and sends friend request on Facebook",
    details: "The bot is written in python and uses pyautogui to imitate mouse clicks and keyboard inputs. It can read the content on the screen using pytesseract OCR and make decisions based on the data. If the number of mutual friends is greater than 50, it sends a friend request to the user. ",
    gradient: ["#245B57", "#004741"],
    url: "",
    github: "https://github.com/hamidurrk/Ajaira_bot/blob/master/main.py",
    embed:'<div style="padding:56.51% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1064681756?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Friend Finder Bot - Facebook"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
    tech: ["python"],
  },
];

export const SKILLS = {
  languages: [
    "python",
    "javascript",
    "typescript",
    "cpp",
    "c",
    "java",
    "sql",
    "php",
    "solidity",
    "r",
    "html",
    "css",
    "markdown",
  ],
  frontend: [
    "next",
    "react",
    "gsap",
    "tailwind",
    "figma"
  ],
  backend: [
    "flask",
    "fastapi",
    "django",
  ],
  roboticsIotEmbedded: [
    "arduino",
    "ros",
    "esp32",
    "raspberry",
    "thingspeak",
    "opencv",
    "yolo"
  ],
  blockchain: [
    "web3",
    "ipfs",
    "etherium",
    "hyperledger"
  ],
  webscraping: [
    "selenium",
    "bs4"
  ],
  database: [
    "mongo",
    "postgres",
    "firebase",
    "sqlite",
    "mysql"
  ],
  statistics: [
    "pandas",
    "numpy",
    "sklearn",
    "matplotlib"
  ],
  desktopApp: [
    "ctk", 
    "tk", 
    "swing"
  ],
  gfxdesign: [
    "illustrator", 
    "photoshop",
    "premiere"
  ],
  threedgfx: [
    "fusion", 
    "easyeda"
  ],
  other: [
    "git", 
    "remix"
  ],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2024",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    month: "Sept",
    title: "Started B.Sc. in Computational Engineering and Artificial Intelligence",
    size: ItemSize.SMALL,
    subtitle:
      "Currently studying at LUT University in Finland. While my major focuses on Machine Learning Models and AI, my minor, software and systems engineering, covers the development of software systems.",
    image: "/timeline/lut_logo.png",
    slideImage: "/timeline/lut.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    month: "Dec",
    title: "National Coach (Bangladesh) | World Robot Olympiad",
    size: ItemSize.SMALL,
    subtitle:
      "Acted as the natioanal coach for the Bangladesh team, focusing on ML, Computer Vision, and Robotics. Team won an International Silver in WRO-23 Panama.",
    image: "/timeline/wro.svg",
    slideImage: "/timeline/wro.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    month: "Nov",
    title: "Web Developer | Give Bangladesh Foundation",
    size: ItemSize.SMALL,
    subtitle:
      "Collaborated internationally as a web developer with Awake Youth Initiative to develop a fundraising website that supports the African underserved slum communities in Nairobi, Kenya.",
    image: "/timeline/gbf_logo.png",
    slideImage: "/timeline/gbf.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Judge (Robotics) & Advisor | NDITC Init 3.0",
    month: "Mar",
    size: ItemSize.SMALL,
    subtitle:
      "Evaluated robotics contestant teams for several events (Soccer Bot, Robo Race) and strategized for the smooth execution of an event with over 1100 participants.",
    image: "/timeline/nditc.svg",
    slideImage: "/timeline/init3.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2022",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Silver Medal | International Blockchain Olympiad (Hong Kong)",
    month: "Oct",
    size: ItemSize.SMALL,
    subtitle:
      "Won the medal in SDG 12 among teams from 44 countries for ensuring responsible consumption and production through the invention of Block Meter",
    image: "/timeline/ibcol.svg",
    slideImage: "/timeline/ibcol.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "National Finalist | NASA Space Apps Challenge - 2022",
    month: "Oct",
    size: ItemSize.SMALL,
    subtitle:
      "Built an assistive device to help visually impaired individuals in reading text from any digital platform. Used NASA Open APIs to generate mission stories of the game",
    image: "/timeline/nasa.svg",
    slideImage: "/timeline/nasa22.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Bronze Award | Blockchain Olympiad Bangladesh",
    month: "Jun",
    size: ItemSize.SMALL,
    subtitle:
      "Became the youngest blockchain developer ever to achieve a top 3 position at BCOLBD. Won 50,000 BDT as prize money.",
    image: "/timeline/bcolbd.svg",
    slideImage: "/timeline/bcolbd.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "First Runner Up, Robotronics 2.0",
  //   month: "Jun",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Acheieved 2nd position in the Line Follower Competition University level National Round",
  //   image: "/timeline/robotronics.png",
  //   slideImage: "/timeline/ruet.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "2021",
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.LEFT,
  // },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Invented Blockchain based Billing System",
    month: "Nov",
    size: ItemSize.SMALL,
    subtitle:
      "The invention aimed at eliminating non-technical losses in electricity billing systems using blockchain technology. The Bangladesh ICT division's EDGE project assisted me in filing a patent application for the system architecture.",
    image: "/timeline/bcolbd.svg",
    slideImage: "/timeline/block.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Workshop Instructor | Drone Basics",
    month: "Sep",
    size: ItemSize.SMALL,
    subtitle:
      "Started a new journey at TESLA Lab. On the first day, I taught 400+ individuals about introductory robotics through drone technology",
    image: "/timeline/teslalab.svg",
    slideImage: "/timeline/teslalab.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Starting as an Advisor, leaving the President position",
  //   month: "Mar",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "During my presidency, I mentored 45 national team, took 14 workshops, 100+ robotics-oriented classes, to train up more than 150 students of Notre Dame College",
  //   image: "/timeline/nditc.svg",
  //   slideImage: "/timeline/farewell.JPG",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2020",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  // {
  //   type: NodeTypes.DIVERGE,
  // },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Champion | International Tech Carnival, DRMC",
    month: "Feb",
    size: ItemSize.SMALL,
    subtitle:
      "Fastest Line Follower Robot to finish tracks while avoiding obstacles, running though maze, and inverted lines.",
    image: "/timeline/drmc.png",
    slideImage: "/timeline/drmc.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Workshop Instructor | Digital Design",
  //   month: "Jan",
  //   size: ItemSize.SMALL,
  //   subtitle: "Created exposure to topics like boolean algebra, logic gates, basic electronic circuits, ICs, registers, and counters",
  //   image: "/timeline/nditc.svg",
  //   slideImage: "/timeline/dl.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CONVERGE,
  // },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2019",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  // {
  //   type: NodeTypes.DIVERGE,
  // },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Silver Medal | Bangladesh Robot Olympiad - 2019",
    month: "Sep",
    size: ItemSize.SMALL,
    subtitle:
      "2nd Place in Challenge Group among 20,000+ Participants from around the nation.",
    image: "/timeline/bdro.svg",
    slideImage: "/timeline/bdro19.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Co-ordinator (Robotics & Management) | NDITC Init 2.0",
  //   month: "Aug",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Managed platinum sponsors; Introduced 12+ new robotics events at the school level along with 20 existing; led a team of 40 executives to organize the event of 700+ participants.",
  //   image: "/timeline/nditc.svg",
  //   slideImage: "/timeline/init2.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Unveiling Tinker | My first humanoid robot",
    month: "Aug",
    size: ItemSize.SMALL,
    subtitle:
      "Tinker is a 5-foot-tall semi-automatic multi-functional humanoid robot, including greeting guests, and carrying loads. First introduced in the Notre Dame Information Technology Club’s freshers' reception program.",
    image: "/timeline/nditc.svg",
    slideImage: "/timeline/tinker.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "2nd Runner Up | Notre Dame National Science Festival",
  //   month: "Jul",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Line Following Robot Competition",
  //   image: "/timeline/ndsc.png",
  //   slideImage: "/timeline/ndsc19.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.RIGHT,
  // },
  {
    type: NodeTypes.CHECKPOINT,
    title: "EduKit | Made a Basic Electronics Educational Module",
    month: "Feb",
    size: ItemSize.SMALL,
    subtitle:
      "I was assigned by the ICT department of my college to design a teaching module to improve the understanding of electronics among Notre Dame College students.",
    image: "/timeline/ndc.png",
    slideImage: "/timeline/edukit.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "President | Robotics Department - NDITC",
    month: "Jan",
    size: ItemSize.SMALL,
    subtitle:
      "I was unanimously elected the President of Notre Dame Information Technology Club.",
    image: "/timeline/nditc.svg",
    slideImage: "/timeline/president.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  // {
  //   type: NodeTypes.CONVERGE,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "2018",
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "1st Runner Up | NDITC Init 1.0",
  //   month: "Nov",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Line Following Robot Competition",
  //   image: "/timeline/nditc.svg",
  //   slideImage: "/timeline/init18.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Honorable Mention | NDITC Init 1.0",
  //   month: "Nov",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Project Display",
  //   image: "/timeline/nditc.svg",
  //   slideImage: "/timeline/init182.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "1st Runner Up | Notre Dame National Science Festival",
  //   month: "Sep",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Self Made Car Racing",
  //   image: "/timeline/ndsc.png",
  //   slideImage: "/timeline/ndsc18.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "1st Runner Up | Notre Dame National Science Festival",
  //   month: "Sep",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "IT Project Display, Senior Group",
  //   image: "/timeline/ndsc.png",
  //   slideImage: "/timeline/ndsc182.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "2017",
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "2nd Runner Up | Notre Dame National Science Festival",
  //   month: "Nov",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "IT Project Display, Junior Group",
  //   image: "/timeline/ndsc.png",
  //   slideImage: "/timeline/ndsc17.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Champion | MGBS Science and Technology Fiesta",
  //   month: "Oct",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "IT Project Display, Senior Group",
  //   image: "/timeline/mgbs.png",
  //   slideImage: "/timeline/mgbs.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  month?: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

