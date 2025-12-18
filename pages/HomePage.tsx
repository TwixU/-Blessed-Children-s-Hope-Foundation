import React from 'react';
import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';

const Hero: React.FC = () => (
    <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0">
            <img
                src="/images/hero_children_playing.png"
                alt="Happy children playing in a park"
                className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/40 to-transparent"></div>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
            <h1 className="text-4xl md:text-6xl font-extrabold font-heading tracking-tight leading-tight mb-6 max-w-3xl">
                Bringing Hope to Disadvantaged Children in Kenya
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl">
                Join us in creating lasting change and bringing hope to communities in Nyamira, Kenya. Together, we empower orphans and vulnerable youth with the support they need for a brighter future.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                    to="/get-involved"
                    className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primaryBrand hover:bg-sky-600 md:text-lg transition-colors shadow-lg"
                >
                    Donate Now
                </Link>
                <Link
                    to="/about"
                    className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900 md:text-lg transition-colors"
                >
                    Learn More
                </Link>
            </div>
        </div>
    </div>
);

const ImpactSection: React.FC = () => (
    <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6">Our Impact</h2>
                <p className="text-lg text-gray-600">
                    For over a decade, BCHF has been a beacon of hope in the community. Founded in 2009, we have 10+ years of impact in Nyamira County.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div className="p-6 bg-sky-50 rounded-xl">
                    <div className="text-5xl font-bold text-primaryBrand mb-2">10+</div>
                    <div className="text-gray-700 font-medium">Years of Service</div>
                </div>
                <div className="p-6 bg-amber-50 rounded-xl">
                    <div className="text-5xl font-bold text-secondaryBrand mb-2">140+</div>
                    <div className="text-gray-700 font-medium">Children Educated Annually</div>
                </div>
                <div className="p-6 bg-sky-50 rounded-xl">
                    <div className="text-5xl font-bold text-primaryBrand mb-2">100s</div>
                    <div className="text-gray-700 font-medium">Families Supported</div>
                </div>
                <div className="p-6 bg-amber-50 rounded-xl">
                    <div className="text-5xl font-bold text-secondaryBrand mb-2">Infinite</div>
                    <div className="text-gray-700 font-medium">Hope Created</div>
                </div>
            </div>

            <div className="mt-12 text-center max-w-4xl mx-auto text-gray-600">
                <p>
                    Our initiatives have provided education to over 140 children annually at our Benevolent Hope Academy, ensuring they learn and grow in a safe environment. We also serve hundreds of families through health, nutrition, and clean water projects, reducing hunger and disease in rural villages.
                </p>
            </div>
        </div>
    </section>
);

const WhatWeDoSummary: React.FC = () => (
    <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold font-heading text-gray-900 mb-4">What We Do</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    We believe in a holistic approach to tackling poverty, focusing on four key pillars of community development.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {/* Education */}
                <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="h-12 w-12 bg-primaryBrand/10 rounded-lg flex items-center justify-center mb-6">
                        <svg className="h-6 w-6 text-primaryBrand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Education</h3>
                    <p className="text-gray-600 mb-4">
                        We operate the Benevolent Hope Academy, offering free or affordable education, meals, and mentorship to orphans and disadvantaged children. This foundation of learning opens doors to brighter futures.
                    </p>
                    <Link to="/programs" className="text-secondaryBrand font-medium hover:text-amber-600 flex items-center">
                        Learn more <span aria-hidden="true" className="ml-1">&rarr;</span>
                    </Link>
                </div>

                {/* Health */}
                <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="h-12 w-12 bg-secondaryBrand/10 rounded-lg flex items-center justify-center mb-6">
                        <svg className="h-6 w-6 text-secondaryBrand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Health & Nutrition</h3>
                    <p className="text-gray-600 mb-4">
                        Combatting child hunger with feeding programs and improving health through medical camps and HIV/AIDS awareness. By keeping children healthy, we build a stronger community.
                    </p>
                    <Link to="/programs" className="text-secondaryBrand font-medium hover:text-amber-600 flex items-center">
                        Learn more <span aria-hidden="true" className="ml-1">&rarr;</span>
                    </Link>
                </div>

                {/* Water */}
                <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="h-12 w-12 bg-primaryBrand/10 rounded-lg flex items-center justify-center mb-6">
                        <svg className="h-6 w-6 text-primaryBrand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 19v-4a2 2 0 00-2-2h-1l-3.328-11.09a2 2 0 00-3.806 0L5 13H4a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2z" /></svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Clean Water Projects</h3>
                    <p className="text-gray-600 mb-4">
                        Access to safe water is life-changing. We build wells and implement clean water initiatives to reduce disease and the burden on children, especially girls, who walk miles for water.
                    </p>
                    <Link to="/programs" className="text-secondaryBrand font-medium hover:text-amber-600 flex items-center">
                        Learn more <span aria-hidden="true" className="ml-1">&rarr;</span>
                    </Link>
                </div>

                {/* Empowerment */}
                <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="h-12 w-12 bg-secondaryBrand/10 rounded-lg flex items-center justify-center mb-6">
                        <svg className="h-6 w-6 text-secondaryBrand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Community Empowerment</h3>
                    <p className="text-gray-600 mb-4">
                        Tackling poverty at its roots by helping widows and youth gain skills and income opportunities through vocational training and micro-finance projects.
                    </p>
                    <Link to="/programs" className="text-secondaryBrand font-medium hover:text-amber-600 flex items-center">
                        Learn more <span aria-hidden="true" className="ml-1">&rarr;</span>
                    </Link>
                </div>
            </div>
        </div>
    </section>
);

const CallToAction: React.FC = () => (
    <section className="bg-primaryBrand py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-3xl font-bold font-heading mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-sky-50">
                Your support can change the lives of children and families in need. Join our BCHF family working toward a Kenya where every child has hope and opportunity.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                    to="/get-involved"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-bold rounded-full text-primaryBrand bg-white hover:bg-sky-50 transition-colors shadow-lg"
                >
                    Donate Now
                </Link>
                <Link
                    to="/get-involved" // Assuming Volunteer is also under Get Involved
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-bold rounded-full text-white hover:bg-white/10 transition-colors"
                >
                    Volunteer
                </Link>
            </div>
        </div>
    </section>
);

const HomePage: React.FC = () => {
    usePageTitle("Blessed Children's Hope Foundation – Hope for Disadvantaged Children in Kenya");

    return (
        <>
            <Hero />
            <ImpactSection />
            <WhatWeDoSummary />
            <CallToAction />
        </>
    );
};

export default HomePage;
