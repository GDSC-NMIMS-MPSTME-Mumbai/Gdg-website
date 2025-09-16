import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

// Team data structure
const teamData = {
  2025: {
    Tech: {
      "Web Development": [
        { 
          name: "Alex Chen", 
          year: "3rd Year", 
          position: "Lead Developer", 
          college: "Computer Science",
          skills: ["React", "Node.js", "TypeScript"]
        },
        { 
          name: "Sarah Kumar", 
          year: "4th Year", 
          position: "Frontend Developer", 
          college: "Information Technology",
          skills: ["Vue.js", "CSS", "JavaScript"]
        },
        { 
          name: "Mike Johnson", 
          year: "2nd Year", 
          position: "Backend Developer", 
          college: "Software Engineering",
          skills: ["Python", "Django", "PostgreSQL"]
        }
      ],
      "Mobile Development": [
        { 
          name: "Priya Patel", 
          year: "3rd Year", 
          position: "Mobile Lead", 
          college: "Computer Science",
          skills: ["Flutter", "Dart", "Firebase"]
        },
        { 
          name: "David Lee", 
          year: "4th Year", 
          position: "React Native Developer", 
          college: "Information Technology",
          skills: ["React Native", "JavaScript", "Redux"]
        },
        { 
          name: "Emma Wilson", 
          year: "2nd Year", 
          position: "iOS Developer", 
          college: "Software Engineering",
          skills: ["Swift", "SwiftUI", "Xcode"]
        }
      ],
      "Cybersecurity": [
        { 
          name: "Raj Sharma", 
          year: "4th Year", 
          position: "Security Lead", 
          college: "Cybersecurity",
          skills: ["Penetration Testing", "Network Security", "Linux"]
        },
        { 
          name: "Lisa Zhang", 
          year: "3rd Year", 
          position: "Security Analyst", 
          college: "Computer Science",
          skills: ["Malware Analysis", "SIEM", "Python"]
        },
        { 
          name: "Tom Brown", 
          year: "2nd Year", 
          position: "Junior Analyst", 
          college: "Information Security",
          skills: ["Wireshark", "Nmap", "Metasploit"]
        }
      ],
      "AI & Machine Learning": [
        { 
          name: "Aisha Khan", 
          year: "4th Year", 
          position: "ML Engineer", 
          college: "Data Science",
          skills: ["TensorFlow", "PyTorch", "Python"]
        },
        { 
          name: "John Smith", 
          year: "3rd Year", 
          position: "AI Researcher", 
          college: "Computer Science",
          skills: ["NLP", "Computer Vision", "R"]
        },
        { 
          name: "Maya Rodriguez", 
          year: "2nd Year", 
          position: "Data Analyst", 
          college: "Statistics",
          skills: ["Pandas", "Matplotlib", "SQL"]
        }
      ],
      "Design & UX": [
        { 
          name: "Sophie Taylor", 
          year: "3rd Year", 
          position: "UI/UX Lead", 
          college: "Design",
          skills: ["Figma", "Adobe XD", "Prototyping"]
        },
        { 
          name: "Ryan Kim", 
          year: "4th Year", 
          position: "Graphic Designer", 
          college: "Visual Arts",
          skills: ["Photoshop", "Illustrator", "Branding"]
        },
        { 
          name: "Zoe Martinez", 
          year: "2nd Year", 
          position: "Product Designer", 
          college: "Design Technology",
          skills: ["User Research", "Wireframing", "Sketch"]
        }
      ]
    },
    NonTech: {
      "Marketing": [
        { 
          name: "Jessica Adams", 
          year: "3rd Year", 
          position: "Marketing Lead", 
          college: "Business Administration",
          skills: ["Digital Marketing", "SEO", "Content Strategy"]
        },
        { 
          name: "Kevin Wong", 
          year: "4th Year", 
          position: "Brand Manager", 
          college: "Marketing",
          skills: ["Brand Strategy", "Social Media", "Analytics"]
        }
      ],
      "Events": [
        { 
          name: "Amanda Foster", 
          year: "2nd Year", 
          position: "Event Coordinator", 
          college: "Event Management",
          skills: ["Event Planning", "Vendor Management", "Logistics"]
        },
        { 
          name: "Chris Davis", 
          year: "3rd Year", 
          position: "Logistics Manager", 
          college: "Business",
          skills: ["Project Management", "Budgeting", "Coordination"]
        }
      ],
      "Content Creation": [
        { 
          name: "Natalie Green", 
          year: "4th Year", 
          position: "Content Lead", 
          college: "Communications",
          skills: ["Writing", "Video Editing", "Photography"]
        },
        { 
          name: "Sam Parker", 
          year: "2nd Year", 
          position: "Content Writer", 
          college: "English Literature",
          skills: ["Copywriting", "Blog Writing", "Research"]
        }
      ],
      "Social Media": [
        { 
          name: "Isabella Ross", 
          year: "3rd Year", 
          position: "Social Media Manager", 
          college: "Digital Marketing",
          skills: ["Instagram", "TikTok", "Community Management"]
        },
        { 
          name: "Jake Miller", 
          year: "2nd Year", 
          position: "Community Manager", 
          college: "Communications",
          skills: ["Discord", "Engagement", "Customer Service"]
        }
      ],
      "Operations": [
        { 
          name: "Rachel Thompson", 
          year: "4th Year", 
          position: "Operations Lead", 
          college: "Business Operations",
          skills: ["Process Optimization", "Team Management", "Strategy"]
        },
        { 
          name: "Daniel Kumar", 
          year: "3rd Year", 
          position: "Project Manager", 
          college: "Management",
          skills: ["Agile", "Scrum", "Risk Management"]
        }
      ],
      "Finance": [
        { 
          name: "Ashley Liu", 
          year: "4th Year", 
          position: "Finance Lead", 
          college: "Accounting",
          skills: ["Financial Planning", "Budgeting", "Excel"]
        },
        { 
          name: "Marcus Johnson", 
          year: "3rd Year", 
          position: "Treasurer", 
          college: "Finance",
          skills: ["Accounting", "Financial Analysis", "QuickBooks"]
        }
      ]
    }
  },
  2024: [
    { 
      name: "Alex Rodriguez", 
      year: "Graduated 2024", 
      position: "Former President", 
      college: "Computer Science",
      achievement: "Led club to 500+ members"
    },
    { 
      name: "Samantha Lee", 
      year: "Graduated 2024", 
      position: "Former VP Technology", 
      college: "Software Engineering",
      achievement: "Launched 5 major projects"
    },
    { 
      name: "Michael Chen", 
      year: "Graduated 2024", 
      position: "Former VP Events", 
      college: "Business Administration",
      achievement: "Organized 15+ successful events"
    },
    { 
      name: "Jennifer Park", 
      year: "Graduated 2024", 
      position: "Former Marketing Director", 
      college: "Digital Marketing",
      achievement: "Grew social media by 300%"
    },
    { 
      name: "Robert Kim", 
      year: "Graduated 2024", 
      position: "Former Creative Director", 
      college: "Visual Design",
      achievement: "Redesigned club brand identity"
    },
    { 
      name: "Diana Patel", 
      year: "Graduated 2024", 
      position: "Former Technical Lead", 
      college: "Information Technology",
      achievement: "Mentored 20+ developers"
    }
  ]
};

