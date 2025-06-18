import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { TabsContent } from "./ui/tabs";
// import lb from "../../public/lb.png";
// import memo from "../../public/memo.png";

// const fallbackImages = [memo];

// console.log("fa", fallbackImages);
const ProjectsTab = ({ projects, skillIcons, setSelectedImage }) => (
  <TabsContent value="work" className="animate-fade-in-up">
    <div className="grid lg:grid-cols-2 gap-10 max-w-8xl mx-auto">
      {projects.map((project, index) => (
        <Card
          key={index}
          className={`overflow-hidden group hover:shadow-3xl transition-all duration-700 bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-3xl ${
            project.featured
              ? "lg:col-span-2 transform hover:scale-105"
              : "transform hover:scale-105"
          } animate-fade-in-up`}
          style={{ animationDelay: `${index * 150}ms` }}
        >
          <div className="relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className={`w-full object-contain lg:object-cover group-hover:scale-110 transition-transform duration-700 cursor-pointer ${
                project.featured ? "h-80" : "h-64"
              }`}
              onClick={() => setSelectedImage(project)}
            />

            <div
              className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
            />
          </div>
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center justify-between text-2xl">
              <span className="bg-gradient-to-r flex flex-wrap lg:whitespace-normal from-white to-gray-300 bg-clip-text text-transparent">
                {project.title}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 mb-6 flex flex-wrap lg:whitespace-normal leading-relaxed text-lg">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, techIndex) => (
                <Badge
                  key={techIndex}
                  className={`bg-gradient-to-r w-full md:w-auto ${project.gradient} text-white border-0 shadow-md text-base px-4 py-2 hover:scale-105 transition-transform animate-fade-in-up`}
                  style={{
                    animationDelay: `${index * 150 + techIndex * 50}ms`,
                  }}
                >
                  <span className="mr-2">{skillIcons[tech] || "🔧"}</span>
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </TabsContent>
);
export default ProjectsTab;
