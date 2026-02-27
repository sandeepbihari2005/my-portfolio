export default function Skills() {
  const skillGroups = [
    {
      title: "Frontend Development",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"]
    },
    {
      title: "Programming Languages",
      skills: ["Python", "C","Java"]
    },
    {
      title: "Backend & Tools",
      skills: ["Node.js", "Git", "GitHub"]
    },
    {
      title: "Database",
      skills: ["MongoDB", "MYSQL"]
    }
  ];

  return (
    <div>
      {/* HEADING */}
      <div className="mb-14">
        <h2 className="text-4xl font-bold text-purple-400">
          Skills
        </h2>
        <p className="text-gray-400 mt-2 max-w-xl">
          Technologies and concepts I use to build modern and secure applications.
        </p>
      </div>

      {/* SKILL GROUPS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {skillGroups.map((group, index) => (
          <div
            key={index}
            className="rounded-2xl border border-purple-500/30 bg-white/5 backdrop-blur-md p-6 hover:border-purple-500 transition"
          >
            <h3 className="text-xl font-semibold text-purple-300 mb-4">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 text-sm rounded-full bg-black/40 border border-gray-700 text-gray-200 hover:text-purple-400 hover:border-purple-500 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}