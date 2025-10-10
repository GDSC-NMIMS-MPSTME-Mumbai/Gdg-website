// pages/home.tsx
import { Projects } from "@/components/custom/projects";
import { AchievementsCarousel } from "@/components/custom/achievements";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Team } from "@/components/custom/Team";

function Home() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="w-screen h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        {/* Section 1: Empty section - Header rendered in App.tsx */}
        <section className="h-screen w-screen snap-start snap-always flex-shrink-0 overflow-hidden">
          {/* empty placeholder */}
        </section>

        {/* Section 2: Team - allow overflow so scaled cards can escape */}
        <section className="h-screen w-screen snap-start snap-always flex-shrink-0 overflow-visible flex flex-col justify-center z-20">
          <Team />
        </section>

        {/* Section 3: Projects - keep lower z so Team can overlap when needed */}
        <section className="h-screen w-screen snap-start snap-always flex-shrink-0 overflow-hidden flex flex-col justify-center z-10">
          <div className="w-full h-full flex flex-col">
            <div className="flex-1 overflow-auto">
              <Projects />
            </div>
          </div>
        </section>

        {/* Section 4: Achievements */}
        <section className="h-screen w-screen snap-start snap-always flex-shrink-0 overflow-hidden flex items-center justify-center bg-black z-10">
          <AchievementsCarousel />
        </section>
      </div>
    </ThemeProvider>
  );
}

export default Home;
