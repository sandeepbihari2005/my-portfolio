"use client";

export default function Achievements() {
  const achievements = [
    {
      title: "Cybersecurity Workshop",
      org: "IIT Kanpur",
      date: "2024",
      score: "Certified",
      description:
        "Completed a hands-on cybersecurity workshop conducted by IIT Kanpur, covering fundamentals of cyber threats, vulnerabilities, and basic security practices."
    },
    {
      title: "Digital Literacy & Cyber Safety",
      org: "YuWaah! / UNICEF",
      date: "February 2026",
      score: "92.5%",
      description:
        "Gained strong knowledge of cybersecurity awareness, online privacy, digital safety, and responsible internet usage."
    },
    {
      title: "Employability Skills Foundation Course",
      org: "YuWaah! / Wadhwani Foundation",
      date: "February 2026",
      score: "90%",
      description:
        "Developed professional communication, teamwork, problem-solving, and workplace readiness skills."
    },
    {
      title: "Design Fundamentals with AI – Adobe",
      org: "Adobe / YuWaah!",
      date: "February 2026",
      score: "97.5%",
      description:
        "Learned modern design principles and AI-assisted tools to improve user experience and digital product design."
    }
  ];

  return (
    <section className="w-full">
      {/* Heading */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-purple-400">
          Achievements & Certifications
        </h2>
        <p className="text-gray-400 mt-2 max-w-xl">
          Certifications and workshops highlighting my interest in cybersecurity,
          web development, AI, and professional growth.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border border-purple-500/30 bg-white/5 backdrop-blur-md p-6 hover:border-purple-500 transition hover:shadow-lg hover:shadow-purple-500/20"
          >
            <h3 className="text-xl font-semibold mb-2">
              {item.title}
            </h3>

            <p className="text-sm text-purple-400 mb-1">
              {item.org}
            </p>

            <p className="text-sm text-gray-400 mb-3">
              {item.date} • {item.score}
            </p>

            <p className="text-gray-300 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}