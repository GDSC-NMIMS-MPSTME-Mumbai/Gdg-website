import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Team() {
  return (
    <section className="h-screen snap-start snap-always bg-black from-gray-900 to-black px-4 pt-8">
      <div className="w-full max-w-6xl mt-20">
        <h1 className="text-4xl md:text-3xl font-bold mb-8 text-white">
          Meet Our Team
        </h1>

        <div className="flex flex-col space-y-2">
          <Tabs
            defaultValue="2025"
            className="w-full"
          >
            <TabsList className="mb-2">
              <TabsTrigger value="2025">2025</TabsTrigger>
              <TabsTrigger value="2024">2024</TabsTrigger>
            </TabsList>

            <TabsContent value="2025" className="w-full">
              <Tabs
                defaultValue="Tech"
                className="w-full"
              >
                <TabsList className="mb-2">
                  <TabsTrigger value="Tech">Tech</TabsTrigger>
                  <TabsTrigger value="Non-Tech">Non-Tech</TabsTrigger>
                </TabsList>

                <TabsContent value="Tech" className="">
                  <Select defaultValue="Web Dev">
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Select Department" />
                    </SelectTrigger>
                    <SelectContent side="bottom">
                      <SelectItem value="web">Web Dev</SelectItem>
                      <SelectItem value="app">App Dev</SelectItem>
                      <SelectItem value="cyber">Cybersecurity</SelectItem>
                      <SelectItem value="ai">AI/ML</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                    </SelectContent>
                  </Select>
                </TabsContent>

                <TabsContent
                  value="Non-Tech"
                  className="text-white"
                >
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

            <TabsContent value="2024" className="text-white">
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
  );
}