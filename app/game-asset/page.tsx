export default function GameAssetPage() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="relative h-[80vh] w-full">

        {/* Background Image */}
        <img
          src="/gamedesign.jpg"
          alt="uiux hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-full px-10 md:px-20">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Game Asset Design<br />
            <span className="italic font-light">Creating stylized visual worlds</span>
          </h1>

          <p className="mt-6 max-w-xl text-gray-300">
            Designing intuitive interfaces with structured visual hierarchy,
            clarity, and emotional depth.
          </p>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-24 px-10 md:px-20">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold mb-6">
            Crafting Meaningful Interfaces
          </h2>
          <p className="text-gray-400 leading-relaxed">
            My approach to UI/UX focuses on balancing aesthetics and usability.
            I prioritize clarity, accessibility, and seamless interaction flow
            while maintaining a refined visual identity.
          </p>
        </div>
      </section>

      {/* PROJECT LIST */}
      <section className="pb-32 px-10 md:px-20">
        <div className="grid md:grid-cols-2 gap-10">

          {/* PROJECT CARD */}
          <div className="group border border-white/10 rounded-3xl overflow-hidden hover:border-white/30 transition">
            <div className="relative h-72 overflow-hidden">
              <img
                src="/ui-project1.jpg"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>

            <div className="p-8">
              <h3 className="text-xl font-semibold mb-4">
                Restaurant Ordering System
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Designed a clean dashboard interface focused on clarity and
                efficiency for multi-role users.
              </p>

              <div className="mt-6 text-sm text-gray-300 group-hover:translate-x-2 transition">
                View Case Study →
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
