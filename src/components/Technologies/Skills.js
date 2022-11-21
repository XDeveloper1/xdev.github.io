import { DiAndroid, DiTerminal,DiDotnet,TbCSharp } from "react-icons/di";
import { SiJava, SiFirebase, SiGit,SiCsharp } from "react-icons/si";



export const Skills = [
  {
    slug: "android",
    Component: DiAndroid,
    title: "Android",
    Description: () => <>I work on ROMs, Kernels & Android Apps using Java.</>,
  },

  {
    slug: "java",
    Component: SiJava,
    title: "Java",
    Description: () => (
      <>I can code in Java. But I mainly use it for Android app development.</>
    ),
  },
  {
    slug: "dot.net",
    Component: DiDotnet,
    title: "dot.net",
    Description: () => (
      <>
        I can code in dot.net. But I mainly use it for Android app development.
      </>
    ),
  },
  {
    slug: "c#",
    Component: SiCsharp,
    title: "c#",
    Description: () => (
      <>I can code in C#. But I mainly use it for Android app development.</>
    ),
  },
  {
    slug: "terminal",
    Component: DiTerminal,
    title: "Scripting",
    Description: () => (
      <>I have written dozens of Shell scripts for various purposes.</>
    ),
  },
  {
    slug: "firebase",
    Component: SiFirebase,
    title: "Firebase",
    Description: () => (
      <>I have used Firebase for auth, database & analytics in my apps.</>
    ),
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => (
      <>Git is a tool that I use every day. I use GitHub for pushing my code.</>
    ),
  },
];
