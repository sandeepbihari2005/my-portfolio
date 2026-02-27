import Image from "next/image";

export default function Hero() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="grid md:grid-cols-2 items-center gap-12 w-full max-w-6xl px-6">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-purple-400 leading-tight">
            Sandeep Kumar Bihari
          </h1>

          <h2 className="mt-4 text-xl sm:text-2xl text-cyan-400">
            Web Developer & Cybersecurity Enthusiast
          </h2>

          <p className="mt-4 max-w-xl mx-auto md:mx-0 text-gray-400 text-sm sm:text-base">
            B.Tech student passionate about building modern, secure, and
            user-friendly web applications with a strong interest in
            cybersecurity.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm sm:text-base transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-gray-600 hover:border-purple-400 rounded-lg text-sm sm:text-base transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60">
            <div className="absolute inset-0 rounded-full bg-purple-600 blur-3xl opacity-40"></div>

            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl float-animation">
              <Image
                src="/profile.jpg"
                alt="Sandeep Kumar Bihari"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}