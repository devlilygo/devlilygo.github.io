export const Header = () => (
  <header className="h-24 w-full py-6 px-8 flex items-start justify-between">
    <h1 className="text-lg font-normal font-fira text-sky-300">
      LILY GO
      <br />
      IS A FRONTEND DEVELOPER
      <br />
    </h1>
    <nav className="flex gap-4 text-lg text-sky-300 font-normal font-fira">
      <a href="#linkedin" target="_blank" className="hover:underline">
        LINKEDIN
      </a>
      <a
        href="/resume_lilygo_202507.pdf"
        target="_blank"
        className="hover:underline"
      >
        RESUME
      </a>
      <a
        href="/coverletter_lilygo_202507.pdf"
        target="_blank"
        className="hover:underline"
      >
        COVERLETTER
      </a>
      <a href="#contact" className="hover:underline">
        CONTACT
      </a>
    </nav>
  </header>
);
