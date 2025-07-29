import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Title 1",
    description: "A description for project 1",
    image: "/devconnect.jpg",
    link: "#",
  },
  {
    title: "Title 2",
    description: "A description for project 2",
    image: "/waste-sorter.jpg",
    link: "#",
  },
  {
    title: "Title 3",
    description: "A description for project 3",
    image: "/assist-shoe.jpg",
    link: "#",
  },
  {
    title: "Title 4",
    description: "A description for project 4",
    image: "/gdsc-portfolio.jpg",
    link: "#",
  },
  {
    title: "Title 5",
    description: "A description for project 5",
    image: "/gdsc-portfolio.jpg",
    link: "#",
  },
  {
    title: "Title 6",
    description: "A description for project 6",
    image: "/gdsc-portfolio.jpg",
    link: "#",
  },
];

export function Projects() {
  return (
    <section className="w-full py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
      </div>

      <div className="mx-auto max-w-screen-xl px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="flex flex-col justify-between overflow-hidden rounded-2xl border hover:shadow-xl transition-shadow w-full max-w-xs mx-auto"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover"
            />
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardFooter className="px-6 pb-4">
              <Button asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  Visit Project
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
