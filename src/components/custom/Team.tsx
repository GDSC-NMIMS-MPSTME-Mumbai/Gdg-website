import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

// Team data structure (unchanged)
const teamData = {
  2025: {
    SuperCore: [
      { name: "Aditya Sharma", year: "5th Year - BTI", position: "President", college: "MPSTME", Image: "/core images/aditya sharma.jpg" },
      { name: "Jugaad Chhabra", year: "6th Year - BTI", position: "Chief Of Technology", college: "MPSTME", Image: "/core images/jugaad chhabra.jpg" },
      { name: "Manan Gandhi", year: "4th Year - BTI", position: "Chief Of Engineering", college: "MPSTME", Image: "/core images/manan gandhi.png" },
      { name: "Disha Sejpal", year: "5th Year - BTI", position: "Chief Of Operations", college: "MPSTME", Image: "/core images/disha sejpal.jpeg" },
      { name: "Mishitha Verma", year: "3rd Year - BTech", position: "Chief Of Communication And Outreach", college: "MPSTME", Image: "/core images/Mishitha Verma.jpeg" },
      { name: "Samarth Roy Chowdhury", year: "5th Year - BTI", position: "Treasurer", college: "MPSTME", Image: "/core images/Samarth Roy Chowdhury.jpg" }
    ],
    Tech: {
      "Web Development": [
        { name: "Moksh Shah", year: "4th Year - BTI", position: "Head", college: "MPSTME", Image: "/core images/IMG-20250609-WA0009 - Moksh Shah.jpg" },
        { name: "Krisha Chawan", year: "5th Year - BTI", position: "Sub-Head", college: "MPSTME", Image: "/core images/IMG_8686 - krisha chawan.jpeg" },
        { name: "Om Anaokar", year: "4th Year - BTI", position: "Sub-Head", college: "MPSTME", Image: "/core images/IMG_5545 - Om Anaokar.jpeg" }
      ],
      "App Development": [
        { name: "Arnav Jain", year: "2nd Year - BTech", position: "Head", college: "MPSTME", Image: "/core images/Arnav Jain.jpeg" },
        { name: "Nathan Dsouza", year: "Unknown year", position: "Sub-Head", college: "MPSTME", Image: "/core images/Nathan Dsouza.jpeg" }
      ],
      "Game Development": [
        { name: "Aryan Pathare", year: "4th Year - BTI", position: "Head", college: "MPSTME" },
        { name: "Likhit Desai", year: "4th Year - BTI", position: "Sub-Head", college: "MPSTME", Image: "/core images/likhit desai.jpg" }
      ],
      "Cybersecurity": [
        { name: "Mantek Singh", year: "3rd Year - BTech", position: "Head", college: "MPSTME", Image: "/core images/IMG_0085 - MANTEK SINGH BURN.jpeg" },
        { name: "Vyom Shah", year: "Unknown year", position: "Sub-Head", college: "MPSTME", Image: "/core images/" },
        { name: "Yohaan Guzdar", year: "Unknown year", position: "Sub-Head", college: "MPSTME", Image: "/core images/Yohaan Guzdar.jpeg" },
        { name: "Shreyas Tekawade", year: "Unknown year", position: "Sub-Head", college: "MPSTME", Image: "/core images/SHREYAS TEKAWADE.jpg" }
      ],
      "AI & Machine Learning": [
        { name: "Mudith Shetty", year: "5th Year - BTI", position: "Head", college: "MPSTME", Image: "/core images/Mudith Shetty.jpg" },
        { name: "Dhruv", year: "Unknown Year", position: "Head", college: "MPSTME", Image: "/core images/" },
        { name: "Arth Agrawal", year: "2nd Year - MBATech", position: "Sub-Head", college: "MPSTME", Image: "/core images/arth agrawal.jpg" }
      ],
      "Design & UX": [
        { name: "Jash Kanani", year: "5th Year - BTI", position: "Head", college: "MPSTME", Image: "/core images/IMG-20240426-WA0034 - jash kanani.jpg" },
        { name: "Tanay Kumar", year: "4th Year - BTI", position: "Head", college: "MPSTME", Image: "/core images/Untitled design (5) - Tanay Kumar.png" },
        { name: "Shlok Agheda", year: "5th Year - BTI", position: "Sub-Head", college: "MPSTME", Image: "/core images/Shlok Agheda - Shlok Agheda.jpg" },
        { name: "Devesh Bogar", year: "2nd Year - BTech", position: "Sub-Head", college: "MPSTME", Image: "/core images/IMG_5871 - Devesh Bogar.jpeg" }
      ]
    },
    NonTech: {
      "Business Development": [
        { name: "Pia Chalikwar", year: "5th Year - BTI", position: "Head", college: "MPSTME", Image: "/core images/fe311ab5-438c-46a8-ab1b-ecbfd82b8736 - Pia Chalikwar.jpeg" },
        { name: "Muaaz Shaikh", year: "2nd Year - BTech", position: "Sub-Head", college: "MPSTME", Image: "/core images/IMG_5233 - Muaaz Shaikh.png" },
        { name: "Gul Chaudhary", year: "4th Year - BTI", position: "Sub-Head", college: "MPSTME", Image: "/core images/Gul Chaudhary.jpeg" }
      ],
      "Digital Creatives": [
        { name: "Anvesh Agrawal", year: "Year Unknown", position: "Head", college: "MPSTME", Image: "/core images/" },
        { name: "Kanwaljit Singh", year: "Year Unknown", position: "Head", college: "MPSTME", Image: "/core images/1 - Kanwaljit Singh.jpeg" },
        { name: "Dhanavi Shah", year: "3rd Year - BTI", position: "Sub-Head", college: "MPSTME", Image: "/core images/dhanavi shah.jpg" },
        { name: "Vedant Patel", year: "4th Year - BTI", position: "Sub-Head", college: "MPSTME", Image: "/core images/" }
      ],
      "In-house Creatives": [
        { name: "Riti Goradia", year: "2nd Year - BTech", position: "Head", college: "MPSTME", Image: "/core images/Riti Goradia.jpeg" },
        { name: "Dhruvil Parekh", year: "2nd Year - BTech", position: "Sub-Head", college: "MPSTME", Image: "/core images/Dhruvil Parekh.jpeg" }
      ],
      "Social Media and Content Writing": [
        { name: "Loveleen Keshwani", year: "Year Unknown", position: "Head", college: "MPSTME", Image: "/core images/loveleen keshwani.png" },
        { name: "Pusti Parekh", year: "Year Unknown", position: "Head", college: "MPSTME", Image: "/core images/Pusti Parekh.jpeg" },
        { name: "Manav Mehta", year: "Year Unknown", position: "Sub-head", college: "MPSTME", Image: "/core images/manav mehta.jpg" }
      ],
      "Event Operations": [
        { name: "Jash Pancholi", year: "4th Year - BTI", position: "Head", college: "MPSTME", Image: "/core images/Jash_Pancholi.jpg" },
        { name: "Harshil Desai", year: "5th Year - BTI", position: "Sub-Head", college: "MPSTME", Image: "/core images/IMG_20250606_215750 - HARSHIL DESAI.jpg" },
        { name: "Heet Ranpura", year: "2nd Year - BTech", position: "Sub-Head", college: "MPSTME", Image: "/core images/IMG_7493 - Heet Ranpura.jpeg" }
      ],
      "Public Relations": [
        { name: "Rida Parihar", year: "Year Unknown", position: "Head", college: "MPSTME", Image: "/core images/Rida Parihar.jpg" },
        { name: "Josh Dave", year: "Year Unknown", position: "Head", college: "MPSTME", Image: "/core images/josh dave.jpg " },
        { name: "Sharanya Velamuri", year: "3rd Year - BTI", position: "Sub-Head", college: "MPSTME", Image: "/core images/ " },
        { name: "Shlok Parikh", year: "3rd Year - BTI", position: "Sub-Head", college: "MPSTME", Image: "/core images/shlok parikh.png" }
      ],
      "Photography": [
        { name: "Maanas Vinze", year: "1st Year - MBATech", position: "Head", college: "MPSTME", Image: "/core images/IMG-20250914-WA0150 - Maanas Vinze.jpg" },
        { name: "Ishika Saini", year: "2nd Year - BTech", position: "Sub-Head", college: "MPSTME", Image: "/core images/Ishika_Saini.jpg" }
      ]
    }
  },
  2024: [
    { name: "Alex Rodriguez", year: "Graduated 2024", position: "Former President", college: "Computer Science", achievement: "Led club to 500+ members" },
    { name: "Samantha Lee", year: "Graduated 2024", position: "Former VP Technology", college: "Software Engineering", achievement: "Launched 5 major projects" },
    { name: "Michael Chen", year: "Graduated 2024", position: "Former VP Events", college: "Business Administration", achievement: "Organized 15+ successful events" },
    { name: "Jennifer Park", year: "Graduated 2024", position: "Former Marketing Director", college: "Digital Marketing", achievement: "Grew social media by 300%" },
    { name: "Robert Kim", year: "Graduated 2024", position: "Former Creative Director", college: "Visual Design", achievement: "Redesigned club brand identity" },
    { name: "Diana Patel", year: "Graduated 2024", position: "Former Technical Lead", college: "Information Technology", achievement: "Mentored 20+ developers" }
  ]
};

