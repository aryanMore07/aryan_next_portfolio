import html5Logo from "@/public/tech-logos/html.svg";
import css3Logo from "@/public/tech-logos/css3.svg";
import javascriptLogo from "@/public/tech-logos/javascript.svg";
import ReactJsLogo from "@/public/tech-logos/react.svg";
import NextJsLogo from "@/public/tech-logos/nextjs.svg";
import ReduxLogo from "@/public/tech-logos/redux.svg";
import MaterialUi from "@/public/tech-logos/material-ui.svg";
import Githublogo from "@/public/tech-logos/github.svg";
import projectImageOne from "@/public/projects_assets/project_one.png";
import projectImageTwo from "@/public/projects_assets/project_two.png";
import projectImageThree from "@/public/projects_assets/project_three.png";
import projectImageFour from "@/public/projects_assets/project_four.png";
import projectImageFive from "@/public/projects_assets/project_five.png";
import projectImageSix from "@/public/projects_assets/project_six.png";
import projectImageSeven from "@/public/projects_assets/project_seven.png";
import projectImageEight from "@/public/projects_assets/project_eight.png";
import projectImageNine from "@/public/projects_assets/project_nine.png";
import projectImageten from "@/public/projects_assets/project_ten.png";

export const navbar_context = {
  menu_links: [
    {
      _id: "87ebef4f-d043-4e33-a588-52730396dfb0",
      title: "Home",
      path: "/",
    },
    {
      _id: "87dd8822-78a7-4398-bbf6-3e25ab63030b",
      title: "Projects",
      path: "/projects",
    },
    {
      _id: "86c385e6-b4c9-4eba-a08d-331455f43672",
      title: "Blogs",
      path: "/blogs",
    },
  ],
};

export const homepage_context = {
  top_section_context: {
    title: "I'm Aryan More",
    subtitle:
      "Passionate Frontend Developer | Crafting Engaging User Experiences",
    description: `
I'm a frontend developer skilled in React, Next.js, and MUI. I build responsive, user-friendly web applications with a focus on performance and usability. Check out my projects to see how I turn creative ideas into seamless digital experiences!`,
  },
  tech_stack_context: {
    title: "Tech Stacks",
    points: [
      {
        _id: "a6987a71-f57a-41bd-9606-37e36782e565",
        image: html5Logo,
        title: "HTML",
      },
      {
        _id: "3b5e3d77-b811-4681-bcae-f54a2e757179",
        image: css3Logo,
        title: "CSS",
      },
      {
        _id: "144be761-2e39-486f-b596-8a66401a7ced",
        image: javascriptLogo,
        title: "JavaScript",
      },
      {
        _id: "9714c9dd-8ab1-4ca5-9a65-7416173d7799",
        image: ReactJsLogo,
        title: "ReactJS",
      },
      {
        _id: "011f9344-5786-457d-b8cc-d3fc38df9dce",
        image: NextJsLogo,
        title: "NextJS",
      },
      {
        _id: "cab9a336-70c6-4915-9270-cd8640d55809",
        image: ReduxLogo,
        title: "Redux/Redux Toolkit",
      },
      {
        _id: "7d94dcf9-40f5-4551-bf83-c0a0e6e043cf",
        image: MaterialUi,
        title: "Matetial UI",
      },
      {
        _id: "77e7ee21-590e-4893-ba01-4af71fc7d197",
        image: Githublogo,
        title: "Github",
      },
    ],
  },
};

export const footer_context = {
  title: "Aryan More",
  middle_text: "Made with 💜 in NextJS",
  social_links: [
    {
      _id: "6f61762b-85f4-4acd-8ab4-61b49b0bd079",
      text: "LinkedIn",
      path: "https://in.linkedin.com/in/aryan-more-417497216",
    },
    {
      _id: "a8fffd9f-c620-4ff6-b562-b4a9eef92109",
      text: "X (Formerly Twitter)",
      path: "https://x.com/aRYNMore2110",
    },
    {
      _id: "4a96f66d-ac85-43c0-8a69-81aca6a9153f",
      text: "Github",
      path: "https://github.com/aryanMore07",
    },
    {
      _id: "b6cc14a9-8de4-4dcb-92c2-fd0377497349",
      text: "Gmail",
      path: "mailto:aryanmore498@gmail.com",
    },
  ],
};

