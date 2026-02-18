import Image from "next/image";
import Navbar from "./components/Navbar";
import TextType from "./components/TextType";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      {/* <nav className="fixed top-0 w-full z-50 px-10 py-4 flex justify-between items-center backdrop-blur-md bg-black/30 border-b border-white/10">
        <h1 className="font-bold tracking-widest">NA ARTA</h1>

        <div className="hidden md:flex gap-8 text-sm">
          <a href="#about" className="hover:text-gray-300">
            About
          </a>
          <a href="#projects" className="hover:text-gray-300">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-300">
            Contact
          </a>
        </div>
      </nav> */}

      {/* HERO */}
      <section className="relative h-screen w-full">
        {/* Background Image */}
        <img
          src="/home.jpg"
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-full px-10 md:px-20">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Where ideas grow <br />
            <TextType
              className="italic font-light"
              text={[
                "into meaningful systems.",
                "beyond imagination.",
                "with clarity and purpose.",
                "in every detail.",
                "into digital experiences.",
                "through logic and design.",
                "into scalable innovation.",
                "between code and creativity.",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              deletingSpeed={50}
              variableSpeedEnabled={false}
              variableSpeedMin={60}
              variableSpeedMax={120}
              cursorBlinkDuration={0.5}
            />
          </h1>

          <p className="mt-6 max-w-lg text-gray-300">
            Developer, Designer, and Security Enthusiast building meaningful
            digital systems.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition">
              View Projects
            </button>

            <button className="border border-white/40 px-6 py-3 rounded-full backdrop-blur-md hover:bg-white/10 transition">
              Contact Me
            </button>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 px-10 md:px-20 bg-black">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-sm text-gray-500 mb-4">(01)</p>
            <h2 className="text-3xl font-semibold mb-6">About Me</h2>
            <p className="text-gray-400 leading-relaxed">
              I build digital systems combining design precision, clean
              architecture, and security awareness.
            </p>
          </div>

          <div className="text-3xl md:text-4xl font-light leading-relaxed text-gray-200">
            Creating immersive interfaces and robust systems that balance
            aesthetics and performance.
          </div>
        </div>
      </section>

      {/* CORE EXPERTISE */}
      <section className="py-28 px-10 md:px-20 bg-black">
        <div className="mb-16">
          <p className="text-sm text-gray-500 mb-2">(02)</p>
          <h2 className="text-3xl font-semibold">Core Expertise</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* UI/UX */}
          <a
            href="/uiux"
            className="group border border-white/10 rounded-3xl p-8 hover:border-white/30 transition backdrop-blur-sm bg-white/5"
          >
            <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting intuitive interfaces with structured visual hierarchy and
              user-centered thinking.
            </p>
            <div className="mt-6 text-sm text-gray-300 group-hover:translate-x-2 transition">
              Explore →
            </div>
          </a>

          {/* Frontend */}
          <a
            href="/frontend"
            className="group border border-white/10 rounded-3xl p-8 hover:border-white/30 transition backdrop-blur-sm bg-white/5"
          >
            <h3 className="text-xl font-semibold mb-4">Frontend Engineering</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building scalable web systems with performance, animation, and
              clean architecture.
            </p>
            <div className="mt-6 text-sm text-gray-300 group-hover:translate-x-2 transition">
              Explore →
            </div>
          </a>

          {/* Game Asset */}
          <a
            href="/game-asset"
            className="group border border-white/10 rounded-3xl p-8 hover:border-white/30 transition backdrop-blur-sm bg-white/5"
          >
            <h3 className="text-xl font-semibold mb-4">Game Asset Design</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Creating stylized 2D/3D assets, environments, and immersive visual
              concepts.
            </p>
            <div className="mt-6 text-sm text-gray-300 group-hover:translate-x-2 transition">
              Explore →
            </div>
          </a>

          {/* Security */}
          <a
            href="/security"
            className="group border border-white/10 rounded-3xl p-8 hover:border-white/30 transition backdrop-blur-sm bg-white/5"
          >
            <h3 className="text-xl font-semibold mb-4">Security & CTF</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Exploring vulnerabilities, reverse engineering logic, and building
              secure systems.
            </p>
            <div className="mt-6 text-sm text-gray-300 group-hover:translate-x-2 transition">
              Explore →
            </div>
          </a>
        </div>
      </section>

      <section id="projects" className="py-24 px-10 md:px-20 bg-black">
        <div className="flex justify-between items-center mb-12">
          <div>
            <p className="text-sm text-gray-500 mb-2">(03)</p>
            <h2 className="text-3xl font-semibold">Featured Projects</h2>
          </div>

          <button className="border border-white/30 px-5 py-2 rounded-full text-sm hover:bg-white/10 transition">
            View All
          </button>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {/* CARD 1 */}
          <div className="relative min-w-[300px] h-[420px] rounded-3xl overflow-hidden group">
            <img
              src="/kalana.png"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-xl font-semibold">Kalana Pantry</h3>
              <p className="text-gray-300 text-sm mt-2">
                Multi-role inventory system
              </p>

              <button className="mt-4 border border-white/40 px-4 py-2 rounded-full text-sm backdrop-blur-md hover:bg-white/10 transition">
                View Details
              </button>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="relative min-w-[300px] h-[420px] rounded-3xl overflow-hidden group">
            <img
              src="/project2.jpg"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-xl font-semibold">Cyber CTF Platform</h3>
              <p className="text-gray-300 text-sm mt-2">
                Hidden flag web challenge
              </p>

              <button className="mt-4 border border-white/40 px-4 py-2 rounded-full text-sm backdrop-blur-md hover:bg-white/10 transition">
                View Details
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* WORK PROCESS */}
      <section className="py-28 px-10 md:px-20 bg-zinc-950">
        <div className="mb-16">
          <p className="text-sm text-gray-500 mb-2">(04)</p>
          <h2 className="text-3xl font-semibold">Work Process</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <span className="text-gray-600 text-sm">01</span>
            <h3 className="text-xl font-semibold mt-4 mb-4">
              Research & Strategy
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Understanding user needs, defining system architecture, and
              planning execution flow.
            </p>
          </div>

          <div>
            <span className="text-gray-600 text-sm">02</span>
            <h3 className="text-xl font-semibold mt-4 mb-4">
              Design & Development
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Translating ideas into clean interfaces and efficient, scalable
              code.
            </p>
          </div>

          <div>
            <span className="text-gray-600 text-sm">03</span>
            <h3 className="text-xl font-semibold mt-4 mb-4">
              Optimize & Secure
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Performance tuning, testing edge cases, and ensuring system
              robustness.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 px-10 md:px-20 bg-black text-center border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-light leading-relaxed mb-6">
          Let’s build something <span className="italic">meaningful</span>{" "}
          together.
        </h2>

        <p className="text-gray-400 mb-10">
          Available for collaboration, freelance projects, and creative
          partnerships.
        </p>

        <a
          href="#contact"
          className="inline-block bg-white text-black px-8 py-4 rounded-full font-medium hover:scale-105 transition"
        >
          Get In Touch
        </a>
      </section>

      {/* FOOTER */}
      <footer className="px-10 md:px-20 py-16 bg-zinc-950 border-t border-white/10">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Na Arta</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Developer & Designer blending aesthetics, engineering, and
              security into meaningful digital systems.
            </p>
          </div>

          {/* Middle */}
          <div>
            <h4 className="text-sm text-gray-500 mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right */}
          <div>
            <h4 className="text-sm text-gray-500 mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Email: nadassnadj@gmail.com</li>
              <li>GitHub: arutaruumu</li>
              <li>LinkedIn: </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center text-gray-600 text-xs">
          © {new Date().getFullYear()} Na Arta. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
