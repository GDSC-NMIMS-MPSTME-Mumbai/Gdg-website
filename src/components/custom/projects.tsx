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
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

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
														Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
													</div>
													<div className="p-4 pt-1">
														<a href="https://github.com" target="_blank">
														<Button className="w-full transition-all duration-300 mt-4">
															Learn More</Button>
															</a>
													</div>
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