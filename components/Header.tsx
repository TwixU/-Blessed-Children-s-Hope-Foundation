import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Programs', href: '/programs' },
        { name: 'Get Involved', href: '/get-involved' },
        { name: 'Contact Us', href: '/contact' },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
                <div className="w-full py-4 flex items-center justify-between border-b border-indigo-500 lg:border-none">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center space-x-2">
                            <span className="sr-only">Blessed Children's Hope Foundation</span>
                            {/* Placeholder for Logo if available, using text for now which is fine */}
                            <div className="h-10 w-10 bg-primaryBrand rounded-full flex items-center justify-center text-white font-bold text-xl">
                                B
                            </div>
                            <span className="text-xl font-bold text-gray-900 hidden sm:block font-heading">
                                Blessed Children's Hope Foundation
                            </span>
                        </Link>
                    </div>
                    <div className="hidden lg:flex items-center space-x-8">
                        {navigation.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={`text-base font-medium ${isActive(link.href) ? 'text-primaryBrand' : 'text-gray-500 hover:text-gray-900'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/get-involved"
                            className="inline-block bg-secondaryBrand py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-amber-600"
                        >
                            Donate Now
                        </Link>
                    </div>
                    <div className="lg:hidden">
                        <button
                            type="button"
                            className="bg-white p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className="sr-only">Open menu</span>
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {isOpen && (
                    <div className="lg:hidden py-4">
                        <div className="flex flex-col space-y-2">
                            {navigation.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.href)
                                            ? 'bg-indigo-50 text-indigo-700'
                                            : 'text-gray-900 hover:bg-gray-50'
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/get-involved"
                                className="block w-full text-center bg-secondaryBrand py-3 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-amber-600"
                                onClick={() => setIsOpen(false)}
                            >
                                Donate Now
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
