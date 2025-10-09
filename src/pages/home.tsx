import { Projects } from "@/components/custom/projects";
import { AchievementsCarousel } from "@/components/custom/achievements";
import { ThemeProvider } from "../components/ui/theme-provider";
import { Team } from "@/components/custom/Team";

function Home() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <section className="h-screen snap-start snap-always">
          {/* Empty section - Header is rendered in App.tsx */}
        </section>

        {/* Section 2: Team */}
        <section className="min-h-screen snap-start snap-always flex flex-col justify-center">
          <div className=" w-full">
            <Team />
          </div>
        </section>

        {/* Section 2: Projects */}
        <section className="min-h-screen snap-start snap-always flex flex-col justify-center">
          <div className="">
            <Projects />
          </div>
        </section>

        {/* Section 3: Achievements */}
        <section className="h-screen snap-start snap-always flex items-center justify-center bg-black">
          <div className="w-full">
            <AchievementsCarousel />
          </div>
        </section>
      </div>
    </ThemeProvider>
  );
}

export default Home;