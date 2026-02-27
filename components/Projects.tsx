"use client";
export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern personal portfolio built using Next.js and Tailwind CSS with smooth animations and responsive design.",
      tech: ["Next.js", "Tailwind CSS", "TypeScript"]
    },
    {
      title: "Movie Ticket Booking System",
      description:
        "A web-based movie ticket booking system that allows users to browse movies, select seats, and book tickets with a clean and responsive interface.",
      tech: ["Express.js", "Node.js", "MongoDB Altas"]
    }
  ];

  return (
    <div>
      {/* SECTION HEADING */}
      <div className="mb-14">
        <h2 className="text-4xl font-bold tracking-tight text-purple-400">
          Projects
        </h2>
        <p className="text-gray-400 mt-2 max-w-xl">
          A selection of projects that showcase my development skills.
        </p>
      </div>

      {/* PROJECT CARDS */}
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-2xl border border-purple-500/30 bg-white/5 backdrop-blur-md p-7 hover:border-purple-500 transition hover:shadow-lg hover:shadow-purple-500/20"
          >
            <h3 className="text-xl font-semibold mb-3">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-5 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-sm px-3 py-1 rounded-full bg-black/40 border border-gray-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}