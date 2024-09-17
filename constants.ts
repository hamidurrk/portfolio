export const METADATA = {
  title: "Portfolio | Md Hamidur Rahman Khan",
  description:
    "Pushing the boundaries of innovation with intelligent robots, machine learning, blockchain, and dynamic web solutions.",
  siteUrl: "https://portfolio-hamidur.vercel.app/",
  imgUrl: "https://i.ibb.co/drmYKsc/og-image.jpg"
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
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
  tech: string[];
}

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
    tech: ["python", "customtkinter"],
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
    name: "Haunt OS",
    image: "/projects/haunt.png",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "Haunt is an OS programmed for line follower robots for advanced control",
    details: "Haunt OS is a specialized operating system designed to provide advanced control and debugging capabilities for line follower robots. It enables the robot to tweak settings, adjust parameters, and reprogram functionalities on-the-run without connecting to an external computer, which is advantageous in a competitive field.",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "",
    github: "https://github.com/hamidurrk/haunt-os",
    embed: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/939581502?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="HauntOS LFR Demo Run"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
    tech: ["cpp"]
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
    tech: ["cpp", "python"],
  },
  {
    name: "EduKit",
    image: "/timeline/edukit.jpg",
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

export const SKILLS = {
  languages: [
    "python",
    "javascript",
    "typescript",
    "cpp",
    "c",
    "java",
    "php",
    "solidity",
    "r",
    "html",
    "css",
    "markdown",
    "sql"
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
    "firebase",
    "mongo",
    "postgres",
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
      "Currently studying the vast field of Machine Learning at LUT University in Finland",
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
      "Led teams in the Future Innovator segment through the nationals; 2 teams to internationals, 1 got honored",
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
      "Joined as a Volunteer Web Developer. My first project was an international collaboration with Awake Youth Initiative in Nairobi, Kenya",
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
      "2nd Place in SDG 12 among teams from 44 countries for the invention of Block Meter",
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
  {
    type: NodeTypes.CHECKPOINT,
    title: "First Runner Up, Robotronics 2.0",
    month: "Jun",
    size: ItemSize.SMALL,
    subtitle:
      "Acheieved 2nd position in the Line Follower Competition University level National Round",
    image: "/timeline/robotronics.png",
    slideImage: "/timeline/ruet.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2021",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
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
      "Taught 400+ individuals about introductory robotics through drone technology",
    image: "/timeline/teslalab.svg",
    slideImage: "/timeline/teslalab.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Starting as an Advisor, leaving the President position",
    month: "Mar",
    size: ItemSize.SMALL,
    subtitle:
      "During my presidency, I mentored 45 national team, took 14 workshops, 100+ robotics-oriented classes, to train up more than 150 students of Notre Dame College",
    image: "/timeline/nditc.svg",
    slideImage: "/timeline/farewell.JPG",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2020",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Champion | International Tech Carnival, DRMC",
    month: "Feb",
    size: ItemSize.SMALL,
    subtitle:
      "Fastest Line Follower Robot to finish tracks",
    image: "/timeline/drmc.png",
    slideImage: "/timeline/drmc.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Workshop Instructor | Digital Design",
    month: "Jan",
    size: ItemSize.SMALL,
    subtitle: "Created exposure to topics like boolean algebra, logic gates, basic electronic circuits, ICs, registers, and counters",
    image: "/timeline/nditc.svg",
    slideImage: "/timeline/dl.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2019",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
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
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Co-ordinator (Robotics & Management) | NDITC Init 2.0",
    month: "Aug",
    size: ItemSize.SMALL,
    subtitle:
      "Managed platinum sponsors; Introduced 12+ new robotics events at the school level along with 20 existing; led a team of 40 executives to organize the event of 700+ participants.",
    image: "/timeline/nditc.svg",
    slideImage: "/timeline/init2.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
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
  {
    type: NodeTypes.CHECKPOINT,
    title: "2nd Runner Up | Notre Dame National Science Festival",
    month: "Jul",
    size: ItemSize.SMALL,
    subtitle:
      "Line Following Robot Competition",
    image: "/timeline/ndsc.png",
    slideImage: "/timeline/ndsc19.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
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
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2018",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "1st Runner Up | NDITC Init 1.0",
    month: "Nov",
    size: ItemSize.SMALL,
    subtitle:
      "Line Following Robot Competition",
    image: "/timeline/nditc.svg",
    slideImage: "/timeline/init18.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Honorable Mention | NDITC Init 1.0",
    month: "Nov",
    size: ItemSize.SMALL,
    subtitle:
      "Project Display",
    image: "/timeline/nditc.svg",
    slideImage: "/timeline/init182.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "1st Runner Up | Notre Dame National Science Festival",
    month: "Sep",
    size: ItemSize.SMALL,
    subtitle:
      "Self Made Car Racing",
    image: "/timeline/ndsc.png",
    slideImage: "/timeline/ndsc18.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "1st Runner Up | Notre Dame National Science Festival",
    month: "Sep",
    size: ItemSize.SMALL,
    subtitle:
      "IT Project Display, Senior Group",
    image: "/timeline/ndsc.png",
    slideImage: "/timeline/ndsc182.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2017",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2nd Runner Up | Notre Dame National Science Festival",
    month: "Nov",
    size: ItemSize.SMALL,
    subtitle:
      "IT Project Display, Junior Group",
    image: "/timeline/ndsc.png",
    slideImage: "/timeline/ndsc17.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Champion | MGBS Science and Technology Fiesta",
    month: "Oct",
    size: ItemSize.SMALL,
    subtitle:
      "IT Project Display, Senior Group",
    image: "/timeline/mgbs.png",
    slideImage: "/timeline/mgbs.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
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

