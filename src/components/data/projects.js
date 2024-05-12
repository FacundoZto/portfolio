import img from "../../assets/github.png";
import travel from "../../assets/travel.png";
import movie from "../../assets/movie.png";

export const ProjectData = [
  {
    id: 1,
    title: "Movie App",
    about: "Website about movies that allows the user to perform searches using data from 'TheMovieDataBase' API. Technologies used: Next.js, React, TypeScript, TailwindCSS. Deployed on Vercel.",
    tags: ["Nextjs"],
    demo: "https://movie-nextjs-mdb.vercel.app/",
    github: "https://github.com/FacundoZto/movie-app",
    image: movie,
  },
  {
    id: 2,
    title: "Travel App",
    about: "Responsive single page application project containing sections for About, Services, Products, Details, and Contact. Developed with React, TypeScript, CSS, and Framer Motion for animations. Deployed on Vercel.",
    tags: ["ReactJs"],
    demo: "https://travel-company.vercel.app/",
    github: "https://github.com/FacundoZto/TravelProject",
    image: travel,
  },
  {
    id: 3,
    title: "Dogs App",
    about: "Web application that allows the user to perform filtering, sorting, creation via form, and searches by consuming data from an API and the local database. Technologies used: React, Redux, JavaScript, Node.js, Express, Sequelize, CSS, PostgreSQL. Deployed on Vercel.",
    tags: ["ReactJs", "Redux", "NodeJs"],
    demo: "https://dogs-ruddy-delta.vercel.app/",
    github: "https://github.com/FacundoZto/Proyecto-Dogs",
    image:
      "https://raw.githubusercontent.com/FacundoZto/Proyecto-Dogs/main/Imagenes/Landing.png",
  },
  {
    id: 4,
    title: "React CRUD",
    about: "Create, Read, Update, Delete",
    tags: ["ReactJs", "Redux", "NodeJs"],
    demo: null,
    github: "https://github.com/FacundoZto/React-CRUD",
    image:
      "https://github.com/FacundoZto/React-CRUD/blob/main/img/React-crud-home.png?raw=true",
  },
  {
    id: 5,
    title: "Weather App",
    about: null,
    tags: ["ReactJs"],
    demo: null,
    github: "https://github.com/FacundoZto/Weather-App",
    image:
      "https://github.com/FacundoZto/Weather-App/blob/main/src/components/styles/weather-app.png?raw=true",
  },
  {
    id: 6,
    title: "GitHub Users",
    about: null,
    tags: ["ReactJs"],
    demo: null,
    github: "https://github.com/FacundoZto/Prueba-Tecnica_Front-end",
    image: img,
  },
];
