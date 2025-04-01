
import { Card, CardContent } from '@/components/ui/card';

const EducationSection = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Nairobi',
      duration: '2018 - 2022',
      description: 'Graduated with First Class Honors. Specialization in Software Engineering and Artificial Intelligence.'
    },
    {
      degree: 'Web Development Bootcamp',
      institution: 'PLP Academy',
      duration: '2023',
      description: 'Intensive 12-week program focusing on modern web development frameworks and best practices.'
    },
    {
      degree: 'High School Diploma',
      institution: 'Alliance High School',
      duration: '2014 - 2018',
      description: 'Graduated with an A in Computer Studies and Mathematics.'
    }
  ];

  const certifications = [
    {
      title: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      year: '2023',
      credential: 'AWS-DEV-12345'
    },
    {
      title: 'Google Professional Cloud Developer',
      issuer: 'Google Cloud',
      year: '2022',
      credential: 'GCP-DEV-67890'
    },
    {
      title: 'React Developer Certification',
      issuer: 'Meta',
      year: '2022',
      credential: 'META-REACT-54321'
    }
  ];

  return (
    <section id="education" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Education & Certifications</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-6">Education</h3>
            
            <div className="relative border-l-2 border-primary pl-8 ml-4 space-y-10">
              {education.map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[41px] mt-1.5 w-5 h-5 rounded-full bg-primary"></div>
                  <div className="mb-1 text-lg font-bold">{item.degree}</div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-primary font-medium">{item.institution}</span>
                    <span className="text-muted-foreground">{item.duration}</span>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-6">Certifications</h3>
            
            <div className="grid grid-cols-1 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6">
                    <div className="text-lg font-bold mb-1">{cert.title}</div>
                    <div className="text-primary mb-2">{cert.issuer}</div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Issued: {cert.year}</span>
                      <span>Credential ID: {cert.credential}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-6">Additional Training</h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Data Structures and Algorithms Specialization, Coursera</li>
                <li>Full-Stack JavaScript Development, Udemy</li>
                <li>UI/UX Design Fundamentals, Udacity</li>
                <li>Machine Learning Basics, edX</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
