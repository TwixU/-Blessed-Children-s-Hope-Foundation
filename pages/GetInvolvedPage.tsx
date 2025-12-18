import React from 'react';
import { usePageTitle } from '../hooks/usePageTitle';

const GetInvolvedPage: React.FC = () => {
    usePageTitle("Get Involved – Make a Difference with BCHF");

    return (
        <div className="bg-white">
            {/* Hero */}
            <div className="bg-secondaryBrand py-16 text-white text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold font-heading mb-4">Get Involved</h1>
                    <p className="text-xl max-w-2xl mx-auto opacity-90">
                        Join us in making a lasting difference. Whether you donate or volunteer, you are part of our hope family.
                    </p>
                </div>
            </div>

            {/* Donate Section */}
            <section id="donate" className="py-16 md:py-24 border-b border-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6">Donate</h2>
                        <p className="text-lg text-gray-600">
                            Your generosity funds critical programs – from buying textbooks and food supplies to building wells and classrooms. We ensure every dollar is used transparently.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-sky-50 p-8 rounded-xl text-center hover:shadow-lg transition-all border border-sky-100">
                            <div className="text-4xl mb-4">❤️</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">One-Time Gift</h3>
                            <p className="text-gray-600 mb-6">Make an immediate impact today.</p>
                            <button className="bg-primaryBrand text-white px-6 py-2 rounded-full font-semibold hover:bg-sky-600 transition-colors w-full">Donate Once</button>
                        </div>

                        <div className="bg-amber-50 p-8 rounded-xl text-center hover:shadow-lg transition-all border border-amber-100 transform md:-translate-y-4">
                            <div className="text-4xl mb-4">📅</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Monthly Support</h3>
                            <p className="text-gray-600 mb-6">Steady support allows us to plan ahead.</p>
                            <button className="bg-secondaryBrand text-white px-6 py-2 rounded-full font-semibold hover:bg-amber-600 transition-colors w-full">Give Monthly</button>
                        </div>

                        <div className="bg-sky-50 p-8 rounded-xl text-center hover:shadow-lg transition-all border border-sky-100">
                            <div className="text-4xl mb-4">🤝</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Sponsorship</h3>
                            <p className="text-gray-600 mb-6">Sponsor a child's education or a specific project.</p>
                            <button className="bg-primaryBrand text-white px-6 py-2 rounded-full font-semibold hover:bg-sky-600 transition-colors w-full">Sponsor Now</button>
                        </div>
                    </div>

                    <div className="mt-12 text-center text-gray-500 text-sm">
                        <p>Donations are secure and encrypted. Tax-deductible where applicable.</p>
                        <p className="mt-2">Prefer bank transfer? <a href="/contact" className="text-primaryBrand underline">Contact us</a> for details.</p>
                    </div>
                </div>
            </section>

            {/* Volunteer Section */}
            <section id="volunteer" className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6">Volunteer</h2>
                        <p className="text-lg text-gray-600">
                            Volunteers are the heartbeat of BCHF. Lend your skills on the ground in Kenya or remotely from home.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <div className="flex flex-col h-full bg-white p-8 rounded-xl shadow-sm">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Volunteer in Kenya 🇰🇪</h3>
                            <p className="text-gray-600 mb-6 flex-grow">
                                Join us in Nyamira! Teach at our academy, assist in the kitchen, help build facilities, or run health workshops. You'll live with the community and experience true Kenyan hospitality.
                            </p>
                            <a href="mailto:contact@blessedchildrenshopefoundation.org?subject=Volunteer%20In%20Kenya%20Inquiry" className="inline-block text-center border-2 border-primaryBrand text-primaryBrand px-6 py-3 rounded-lg font-bold hover:bg-primaryBrand hover:text-white transition-colors">Apply to Visit</a>
                        </div>

                        <div className="flex flex-col h-full bg-white p-8 rounded-xl shadow-sm">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Remote Volunteering 🌍</h3>
                            <p className="text-gray-600 mb-6 flex-grow">
                                Can't travel? Help from home! We need grant writers, social media advocates, graphic designers, and virtual mentors. Your digital skills can create real-world impact.
                            </p>
                            <a href="mailto:contact@blessedchildrenshopefoundation.org?subject=Remote%20Volunteer%20Inquiry" className="inline-block text-center border-2 border-primaryBrand text-primaryBrand px-6 py-3 rounded-lg font-bold hover:bg-primaryBrand hover:text-white transition-colors">Join Remotely</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Other Ways */}
            <section className="py-16">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-2xl font-bold font-heading text-gray-900 mb-6">Other Ways to Help</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full">Spread the Word</span>
                        <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full">Corporate Partnerships</span>
                        <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full">Attend Events</span>
                        <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full">Prayers & Encouragement</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GetInvolvedPage;
