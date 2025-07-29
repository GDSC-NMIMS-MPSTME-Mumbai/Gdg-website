import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Projects } from "@/components/custom/projects"
import { AchievementsCarousel } from "@/components/custom/achievements"
import { useState } from "react"
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
      <h1 className="text-4xl font-bold mb-4 w-screen text-center">Meet Our Team</h1>

      <Tabs defaultValue="2025" className="w-screen flex items-center justify-center">
      <TabsList>
        <TabsTrigger value="2025">2025</TabsTrigger>
        <TabsTrigger value="2024">2024</TabsTrigger>
      </TabsList>
      <TabsContent value="2025">
        <Tabs defaultValue="Tech" className="w-screen flex items-center justify-center">
          <TabsList>
            <TabsTrigger value="Tech">Tech</TabsTrigger>
            <TabsTrigger value="Non-Tech">Non-Tech</TabsTrigger>
          </TabsList>
          <TabsContent value="Tech">
            <Select>
              <SelectTrigger className="">
                <SelectValue placeholder="Dept" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">WEB</SelectItem>
                <SelectItem value="dark">APP</SelectItem>
                <SelectItem value="system">CYBER SEC</SelectItem>
              </SelectContent>
            </Select>
          </TabsContent>
          <TabsContent value="Non-Tech">Change your password here.</TabsContent>
        </Tabs>
      </TabsContent>
      <TabsContent value="2024">Change your password here.</TabsContent>

</Tabs>
<Projects />
          <AchievementsCarousel />
  </ThemeProvider>
  )
}

export default Home
