export default function Contact() {
  return (
    <div>
      {/* HEADING */}
      <div className="mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-purple-400">
          Contact
        </h2>
        <p className="text-gray-400 mt-2 max-w-xl">
          Feel free to reach out for collaboration or opportunities.
        </p>
      </div>

      {/* CONTACT CONTENT */}
      <div className="grid md:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div className="space-y-6">

          {/* Email */}
          <div>
            <p className="text-gray-400 text-sm">Email</p>
            <a
              href="mailto:sandeepbihari2005@gmail.com"
              className="text-lg text-purple-300 hover:text-purple-400 transition"
            >
              sandeepbihari2005@gmail.com
            </a>
          </div>

          {/* GitHub */}
          <div>
            <p className="text-gray-400 text-sm">GitHub</p>
            <a
              href="https://github.com/sandeepbihari2005"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-purple-300 hover:text-purple-400 transition"
            >
              github.com/sandeepbihari2005
            </a>
          </div>

          {/* LinkedIn */}
          <div>
            <p className="text-gray-400 text-sm">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/sandeep-bihari-984b53240"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-purple-300 hover:text-purple-400 transition break-words"
            >
              linkedin.com/in/sandeep-bihari-984b53240
            </a>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-start md:justify-end">
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition text-sm sm:text-base"
          >
            Download Resume
          </a>
        </div>

      </div>
    </div>
  );
}