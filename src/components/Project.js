import React from "react";
import AirlineReservationProjectImg from "../assets/AirlineReservation.jpg";
import AnomalyDetectionProjectImg from "../assets/Anomaly-Detection.png";
import SportsECommerce from "../assets/Sports-Ecommerce.jpg";

function Project() {
  const config = {
    description:
      "Here are some of my best projects that I have worked on. I have built these projects using React.js, Node.js, Express.js, MySQL, MongoDB, and Mongoose",
    projects: [
      {
        img: AirlineReservationProjectImg,
        description: "Airline Reservation Project",
        link: "https://github.com/tailwindlabs/heroicons",
      },
      {
        img: AnomalyDetectionProjectImg,
        description: "Anomaly Detection Project",
        link: "",
      },
      {
        img: SportsECommerce,
        description: "Sports E-commerce Project",
        link: "",
      },
    ],
  };
  return (
    <section
      className="flex flex-col px-5 py-10 justify-center bg-primary text-white"
      id="project"
    >
      <div className="w-full flex flex-col justify-center pb-5 px-5">
        <h1 className="text-4xl border-b-4 border-secondary text-white mb-5 w-[150px] font-bold">
          Projects
        </h1>
        <p>{config.description}</p>
      </div>
      <div className="w-full flex flex-col md:flex-row px-5 gap-10">
        {config.projects.map((project) => (
          <div className="relative">
            <img
              className="h-[150px] w-[250px]"
              src={project.img}
              alt={project.description}
            />
            <div className="project-description">
              <p>{project.description}</p>
              <div className="bg-primary font-bold px-0 rounded-md hover:border-2 border-white hover:cursor-pointer">
                <a target="_blank" href={project.link} className="text-white">
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
