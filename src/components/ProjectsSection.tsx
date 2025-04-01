
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      image: 'https://source.unsplash.com/random/600x400/?ecommerce',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Task Management App',
      image: 'https://source.unsplash.com/random/600x400/?tasks',
      description: 'A productivity application for managing tasks and projects. Includes features such as task creation, deadlines, priority levels, and team collaboration.',
      technologies: ['Vue.js', 'Firebase', 'Vuex', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Weather Dashboard',
      image: 'https://source.unsplash.com/random/600x400/?weather',
      description: 'An interactive weather application that provides real-time weather data and forecasts for locations worldwide using the OpenWeatherMap API.',
      technologies: ['JavaScript', 'HTML/CSS', 'REST API', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Portfolio Website',
      image: 'https://source.unsplash.com/random/600x400/?portfolio',
      description: 'A responsive personal portfolio website built with modern web technologies to showcase skills, projects, and professional experience.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="bg-accent py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover overflow-hidden animate-slide-up">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3 mt-4">
                  <Button asChild variant="default" size="sm">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      GitHub Repo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              See More Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
