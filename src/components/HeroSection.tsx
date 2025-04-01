
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 bg-gradient-to-b from-accent to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-xl font-medium text-primary mb-2">Hello, I'm</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Your Name</h1>
            <h3 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6">Web Developer</h3>
            <p className="text-lg mb-8 max-w-lg">
              A passionate developer focused on creating beautiful, functional, and user-centered digital experiences.
            </p>
            <div className="flex space-x-4">
              <Button asChild size="lg">
                <a href="#projects">View My Work</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block relative animate-fade-in">
            <div className="aspect-square rounded-full bg-primary/10 flex items-center justify-center overflow-hidden border-4 border-primary/20">
              <img 
                src="https://source.unsplash.com/random/400x400/?person" 
                alt="Profile" 
                className="w-[90%] h-[90%] rounded-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3">
              <div className="bg-primary/10 rounded-md p-2">
                <div className="flex space-x-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                </div>
                <div className="mt-2 font-mono text-xs">
                  <div className="text-primary">&lt;code&gt;</div>
                  <div className="ml-4">Hello World!</div>
                  <div className="text-primary">&lt;/code&gt;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
