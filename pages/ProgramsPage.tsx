import React from 'react';
import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';

const ProgramsPage: React.FC = () => {
    usePageTitle("Our Programs – How We Bring Hope in Action");

    return (
        <div className="bg-white">
            {/* Hero */}
            <div className="bg-primaryBrand py-16 text-white text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold font-heading mb-4">Our Programs</h1>
                    <p className="text-xl max-w-2xl mx-auto opacity-90">
                        Comprehensive programs addressing the critical needs of children and families in Nyamira, Kenya.
                    </p>
                </div>
            </div>

            {/* Education */}
            <section id="education" className="py-16 md:py-24 border-b border-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="md:w-1/3">
                            <div className="bg-sky-100 p-8 rounded-2xl h-full flex flex-col justify-center text-center">
                                <span className="text-6xl mb-4">📚</span>
                                <h2 className="text-2xl font-bold text-gray-900">Education & Orphan Care</h2>
                            </div>
                        </div>
                        <div className="md:w-2/3">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-wide text-primaryBrand">The Goal</h3>
                            <p className="text-gray-700 mb-6">
                                To provide quality education and a nurturing environment for orphans and vulnerable children at our <strong>Benevolent Hope Academy</strong>.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-wide text-primaryBrand">Who It Serves</h3>
                            <p className="text-gray-700 mb-6">
                                Over 140 children annually, from preschool to eighth grade. We provide education, uniforms, materials, and two meals a day regardless of ability to pay.
                            </p>

                            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primaryBrand">
                                <h4 className="font-bold text-gray-900 mb-2">How You Can Help</h4>
                                <p className="text-gray-600">
                                    Just <strong>$30</strong> can provide a month of schooling and meals for one child. Sponsor a child or donate supplies today.
                                </p>
                                <Link to="/get-involved" className="mt-4 inline-block text-primaryBrand font-semibold hover:underline">Sponsor a Child &rarr;</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Health */}
            <section id="health" className="py-16 md:py-24 border-b border-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row-reverse gap-12">
                        <div className="md:w-1/3">
                            <div className="bg-red-50 p-8 rounded-2xl h-full flex flex-col justify-center text-center">
                                <span className="text-6xl mb-4">🍎</span>
                                <h2 className="text-2xl font-bold text-gray-900">Health & Nutrition</h2>
                            </div>
                        </div>
                        <div className="md:w-2/3">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-wide text-red-500">The Goal</h3>
                            <p className="text-gray-700 mb-6">
                                To ensure no child goes hungry and to minimize preventable diseases. Good health underpins education.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-wide text-red-500">Key Outcomes</h3>
                            <p className="text-gray-700 mb-6">
                                Daily nutritious meals have improved student concentration. Health clinics and HIV/AIDS awareness have reduced stigma and illness in the community.
                            </p>

                            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-red-500">
                                <h4 className="font-bold text-gray-900 mb-2">How You Can Help</h4>
                                <p className="text-gray-600">
                                    <strong>$50</strong> can provide balanced lunches for 10 children for a week. Or contribute to medial supplies and health camps.
                                </p>
                                <Link to="/get-involved" className="mt-4 inline-block text-red-500 font-semibold hover:underline">Support Nutrition &rarr;</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Water */}
            <section id="water" className="py-16 md:py-24 border-b border-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="md:w-1/3">
                            <div className="bg-blue-50 p-8 rounded-2xl h-full flex flex-col justify-center text-center">
                                <span className="text-6xl mb-4">💧</span>
                                <h2 className="text-2xl font-bold text-gray-900">Clean Water</h2>
                            </div>
                        </div>
                        <div className="md:w-2/3">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-wide text-blue-500">The Goal</h3>
                            <p className="text-gray-700 mb-6">
                                To provide safe drinking water, reducing water-borne diseases and freeing children (especially girls) from walking miles to fetch water.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-wide text-blue-500">Impact</h3>
                            <p className="text-gray-700 mb-6">
                                We install boreholes and wells. Access to clean water has dropped typhoid rates and allowed kids to attend school instead of collecting water.
                            </p>

                            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                                <h4 className="font-bold text-gray-900 mb-2">How You Can Help</h4>
                                <p className="text-gray-600">
                                    <strong>$100</strong> can provide materials for a protected spring or filters. Help us turn on the tap of hope.
                                </p>
                                <Link to="/get-involved" className="mt-4 inline-block text-blue-500 font-semibold hover:underline">Donate for Water &rarr;</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Empowerment */}
            <section id="empowerment" className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row-reverse gap-12">
                        <div className="md:w-1/3">
                            <div className="bg-amber-50 p-8 rounded-2xl h-full flex flex-col justify-center text-center">
                                <span className="text-6xl mb-4">🌱</span>
                                <h2 className="text-2xl font-bold text-gray-900">Empowerment</h2>
                            </div>
                        </div>
                        <div className="md:w-2/3">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-wide text-secondaryBrand">The Goal</h3>
                            <p className="text-gray-700 mb-6">
                                To empower youths and widows with skills to generate income. Self-sufficiency is key to long-term change.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-wide text-secondaryBrand">Action</h3>
                            <p className="text-gray-700 mb-6">
                                Vocational training (tailoring, farming, carpentry) and micro-finance. Widowed mothers are learning to make school uniforms, earning income to support their families.
                            </p>

                            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-secondaryBrand">
                                <h4 className="font-bold text-gray-900 mb-2">How You Can Help</h4>
                                <p className="text-gray-600">
                                    <strong>$200</strong> can fund a training workshop or startup toolkit. Invest in the future self-reliance of a family.
                                </p>
                                <Link to="/get-involved" className="mt-4 inline-block text-secondaryBrand font-semibold hover:underline">Empower a Family &rarr;</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-900 py-12 text-center text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold mb-4">Every program is interlinked.</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                        Education gives knowledge, health gives strength, water gives life, and empowerment gives stability.
                    </p>
                    <Link to="/get-involved" className="bg-primaryBrand hover:bg-sky-600 text-white px-8 py-3 rounded-md font-bold transition-colors">
                        Support Our Programs
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ProgramsPage;
