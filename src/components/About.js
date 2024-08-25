import React from "react";
import AboutImg from "../assets/about.png";

function About() {
  const config = {
    description:
      "Hi, I'm Harismenan, a Full-stack developer specializing in creating beautiful and functional websites using React.js and Tailwind CSS.",
    skills: [
      "Frontend: React.js, Tailwind CSS, CSS3",
      "Backend: Node.js, Express.js, MongoDB, Mongoose",
    ],
  };

  return (
    <section
      className="flex flex-col md:flex-row bg-secondary px-10 py-20 justify-center items-center text-center md:text-left"
      id="about"
    >
      <div className="md:w-1/2 py-5 md:pr-10">
        <img
          src={AboutImg}
          alt="About Me"
          className="rounded-lg shadow-lg w-full h-auto"
        />
      </div>
      <div className="md:w-1/2 flex justify-center font-hero-Font text-white">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl border-b-4 border-primary text-white mb-5 w-fit font-bold">
            About Me
          </h1>
          <p className="pb-3 text-lg leading-relaxed">{config.description}</p>
          <ul className="list-disc pl-5 text-left space-y-2">
            {config.skills.map((skill, index) => (
              <li key={index} className="text-lg">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
