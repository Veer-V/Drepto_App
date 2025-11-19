import React from 'react';

const FeatureCard: React.FC<{ icon: React.ReactElement; title: string; description: string; delay: string }> = ({ icon, title, description, delay }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: delay }}>
    <div className="bg-light-blue text-primary w-16 h-16 rounded-full flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-dark-blue mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const VideoIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>;
const FileTextIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>;
const ShieldIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;


const ProductSection: React.FC = () => {
  const features = [
    {
      icon: <VideoIcon />,
      title: 'Video Consultations',
      description: 'High-quality, secure video calls with doctors from the comfort of your home.',
      delay: '0.2s'
    },
    {
      icon: <FileTextIcon />,
      title: 'Digital Prescriptions',
      description: 'Receive e-prescriptions directly in your app, ready to be used at any pharmacy.',
      delay: '0.4s'
    },
    {
      icon: <ShieldIcon />,
      title: 'Secure Health Records',
      description: 'Your medical history and records are encrypted and stored securely, accessible only to you.',
      delay: '0.6s'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-dark-blue mb-4 animate-fade-in-up">Everything you need in one app</h2>
          <p className="text-gray-600 text-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Our platform is designed to make healthcare simple, accessible, and efficient for everyone.
          </p>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;