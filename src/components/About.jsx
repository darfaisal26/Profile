import { Star, Zap } from "lucide-react";

const { Card, CardHeader, CardTitle, CardContent } = require("./ui/card");
const { TabsContent } = require("./ui/tabs");

const AboutTab = ({ personalInfo }) => (

  <TabsContent value="about" className="animate-fade-in-up">
    <Card className="max-w-5xl mx-auto bg-gray-800/50 backdrop-blur-md border border-gray-700 shadow-2xl rounded-3xl overflow-hidden">
      <CardHeader className="text-center pb-8 bg-gradient-to-r from-cyan-500/10 to-purple-600/10">
        <CardTitle className="text-4xl bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
          About Me
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center p-12">
        <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
          {personalInfo.bio}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              number: "2+",
              label: "Years Experience",
              icon: <Star className="w-8 h-8" />,
              gradient: "from-yellow-400 to-orange-500",
            },
            {
              number: "5+",
              label: "Live Projects Completed",
              icon: <Zap className="w-8 h-8" />,
              gradient: "from-green-400 to-emerald-500",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className={`text-center p-8 rounded-2xl bg-gradient-to-r ${stat.gradient} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex justify-center mb-4 text-white">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-white/90 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </TabsContent>
);

export default AboutTab