export function Team() {
  // keep tech default as before; set non-tech to a real option
  const [selectedDepartment, setSelectedDepartment] = useState("Web Development");
  const [selectedNonTech, setSelectedNonTech] = useState("Business Development");

  const CustomDropdown = ({ value, onChange, options }) => {
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
            <option key={option.value} value={option.value} className="bg-gray-900 text-white py-3 px-4">
              {option.label}
            </option>
          ))}
        </select>

        <div className="absolute inset-y-0 right-0 flex items-center pr-5 pointer-events-none">
          <svg className="w-5 h-5 text-white/80 group-hover:text-white transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <div
        className="group relative z-10 p-6 bg-gradient-to-br from-white/10 via-white/5 to-transparent 
                   rounded-xl backdrop-blur-lg border border-white/20 hover:border-white/40
                   shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.3)]
                   transition-transform duration-300 ease-out transform-gpu hover:scale-105 origin-center
                   text-white"
        style={{ willChange: "transform", transform: "translateZ(0)" }}
      >
        <div className="absolute inset-0 transition-all duration-500 rounded-xl pointer-events-none"></div>

        <div className="relative z-20">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-100 transition-colors">{member.name}</h3>
              <p className="text-blue-300 font-medium mb-1 group-hover:text-blue-200 transition-colors">{member.position}</p>
            </div>

            {member.Image ? (
              <img
                src={member.Image}
                alt={member.name}
                className="w-20 h-20 rounded-full object-cover border-2 border-white/30 
                           group-hover:scale-110 group-hover:border-blue-300/70 transition-transform duration-300"
              />
            ) : (
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 
                              flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="w-10 h-10 rounded-full bg-white/20"></div>
              </div>
            )}
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

          {member.skills && (
            <div className="flex flex-wrap gap-2 mt-4">
              {member.skills.slice(0, 3).map((skill, index) => (
                <span key={index} className="px-3 py-1 text-xs bg-white/10 text-blue-200 rounded-full border border-white/20">
                  {skill}
                </span>
              ))}
            </div>
          )}

          {member.achievement && (
            <div className="mt-4 p-3 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg border border-yellow-500/20">
              <p className="text-yellow-200 text-sm font-medium">{member.achievement}</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  const techOptions = [
    { value: "Web Development", label: "Web Development" },
    { value: "App Development", label: "App Development" },
    { value: "Cybersecurity", label: "Cybersecurity" },
    { value: "Game Development", label: "Game Development" },
    { value: "AI & Machine Learning", label: "AI & Machine Learning" },
    { value: "Design & UX", label: "Design & UX" }
  ];

  const nonTechOptions = [
    { value: "Business Development", label: "Business Development" },
    { value: "Event Operations", label: "Event Operations" },
    { value: "Digital Creatives", label: "Digital Creatives" },
    { value: "In-house Creatives", label: "In-house Creatives" },
    { value: "Public Relations", label: "Public Relations" },
    { value: "Social Media and Content Writing", label: "Social Media and Content Writing" },
    { value: "Photography", label: "Photography" }
  ];

  return (
    <section className="min-h-screen snap-start snap-always bg-black relative overflow-visible px-4 py-16">
      <div className="absolute inset-0 via-black to-gray-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            Meet Our Team
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate individuals driving innovation and creating impact through technology and creativity
          </p>
        </div>

        <div className="flex flex-col items-center space-y-8">
          <Tabs defaultValue="2025" className="w-full max-w-6xl">
            <TabsContent value="2025" className="w-full">
              {/* nested tabs: default to Super-Core */}
              <Tabs defaultValue="Super-Core" className="w-full">
                <div className="flex justify-center mb-8">
                  <TabsList className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-2">
                    <TabsTrigger value="Super-Core" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-gray-500 data-[state=active]:to-gray-600 data-[state=active]:text-white px-6 py-3 rounded-xl font-medium transition-all duration-300">
                      Super Core
                    </TabsTrigger>
                    <TabsTrigger value="Tech" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-gray-500 data-[state=active]:to-gray-600 data-[state=active]:text-white px-6 py-3 rounded-xl font-medium transition-all duration-300">
                      Technical Teams
                    </TabsTrigger>
                    <TabsTrigger value="Non-Tech" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-gray-500 data-[state=active]:to-gray-600 data-[state=active]:text-white px-6 py-3 rounded-xl font-medium transition-all duration-300">
                      Operations Teams
                    </TabsTrigger>
                  </TabsList>
                </div>

                {/* Tech Teams */}
                <TabsContent value="Tech" className="text-center">
                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold text-white mb-6">Technical Departments</h3>
                    <div className="flex justify-center">
                      <CustomDropdown value={selectedDepartment} onChange={setSelectedDepartment} options={techOptions} />
                    </div>
                  </div>

                  {/* Scrolling wrapper keeps the vertical scroll but grid allows overflow for scale */}
                  <div className="max-h-[600px] overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-visible p-2">
                      {teamData[2025].Tech[selectedDepartment]?.map((member, index) => (
                        <MemberCard key={index} member={member} />
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* Non-Tech Teams */}
                <TabsContent value="Non-Tech" className="text-center">
                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold text-white mb-6">Operations Departments</h3>
                    <div className="flex justify-center">
                      <CustomDropdown value={selectedNonTech} onChange={setSelectedNonTech} options={nonTechOptions} />
                    </div>
                  </div>

                  <div className="max-h-[600px] overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-visible p-2">
                      {teamData[2025].NonTech[selectedNonTech]?.map((member, index) => (
                        <MemberCard key={index} member={member} />
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* Super-Core */}
                <TabsContent value="Super-Core" className="text-center">
                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold text-white mb-6">Super Core</h3>
                  </div>

                  <div className="max-h-[600px] overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-visible p-2">
                      {teamData[2025].SuperCore?.map((member, index) => (
                        <MemberCard key={index} member={member} />
                      ))}
                    </div>
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

              <div className="max-h-[600px] overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-visible p-2">
                  {teamData[2024].map((member, index) => (
                    <MemberCard key={index} member={member} isAlumni={true} />
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
