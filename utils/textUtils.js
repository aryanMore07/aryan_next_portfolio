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
    description: `I'm a frontend developer skilled in  Next.js, React.js, Redux, and MUI. I build responsive, user-friendly web applications with a focus on performance and usability. Check out my projects to see how I turn creative ideas into seamless digital experiences!`,
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
        {
          _id: "ebb3e4e4-f995-4f90-a67c-f7ae4f3ccf3d",
          text: "HTML",
          type: "html",
        },
        {
          _id: "8ce3e243-d671-4c6b-bd96-44594cd7e56f",
          text: "CSS",
          type: "css",
        },
        {
          _id: "4ae3bfb6-8ec0-43f5-9166-f7de1d2bfc36",
          text: "JAVASCRIPT",
          type: "javascript",
        },
        {
          _id: "ba53ff09-4a6a-47e9-a097-b86c15608de4",
          text: "REACTJS",
          type: "reactjs",
        },
        {
          _id: "78157b6f-79d1-4de0-9b56-0c14367c2645",
          text: "MUI",
          type: "mui",
        },
        {
          _id: "83fb6bdb-09ee-4b87-93c5-a7fb961264d0",
          text: "BOOTSTRAP",
          type: "bootstrap",
        },
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
        {
          _id: "0b2fc4cb-5eee-4bd3-adbb-866516d79c4e",
          text: "HTML",
          type: "html",
        },
        {
          _id: "4222292c-564c-451d-adf5-d5fbd2741a38",
          text: "CSS",
          type: "css",
        },
        {
          _id: "2312a4d6-4c0a-48a1-9e85-f89f41f8db9e",
          text: "JAVASCRIPT",
          type: "javascript",
        },
        {
          _id: "bc1f40d6-8ff1-46c1-8c27-186cc1c724a4",
          text: "REACTJS",
          type: "reactjs",
        },
        {
          _id: "a5d5ea5a-e93b-4166-b6c7-e60fa7888ee3",
          text: "MUI",
          type: "mui",
        },
        {
          _id: "fbe9a28c-8557-47d0-a9a4-91157c3be1a4",
          text: "BOOTSTRAP",
          type: "bootstrap",
        },
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
        {
          _id: "940ee514-54b6-4913-bf66-0c828b67cd48",
          text: "HTML",
          type: "html",
        },
        {
          _id: "e3e88084-6cd6-472e-8e9c-3b1911d1485f",
          text: "CSS",
          type: "css",
        },
        {
          _id: "a3790df7-455e-431f-b33b-95170bd0efd4",
          text: "JAVASCRIPT",
          type: "javascript",
        },
        {
          _id: "bfbdeb5b-7701-4886-b53d-418c1e935a32",
          text: "REACTJS",
          type: "reactjs",
        },
        {
          _id: "b05a17d5-dd9c-4af8-9ff8-27d473093998",
          text: "MUI",
          type: "mui",
        },
        {
          _id: "bc4f16ad-bd81-483a-8030-edb6e09bbf68",
          text: "BOOTSTRAP",
          type: "bootstrap",
        },
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
      _id: "107a23cf-20b6-4e77-93ab-fa7bf63dfd6a",
      image: projectImageFour,
      title: "Random Advice Generator",
      text: "The random advice generator is a React app that fetches advice from the Advice Slip API.",
      tech_stacks: [
        {
          _id: "d24228bd-3f68-4343-a8c3-11ef02769f6e",
          text: "HTML",
          type: "html",
        },
        {
          _id: "1b94ee64-3902-47da-9eed-29a10cdd907f",
          text: "CSS",
          type: "css",
        },
        {
          _id: "b9c6c53a-d9be-4b94-a57e-f4c076477181",
          text: "JAVASCRIPT",
          type: "javascript",
        },
        {
          _id: "9431ea99-6472-4997-bda3-d41aaee35090",
          text: "REACTJS",
          type: "reactjs",
        },
        {
          _id: "23dab8f6-951b-45e7-8259-021be3d8e20d",
          text: "MUI",
          type: "mui",
        },
        {
          _id: "d32f525a-1188-44d3-9e68-d07258171bcd",
          text: "BOOTSTRAP",
          type: "bootstrap",
        },
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
        {
          _id: "5d71dc90-725f-4999-9dcf-c030f6848c46",
          text: "HTML",
          type: "html",
        },
        {
          _id: "d0f2c5ad-16ec-4246-b9aa-ad9dfa7f282e",
          text: "CSS",
          type: "css",
        },
        {
          _id: "f5abb55f-516b-4015-a60d-69e6e61b97e1",
          text: "JAVASCRIPT",
          type: "javascript",
        },
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
        {
          _id: "0a91d7fa-e56f-44c1-9c28-1f1f8488bbd6",
          text: "HTML",
          type: "html",
        },
        {
          _id: "a56ad98b-f070-45c9-9571-d94c6dd8cb62",
          text: "CSS",
          type: "css",
        },
        {
          _id: "3190bd8e-e8c5-4d7b-b59c-9d37a04247f8",
          text: "JAVASCRIPT",
          type: "javascript",
        },
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
        {
          _id: "6787f263-a470-4b34-bb79-2d4b70f46332",
          text: "HTML",
          type: "html",
        },
        {
          _id: "6bba8822-4ad4-4645-bbdb-79e873307049",
          text: "CSS",
          type: "css",
        },
        {
          _id: "0031969c-14db-4c08-a4f1-be1be0b661fb",
          text: "JAVASCRIPT",
          type: "javascript",
        },
        {
          _id: "07ed9f0f-26ee-47a3-aa2a-c661f3ae11c8",
          text: "REACTJS",
          type: "reactjs",
        },
        {
          _id: "7804c5ca-d182-48e9-bc29-289a13c47725",
          text: "MUI",
          type: "mui",
        },
        {
          _id: "ce1d9462-c1c7-47cb-a874-bf99f3e32d08",
          text: "BOOTSTRAP",
          type: "bootstrap",
        },
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
        {
          _id: "0b61ef69-86fe-45a4-82f4-ca518e3fb4ee",
          text: "HTML",
          type: "html",
        },
        {
          _id: "ec8c7ec6-a046-43a1-b2a1-f13152e14fd4",
          text: "CSS",
          type: "css",
        },
        {
          _id: "cca41570-8740-435a-9f86-a8f883054df0",
          text: "JAVASCRIPT",
          type: "javascript",
        },
        {
          _id: "514d751d-c077-4380-b781-cee4b4805b96",
          text: "REACTJS",
          type: "reactjs",
        },
        {
          _id: "57710256-2f67-4b6d-9be1-2da496e12830",
          text: "MUI",
          type: "mui",
        },
        {
          _id: "c99d318f-02f8-4de9-98a4-0531e93cb7a8",
          text: "BOOTSTRAP",
          type: "bootstrap",
        },
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
        {
          _id: "ba0682a5-cf46-424c-8ddc-68072d865ab0",
          text: "HTML",
          type: "html",
        },
        {
          _id: "bb668a99-971e-4c88-9330-c20d30c433ac",
          text: "CSS",
          type: "css",
        },
        {
          _id: "77a12936-5212-42ba-956f-7d8a5f2bacfb",
          text: "JAVASCRIPT",
          type: "javascript",
        },
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
        {
          _id: "cb3ffac5-5244-4ebb-99d1-5292c188beb5",
          text: "HTML",
          type: "html",
        },
        {
          _id: "661e80d1-c101-4d93-b3e9-fae11d0f2096",
          text: "CSS",
          type: "css",
        },
        {
          _id: "1c25c1a3-d266-4055-89c3-4be4a12012ac",
          text: "JAVASCRIPT",
          type: "javascript",
        },
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
