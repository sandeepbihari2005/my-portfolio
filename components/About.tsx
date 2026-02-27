export default function About() {
  return (
    <div className="max-w-4xl">
      {/* HEADING */}
      <h2 className="text-4xl font-bold mb-8 text-purple-400">
        About Me
      </h2>
      
      {/* INTRO */}
      <p className="text-gray-300 text-lg leading-relaxed mb-6">
        I am a B.Tech undergraduate student with a strong interest in
        web development, software engineering, and cybersecurity.
        I enjoy building clean, responsive, and user-friendly web
        applications using modern technologies.
      </p>

      {/* DETAILS */}
      <p className="text-gray-400 leading-relaxed mb-6">
        I am particularly interested in cybersecurity and enjoy learning
        about system security, vulnerabilities, and safe coding practices.
        Along with academics, I actively participate in sports and
        competitive events, which has helped me develop discipline,
        consistency, and teamwork skills.
      </p>

      {/* HIGHLIGHTS */}
      <div className="mt-8 space-y-4">
        <div className="flex items-start gap-3">
          <span className="text-purple-500 mt-1">▹</span>
          <p className="text-gray-300">
            B.Tech student focused on web development and cybersecurity
          </p>
        </div>

        <div className="flex items-start gap-3">
          <span className="text-purple-500 mt-1">▹</span>
          <p className="text-gray-300">
            Experience with React, Next.js, Tailwind CSS, and JavaScript
          </p>
        </div>

        <div className="flex items-start gap-3">
          <span className="text-purple-500 mt-1">▹</span>
          <p className="text-gray-300">
            Strong interest in cybersecurity, ethical hacking, and secure systems
          </p>
        </div>

        <div className="flex items-start gap-3">
          <span className="text-purple-500 mt-1">▹</span>
          <p className="text-gray-300">
            Active sports person with achievements at state and zonal level
          </p>
        </div>
      </div>
    </div>
  );
}