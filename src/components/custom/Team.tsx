import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

// Dummy team data
const teamData = {
  2025: {
    Tech: {
      "Web Dev": [
        { name: "Alex Chen", year: "3rd Year", position: "Lead Developer", college: "Computer Science" },
        { name: "Sarah Kumar", year: "4th Year", position: "Frontend Developer", college: "Information Technology" },
        { name: "Mike Johnson", year: "2nd Year", position: "Backend Developer", college: "Software Engineering" }
      ],
      "App Dev": [
        { name: "Priya Patel", year: "3rd Year", position: "Mobile Lead", college: "Computer Science" },
        { name: "David Lee", year: "4th Year", position: "React Native Dev", college: "Information Technology" },
        { name: "Emma Wilson", year: "2nd Year", position: "Flutter Developer", college: "Software Engineering" }
      ],
      "Cybersecurity": [
        { name: "Raj Sharma", year: "4th Year", position: "Security Lead", college: "Cybersecurity" },
        { name: "Lisa Zhang", year: "3rd Year", position: "Penetration Tester", college: "Computer Science" },
        { name: "Tom Brown", year: "2nd Year", position: "Security Analyst", college: "Information Security" }
      ],
      "AI/ML": [
        { name: "Aisha Khan", year: "4th Year", position: "ML Engineer", college: "Data Science" },
        { name: "John Smith", year: "3rd Year", position: "AI Researcher", college: "Computer Science" },
        { name: "Maya Rodriguez", year: "2nd Year", position: "Data Analyst", college: "Statistics" }
      ],
      "Design": [
        { name: "Sophie Taylor", year: "3rd Year", position: "UI/UX Lead", college: "Design" },
        { name: "Ryan Kim", year: "4th Year", position: "Graphic Designer", college: "Visual Arts" },
        { name: "Zoe Martinez", year: "2nd Year", position: "Product Designer", college: "Design Technology" }
      ]
    },
    NonTech: {
      Marketing: [
        { name: "Jessica Adams", year: "3rd Year", position: "Marketing Lead", college: "Business Administration" },
        { name: "Kevin Wong", year: "4th Year", position: "Brand Manager", college: "Marketing" }
      ],
      Events: [
        { name: "Amanda Foster", year: "2nd Year", position: "Event Coordinator", college: "Event Management" },
        { name: "Chris Davis", year: "3rd Year", position: "Logistics Manager", college: "Business" }
      ],
      Content: [
        { name: "Natalie Green", year: "4th Year", position: "Content Lead", college: "Communications" },
        { name: "Sam Parker", year: "2nd Year", position: "Content Writer", college: "English Literature" }
      ],
      "Social Media": [
        { name: "Isabella Ross", year: "3rd Year", position: "Social Media Manager", college: "Digital Marketing" },
        { name: "Jake Miller", year: "2nd Year", position: "Community Manager", college: "Communications" }
      ],
      Operations: [
        { name: "Rachel Thompson", year: "4th Year", position: "Operations Lead", college: "Business Operations" },
        { name: "Daniel Kumar", year: "3rd Year", position: "Project Manager", college: "Management" }
      ],
      Finance: [
        { name: "Ashley Liu", year: "4th Year", position: "Finance Lead", college: "Accounting" },
        { name: "Marcus Johnson", year: "3rd Year", position: "Treasurer", college: "Finance" }
      ]
    }
  },
  2024: [
    { name: "Former President - Alex Rodriguez", year: "Graduated 2024", position: "Club President", college: "Computer Science" },
    { name: "Former VP Tech - Samantha Lee", year: "Graduated 2024", position: "VP Technology", college: "Software Engineering" },
    { name: "Former VP Events - Michael Chen", year: "Graduated 2024", position: "VP Events", college: "Business Administration" },
    { name: "Former Marketing Head - Jennifer Park", year: "Graduated 2024", position: "Marketing Director", college: "Digital Marketing" },
    { name: "Former Design Lead - Robert Kim", year: "Graduated 2024", position: "Creative Director", college: "Visual Design" },
    { name: "Former Tech Lead - Diana Patel", year: "Graduated 2024", position: "Technical Lead", college: "Information Technology" }
  ]
};

