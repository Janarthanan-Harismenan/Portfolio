import React from "react";
import ResumeImage from "../assets/Resume.jpg";

function Resume() {
  const config = {
    link: "https://getsamplefiles.com/download/pdf/sample-1.pdf",
  };
  return (
    <section
      className="flex flex-col md:flex-row bg-secondary px-5 py-5 justify-center"
      id="resume"
    >
      <div className="flex justify-center md:w-1/4 py-5 pr-5">
        <img src={ResumeImage} />
      </div>
      <div className="md:w-1/2 flex justify-center font-hero-Font text-white">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl border-b-4 border-primary text-white mb-5 w-[130px] font-bold">
            Resume
          </h1>
          <p className="pb-3">
            You can view my resume{" "}
            <a href={config.link} className="btn">
              Download
            </a>
          </p>
        </div>
      </div>
      <div></div>
    </section>
  );
}

export default Resume;