export const projectpage_context = {
  title: "Projects",
  points: [
    {
      _id: "50a050f1-aec2-4994-8404-08fefe5fc6fd",
      image: projectImageOne,
      title: "Chat More | Social Media App",
      text: "ChatMore is a React social app for profiles, posts, and interactions.",
      tech_stacks: [
        { text: "HTML", type: "html" },
        { text: "CSS", type: "css" },
        { text: "JAVASCRIPT", type: "javascript" },
        { text: "REACTJS", type: "reactjs" },
        { text: "MUI", type: "mui" },
        { text: "BOOTSTRAP", type: "bootstrap" },
      ],
      btn_texts: {
        live_project_btn_context: {
          text: "Live link",
          link: "https://chat-more.netlify.app/welcome/",
        },
        source_code_btn_context: {
          text: "Source Code",
          link: "https://github.com/aryanMore07/chat-more/",
        },
      },
    },
    {
      _id: "d4127312-f12e-4cc1-baaf-9e164d1b3c92",
      image: projectImageTwo,
      title: "Shop More | E-commerce App",
      text: "ShopMore is a React eCommerce platform with authentication and easy checkout.",
      tech_stacks: [
        { text: "HTML", type: "html" },
        { text: "CSS", type: "css" },
        { text: "JAVASCRIPT", type: "javascript" },
        { text: "REACTJS", type: "reactjs" },
        { text: "MUI", type: "mui" },
        { text: "BOOTSTRAP", type: "bootstrap" },
      ],
      btn_texts: {
        live_project_btn_context: {
          text: "Live link",
          link: "https://shop-more-co.netlify.app/",
        },
        source_code_btn_context: {
          text: "Source Code",
          link: "https://github.com/aryanMore07/shop-more-v1/",
        },
      },
    },
    {
      _id: "27cbdac5-2974-45a6-9f3b-0d5feef6c3fa",
      image: projectImageThree,
      title: "krwn-clothing | E-commerce App",
      text: "Krwn-Clothing is a React app for clothing e-commerce, using React, Redux and Firebase.",
      tech_stacks: [
        { text: "HTML", type: "html" },
        { text: "CSS", type: "css" },
        { text: "JAVASCRIPT", type: "javascript" },
        { text: "REACTJS", type: "reactjs" },
        { text: "MUI", type: "mui" },
        { text: "BOOTSTRAP", type: "bootstrap" },
      ],
      btn_texts: {
        live_project_btn_context: {
          text: "Live link",
          link: "https://krwn-clothing.netlify.app/",
        },
        source_code_btn_context: {
          text: "Source Code",
          link: "https://github.com/aryanMore07/crwn-clothing-v2/",
        },
      },
    },
    {
      image: projectImageFour,
      title: "Random Advice Generator",
      text: "The random advice generator is a React app that fetches advice from the Advice Slip API.",
      tech_stacks: [
        { text: "HTML", type: "html" },
        { text: "CSS", type: "css" },
        { text: "JAVASCRIPT", type: "javascript" },
        { text: "REACTJS", type: "reactjs" },
        { text: "MUI", type: "mui" },
        { text: "BOOTSTRAP", type: "bootstrap" },
      ],
      btn_texts: {
        live_project_btn_context: {
          text: "Live link",
          link: "https://random-advices-app.netlify.app/",
        },
        source_code_btn_context: {
          text: "Source Code",
          link: "https://github.com/aryanMore07/advice-generator-app/",
        },
      },
    },
    {
      _id: "6d72c745-2bbd-4422-83bd-ec043faddb41",
      image: projectImageFive,
      title: "The Minnion Speak Translator",
      text: "The Minion Speak Translator converts text to Minion language using the FunTranslations API.",
      tech_stacks: [
        { text: "HTML", type: "html" },
        { text: "CSS", type: "css" },
        { text: "JAVASCRIPT", type: "javascript" },
      ],
      btn_texts: {
        live_project_btn_context: {
          text: "Live link",
          link: "https://marksixth.netlify.app/",
        },
        source_code_btn_context: {
          text: "Source Code",
          link: "https://github.com/aryanMore07/markSix/",
        },
      },
    },
    {
      _id: "64b8095d-51b3-4f68-8c61-0b95ff11c832",
      image: projectImageSix,
      title: "Phineas & Ferb Translator",
      text: "The Phineas & Ferb Translator converts text to their language using the FunTranslations API.",
      tech_stacks: [
        { text: "HTML", type: "html" },
        { text: "CSS", type: "css" },
        { text: "JAVASCRIPT", type: "javascript" },
      ],
      btn_texts: {
        live_project_btn_context: {
          text: "Live link",
          link: "https://markseventh.netlify.app/",
        },
        source_code_btn_context: {
          text: "Source Code",
          link: "https://github.com/aryanMore07/markSeventh/",
        },
      },
    },
    {
      _id: "07a57b1b-91c0-4792-b27a-207e8c4c2dc5",
      image: projectImageSeven,
      title: "Emoji Interpreter",
      text: "The Emoji Interpreter app provides meanings for emojis from a predefined object.",
      tech_stacks: [
        { text: "HTML", type: "html" },
        { text: "CSS", type: "css" },
        { text: "JAVASCRIPT", type: "javascript" },
        { text: "REACTJS", type: "reactjs" },
        { text: "MUI", type: "mui" },
        { text: "BOOTSTRAP", type: "bootstrap" },
      ],
      btn_texts: {
        live_project_btn_context: {
          text: "Live link",
          link: "https://markeight.netlify.app/",
        },
        source_code_btn_context: {
          text: "Source Code",
          link: "https://github.com/aryanMore07/markEigth/",
        },
      },
    },
    {
      _id: "0826b00e-5efb-4f71-9b77-612e707379d2",
      image: projectImageEight,
      title: "Recommendation App",
      text: "The Recommendation App is a React platform that displays games and their IGN ratings.",
      tech_stacks: [
        { text: "HTML", type: "html" },
        { text: "CSS", type: "css" },
        { text: "JAVASCRIPT", type: "javascript" },
        { text: "REACTJS", type: "reactjs" },
        { text: "MUI", type: "mui" },
        { text: "BOOTSTRAP", type: "bootstrap" },
      ],
      btn_texts: {
        live_project_btn_context: {
          text: "Live link",
          link: "https://markninth.netlify.app/",
        },
        source_code_btn_context: {
          text: "Source Code",
          link: "https://github.com/aryanMore07/markNinth",
        },
      },
    },
    {
      _id: "9151c529-558a-4de0-8da0-99cf147b1595",
      image: projectImageNine,
      title: "Cash Register App",
      text: "The Cash Register App calculates change using bill amount and cash with denominations: 2000, 500, 100, 20, 10, and 1.",
      tech_stacks: [
        { text: "HTML", type: "html" },
        { text: "CSS", type: "css" },
        { text: "JAVASCRIPT", type: "javascript" },
      ],
      btn_texts: {
        live_project_btn_context: {
          text: "Live link",
          link: "https://marktenth.netlify.app/",
        },
        source_code_btn_context: {
          text: "Source Code",
          link: "https://github.com/aryanMore07/markTen",
        },
      },
    },
    {
      _id: "13a30d01-a718-4258-bbe8-b50cad9a6e2e",
      image: projectImageten,
      title: "Stock Profit & Loss App",
      text: "The Stock Profit & Loss App calculates profit or loss based on price and quantity, indicating losses in red and profits in green.",
      tech_stacks: [
        { text: "HTML", type: "html" },
        { text: "CSS", type: "css" },
        { text: "JAVASCRIPT", type: "javascript" },
      ],
      btn_texts: {
        live_project_btn_context: {
          text: "Live link",
          link: "https://markfourteenth.netlify.app/",
        },
        source_code_btn_context: {
          text: "Source Code",
          link: "https://github.com/aryanMore07/markFourteen",
        },
      },
    },
  ],
};

export const blogs_page_context = {
  title: "Blogs",
};
