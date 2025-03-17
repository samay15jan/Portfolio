const getAsset = (path) => `/projects/${path}`;

const Projects = [
  {
    Name: "Bingelord",
    Desc1:
      "Bingelord is a full-stack movie/series browsing & streaming platform with secure authentication, offering a seamless and immersive viewing experience.",
    Desc2:
      "It provides a personalized way to discover, search and filter content while ensuring effortless navigation.",
    Github: "https://github.com/samay15jan/bingelord",
    Demo: "https://bingelord.samay15jan.xyz",
    tools: ["React", "TailwindCSS", "Express", "Firebase", "Tmdb api"],
    main: getAsset("bingelord/main.png"),
    semi: getAsset("bingelord/semi.png"),
    card1: getAsset("bingelord/card1.png"),
    card2: getAsset("bingelord/card2.png"),
    video1: getAsset("bingelord/video1.mp4"),
    video2: getAsset("bingelord/video2.mp4"),
    primaryColor: '#091c29',
    secondaryColor: '#863142',
  },
  {
    Name: "Sparklines",
    Desc1:
      "Bingelord is a full-stack movie/series browsing & streaming platform with secure authentication, offering a seamless and immersive viewing experience.",
    Desc2:
      "It provides a personalized way to discover, search and filter content while ensuring effortless navigation.",
    Github: "https://github.com/samay15jan/sparklines",
    Demo: "https://sparklines.samay15jan.xyz",
    tools: [
      "MongoDB",
      "Express",
      "React",
      "NodeJS",
      "Typescript",
      "JWT",
    ],
    main: getAsset("sparklines/main.png"),
    semi: getAsset("sparklines/semi.png"),
    card1: getAsset("sparklines/card1.png"),
    card2: getAsset("sparklines/card2.png"),
    video1: getAsset("sparklines/video1.mp4"),
    video2: getAsset("sparklines/video2.mp4"),
    primaryColor: '#373737',
    secondaryColor: '#b3b3b3',
  },
  {
    Name: "Porsche Replicant",
    Desc1:
      "Bingelord is a full-stack movie/series browsing & streaming platform with secure authentication, offering a seamless and immersive viewing experience.",
    Desc2:
      "It provides a personalized way to discover, search and filter content while ensuring effortless navigation.",
    Github: "https://github.com/samay15jan/porsche-replicant",
    Demo: "https://porsche-replicant.samay15jan.xyz",
    tools: ["React", "TailwindCSS", "Redux", "Clone"],
    main: getAsset("porsche-replicant/main.png"),
    semi: getAsset("porsche-replicant/semi.png"),
    card1: getAsset("porsche-replicant/card1.png"),
    card2: getAsset("porsche-replicant/card2.png"),
    video1: getAsset("porsche-replicant/video1.mp4"),
    video2: getAsset("porsche-replicant/video2.mp4"),
    primaryColor: '#b3b3b3',
    secondaryColor: '#b3b3b3',
  },
];

export default Projects;
