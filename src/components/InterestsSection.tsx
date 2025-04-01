
import { Card, CardContent } from '@/components/ui/card';

const InterestsSection = () => {
  const interests = [
    {
      title: 'Web Development',
      description: 'Exploring modern JavaScript frameworks and libraries to build interactive and responsive web applications.',
      icon: '👨‍💻'
    },
    {
      title: 'UI/UX Design',
      description: 'Creating intuitive and aesthetically pleasing user interfaces with a focus on user experience and accessibility.',
      icon: '🎨'
    },
    {
      title: 'Cloud Computing',
      description: 'Learning about cloud platforms and services to deploy scalable and resilient applications.',
      icon: '☁️'
    },
    {
      title: 'Machine Learning',
      description: 'Studying the basics of machine learning and its applications in web development and data analysis.',
      icon: '🤖'
    },
    {
      title: 'Open Source',
      description: 'Contributing to open-source projects and participating in developer communities to share knowledge.',
      icon: '🌐'
    },
    {
      title: 'Mobile Development',
      description: 'Building cross-platform mobile applications using frameworks like React Native and Flutter.',
      icon: '📱'
    }
  ];

  return (
    <section id="interests" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Interests & Passions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <Card key={index} className="card-hover animate-slide-up">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{interest.icon}</div>
                <h3 className="text-xl font-bold mb-2">{interest.title}</h3>
                <p className="text-muted-foreground">{interest.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Books I Recommend</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Clean Code',
                author: 'Robert C. Martin',
                cover: 'https://source.unsplash.com/random/300x450/?book'
              },
              {
                title: 'Eloquent JavaScript',
                author: 'Marijn Haverbeke',
                cover: 'https://source.unsplash.com/random/300x451/?book'
              },
              {
                title: 'Don\'t Make Me Think',
                author: 'Steve Krug',
                cover: 'https://source.unsplash.com/random/300x452/?book'
              }
            ].map((book, index) => (
              <div key={index} className="flex flex-col items-center animate-slide-up">
                <div className="w-48 h-64 overflow-hidden rounded-md shadow-lg mb-4">
                  <img 
                    src={book.cover} 
                    alt={book.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-bold">{book.title}</h4>
                <p className="text-muted-foreground">by {book.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
