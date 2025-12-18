import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Organization Info */}
                    <div>
                        <h3 className="text-lg font-bold font-heading text-white tracking-wider uppercase mb-4">
                            Blessed Children's Hope Foundation
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Bringing hope and lasting change to disadvantaged children in Kenya.
                        </p>
                        <div className="text-gray-400 text-sm space-y-1">
                            <p>City Square, Nyamira, Kenya</p>
                            <p>+61 408 319 260</p>
                            <p>contact@blessedchildrenshopefoundation.org</p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <Link to="/" className="text-base text-gray-300 hover:text-white">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-base text-gray-300 hover:text-white">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/programs" className="text-base text-gray-300 hover:text-white">
                                    Programs
                                </Link>
                            </li>
                            <li>
                                <Link to="/get-involved" className="text-base text-gray-300 hover:text-white">
                                    Get Involved
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-base text-gray-300 hover:text-white">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
                            Legal
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <Link to="/privacy" className="text-base text-gray-300 hover:text-white">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms" className="text-base text-gray-300 hover:text-white">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter / Socials (Placeholder) */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
                            Stay Connected
                        </h3>
                        <p className="text-base text-gray-300 mb-4">
                            Follow our journey on social media.
                        </p>
                        <div className="flex space-x-4">
                            {/* Add social icons here if needed, for now just text links or SVGs */}
                            <a href="#" className="text-gray-400 hover:text-white">
                                <span className="sr-only">Facebook</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <span className="sr-only">Twitter</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
                    <p>© {currentYear} Blessed Children's Hope Foundation. All Rights Reserved.</p>
                    <p className="mt-2">Registered in England and Wales. Company No. 15488871.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
