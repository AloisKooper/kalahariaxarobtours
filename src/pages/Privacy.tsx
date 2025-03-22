import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Privacy: React.FC = () => {
  return (
    <>
      {/* Background wrapper that goes behind the navbar */}
      <div className="fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-kalahari-lightbrown/50 to-kalahari-sand/30 -z-10" />
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <h1 className="text-4xl md:text-5xl text-kalahari-darkbrown font-normal mb-4">Privacy Policy</h1>
              <div className="w-20 h-1 bg-kalahari-brown rounded-full mx-auto mb-6"></div>
              <p className="text-kalahari-charcoal/80 max-w-2xl mx-auto">
                Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information.
              </p>
            </div>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl text-kalahari-brown mb-4">Introduction</h2>
                <p className="text-kalahari-charcoal leading-relaxed">
                  Kalahari Axarob Tours ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl text-kalahari-brown mb-4">Information We Collect</h2>
                <p className="text-kalahari-charcoal leading-relaxed mb-4">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-kalahari-charcoal">
                  <li>Register for our newsletter</li>
                  <li>Book a tour or request a quote</li>
                  <li>Complete forms or surveys on our website</li>
                  <li>Send us emails or messages</li>
                  <li>Provide testimonials or reviews</li>
                </ul>
                <p className="text-kalahari-charcoal leading-relaxed mt-4">
                  The personal information we may collect includes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-kalahari-charcoal">
                  <li>Name, email address, and contact details</li>
                  <li>Billing and payment information</li>
                  <li>Demographic information</li>
                  <li>Travel preferences and special requirements</li>
                  <li>Passport or identification details (for booking purposes only)</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl text-kalahari-brown mb-4">How We Use Your Information</h2>
                <p className="text-kalahari-charcoal leading-relaxed mb-4">
                  We may use the information we collect in various ways, including to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-kalahari-charcoal">
                  <li>Provide, operate, and maintain our website and services</li>
                  <li>Process and complete tour bookings</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Send you newsletters and updates about our services (if you have subscribed)</li>
                  <li>Improve our website and user experience</li>
                  <li>Develop new products, services, and features</li>
                  <li>Communicate with you about promotions, upcoming events, and other news</li>
                  <li>Protect, investigate, and deter against unauthorized or illegal activity</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl text-kalahari-brown mb-4">Sharing Your Information</h2>
                <p className="text-kalahari-charcoal leading-relaxed mb-4">
                  We may share your information with third parties in certain situations, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-kalahari-charcoal">
                  <li>
                    <strong>Business Partners:</strong> We may share your information with our business partners, such as hotels, transportation providers, and other service providers needed to complete your tour arrangements.
                  </li>
                  <li>
                    <strong>Service Providers:</strong> We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, and customer service.
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> We may disclose your information where required to do so by law or in response to valid requests by public authorities.
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business.
                  </li>
                </ul>
                <p className="text-kalahari-charcoal leading-relaxed mt-4">
                  We do not sell, trade, or otherwise transfer your personal information to outside parties except as described above.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl text-kalahari-brown mb-4">Your Data Protection Rights</h2>
                <p className="text-kalahari-charcoal leading-relaxed mb-4">
                  You have certain data protection rights. These include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-kalahari-charcoal">
                  <li>
                    <strong>Access:</strong> You have the right to request copies of your personal data.
                  </li>
                  <li>
                    <strong>Rectification:</strong> You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.
                  </li>
                  <li>
                    <strong>Erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.
                  </li>
                  <li>
                    <strong>Restrict processing:</strong> You have the right to request that we restrict the processing of your personal data, under certain conditions.
                  </li>
                  <li>
                    <strong>Object to processing:</strong> You have the right to object to our processing of your personal data, under certain conditions.
                  </li>
                  <li>
                    <strong>Data portability:</strong> You have the right to request that we transfer the data we have collected to another organization, or directly to you, under certain conditions.
                  </li>
                </ul>
                <p className="text-kalahari-charcoal leading-relaxed mt-4">
                  If you would like to exercise any of these rights, please contact us using the contact information provided below.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl text-kalahari-brown mb-4">Security of Your Data</h2>
                <p className="text-kalahari-charcoal leading-relaxed">
                  The security of your data is important to us. We use commercially reasonable administrative, technical, and physical measures to protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. However, no security system is impenetrable, and we cannot guarantee the security of our systems 100%. In the event that any information under our control is compromised as a result of a breach of security, we will take reasonable steps to investigate the situation and, where appropriate, notify those individuals whose information may have been compromised.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl text-kalahari-brown mb-4">Cookies and Tracking Technologies</h2>
                <p className="text-kalahari-charcoal leading-relaxed">
                  We may use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl text-kalahari-brown mb-4">Changes to This Privacy Policy</h2>
                <p className="text-kalahari-charcoal leading-relaxed">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl text-kalahari-brown mb-4">Contact Us</h2>
                <p className="text-kalahari-charcoal leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="p-4 bg-kalahari-sand/50 rounded-lg mt-4">
                  <p className="text-kalahari-charcoal"><strong>Email:</strong> Kalahariaxarobtours@gmail.com</p>
                  <p className="text-kalahari-charcoal"><strong>Phone:</strong> +264 81 258 3089</p>
                  <p className="text-kalahari-charcoal"><strong>Address:</strong> Swakopmund, Namibia</p>
                </div>
              </section>
            </div>
            
            <div className="mt-12 text-center text-sm text-kalahari-charcoal/70">
              Last updated: June 2023
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Privacy; 