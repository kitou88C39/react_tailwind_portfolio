import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/18a7110a-c49a-4193-8731-035c074efacd"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-green-500 text-white">
            Contact
          </p>
          <p className="text-white py-4">
            Submit the from below or shoot me an email
          </p>
        </div>
        <input
          className="text-white p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 text-white"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="text-white p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-green-500 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
