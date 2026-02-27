import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import ParticlesBackground from "../components/ParticlesBackground";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ScrollIndicator from "../components/ScrollIndicator";
import FadeIn from "../components/FadeIn";
import Achievements from "../components/Achievements";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <ParticlesBackground />

      {/* soft dark overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background:
            "radial-gradient(circle at top, rgba(255,255,255,0.04), transparent 60%)",
          zIndex: -1
        }}
      />

      <main
        id="main-scroll"
        className="relative z-10 h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth text-slate-200"
      >
        <Navbar />

        {/* HOME */}
        <section
          id="home"
          className="snap-start min-h-screen flex items-center justify-center"
        >
          <Hero />
          <ScrollIndicator />
        </section>

        {/* ABOUT */}
        <section id="about" className="snap-start min-h-screen">
         <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 pt-20 sm:pt-24">
            <FadeIn>
              <About />
            </FadeIn>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="snap-start min-h-screen">
          <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 pt-16 sm:pt-24">
            <FadeIn>
              <Skills />
            </FadeIn>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="snap-start min-h-screen">
          <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 pt-16 sm:pt-24">
            <FadeIn>
              <Projects />
            </FadeIn>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section id="achievements" className="snap-start min-h-screen">
          <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 pt-16 sm:pt-24">
            <FadeIn>
              <Achievements />
            </FadeIn>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="snap-start min-h-screen">
          <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 pt-16 sm:pt-24">
            <FadeIn>
              <Experience />
            </FadeIn>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact"         className="snap-start min-h-screen">
        <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 pt-16 sm:pt-24">
          <FadeIn>
            <Contact />
          </FadeIn>
        </div>
        </section>
      </main>
    </>
  );
}