
import { Card, CardContent } from '@/components/ui/card';

const SkillsSection = () => {
  const categories = [
    {
      title: 'Programming Languages',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Python', 'Java']
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['React', 'Angular', 'Vue.js', 'Node.js', 'Express', 'Django']
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'VS Code', 'Docker', 'AWS', 'Firebase']
    },
    {
      title: 'Design & UI/UX',
      skills: ['Figma', 'Adobe XD', 'Responsive Design', 'CSS Frameworks', 'UI Animation']
    }
  ];

  return (
    <section id="skills" className="bg-accent/50 py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="card-hover animate-slide-up">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="bg-background rounded-full px-3 py-1 text-sm font-medium border border-border"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Technical Proficiency</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { skill: 'Frontend Development', percentage: 90 },
              { skill: 'Backend Development', percentage: 80 },
              { skill: 'UI/UX Design', percentage: 75 },
              { skill: 'Database Management', percentage: 85 },
              { skill: 'DevOps', percentage: 70 },
              { skill: 'Mobile Development', percentage: 65 }
            ].map((item, index) => (
              <div key={index} className="animate-slide-up">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{item.skill}</span>
                  <span className="text-primary font-medium">{item.percentage}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2.5">
                  <div 
                    className="bg-primary h-2.5 rounded-full" 
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
