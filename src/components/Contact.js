import React from "react";

function Contact() {
  const config = {
    email: "janarthanan.21@cse.mrt.ac.lk",
    phone: "+94 75 972 1017",
  };

  return (
    <section
      className="flex flex-col bg-primary px-10 py-20 font-hero-Font text-white items-center"
      id="contact"
    >
      <div className="w-full md:w-1/2 flex flex-col items-center text-center">
        <h1 className="text-4xl border-b-4 border-secondary mb-5 font-bold">
          Contact
        </h1>
        <p className="text-lg mb-5">
          For more information, feel free to reach out to me.
        </p>
        <div className="bg-secondary p-6 rounded-lg shadow-lg w-full">
          <p className="py-3">
            <span className="font-bold">Email: </span>
            <a
              href={`mailto:${config.email}`}
              className="hover:underline hover:text-gray-300"
            >
              {config.email}
            </a>
          </p>
          <p className="py-3">
            <span className="font-bold">Phone: </span>
            <a
              href={`tel:${config.phone}`}
              className="hover:underline hover:text-gray-300"
            >
              {config.phone}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
