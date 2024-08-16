import React from "react";
import HeroImg from "../assets/hero.png";
import { ImFacebook2, ImInstagram, ImLinkedin2 } from "react-icons/im";

function Hero() {
  const config = {
    subtitle: "I'm a Full-stack developer",
    social: {
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
  };
  return (
    <section className="flex flex-col md:flex-row px-5 py-32 bg-primary justify-center">
      <div className="md:w-1/2 flex flex-col">
        <h1 className="text-white text-6xl font-hero-Font">
          Hi, <br />
          I'm Harismenan
          <p className="text-2xl">{config.subtitle}</p>
        </h1>
        <div className="flex py-10">
          <a
            href={config.social.facebook}
            target="_blank"
            className="pr-5 hover:text-white"
          >
            <ImFacebook2 size={40} />
          </a>
          <a
            href={config.social.instagram}
            target="_blank"
            className="pr-5 hover:text-white"
          >
            <ImInstagram size={40} />
          </a>
          <a
            href={config.social.linkedin}
            target="_blank"
            className="hover:text-white"
          >
            <ImLinkedin2 size={40} />
          </a>
        </div>
      </div>
      <img className="md:w-1/3" src={HeroImg} alt="Harismenan" />
    </section>
  );
}

export default Hero;
