import React from "react";
import AirlineReservationProjectImg from "../assets/AirlineReservation.jpg";
import AnomalyDetectionProjectImg from "../assets/Anomaly-Detection.png";
import SportsECommerce from "../assets/Sports-Ecommerce.jpg";

function Project() {
  const config = {
    description:
      "Here are some of my best projects that I have worked on. I have built these projects using React.js, Node.js, Express.js, MySQL, MongoDB, and Mongoose.",
    projects: [
      {
        img: AirlineReservationProjectImg,
        description: "Airline Reservation Project",
        link: "https://github.com/Janarthanan-Harismenan/Airline-Reservation-System",
      },
      {
        img: AnomalyDetectionProjectImg,
        description: "Anomaly Detection Project",
        link: "https://github.com/HashithaJayarathna/Data-Science-Project",
      },
      {
        img: SportsECommerce,
        description: "Sports E-commerce Project",
        link: "https://github.com/Janarthanan-Harismenan/LakshmiStores-User-Profile-and-Cart-Integration",
      },
    ],
  };

  return (
    <section
      className="flex flex-col px-5 py-20 justify-center bg-primary text-white"
      id="project"
    >
      <div className="w-full flex flex-col justify-center pb-10 px-5 text-center">
        <h1 className="text-4xl border-b-4 border-secondary text-white mb-5 w-fit mx-auto font-bold">
          Projects
        </h1>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          {config.description}
        </p>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-10 justify-center">
        {config.projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-secondary rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
          >
            <img
              className="h-[200px] w-[300px] object-cover"
              src={project.img}
              alt={project.description}
            />
            <div className="p-5 flex justify-center flex-col">
              <p className="text-xl font-semibold mb-3">
                {project.description}
              </p>
              <div className="flex justify-center">
                {project.link ? (
                  <a
                    target="_blank"
                    href={project.link}
                    className="inline-block bg-primary text-white font-bold py-2 px-4 rounded-md hover:bg-secondary transition-colors"
                  >
                    View Project
                  </a>
                ) : (
                  <span className="inline-block text-gray-400 font-bold py-2 px-4 rounded-md cursor-not-allowed">
                    No Link Available
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
