import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "MPSTME OnTrack",
    description: "Campus navigation tool for new students at MPSTME to aid in finding their way around campus",
    cover: "../../public/projectimages/ontrack.png",
    images: ["../../public/projectimages/ontrack.png", "../../public/projectimages/ontrack2.png", "../../public/projectimages/ontrack3.png"],
    link: "https://play.google.com/store/apps/details?id=com.gdscmpstme.mpstme_ontrack&pcampaignid=web_share",
    tech: ["Flutter", "Node.js"],
    longDescription: "New students always find it difficult to navigate around the MPSTME campus. Our project, MPSTME OnTrack, is a campus navigation tool designed to help new students find their way around campus easily. The tool provides an interactive map of the campus, highlighting key locations such as lecture halls, and administrative offices. Students can search for specific locations or get directions from their current location to their desired destination, making it a comprehensive resource for new students.",
    private: false
  },
  {
    title: "Roast.io",
    cover: "../public/projectimages/roast.jpg",
    images: ["../../public/projectimages/roastio.png", "../../public/projectimages/roast2.png", "../../public/projectimages/roast3.png"],
    link: "https://roast-io.vercel.app",
    tech: ["React", "Groq", "Python Flask"],
    description: "Humorous roasts of a user's professional online presence using Groq to analyze GitHub and LinkedIn profiles.",
    longDescription: "Roast.io is a full-stack web application designed to deliver humorous and sarcastic roasts of a user's professional online presence. The application uses Groq to analyze a person's GitHub and LinkedIn profiles and generates witty and observational commentary.",
    private: false
  },
  {
    title: "Lab Experiment Solver",
    cover: "/labexp.png",
    images: ["/labexp.png", "/labexp2.png"],
    link: "#",
    tech: ["Next.js", "Python Flask", "Tailwind CSS"],
    description: "A web application that solves lab experiments by providing step-by-step guidance and solutions.",
    longDescription: "The Lab Experiment Solver is a web application designed to assist students in solving lab experiments. The application provides step-by-step guidance and solutions for various lab experiments, making it easier for students to understand and complete their assignments. The app features a user-friendly interface, allowing students to easily navigate through different experiments and access the necessary information.",
    private: true
  },
  {
    title: "Whatsapp ChatBot",
    cover: "../projectimages/whatsappbot1.png",
    images: ["../projectimages/whatsappbot.jpg", "../projectimages/whatsappbot2.jpg"],
    link: "#",
    tech: [],
    description: "A chatbot integrated with WhatsApp to provide automated responses and assistance.",
    longDescription: "The WhatsApp ChatBot is an automated chatbot integrated with the WhatsApp messaging platform. The chatbot is designed to provide automated responses and assistance to users, making it easier for them to get the information they need quickly. The chatbot can handle a variety of tasks, such as answering frequently asked questions, providing customer support, and assisting with basic inquiries about our signature event, foobar.",
    private: true
  },
  {
    title: "2D Brawl",
    cover: "../projectimages/brawl.jpg",
    images: ["../projectimages/brawl.jpg", "../projectimages/brawl2.jpg", "../projectimages/brawl3.jpg"],
    link: "#",
    tech: ["Unity", "C#"],
    description: "A 2D fighting game developed using Unity, featuring various characters and combat mechanics.",
    longDescription: "2D Brawl is an exciting 2D fighting game developed using the Unity game engine. The game features a variety of characters, each with their own unique abilities and combat mechanics. Players can engage in fast-paced battles, utilizing different strategies and techniques to defeat their opponents. The game offers both single-player and multiplayer modes, allowing players to challenge their friends or compete against AI-controlled opponents.",
    private: true
  },
  {
    title: "MAD (calculator_pro)",
    cover: "/mad.png",
    images: ["/mad.png", "/mad2.png"],
    link: "#",
    description: "A modern calculator app with advanced features and a sleek user interface.",
    tech: ["Flutter", "Dart"],
    longDescription: "MAD (Modern Advanced Calculator) is a sleek and modern calculator app developed using Flutter. The app offers a variety of advanced features, including scientific calculations, unit conversions, and graph plotting. The user interface is designed to be intuitive and user-friendly, making it easy for users to perform complex calculations with ease. MAD is available on both Android and iOS platforms, providing a seamless experience across devices.",
    private: true
  }
];

function ProjectDialog({ project }: { project: typeof projects[0] }) {
  const [current, setCurrent] = useState(0);

  const nextImage = () => setCurrent((c) => (c + 1) % project.images.length);
  const prevImage = () => setCurrent((c) => (c - 1 + project.images.length) % project.images.length);

  return (
    <DialogContent className="sm:max-w-2xl backdrop-blur-md bg-black/60 border border-white/10 shadow-lg">
      <DialogHeader>
        <DialogTitle className="text-xl font-bold">{project.title}</DialogTitle>
        <DialogDescription>
          <div className="mt-1 text-sm leading-relaxed font-bold">
            {project.description}
          </div>
          <div className="relative mt-4 w-full h-64 flex items-center justify-center">
            <Button
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/40"
              size="sm"
              onClick={prevImage}
              aria-label="Previous image"
            >
              ←
            </Button>
            <AnimatePresence mode="wait">
              <motion.img
                key={project.images[current]}
                src={project.images[current]}
                alt={project.title}
                className="max-h-64 max-w-full w-auto h-auto object-contain rounded-lg mx-auto bg-black"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
            <Button
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/40"
              size="sm"
              onClick={nextImage}
              aria-label="Next image"
            >
              →
            </Button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
              {project.images.map((_, idx) => (
                <span
                  key={idx}
                  className={`inline-block w-2 h-2 rounded-full ${idx === current ? "bg-white" : "bg-gray-400/50"}`}
                />
              ))}
            </div>
          </div>
          <div className="mt-1 text-sm text-gray-300">
            <h3 className="mt-4 font-semibold">Technologies Used:</h3>
            <ul className="list-disc list-inside">
              {project.tech.map((tech, techIndex) => (
                <li key={techIndex}>{tech}</li>
              ))}
            </ul>
            {project.longDescription}
          </div>
          {project.private == false ? (
            <div className="p-4 pt-1">
              <a href="https://github.com" target="_blank">
                <Button className="w-full transition-all duration-300 mt-4">
                  Learn More
                </Button>
              </a>
            </div>
          ) : null}
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
}

export function Projects() {
  return (
    <section className="w-full py-20 px-4 bg-black">
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 via-yellow-400 via-red-400 bg-clip-text text-transparent"
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
              duration: 0.2,
              ease: "easeOut"
            }}
            viewport={{ once: true }}
            className="group"
          >
            <CardContainer className="inter-var" containerClassName="py-0">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {project.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {project.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={project.cover}
                    alt={project.title}
                    loading="eager"
                    className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  />
                </CardItem>
                <CardItem translateZ="50" className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs rounded-full border dark:border-white/[0.2] border-black/[0.1] text-neutral-700 dark:text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </CardItem>
                <div className="flex justify-between items-center mt-6">
                  <CardItem
                    translateZ={20}
                    as={Dialog}
                    className="w-full"
                  >
                    <DialogTrigger asChild>
                      <Button 
                        className="w-full transition-all duration-300" 
                        variant="outline"
                        onClick={() => {
                          // Preload the dialog images
                          project.images.forEach(src => {
                            const img = new Image();
                            img.src = src;
                          });
                        }}
                      >
                        View Project →
                      </Button>
                    </DialogTrigger>
                    <ProjectDialog project={project} />
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </motion.div>
        ))}
      </div>
    </section>
  );
}