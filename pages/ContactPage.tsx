import React from 'react';
import { usePageTitle } from '../hooks/usePageTitle';

const ContactPage: React.FC = () => {
    usePageTitle("Contact Us – Blessed Children's Hope Foundation");

    return (
        <div className="bg-white">
            <div className="bg-gray-50 py-12 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold font-heading text-gray-900 mb-4">Contact Us</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We’d love to hear from you! Whether you have questions, want to volunteer, or just say hello.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-2xl font-bold font-heading text-gray-900 mb-8">Get In Touch</h2>

                        <div className="space-y-8">
                            <div className="flex items-start">
                                <span className="flex-shrink-0 bg-primaryBrand/10 p-3 rounded-lg text-primaryBrand mr-4">
                                    📍
                                </span>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">Operational Office (Kenya)</h3>
                                    <p className="text-gray-600">City Square, Nyamira, Kenya</p>
                                    <p className="text-sm text-gray-500 mt-1">Visit us! Please arrange in advance.</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <span className="flex-shrink-0 bg-primaryBrand/10 p-3 rounded-lg text-primaryBrand mr-4">
                                    🏢
                                </span>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">Registered Office (UK)</h3>
                                    <p className="text-gray-600">3rd Floor, 86-90 Paul Street, London EC2A 4NE, United Kingdom</p>
                                    <p className="text-sm text-gray-500 mt-1">Administrative only.</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <span className="flex-shrink-0 bg-primaryBrand/10 p-3 rounded-lg text-primaryBrand mr-4">
                                    📧
                                </span>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">Email</h3>
                                    <a href="mailto:contact@blessedchildrenshopefoundation.org" className="text-primaryBrand hover:underline">contact@blessedchildrenshopefoundation.org</a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <span className="flex-shrink-0 bg-primaryBrand/10 p-3 rounded-lg text-primaryBrand mr-4">
                                    📞
                                </span>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">Phone</h3>
                                    <p className="text-gray-600">+61 408 319 260</p>
                                    <p className="text-sm text-gray-500 mt-1">WhatsApp enabled. (Kenya time GMT+3)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                        <h2 className="text-2xl font-bold font-heading text-gray-900 mb-6">Send a Message</h2>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primaryBrand focus:border-primaryBrand" placeholder="Your Name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primaryBrand focus:border-primaryBrand" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                <select id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primaryBrand focus:border-primaryBrand">
                                    <option>General Inquiry</option>
                                    <option>Volunteering</option>
                                    <option>Donation</option>
                                    <option>Partnership</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primaryBrand focus:border-primaryBrand" placeholder="How can we help?"></textarea>
                            </div>
                            <button type="button" className="w-full bg-primaryBrand text-white py-3 rounded-md font-bold hover:bg-sky-600 transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
