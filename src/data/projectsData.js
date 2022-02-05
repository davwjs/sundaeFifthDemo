import RoadmapSMImage1 from "../assets/images/projects/roadmap/road1.png";
import RoadmapSMImage2 from "../assets/images/projects/roadmap/road2.png";
import RoadmapSMImage3 from "../assets/images/projects/roadmap/road3.png";

import Example_1_SM_1 from "../assets/images/projects/example_1/sm_1.jpeg";
import Example_1_SM_2 from "../assets/images/projects/example_1/sm_2.jpeg";
import Example_1_SM_3 from "../assets/images/projects/example_1/sm_3.jpeg";
import Example_1_MD_1 from "../assets/images/projects/example_1/md_1.jpeg";
import Example_1_MD_2 from "../assets/images/projects/example_1/md_2.jpeg";
import Example_1_LG_1 from "../assets/images/projects/example_1/lg_1.jpeg";
import Example_1_LG_2 from "../assets/images/projects/example_1/lg_2.jpeg";

import Example_2_SM_1 from "../assets/images/projects/example_2/lg_1.jpeg";
import Example_2_SM_2 from "../assets/images/projects/example_2/lg_2.jpeg";

import Example_3_SM_1 from "../assets/images/projects/example_3/sm_1.jpeg";
import Example_3_SM_2 from "../assets/images/projects/example_3/sm_2.jpeg";
import Example_3_SM_3 from "../assets/images/projects/example_3/sm_3.jpeg";
import Example_3_MD_1 from "../assets/images/projects/example_3/md_1.jpeg";
import Example_3_MD_2 from "../assets/images/projects/example_3/md_2.jpeg";
import Example_3_LG_1 from "../assets/images/projects/example_3/lg_1.jpeg";
import Example_3_LG_2 from "../assets/images/projects/example_3/lg_2.jpeg";

export const ProjectData = [
  {
    id: "roadmap",
    sequence: 1,
    title: "Road Map",
    text: [
      "Rule of thumb: 60% of funding will roll over to our future development and projects",
      "10,000 initial NFT minting",
      "3D Image/Artist Collaborations Selected artists can participate in creating more personalized Toadle.",
      "Minime Voxel - Pick 1. We will vote on this on our Discord and Twitter. Toadlers will be able to turn their Toadle into 3D Voxel. Upgrade your Minime Voxel with the same generated traits.",
      "Animated Voxel. Every minime voxel you hold will allow you to claim an animated Toadle. Bring you Toadle into life!",
    ],
    secondary: [],
    phoneImgSrc: [RoadmapSMImage2, RoadmapSMImage1, RoadmapSMImage3],
    desktopImgSrc: [],
    tabletImgSrc: [],
    mobileFirst: true,
    next: "example_1",
  },
  {
    id: "example_1",
    sequence: 2,
    title: "Example_1",
    text: [
      "Rule of thumb: 60% of funding will roll over to our future development and projects",
      "10,000 initial NFT minting",
      "3D Image/Artist Collaborations Selected artists can participate in creating more personalized Toadle.",
      "Minime Voxel - Pick 1. We will vote on this on our Discord and Twitter. Toadlers will be able to turn their Toadle into 3D Voxel. Upgrade your Minime Voxel with the same generated traits.",
      "Animated Voxel. Every minime voxel you hold will allow you to claim an animated Toadle. Bring you Toadle into life!",
    ],
    secondary: [
      "fuzzy wuzzy was a bear",
      "fuzzy wuzzy we made this with care",
      "to keep you warm",
      "when ur feeling h!gh",
      "you’ll get stopped in the street with a fleece this fly",
      "put out ur spleefs & protect our forests",
      "or else sm0kie the bear will steal ur $ta$h",
      "front chest zip up pocket",
    ],
    phoneImgSrc: [Example_1_SM_1, Example_1_SM_2, Example_1_SM_3],
    desktopImgSrc: [Example_1_MD_1, Example_1_MD_2],
    tabletImgSrc: [Example_1_LG_1, Example_1_LG_2],
    mobileFirst: true,
    next: "example_2",
  },
  {
    id: "example_2",
    sequence: 3,
    title: "Example_2",
    text: [
      "Everyone needs a budgeting tool. Xpensity can help you to get in control of your own daily expenditures. This mobile-first Single Page Application enables the user to record quick transactions on-the-go. With lightning-fast load time, custom category tags and easy access to the number pad, you can record a transaction in seconds.",
      "The first iteration is built with Vue and state is managed with Vuex. I had the idea of building a personal accounting web app for a long time and this project was a great practice after learning Vue. Data is stored in Local Storage for this version, and I'd love to explore online options in future iterations. Many changes are made in the second iteration after sending this to a few friends for testing and daily use.",
    ],
    secondary: [
      "Vue",
      "Vuex",
      "VueRouter",
      "TypeScript",
      "Scss/Sass",
      "Webpack",
      "UI/UX",
      "SPA",
    ],
    phoneImgSrc: [],
    desktopImgSrc: [Example_2_SM_1, Example_2_SM_2],
    tabletImgSrc: [],
    mobileFirst: true,
    next: "example_3",
  },
  {
    id: "example_3",
    sequence: 4,
    title: "Example_3",
    text: [
      "This is a UI library built with Vue3 composition API. It's written in Typescript and easy to use. There are only four different components at the moment but I'll likely add more later. It's available on npm, therefore, you're just one command away. ",
      "The process of writing this library was a great learning experience. A few issues came up that I've never encountered previously, like opening the dialogue window with a function, where the dialogue element should fit in the DOM, how to scope and structure CSS to avoid creating more problems for the user, etc. Let's just say that there was a lot of...Googling. Problem solving...that's what I meant.",
    ],
    secondary: ["Vue", "Scss/Sass", "TypeScript", "UX/UI", "NPM"],
    phoneImgSrc: [Example_3_SM_1, Example_3_SM_2, Example_3_SM_3],
    desktopImgSrc: [Example_3_MD_1, Example_3_MD_2],
    tabletImgSrc: [Example_3_LG_1, Example_3_LG_2],
    mobileFirst: false,
    next: "roadmap",
  },
];
