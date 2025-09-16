import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Projects } from "@/components/custom/projects"
import { AchievementsCarousel } from "@/components/custom/achievements"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ThemeProvider } from "../components/ui/theme-provider"

function Home() {
  return (
    <ThemeProvider defaultTheme="dark">

      <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">

        <section className="h-screen snap-start snap-always">
          {/* Empty section - Header is rendered in App.tsx */}
        </section>

        {/* Section 2: Meet Our Team */}
        <section className="h-screen snap-start snap-always flex flex-col items-center justify-center bg-black from-gray-900 to-black px-4">
          <div className="w-full max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center text-white">
              Meet Our Team
            </h1>
            
            <div className="flex flex-col items-center space-y-8">
              <Tabs defaultValue="2025" className="w-full flex flex-col items-center">
                <TabsList className="mb-6">
                  <TabsTrigger value="2025">2025</TabsTrigger>
                  <TabsTrigger value="2024">2024</TabsTrigger>
                </TabsList>
                
                <TabsContent value="2025" className="w-full">
                  <Tabs defaultValue="Tech" className="w-full flex flex-col items-center">
                    <TabsList className="mb-6">
                      <TabsTrigger value="Tech">Tech</TabsTrigger>
                      <TabsTrigger value="Non-Tech">Non-Tech</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="Tech" className="flex justify-center">
                      <Select>
                        <SelectTrigger className="w-48">
                          <SelectValue placeholder="Select Department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="web">WEB</SelectItem>
                          <SelectItem value="app">APP</SelectItem>
                          <SelectItem value="cyber">CYBER SEC</SelectItem>
                          <SelectItem value="ai">AI/ML</SelectItem>
                          <SelectItem value="design">DESIGN</SelectItem>
                        </SelectContent>
                      </Select>
                    </TabsContent>
                    
                    <TabsContent value="Non-Tech" className="text-center text-white">
                      <div className="space-y-4">
                        <p className="text-lg">Non-Technical Team Members</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          <Button variant="outline">Marketing</Button>
                          <Button variant="outline">Events</Button>
                          <Button variant="outline">Content</Button>
                          <Button variant="outline">Social Media</Button>
                          <Button variant="outline">Operations</Button>
                          <Button variant="outline">Finance</Button>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </TabsContent>
                
                <TabsContent value="2024" className="text-center text-white">
                  <p className="text-lg">2024 Team Alumni</p>
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Placeholder for 2024 team members */}
                    <div className="p-4 bg-white/10 rounded-lg backdrop-blur">
                      <p>Former Team Members</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Section 3: Projects */}
        <section className="min-h-screen snap-start snap-always flex flex-col justify-center">
          <div className="py-12">
            <Projects />
          </div>
        </section>

        {/* Section 4: Achievements */}
        <section className="h-screen snap-start snap-always flex items-center justify-center bg-black">
          <div className="w-full">
            <AchievementsCarousel />
          </div>
        </section>
        
      </div>
    </ThemeProvider>
  )
}

export default Home