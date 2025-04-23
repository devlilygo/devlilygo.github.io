"use client";

import { Github, Linkedin } from "lucide-react";
import { AccentUnderline } from "../atoms/AccentUnderline";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-[#F8FAFF] text-[#3E4A5C] font-fira"
    >
      <div
        className="absolute inset-0 bg-[url('/contacts-bg.jpg')] bg-no-repeat bg-center bg-cover opacity-80 z-0 pointer-events-none"
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-white/10 z-10 pointer-events-none" />

      <div className="relative z-20 flex flex-col justify-center items-center text-center">
        <h2 className="text-8xl font-bodoni mb-10 italic">
          <span className="font-ballet not-italic text-9xl">C</span>ontact
        </h2>

        <p className="text-lg max-w-xl mb-10">
          Feel free to reach out if you&apos;re interested in working together
          or just want to say hi 👋
        </p>

        <a
          href="mailto:devlilygo@google.com"
          className="text-xl font-semibold underline underline-offset-4 hover:text-blue-600 transition"
        >
          <AccentUnderline>devlilygo@google.com</AccentUnderline>
        </a>

        <div className="flex gap-6 mt-10">
          <a
            href="https://github.com/devlilygo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={28} className="hover:text-gray-800 transition" />
          </a>
          <a
            href="https://linkedin.com/in/lily-go-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={28} className="hover:text-[#0A66C2] transition" />
          </a>
        </div>
      </div>
    </section>
  );
};
