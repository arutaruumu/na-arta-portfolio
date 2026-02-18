import TextType from "../components/TextType";

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
            Game Asset Design
            <br />
            <TextType
              className="italic font-light"
              text={[
                "Create stylized assets for immersive digital worlds",
                "Artistic detail meets technical precision",
                "Every asset is crafted for both beauty and integration",
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

      {/* WORK PROCESS */}
      <section className="py-24 px-10 md:px-20 bg-zinc-950">
        <div className="mb-16">
          <p className="text-sm text-gray-500 mb-2">(Process)</p>
          <h2 className="text-3xl font-semibold">Design Approach</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <span className="text-gray-600 text-sm">01</span>
            <h3 className="text-xl font-semibold mt-4 mb-4">
              Concept & Moodboard
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Understanding user behavior, pain points, and interaction context.
            </p>
          </div>

          <div>
            <span className="text-gray-600 text-sm">02</span>
            <h3 className="text-xl font-semibold mt-4 mb-4">
              Sketch & Modeling
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building structured layouts and consistent design systems.
            </p>
          </div>

          <div>
            <span className="text-gray-600 text-sm">03</span>
            <h3 className="text-xl font-semibold mt-4 mb-4">
              Render & Integration
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Polishing typography, spacing, and micro-interactions.
            </p>
          </div>
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
