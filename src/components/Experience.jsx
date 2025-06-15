import { TabsContent } from "./ui/tabs";

const { Badge } = require("./ui/badge");
const {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} = require("./ui/card");
const { Building, Calendar, MapPin } = require("lucide-react");

const ExperienceTab = ({ workExperience, skillIcons }) => (
  <TabsContent value="experience" className="animate-fade-in-up">
    <div className="space-y-12 max-w-6xl mx-auto">
      {workExperience.map((job, index) => (
        <Card
          key={index}
          className={`bg-gray-800/50 backdrop-blur-md border border-gray-700 shadow-2xl rounded-3xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up`}
          style={{ animationDelay: `${index * 200}ms` }}
        >
          <CardHeader className="relative overflow-hidden">
            <div
              className={`absolute inset-0 bg-gradient-to-r ${job.gradient} opacity-10`}
            />
            <div className="relative flex flex-col lg:flex-row justify-between items-start gap-6">
              <div className="flex-1">
                <div className="flex items-center space-x-6 mb-4">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${job.gradient} flex items-center justify-center shadow-lg animate-pulse`}
                  >
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl text-white mb-2">
                      {job.position}
                    </CardTitle>
                    <CardDescription className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                      {job.company}
                    </CardDescription>
                  </div>
                </div>
              </div>
              <div className="text-right space-y-2">
                <div className="flex items-center space-x-2 text-gray-300">
                  <Calendar className="w-5 h-5 text-blue-400" />
                  <span className="font-medium text-lg">{job.duration}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <MapPin className="w-5 h-5 text-green-400" />
                  <span>{job.location}</span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <div className="mb-8">
              <ul className="space-y-4 text-gray-300 leading-relaxed text-lg">
                {Array.isArray(job.description) ? (
                  job.description.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="flex items-start space-x-3 animate-fade-in-up"
                      style={{
                        animationDelay: `${index * 200 + pointIndex * 100}ms`,
                      }}
                    >
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${job.gradient} mt-3 flex-shrink-0`}
                      />
                      <span>{point}</span>
                    </li>
                  ))
                ) : (
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {job.description}
                  </p>
                )}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3">
              {job.technologies.map((tech, techIndex) => (
                <Badge
                  key={techIndex}
                  className={`bg-gradient-to-r ${job.gradient} text-white border-0 shadow-md text-base px-4 py-2 animate-fade-in-up hover:scale-105 transition-transform`}
                  style={{
                    animationDelay: `${index * 200 + techIndex * 50}ms`,
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

export default ExperienceTab;
