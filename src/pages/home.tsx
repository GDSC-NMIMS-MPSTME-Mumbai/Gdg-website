import { Projects } from "@/components/custom/projects";
import { AchievementsCarousel } from "@/components/custom/achievements";
import { Team } from "@/components/custom/Team";

function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <section className="h-screen snap-start snap-always hero-section">
        {/* Empty section - Header is rendered in App.tsx */}
      </section>

      {/* Section 2: Meet Our Team */}
      <Team />

      {/* Section 3: Projects */}
      <section className="min-h-screen snap-start snap-always flex flex-col justify-center">
        <Projects />
      </section>

      {/* Section 4: Achievements */}
      <section className="h-screen snap-start snap-always flex items-center justify-center bg-black">
        <div className="w-full">
          <AchievementsCarousel />
        </div>
      </section>
    </div>
  );
}

export default Home;
