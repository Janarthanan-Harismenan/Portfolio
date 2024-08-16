import React from "react";
import AboutImg from "../assets/about.png";

function About() {
  const config = {
    description:
      "Hi, My name is Harismenan. I am a Full stack developer. I built beautiful Webistes with React.js and Tailwind CSS",
    skills: [
      "Frontend skills like React.js, Tailwind CSS, CSS3",
      "Backend skills like Node.js, Express.js, MongoDB, and Mongoose",
    ],
  };
  return (
    <section
      className="flex flex-col md:flex-row bg-secondary px-5 py-5"
      id="about"
    >
      <div className="md:w-1/2 py-5">
        <img src={AboutImg} />
      </div>
      <div className="md:w-1/2 flex justify-center font-hero-Font text-white">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl border-b-4 border-primary text-white mb-5 w-[200px] font-bold">
            "About Me"
          </h1>
          <p className="pb-3">{config.description}</p>
          <ul className="list-disc pl-5">
            {config.skills.map((skill) => (
              <li>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
      <div></div>
    </section>
  );
}

export default About;
