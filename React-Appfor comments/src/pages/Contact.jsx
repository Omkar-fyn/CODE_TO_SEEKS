import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center items-start min-h-screen pt-32 px-4 contacts ">
      <div className="max-w-2xl w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-8 text-white">

        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-6 text-yellow-400">
          Contact
        </h1>

        {/* Intro text */}
        <p className="text-center mb-8 text-lg">
          Feel free to reach out for collaborations, feedback, or opportunities.
        </p>

        {/* Contact details */}
        <div className="space-y-4 text-center">

          <p>
            <span className="font-semibold text-yellow-400">Email:</span>{" "}
            omkarpukale@gmail.com
          </p>

          <p>
            <span className="font-semibold text-yellow-400">GitHub:</span>{" "}
            https://github.com/Omkar-fyn
          </p>

          <p>
            <span className="font-semibold text-yellow-400">LinkedIn:</span>{" "}
            https://www.linkedin.com/in/omkar-bharath-pukale-6a933b296/
          </p>

        </div>

        {/* Footer note */}
        <p className="text-sm text-gray-300 text-center mt-8">
          I usually respond within 24–48 hours.
        </p>

      </div>
    </div>
  );
};

export default Contact;
