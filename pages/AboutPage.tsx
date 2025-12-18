import React from 'react';
import { usePageTitle } from '../hooks/usePageTitle';

const AboutPage: React.FC = () => {
    usePageTitle("About Us – Blessed Children's Hope Foundation");

    return (
        <div className="bg-white">
            {/* Header Section */}
            <div className="bg-gray-50 py-12 md:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold font-heading text-gray-900 mb-4">About Us</h1>
                    <p className="max-w-2xl mx-auto text-xl text-gray-500">
                        Learn about our mission, history, and the values that drive us to serve the most vulnerable.
                    </p>
                </div>
            </div>

            {/* Mission & Vision */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6">Our Mission & Vision</h2>
                            <div className="prose prose-lg text-gray-600">
                                <p className="mb-4">
                                    <strong>Mission:</strong> To alleviate suffering and improve the quality of life for disadvantaged children and families in Kenya through love, education, and community-driven support.
                                </p>
                                <p>
                                    <strong>Vision:</strong> We envision a future where every orphaned or vulnerable child has access to education, adequate nutrition, healthcare, and the opportunity to realize their full potential.
                                </p>
                            </div>
                        </div>
                        <div className="bg-amber-50 p-8 rounded-xl border border-amber-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Core Values</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-secondaryBrand mr-2">✓</span>
                                    <span className="text-gray-700"><strong>Hope and Faith:</strong> Inspired by strong principles of faith and goodwill.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-secondaryBrand mr-2">✓</span>
                                    <span className="text-gray-700"><strong>Compassion:</strong> Treating every child with love, dignity, and respect.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-secondaryBrand mr-2">✓</span>
                                    <span className="text-gray-700"><strong>Equality:</strong> Education and health are fundamental rights for all.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-secondaryBrand mr-2">✓</span>
                                    <span className="text-gray-700"><strong>Community Partnership:</strong> Working hand-in-hand with locals.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-secondaryBrand mr-2">✓</span>
                                    <span className="text-gray-700"><strong>Integrity:</strong> Transparency and accountability in all we do.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="bg-gray-50 py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold font-heading text-gray-900 mb-8 text-center">Our Story</h2>
                        <div className="prose prose-lg text-gray-600">
                            <p>
                                Blessed Children's Hope Foundation (BCHF) was founded by <strong>Andrew Maina Mong’are</strong> in 2009. Andrew grew up in Nyamira, witnessing firsthand the challenges faced by orphans and families affected by extreme poverty and HIV/AIDS. Determined to make a difference, he rallied like-minded community members to form BCHF.
                            </p>
                            <p>
                                In 2012, the organization was officially registered as a Non-Profit. What began as a small act of kindness—providing school supplies—blossomed into a multifaceted charity.
                            </p>
                            <p>
                                Over time, our programs expanded:
                            </p>
                            <ul>
                                <li>We established <strong>Benevolent Hope Academy</strong> for education.</li>
                                <li>We dug wells when we saw women walking miles for water.</li>
                                <li>We started feeding programs to combat hunger.</li>
                                <li>We introduced healthcare outreach as illness impacted families.</li>
                            </ul>
                            <p>
                                Each step has been driven by real needs on the ground and a passion to uplift our community.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Our Work Matters */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="md:flex md:space-x-12">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            {/* Placeholder for an image provided by user later or generic */}
                            <div className="bg-gray-200 h-64 md:h-full rounded-lg flex items-center justify-center">
                                <span className="text-gray-400 font-medium">Community Impact Image</span>
                            </div>
                        </div>
                        <div className="md:w-1/2 flex flex-col justify-center">
                            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6">Why Our Work Matters</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Nyamira County faces high rates of poverty. Many children have lost parents to HIV/AIDS, leaving relatives struggling to care for them. Without support, these children risk malnutrition and dropping out of school.
                            </p>
                            <p className="text-lg text-gray-600">
                                BCHF breaks that cycle. By keeping children healthy and educated, we create ripple effects. Educated children grow into empowered adults. Families with water and income opportunities thrive. Every success story—from a child learning to read to a widow starting a business—moves us closer to a world where hope defeats despair.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section className="bg-sky-50 py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold font-heading text-gray-900 mb-12">Our Team and Leadership</h2>
                    <div className="max-w-4xl mx-auto text-lg text-gray-700">
                        <p className="mb-6">
                            BCHF is led by a dedicated team. <strong>Andrew Maina Mong’are</strong>, Founder & Executive Director, serves on the ground in Kenya. Under his leadership, a passionate local staff of teachers, program coordinators, and outreach workers run daily operations.
                        </p>
                        <p>
                            We are also supported by international volunteers and a board of advisors who help with governance and fundraising. We operate with professionalism, transparency, and a personal touch—united by the single goal of making life better for the children we serve.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
