import React from "react";
import ResumeImage from "../assets/Resume.jpg";

function Resume() {
  const config = {
    link: "https://drive.usercontent.google.com/u/0/uc?id=1fk_O_NQhoq2GN1LKvklVL-ZMnsHzScqY&export=download",
  };

  return (
    <section
      className="flex flex-col md:flex-row bg-secondary px-10 py-20 justify-center items-center"
      id="resume"
    >
      <div className="flex justify-center md:w-1/3 py-5 pr-0 md:pr-10">
        <img
          src={ResumeImage}
          alt="Resume Preview"
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>
      <div className="md:w-1/2 flex justify-center font-hero-Font text-white">
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-4xl border-b-4 border-primary text-white mb-5 w-fit font-bold">
            Resume
          </h1>
          <p className="text-lg leading-relaxed mb-5">
            Interested in my professional background? Feel free to download my
            resume to learn more about my experience and skills.
          </p>
          <a
            href={config.link}
            target="_blank"
            className="bg-primary text-white font-bold py-2 px-6 rounded-md hover:bg-white hover:text-primary transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
