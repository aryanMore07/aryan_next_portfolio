import html5Logo from "@/public/tech-logos/html.svg";
import css3Logo from "@/public/tech-logos/css3.svg";
import javascriptLogo from "@/public/tech-logos/javascript.svg";
import ReactJsLogo from "@/public/tech-logos/react.svg";
import NextJsLogo from "@/public/tech-logos/nextjs.svg";
import ReduxLogo from "@/public/tech-logos/redux.svg";
import MaterialUi from "@/public/tech-logos/material-ui.svg";
import Githublogo from "@/public/tech-logos/github.svg";

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
