/**
 * Resume/CV template created with Bootstrap 5 by @vmoratog and @jdnichollsc
 */
const resume = {
  firstName: "Ahsan",
  lastName: "Saeed",
  jobTitle: "Data Engineer",
  country: "United States",
  phone: "+92-000-000-0000",
  email: "muhammadahsen83@gmail.com",
  education: [
    {
      school: "Universidad de Cartagena",
      degree: "Bachelor",
      graduationDate: "2017",
      description: "Software Engineering",
    },
  ],
  links: [
    {
      label: "GitHub",
      link: "https://github.com/thehsansaeed",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/ahsensaeed",
    },
  ],
  skills: [
    "Javascript",
    "Typescript",
    "VueJs",
    "Nodejs",
    "NodeJS/NestJS",
    "ReactJS",
    "Nextjs",
    "React Native",
    "Graphql",
    "Docker",
    "Kubernetes",
    "AWS",
    "PostgreSQL",
    "MongoDB",
  ],
  languages: ["English", "Spanish"],
  professionalSummary: `Developer with a background in web and mobile development, having 5+ years of practice and leadership building interactive experiences.
Disciplined, organized, humble and righteous person. Committed to good morals, continuous learning, innovation and development of optimal solutions.
Great enthusiastic teamwork, considered helpful, creative, assertive and cautious.`,
  employmentHistory: [
    {
      jobTitle: "Senior mobile developer / Full-Stack Developer",
      startDate: "JUL 2022",
      endDate: "Present",
      employer: "Orium",
      city: "Remote",
      achievements: [
        "Proficient in utilizing React Native framework to develop and implement cutting-edge mobile applications",
        "Demonstrated expertise in creating composable and modular app components, resulting in a flexible and scalable application architecture.",
        "Proven ability to make well-informed architecture decisions, optimizing app performance, and enhancing user experience.",
      ],
    },
    {
      jobTitle: "FULLSTACK DEVELOPER",
      startDate: "Jan 2020",
      endDate: "Jun 2022",
      employer: "Perficient latam",
      city: "Remote",
      achievements: [
        "Created a mobile app using react native",
        "Created a REST service using Nestjs",
        "Supporting the selection processes by conducting interviews and technical tests to candidates",
      ],
    },
    {
      jobTitle: "FULLSTACK DEVELOPER",
      startDate: "NOV 2017",
      endDate: "DEC 2019",
      employer: "condorlabs",
      city: "Medellín/Colombia",
      achievements: [
        "Created a web app to manage the hiring process, data verification and monitoring of hospital medical staff",
        "Created Rest services using Nodejs",
        "Developed the Frontend application with React",
        "Integrated the app with 3 party microservices,",
        "Performed unit testing with Jest",
        "Performed tests on the app",
        "Maintenance of the app",
      ],
    },
    {
      jobTitle: "SOFTWARE DEVELOPER",
      startDate: "Jan 2017",
      endDate: "Oct 2017",
      employer: "Dca technology",
      city: "Cartagena/Colombia",
      achievements: [
        "Created a Dashboard app with Angular 4 and Nodejs to view the status of database migrations.",
        "Created the design of the app using Bootstrap.",
        "Developed the REST API with Express",
        "Created the frontend app with Angular 4",
      ],
    },
  ],
  photo: "",
};

const formatResume = (r) => ({
  ...r,
  address: [r.country, r.city, r.postalCode].filter(Boolean).join(", "),
});

new Vue({
  el: "#app",
  data: formatResume(resume),
});

/**
 * Wait for animatable-component to be loaded (Only for VanillaJS)
 **/
function animatableLoaded() {
  document.querySelector("body").classList.remove("d-none");
}
if (customElements) {
  customElements.whenDefined("animatable-component").then(animatableLoaded);
} else animatableLoaded();
