const { Card, CardHeader, CardTitle, CardContent } = require("./ui/card");
const { TabsContent } = require("./ui/tabs");

const SkillsTab = ({ skills, skillIcons }) => (
  <TabsContent value="skills" className="animate-fade-in-up">
    <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {skills.map((skillCategory, index) => (
        <Card
          key={index}
          className={`bg-gray-800/50 backdrop-blur-md border border-gray-700 shadow-2xl rounded-3xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-4 animate-fade-in-up`}
          style={{ animationDelay: skillCategory.delay }}
        >
          <CardHeader className="text-center pb-6">
            <div
              className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${skillCategory.gradient} flex items-center justify-center mb-6 shadow-lg animate-float`}
            >
              {skillCategory.icon}
            </div>
            <CardTitle className="text-2xl text-white">
              {skillCategory.category}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {skillCategory.items.map((skill, skillIndex) => (
              <div
                key={skillIndex}
                className="flex items-center space-x-4 p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 animate-slide-in-left"
                style={{
                  animationDelay: `${
                    parseInt(skillCategory.delay) + skillIndex * 100
                  }ms`,
                }}
              >
                <span
                  className="text-3xl animate-bounce"
                  style={{ animationDelay: `${skillIndex * 200}ms` }}
                >
                  {skillIcons[skill] || "🔧"}
                </span>
                <span className="font-medium text-gray-200 text-lg">
                  {skill}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  </TabsContent>
);

export default SkillsTab;
