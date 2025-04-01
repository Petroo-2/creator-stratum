
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-accent py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-xl font-bold text-primary">Obonyo Peter</a>
            <p className="text-muted-foreground mt-1">Web Developer</p>
          </div>
          
          <div className="text-center md:text-right">
            <div className="flex space-x-6 mb-4 justify-center md:justify-end">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                GitHub
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Twitter
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Instagram
              </a>
            </div>
            
            <div className="text-sm text-muted-foreground">
              © {currentYear} Obonyo Peter. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
