"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Web Development Intern",
      company: "RSP",
      duration: "30 Days Internship",
      description:
        "Completed a 30-day internship program focused on web development. Worked on frontend fundamentals, responsive design, and basic project implementation."
    }
  ];

  return (
    <div>
      {/* Section Heading */}
      <div className="mb-14">
        <h2 className="text-4xl font-bold tracking-tight text-purple-400">
          Experience
        </h2>
        
        <p className="text-gray-400 mt-2 max-w-xl">
          Professional training and internship experience.
        </p>
      </div>

      {/* Experience Cards */}
      <motion.div
        className="space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.2 }
          }
        }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-gray-700 bg-white/5 backdrop-blur-md p-7 hover:border-purple-500 transition"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-semibold">
                {exp.role}
              </h3>
              <span className="text-sm text-gray-400">
                {exp.duration}
              </span>
            </div>

            <p className="text-purple-400 mb-3">
              {exp.company}
            </p>

            <p className="text-gray-400 leading-relaxed">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}