export function Team() {
  const [selectedDepartment, setSelectedDepartment] = useState("Web Development");
  const [selectedNonTech, setSelectedNonTech] = useState("Marketing");

  const CustomDropdown = ({ value, onChange, options, placeholder }) => {
    return (
      <div className="relative group">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-60 px-6 py-4 bg-gradient-to-br from-white/15 via-white/10 to-white/5 
                     backdrop-blur-xl border border-white/30 text-white rounded-2xl 
                     shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]
                     transition-all duration-300 focus:outline-none focus:ring-2 
                     focus:ring-blue-400/60 focus:border-blue-400/60 appearance-none cursor-pointer 
                     group-hover:from-white/20 group-hover:to-white/8 font-medium text-sm"
        >
          {options.map((option) => (
            <option 
              key={option.value} 
              value={option.value} 
              className="bg-gray-900 text-white py-3 px-4"
            >
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-5 pointer-events-none">
          <svg 
            className="w-5 h-5 text-white/80 group-hover:text-white transition-all duration-200 
                       group-focus-within:rotate-180" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-cyan-500/0 
                        group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-cyan-500/10 
                        transition-all duration-300 pointer-events-none"></div>
      </div>
    );
  };

  const MemberCard = ({ member, isAlumni = false }) => {
    return (
      <div className="group relative p-6 bg-gradient-to-br from-white/10 via-white/5 to-transparent 
                      rounded-xl backdrop-blur-lg border border-white/20 hover:border-white/40
                      shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.3)]
                      transition-all duration-300 hover:scale-[1.02] text-white overflow-hidden">
        
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-cyan-500/0 
                        group-hover:from-blue-500/10 group-hover:via-purple-500/5 group-hover:to-cyan-500/10 
                        transition-all duration-500 rounded-xl"></div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-100 transition-colors">
                {member.name}
              </h3>
              <p className="text-blue-300 font-medium mb-1 group-hover:text-blue-200 transition-colors">
                {member.position}
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 
                            flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <div className="w-6 h-6 rounded-full bg-white/20"></div>
            </div>
          </div>
          
          <div className="space-y-2 mb-4">
            <p className="text-gray-300 text-sm flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              {member.year}
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              {member.college}
            </p>
          </div>

          {/* Skills or Achievement */}
          {member.skills && (
            <div className="flex flex-wrap gap-2 mt-4">
              {member.skills.slice(0, 3).map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 text-xs bg-white/10 text-blue-200 rounded-full 
                           border border-white/20 group-hover:bg-white/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}

          {member.achievement && (
            <div className="mt-4 p-3 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 
                            rounded-lg border border-yellow-500/20">
              <p className="text-yellow-200 text-sm font-medium">
                {member.achievement}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  const techOptions = [
    { value: "Web Development", label: "Web Development" },
    { value: "Mobile Development", label: "Mobile Development" },
    { value: "Cybersecurity", label: "Cybersecurity" },
    { value: "AI & Machine Learning", label: "AI & Machine Learning" },
    { value: "Design & UX", label: "Design & UX" },
  ];

  const nonTechOptions = [
    { value: "Marketing", label: "Marketing" },
    { value: "Events", label: "Events" },
    { value: "Content Creation", label: "Content Creation" },
    { value: "Social Media", label: "Social Media" },
    { value: "Operations", label: "Operations" },
    { value: "Finance", label: "Finance" },
  ];

  return (
    <section className="min-h-screen snap-start snap-always bg-black relative overflow-hidden px-4 py-16">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] 
                      from-blue-900/20 via-transparent to-transparent"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 
                         bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            Meet Our Team
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate individuals driving innovation and creating impact through technology and creativity
          </p>
        </div>

        {/* Main Tabs */}
        <div className="flex flex-col items-center space-y-8">
          <Tabs defaultValue="2025" className="w-full max-w-6xl">
            {/* Year Tabs */}
            <div className="flex justify-center mb-8">
              <TabsList className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-2">
                <TabsTrigger 
                  value="2025" 
                  className="data-[state=active]:bg-white data-[state=active]:text-black 
                           px-8 py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  Current Team 2025
                </TabsTrigger>
                <TabsTrigger 
                  value="2024" 
                  className="data-[state=active]:bg-white data-[state=active]:text-black 
                           px-8 py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  Alumni 2024
                </TabsTrigger>
              </TabsList>
            </div>

            {/* 2025 Content */}
            <TabsContent value="2025" className="w-full">
              <Tabs defaultValue="Tech" className="w-full">
                {/* Tech/Non-Tech Tabs */}
                <div className="flex justify-center mb-8">
                  <TabsList className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-2">
                    <TabsTrigger 
                      value="Tech" 
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 
                               data-[state=active]:to-purple-600 data-[state=active]:text-white 
                               px-6 py-3 rounded-xl font-medium transition-all duration-300"
                    >
                      Technical Teams
                    </TabsTrigger>
                    <TabsTrigger 
                      value="Non-Tech" 
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 
                               data-[state=active]:to-emerald-600 data-[state=active]:text-white 
                               px-6 py-3 rounded-xl font-medium transition-all duration-300"
                    >
                      Operations Teams
                    </TabsTrigger>
                  </TabsList>
                </div>

                {/* Tech Teams */}
                <TabsContent value="Tech" className="text-center">
                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold text-white mb-6">Technical Departments</h3>
                    <div className="flex justify-center">
                      <CustomDropdown
                        value={selectedDepartment}
                        onChange={setSelectedDepartment}
                        options={techOptions}
                        placeholder="Select Department"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[600px] overflow-y-auto 
                                  scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20">
                    {teamData[2025].Tech[selectedDepartment]?.map((member, index) => (
                      <MemberCard key={index} member={member} />
                    ))}
                  </div>
                </TabsContent>

                {/* Non-Tech Teams */}
                <TabsContent value="Non-Tech" className="text-center">
                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold text-white mb-6">Operations Departments</h3>
                    <div className="flex justify-center">
                      <CustomDropdown
                        value={selectedNonTech}
                        onChange={setSelectedNonTech}
                        options={nonTechOptions}
                        placeholder="Select Department"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[600px] overflow-y-auto 
                                  scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20">
                    {teamData[2025].NonTech[selectedNonTech]?.map((member, index) => (
                      <MemberCard key={index} member={member} />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </TabsContent>

            {/* 2024 Alumni */}
            <TabsContent value="2024" className="text-center text-white">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Our Amazing Alumni</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Celebrating the achievements and contributions of our 2024 graduates who helped build our community
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[600px] overflow-y-auto 
                              scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20">
                {teamData[2024].map((member, index) => (
                  <MemberCard key={index} member={member} isAlumni={true} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}