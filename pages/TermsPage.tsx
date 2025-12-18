import React from 'react';
import { usePageTitle } from '../hooks/usePageTitle';

const TermsPage: React.FC = () => {
    usePageTitle("Terms of Service – Blessed Children's Hope Foundation");

    return (
        <div className="bg-white py-12 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-8">Terms of Service</h1>
                <p className="text-gray-500 mb-8">Last Updated: December 16, 2025</p>

                <div className="prose prose-blue max-w-none text-gray-700">
                    <h2>1. Purpose of the Website</h2>
                    <p>The Site provides information about our charitable projects, accepts donations, and facilitates communication. It is for non-commercial, informational purposes.</p>

                    <h2>2. Use of Content</h2>
                    <p>All content is owned by BCHF. detailed rules apply to viewing, sharing (allowed with attribution), and prohibited commercial use.</p>

                    <h2>3. User Conduct</h2>
                    <p>You agree to use the site lawfully. No harassment, impersonation, unauthorized access, or scraping allowed.</p>

                    <h2>4. Donations</h2>
                    <p>Donations are voluntary gifts. No refunds generally, but mistakes can be reviewed. Receipts provided.</p>

                    <h2>13. Governing Law</h2>
                    <p>These Terms shall be governed by the laws of England and Wales (Company No. 15488871).</p>

                    <h2>Contact Information</h2>
                    <p>
                        <strong>Registered Office (UK):</strong> 3rd Floor, 86-90 Paul Street, London EC2A 4NE, United Kingdom<br />
                        <strong>Operational Office (Kenya):</strong> City Square, Nyamira, Kenya<br />
                        <strong>Email:</strong> contact@blessedchildrenshopefoundation.org
                    </p>

                    <p className="mt-8 italic text-sm">
                        By using this Site, you acknowledge that you have read, understood, and agreed to these Terms of Service.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsPage;
