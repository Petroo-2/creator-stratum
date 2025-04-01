
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-7 animate-slide-up">
            <p className="text-lg leading-relaxed mb-6">
              Hi! I'm <span className="font-bold text-primary">Obonyo Peter</span>, a passionate web developer with a love for creating functional and beautiful web experiences. With a strong foundation in both frontend and backend technologies, I enjoy bringing ideas to life through clean, efficient code.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              My journey in programming began during my university studies, where I discovered my passion for problem-solving and creating digital solutions. Since then, I've continuously expanded my knowledge and skills, staying up-to-date with the latest technologies and best practices.
            </p>
            
            <p className="text-lg leading-relaxed mb-8">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and community forums.
            </p>
            
            <Button asChild className="animate-pulse">
              <a href="/your-cv.pdf" download="Obonyo-Peter-CV.pdf">
                Download CV
              </a>
            </Button>
          </div>
          
          <div className="md:col-span-5 animate-slide-up">
            <div className="bg-accent rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Personal Information</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Name:</span>
                  <span>Obonyo Peter</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Email:</span>
                  <span>your.email@example.com</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Phone:</span>
                  <span>+254 700 000 000</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Location:</span>
                  <span>Nairobi, Kenya</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Languages:</span>
                  <span>English, Swahili</span>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-3">Follow Me</h4>
                <div className="flex space-x-4">
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">GitHub</a>
                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">LinkedIn</a>
                  <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">Twitter</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
