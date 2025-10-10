// home.tsx
import { Projects } from "@/components/custom/projects";
import { AchievementsCarousel } from "@/components/custom/achievements";
import { ThemeProvider } from "../components/ui/theme-provider";
import { Team } from "@/components/custom/Team";

function Home() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="w-screen h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        {/* Section 1: Empty section - Header is rendered in App.tsx */}
        <section className="h-screen w-screen snap-start snap-always flex-shrink-0 overflow-hidden">
          {/* Empty - Header overlay handles this */}
        </section>

        {/* Section 2: Team */}
        <section className="h-screen w-screen snap-start snap-always flex-shrink-0 overflow-hidden flex flex-col justify-center">
          <Team />
        </section>

        {/* Section 3: Projects */}
        <section className="h-screen w-screen snap-start snap-always flex-shrink-0 overflow-hidden flex flex-col justify-center">
          <div className="w-full h-full flex flex-col">
            {/* Projects Title Section */}
            
            
            {/* Projects Content */}
            <div className="flex-1 overflow-auto">
              <Projects />
            </div>
          </div>
        </section>

        {/* Section 4: Achievements */}
        <section className="h-screen w-screen snap-start snap-always flex-shrink-0 overflow-hidden flex items-center justify-center bg-black">
          <AchievementsCarousel />
        </section>
      </div>
    </ThemeProvider>
  );
}

export default Home;