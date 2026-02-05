import React from "react";

const About = () => {
  return (
    <div className="flex justify-center items-start min-h-screen pt-32 px-4 about ">
      <div className="max-w-3xl w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-8 text-white">

        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-6 text-yellow-400">
          About CODE_TO_SEEKS
        </h1>

        {/* Intro */}
        <p className="mb-4 text-lg leading-relaxed">
          CODE_TO_SEEKS is a simple full-stack web application built using the
          <span className="font-semibold"> MERN stack </span>
          (MongoDB, Express, React, and Node.js).
        </p>

        <p className="mb-6 leading-relaxed">
          The goal of this project is to practice user authentication,
          protected routes, and real-time user interactions through a
          comment system.
        </p>

        {/* Features */}
        <h2 className="text-xl font-semibold mb-3 text-yellow-400">
          Features
        </h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>User registration and login with JWT authentication</li>
          <li>Protected API routes</li>
          <li>Comment posting and fetching</li>
          <li>Clean glass-style UI using Tailwind CSS</li>
        </ul>

        {/* Learning */}
        <h2 className="text-xl font-semibold mb-3 text-yellow-400">
          What I Learned
        </h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>REST API design</li>
          <li>Authentication and authorization</li>
          <li>Frontend–backend integration</li>
          <li>MongoDB data modeling</li>
        </ul>

        {/* Footer text */}
        <p className="text-sm text-gray-300 text-center">
          More features and improvements will be added in future versions.
        </p>
      </div>
    </div>
  );
};

export default About;
