import React from 'react';
import { usePageTitle } from '../hooks/usePageTitle';

const PrivacyPage: React.FC = () => {
    usePageTitle("Privacy Policy – Blessed Children's Hope Foundation");

    return (
        <div className="bg-white py-12 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-8">Privacy Policy</h1>
                <p className="text-gray-500 mb-8">Last Updated: December 16, 2025</p>

                <div className="prose prose-blue max-w-none text-gray-700">
                    <h2>Introduction</h2>
                    <p>“Blessed Children's Hope Foundation” (referred to as “BCHF,” “we,” “our,” or “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (blessedchildrenshopefoundation.org) or engage with us through other electronic communications. Please read this policy carefully.</p>

                    <h2>Information We Collect</h2>
                    <ul>
                        <li><strong>Personal Data:</strong> Name, email address, postal address, phone number, etc., voluntarily provided by you.</li>
                        <li><strong>Derivative Data:</strong> IP address, browser type, operating system, etc. automatically collected.</li>
                        <li><strong>Cookies:</strong> We use cookies to remember preferences and provide analytics.</li>
                        <li><strong>Financial Data:</strong> Processed by third-party processors (e.g., PayPal/Stripe). We do not store full credit card details.</li>
                    </ul>

                    <h2>Use of Your Information</h2>
                    <p>We use the information to provide services, personalize experience, administer donations, send communications (with consent), and ensure security.</p>

                    <h2>Disclosure of Your Information</h2>
                    <p>We do not sell your data. We may share with service providers (like payment processors), with your consent (for testimonials), when required by law, or for business transfers.</p>

                    <h2>Data Storage and Security</h2>
                    <p>We implement reasonable safeguards (HTTPS, access controls) but cannot guarantee absolute security.</p>

                    <h2>Your Rights</h2>
                    <p>You may request access to, correct, or delete your personal data. You may opt-out of communications at any time by contacting us.</p>

                    <h2>Google Ad Grant Compliance</h2>
                    <p>Blessed Children's Hope Foundation (Company Number 15488871, registered in England and Wales) is the legal entity responsible for this website and any associated advertising. Registered office: 86-90 Paul Street, London, EC2A 4NE, UK.</p>

                    <h2>Contact Us</h2>
                    <p>
                        <strong>Operational Office:</strong> City Square, Nyamira, Kenya<br />
                        <strong>Email:</strong> contact@blessedchildrenshopefoundation.org<br />
                        <strong>Phone:</strong> +61 408 319 260
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPage;
