import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const projects = [
  {
    title: "DevConnect Platform",
    description: "A comprehensive developer networking platform connecting coders worldwide",
    image: "/devconnect.jpg",
    link: "#",
    tech: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "Smart Waste Sorter",
    description: "AI-powered waste classification system for sustainable waste management",
    image: "/waste-sorter.jpg",
    link: "#",
    tech: ["Python", "TensorFlow", "IoT"]
  },
  {
    title: "AssistShoe",
    description: "Smart footwear solution for visually impaired individuals",
    image: "/assist-shoe.jpg",
    link: "#",
    tech: ["Arduino", "Sensors", "Mobile App"]
  },
  {
    title: "GDSC Portfolio",
    description: "Dynamic portfolio showcase for Google Developer Student Club",
    image: "/gdsc-portfolio.jpg",
    link: "#",
    tech: ["React", "Tailwind", "Framer Motion"]
  },
  {
    title: "EcoTracker",
    description: "Environmental impact tracking application for sustainable living",
    image: "/gdsc-portfolio.jpg",
    link: "#",
    tech: ["Flutter", "Firebase", "APIs"]
  },
  {
    title: "CodeMentor AI",
    description: "AI-powered coding assistant for learning and development",
    image: "/gdsc-portfolio.jpg",
    link: "#",
    tech: ["Python", "OpenAI", "React"]
  },
];

export function Projects() {
  return (
    <section className="w-full py-20 px-4 bg-black">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          Our Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xl text-gray-400 max-w-2xl mx-auto"
        >
          Innovative solutions built by our talented team members
        </motion.p>
      </div>
      
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: index * 0.1,
              duration: 0.6,
              ease: "easeOut"
            }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group"
          >
            <Card className="h-full flex flex-col justify-between overflow-hidden rounded-2xl border hover:shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader className="flex-grow">
                <CardTitle className="text-xl group-hover:text-blue-400 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
                
                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs rounded-full border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardHeader>
              
              <CardFooter className="pt-0">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button  
                  className="w-full transition-all duration-300 margin-top: 0.5rem"
                  variant="outline"
                >
                    View Project →
                </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-xl font-bold">{project.title}</DialogTitle>
                      <DialogDescription>
                        <div className="mt-2 text-sm leading-relaxed font-bold">
                          {project.description}
                        </div>
                        <div>
                          <img
                            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=1470&q=80"
                            alt={project.title}
                            className="mt-4 w-full h-64 object-cover rounded-lg"
                          />
                        </div>
                        <div>
                          <h3 className="mt-4 font-semibold">Technologies Used:</h3>
                          <ul className="list-disc list-inside">
                            {project.tech.map((tech, techIndex) => (
                              <li key={techIndex}>{tech}</li>
                            ))}
                          </ul>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </div>
                        <div className="p-4 pt-1">
                          <Button className="w-full transition-all duration-300 mt-4">Learn More</Button>
                        </div>
                      </DialogDescription>
                    </DialogHeader>

                  </DialogContent>
                </Dialog>
                
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}