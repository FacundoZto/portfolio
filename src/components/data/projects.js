import travel from "../../assets/travel.png";
import movie from "../../assets/movie.png";
import dhestudio from "../../assets/dhestudio.png";


export const ProjectData = [
  {
    id: 6,
    title: "DHestudio",
    about: "App web for an accounting firm using Vite + React, Bootstrap for UI design, and Formik + Yup for form validation.The backend was built with Node.js, Express, and Nodemailer, allowing emails to be sent via the contact form. The project was deployed in Render.",
    tags: ["ReactJs", "Bootstrap", "Formik", "NodeJs", "Express", "Nodemailer"],
    demo: "https://estudiodh.onrender.com/",
    github: "https://github.com/FacundoZto/estudio-dh-app",
    image: dhestudio,
  },
  {
    id: 5,
    title: "Movies",
    about: "App web for movie browsing using Typescript, Next.js and Tailwind CSS, consuming data from the TMDb API. Users can view movie details such as synopsis, release date, and ratings with a responsive interface.",
    tags: ["Nextjs", "Typescript", "TailwindCSS", "ReactJs"],
    demo: "https://movie-nextjs-mdb.vercel.app/",
    github: "https://github.com/FacundoZto/movie-app",
    image: movie,
  },
  {
    id: 4,
    title: "Moondo",
    about: "Responsive landing page built with React Typescript, CSS modules. It features smooth scroll-based animations powered by Framer Motion, delivering a dynamic and engaging user experience. It showcases sections for about, services, destinations, details, and contact form. Deployed on Vercel.",
    tags: ["ReactJs", "Typescript", "CSS", "FramerMotion"],
    demo: "https://moondo.vercel.app/",
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
    id: 2,
    title: "Weather App",
    about: null,
    tags: ["ReactJs"],
    demo: null,
    github: "https://github.com/FacundoZto/Weather-App",
    image:
    "https://github.com/FacundoZto/Weather-App/blob/main/src/components/styles/weather-app.png?raw=true",
  },
  {
    id: 1,
    title: "React CRUD",
    about: "Create, Read, Update, Delete",
    tags: ["ReactJs", "Redux", "NodeJs"],
    demo: null,
    github: "https://github.com/FacundoZto/React-CRUD",
    image:
      "https://github.com/FacundoZto/React-CRUD/blob/main/img/React-crud-home.png?raw=true",
  },
];
