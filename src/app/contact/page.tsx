'use client';

import EmailIcon from '../../images/email-svgrepo-com.svg';
import GithubIcon from '../../images/github-svgrepo-com.svg';
import LinkedInIcon from '../../images/brand-linkedin-sq-svgrepo-com.svg';

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full h-full p-4 justify-center items-center">
      <div className="mainGraphic absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[-100]"></div>
      <h1 className="text-2xl font-[LuloCleanOneBold] mb-4">Contact Me</h1>
      <p className="mb-4 text-xs font-[LuloCleanW01One] p-4 text-nowrap">
        Feel free to reach out to me through the following platforms
      </p>

      <div className="flex w-96 justify-evenly items-center">
        {/* SVG with Tooltip */}
        <div className="group relative">
          <a
            href="mailto:devlilygo@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon className="h-20 w-20 hover:scale-125 transition-all duration-300 ease-in-out" />

            {/* Tooltip Content */}
            <div className=" font-[BeautiqueDisplayCondensed] italic absolute left-1/2 -translate-x-1/2 top-28 bg-gray-800 text-white text-nowrap text-sm rounded py-1 px-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              Send Email To Lily!
              {/* Arrow */}
              <div className="absolute left-1/2 -translate-x-1/2 translate-y-2 bottom-full w-3 h-3 bg-gray-800 rotate-45"></div>
            </div>
          </a>
        </div>

        {/* SVG with Tooltip */}
        <div className="group relative">
          <a
            href="https://github.com/devlilygo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className="h-20 w-20 hover:scale-125 transition-all duration-300 ease-in-out" />

            {/* Tooltip Content */}
            <div className=" font-[BeautiqueDisplayCondensed] italic absolute left-1/2 -translate-x-1/2 top-28 bg-gray-800 text-white text-nowrap text-sm rounded py-1 px-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              Go To Lily&apos;s Github!
              {/* Arrow */}
              <div className="absolute left-1/2 -translate-x-1/2 translate-y-2 bottom-full w-3 h-3 bg-gray-800 rotate-45"></div>
            </div>
          </a>
        </div>

        {/* SVG with Tooltip */}
        <div className="group relative">
          <a
            href="https://linkedin.com/in/lily-go-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="h-20 w-20 hover:scale-125 transition-all duration-300 ease-in-out" />

            {/* Tooltip Content */}
            <div className=" font-[BeautiqueDisplayCondensed] italic absolute left-1/2 -translate-x-1/2 top-28 bg-gray-800 text-white text-nowrap text-sm rounded py-1 px-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              Go To Lily&apos;s LinkedIn!
              {/* Arrow */}
              <div className="absolute left-1/2 -translate-x-1/2 translate-y-2 bottom-full w-3 h-3 bg-gray-800 rotate-45"></div>
            </div>
          </a>
        </div>
      </div>
      {/* <ul className="list-disc list-inside space-y-2">
        <li>
          <a
            href="mailto:devlilygo@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon className="h-24 w-24" />
          </a>
        </li>
        <li>
          <span className="font-medium">GitHub:</span>
          <a
            href="https://github.com/devlilygo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            https://github.com/devlilygo
          </a>
        </li>
        <li>
          <span className="font-medium">LinkedIn:</span>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            https://linkedin.com/in/yourusername
          </a>
        </li>
      </ul> */}
    </div>
  );
}
