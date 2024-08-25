import React from "react";
import HeroImg from "../assets/image (1).png";
import { ImFacebook2, ImInstagram, ImLinkedin2 } from "react-icons/im";

function Hero() {
  const config = {
    subtitle: "I'm a Full-stack Developer",
    social: {
      facebook: "https://www.facebook.com/kopi.menan",
      instagram: "https://www.instagram.com/hariharis6400/",
      linkedin:
        "https://www.linkedin.com/in/janarthanan-harismenan-a70762218?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  };

  return (
    <section className="flex flex-col md:flex-row px-5 py-32 bg-primary justify-center items-center text-center md:text-left">
      <div className="md:w-1/2 flex flex-col justify-center">
        <h1 className="text-white text-6xl font-hero-Font leading-tight">
          Hi, <br />
          I'm <span className="text-black">Harismenan</span>
          <p className="text-2xl mt-2">{config.subtitle}</p>
        </h1>
        <div className="flex justify-center md:justify-start py-10">
          <a
            href={config.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="pr-5 hover:text-secondary transition-colors duration-300"
          >
            <ImFacebook2 size={40} />
          </a>
          <a
            href={config.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="pr-5 hover:text-secondary transition-colors duration-300"
          >
            <ImInstagram size={40} />
          </a>
          <a
            href={config.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition-colors duration-300"
          >
            <ImLinkedin2 size={40} />
          </a>
        </div>
      </div>
      <img
        className="md:w-1/3 mx-auto md:ml-10 mt-10 md:mt-0 rounded-lg shadow-lg"
        src={HeroImg}
        alt="Harismenan"
      />
    </section>
  );
}

export default Hero;