export function Team() {
  const [selectedDepartment, setSelectedDepartment] = useState("Web Dev");
  const [selectedNonTech, setSelectedNonTech] = useState("Marketing");

  const techOptions = [
    { value: "Web Dev", label: "💻 Web Dev" },
    { value: "App Dev", label: "📱 App Dev" },
    { value: "Cybersecurity", label: "🛡️ Cybersecurity" },
    { value: "AI/ML", label: "🤖 AI/ML" },
    { value: "Design", label: "🎨 Design" },
  ];

  const nonTechOptions = [
    { value: "Marketing", label: "📢 Marketing" },
    { value: "Events", label: "🎉 Events" },
    { value: "Content", label: "✍️ Content" },
    { value: "Social Media", label: "📱 Social Media" },
    { value: "Operations", label: "⚙️ Operations" },
    { value: "Finance", label: "💰 Finance" },
  ];

  return (
    <section className="h-screen snap-start snap-always bg-black from-gray-900 to-black px-4 pt-8">
      <div className="w-full max-w-6xl mx-auto mt-20">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Meet Our Team
          </h1>
        </div>

        <div className="flex flex-col items-center space-y-6">
          <Tabs
            defaultValue="2025"
            className="w-full max-w-4xl"
          >
            <div className="flex justify-center mb-6">
              <TabsList className="bg-white/10 backdrop-blur">
                <TabsTrigger value="2025" className="data-[state=active]:bg-white data-[state=active]:text-black">2025</TabsTrigger>
                <TabsTrigger value="2024" className="data-[state=active]:bg-white data-[state=active]:text-black">2024</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="2025" className="w-full">
              <Tabs
                defaultValue="Tech"
                className="w-full"
              >
                <div className="flex justify-center mb-6">
                  <TabsList className="bg-white/10 backdrop-blur">
                    <TabsTrigger value="Tech" className="data-[state=active]:bg-white data-[state=active]:text-black">Tech</TabsTrigger>
                    <TabsTrigger value="Non-Tech" className="data-[state=active]:bg-white data-[state=active]:text-black">Non-Tech</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="Tech" className="text-center">
                  <div className="mb-6">
                    <div className="flex justify-center">
                      <div className="relative group">
                        <select
                          value={selectedDepartment}
                          onChange={(e) => setSelectedDepartment(e.target.value)}
                          className="w-52 px-6 py-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg border border-white/30 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 appearance-none cursor-pointer group-hover:from-white/15 group-hover:to-white/10"
                        >
                          {techOptions.map((option) => (
                            <option key={option.value} value={option.value} className="bg-gray-900 text-white py-2">{option.label}</option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                          <svg className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300 pointer-events-none"></div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-96 overflow-y-auto">
                    {teamData[2025].Tech[selectedDepartment]?.map((member, index) => (
                      <div key={index} className="p-6 bg-white/10 rounded-lg backdrop-blur border border-white/20 text-white">
                        <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                        <p className="text-blue-300 mb-1">{member.position}</p>
                        <p className="text-gray-300 text-sm mb-1">{member.year}</p>
                        <p className="text-gray-400 text-sm">{member.college}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="Non-Tech" className="text-center">
                  <div className="mb-6">
                    <div className="flex justify-center">
                      <div className="relative group">
                        <select
                          value={selectedNonTech}
                          onChange={(e) => setSelectedNonTech(e.target.value)}
                          className="w-52 px-6 py-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg border border-white/30 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 appearance-none cursor-pointer group-hover:from-white/15 group-hover:to-white/10"
                        >
                          {nonTechOptions.map((option) => (
                            <option key={option.value} value={option.value} className="bg-gray-900 text-white py-2">{option.label}</option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                          <svg className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300 pointer-events-none"></div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-96 overflow-y-auto">
                    {teamData[2025].NonTech[selectedNonTech]?.map((member, index) => (
                      <div key={index} className="p-6 bg-white/10 rounded-lg backdrop-blur border border-white/20 text-white">
                        <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                        <p className="text-blue-300 mb-1">{member.position}</p>
                        <p className="text-gray-300 text-sm mb-1">{member.year}</p>
                        <p className="text-gray-400 text-sm">{member.college}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </TabsContent>

            <TabsContent value="2024" className="text-center text-white">
              <div className="mb-6">
                <p className="text-xl mb-4">2024 Team Alumni</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-96 overflow-y-auto">
                {teamData[2024].map((member, index) => (
                  <div key={index} className="p-6 bg-white/10 rounded-lg backdrop-blur border border-white/20">
                    <h3 className="text-lg font-bold mb-2">{member.name}</h3>
                    <p className="text-blue-300 mb-1">{member.position}</p>
                    <p className="text-gray-300 text-sm mb-1">{member.year}</p>
                    <p className="text-gray-400 text-sm">{member.college}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}