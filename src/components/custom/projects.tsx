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
import { motion } from "framer-motion";

const projects = [
	{
		title: "MPSTME OnTrack",
		description: "Campus navigation tool for new students at MPSTME to aid in finding their way around campus",
		image: "/devconnect.jpg",
		link: "#",
		tech: ["Flutter", "Node.js"],
    longDescription: "New students always find it difficult to navigate around the MPSTME campus. Our project, MPSTME OnTrack, is a campus navigation tool designed to help new students find their way around campus easily. The tool provides an interactive map of the campus, highlighting key locations such as lecture halls, and administrative offices. Students can search for specific locations or get directions from their current location to their desired destination, making it a comprehensive resource for new students.",
    private: false
	},
  {
    title: "Roast.io",
    image: "/roastio.png",
    link: "#",
    tech: ["React", "Groq", "Python Flask"],
    description: "Humorous roasts of a user's professional online presence using Groq to analyze GitHub and LinkedIn profiles.",
    longDescription: "Roast.io is a full-stack web application designed to deliver humorous and sarcastic roasts of a user's professional online presence. The application uses Groq to analyze a person's GitHub and LinkedIn profiles and generates witty and observational commentary. ",
    private: false
  },
  {
    title: "Lab Experiment Solver",
    image: "/labexp.png",
    link: "#",
    tech: ["Next.js", "Python Flask", "Tailwind CSS"],
    description: "A web application that solves lab experiments by providing step-by-step guidance and solutions.",
    longDescription: "The Lab Experiment Solver is a web application designed to assist students in solving lab experiments. The application provides step-by-step guidance and solutions for various lab experiments, making it easier for students to understand and complete their assignments. The app features a user-friendly interface, allowing students to easily navigate through different experiments and access the necessary information.",
    private: true
  }
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
										src={project.image}
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
													// Preload the dialog image
													const img = new Image();
													img.src = project.image;
												}}
											>
												View Project →
											</Button>
										</DialogTrigger>
										<DialogContent className="sm:max-w-2xl backdrop-blur-md bg-rgba-30% border border-white/10 shadow-lg">
											<DialogHeader>
												<DialogTitle className="text-xl font-bold">{project.title}</DialogTitle>
												<DialogDescription>
													<div className="mt-1 text-sm leading-relaxed font-bold">
														{project.description}
													</div>
													<div>
														<img
															src={project.image}
															alt={project.title}
															className="mt-4 w-full h-64 object-cover rounded-lg"
														/>
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
															Learn More</Button>
															</a>
													</div>
                          ): null}
												</DialogDescription>
											</DialogHeader>
										</DialogContent>
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