import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <img src="public\images\aboutus.jpg" alt="Our Team" className="rounded-2xl shadow-xl w-full" />
          </div>
          <div className="animate-fade-in-up">
            <h2 className="text-4xl font-bold text-dark-blue mb-6">Our Mission</h2>
            <p className="text-gray-600 text-lg mb-4">
              At Drepto, our mission is to break down the barriers to quality healthcare. We believe everyone deserves access to medical expertise, regardless of their location or schedule.
            </p>
            <p className="text-gray-600 text-lg">
              We leverage cutting-edge technology to create a seamless, user-friendly telemedicine experience that prioritizes patient privacy, convenience, and well-being.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;