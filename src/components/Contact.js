import React from "react";

function Contact() {
  const config = {
    email: "janathananharismenan001@gmail.com",
    phone: "+91 1234567890",
  };

  return (
    <section
      className="flex flex-col bg-primary px-5 py-20 font-hero-Font text-white"
      id="contact"
    >
      <div className="flex flex-col  items-center">
        <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[160px] font-bold">
          Contact
        </h1>
        <p className="pb-2">For more information, please contact me</p>
        <p className="py-2">
          <span className="font-bold">Email : </span> {config.email}
        </p>
        <p className="py-2">
          <span className="font-bold">Phone : </span> {config.phone}
        </p>
      </div>
    </section>
  );
}

export default Contact;
