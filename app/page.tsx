import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <nav className="fixed top-0 w-full z-50 px-10 py-4 flex justify-between items-center backdrop-blur-md bg-black/30 border-b border-white/10">
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
      </nav>

      {/* HERO */}
      <section className="relative h-screen w-full">
        {/* Background Image */}
        <img
          src="/hero.jpg"
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-full px-10 md:px-20">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Where ideas grow <br />
            <span className="italic font-light">in every detail.</span>
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
        I build digital systems combining design precision,
        clean architecture, and security awareness.
      </p>
    </div>

    <div className="text-3xl md:text-4xl font-light leading-relaxed text-gray-200">
      Creating immersive interfaces and robust systems
      that balance aesthetics and performance.
    </div>

  </div>
</section>

    </main>
  );
}
