import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';

const ThankYouPage: React.FC = () => {
    usePageTitle("Thank You – Blessed Children's Hope Foundation");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-[60vh] flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full text-center space-y-8">
                <div>
                    <span className="text-6xl" role="img" aria-label="party">🎉</span>
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900 font-heading">
                        Message Sent!
                    </h2>
                    <p className="mt-2 text-lg text-gray-600">
                        Thank you for reaching out to Blessed Children's Hope Foundation. We have received your message and will get back to you as soon as possible.
                    </p>
                </div>
                <div className="mt-8">
                    <Link
                        to="/"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primaryBrand hover:bg-sky-600 md:text-lg transition-colors"
                    >
                        Return to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ThankYouPage;
