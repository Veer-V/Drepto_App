
import React, { useState } from 'react';

const ContactSection: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-dark-blue mb-4 animate-fade-in-up">Get In Touch</h2>
                    <p className="text-gray-600 text-lg mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        Have questions or feedback? We'd love to hear from you.
                    </p>
                </div>
                <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    {submitted ? (
                        <div className="text-center py-10">
                            <h3 className="text-2xl font-bold text-secondary mb-2">Thank You!</h3>
                            <p className="text-gray-600">Your message has been sent successfully.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input type="text" id="name" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary transition-all" />
                            </div>
                             <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input type="email" id="email" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary transition-all" />
                            </div>
                             <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea id="message" rows={4} required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary transition-all"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full bg-primary text-white text-lg font-semibold py-3 rounded-lg hover:bg-blue-600 transition-colors shadow-md">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
