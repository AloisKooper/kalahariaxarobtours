import React from "react";

import Footer from "@/components/layout/Footer";

const Terms: React.FC = () => {
  return (
    <>
      {/* Background wrapper that goes behind the navbar */}
      <div className="fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-kalahari-lightbrown/50 to-kalahari-sand/30 -z-10" />
      
      <div className="flex flex-col min-h-screen">

        <main className="flex-grow container mx-auto py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <h1 className="text-4xl md:text-5xl text-kalahari-darkbrown font-normal mb-4">Terms & Conditions</h1>
              <div className="w-20 h-1 bg-kalahari-brown rounded-full mx-auto mb-6"></div>
              <p className="text-kalahari-charcoal/80 max-w-2xl mx-auto">
                Please read these terms and conditions carefully before booking a tour with Kalahari Axarob Tours.
              </p>
            </div>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl text-kalahari-brown mb-4">Introduction</h2>
                <p className="text-kalahari-charcoal leading-relaxed">
                  These Terms and Conditions govern your relationship with Kalahari Axarob Tours when you use our services, website, or book a tour with us. By using our services or booking a tour, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not use our services.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl text-kalahari-brown mb-4">Tour Bookings</h2>
                <ul className="list-disc pl-6 space-y-2 text-kalahari-charcoal">
                  <li>
                    All bookings are subject to availability and confirmation by Kalahari Axarob Tours.
                  </li>
                  <li>
                    A booking is confirmed once you receive a confirmation email from us and after any required deposit has been received.
                  </li>
                  <li>
                    Please review all booking details carefully to ensure they meet your requirements. It is your responsibility to inform us of any errors or discrepancies.
                  </li>
                  <li>
                    Special requests (dietary requirements, accessibility needs, etc.) must be communicated at the time of booking. We will make reasonable efforts to accommodate such requests but cannot guarantee they will be met.
                  </li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl text-kalahari-brown mb-4">Payment Terms</h2>
                <ul className="list-disc pl-6 space-y-2 text-kalahari-charcoal">
                  <li>
                    A deposit of 30% is required to secure your booking, with the balance due 30 days before the tour date.
                  </li>
                  <li>
                    For bookings made within 30 days of the tour date, full payment is required at the time of booking.
                  </li>
                  <li>
                    Payments can be made via bank transfer, credit card, or other methods specified during the booking process.
                  </li>
                  <li>
                    All prices are quoted in the currency specified during booking and include applicable taxes unless otherwise stated.
                  </li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl text-kalahari-brown mb-4">Cancellation Policy</h2>
                <p className="text-kalahari-charcoal leading-relaxed mb-4">
                  Our cancellation policy is as follows:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-kalahari-charcoal">
                  <li>
                    <strong>28+ days before tour date:</strong> Full refund minus administration fee
                  </li>
                  <li>
                    <strong>14-27 days before tour date:</strong> 50% refund
                  </li>
                  <li>
                    <strong>0-13 days before tour date:</strong> No refund
                  </li>
                </ul>
                <p className="text-kalahari-charcoal leading-relaxed mt-4">
                  Cancellations must be made in writing via email to Kalahariaxarobtours@gmail.com. The date of cancellation is the date we receive your written notice.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl text-kalahari-brown mb-4">Changes to Tours</h2>
                <p className="text-kalahari-charcoal leading-relaxed mb-4">
                  Kalahari Axarob Tours reserves the right to make changes to any tour if necessary due to weather conditions, safety concerns, or other circumstances beyond our control. We will endeavor to notify you of any significant changes as soon as possible.
                </p>
                <p className="text-kalahari-charcoal leading-relaxed">
                  If a tour must be cancelled by us, you will be offered an alternative date or a full refund.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl text-kalahari-brown mb-4">Traveler's Responsibilities</h2>
                <ul className="list-disc pl-6 space-y-2 text-kalahari-charcoal">
                  <li>
                    You are responsible for ensuring you have all necessary travel documents, including valid identification and any required visas.
                  </li>
                  <li>
                    You must arrive at the designated meeting point at the specified time. We cannot delay tours for late arrivals.
                  </li>
                  <li>
                    You must adhere to all safety instructions provided by our guides during the tour.
                  </li>
                  <li>
                    You must respect local customs, wildlife, and the environment during our tours.
                  </li>
                  <li>
                    You are responsible for any personal belongings brought on the tour. Kalahari Axarob Tours cannot accept liability for any loss or damage to personal items.
                  </li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl text-kalahari-brown mb-4">Health and Fitness</h2>
                <p className="text-kalahari-charcoal leading-relaxed mb-4">
                  Our tours require a moderate level of fitness and mobility. You must inform us of any medical conditions or special requirements at the time of booking.
                </p>
                <p className="text-kalahari-charcoal leading-relaxed">
                  We reserve the right to refuse participation if we believe a tour may be unsuitable for a participant's health or fitness level, with a refund provided at our discretion.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl text-kalahari-brown mb-4">Insurance</h2>
                <p className="text-kalahari-charcoal leading-relaxed">
                  We strongly recommend that all participants obtain comprehensive travel insurance to cover cancellation, medical expenses, personal liability, and loss of belongings. Kalahari Axarob Tours cannot be held responsible for any losses or expenses arising from unforeseen circumstances.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl text-kalahari-brown mb-4">Photography</h2>
                <p className="text-kalahari-charcoal leading-relaxed">
                  Kalahari Axarob Tours may take photographs during tours for promotional purposes. By participating in our tours, you consent to such use unless you explicitly inform us otherwise. We also reserve the right to use any photographs or videos taken by guests and shared with us or posted on social media platforms.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl text-kalahari-brown mb-4">Limitation of Liability</h2>
                <p className="text-kalahari-charcoal leading-relaxed">
                  Kalahari Axarob Tours shall not be liable for any loss, damage, illness, injury, or death which may be sustained by any participant during the tour, except where such loss, damage, illness, injury, or death is due to the negligence of Kalahari Axarob Tours. Any claims must be notified in writing to Kalahari Axarob Tours within 28 days of the end of the tour.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl text-kalahari-brown mb-4">Changes to Terms</h2>
                <p className="text-kalahari-charcoal leading-relaxed">
                  We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to our website. It is your responsibility to review these Terms and Conditions periodically.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl text-kalahari-brown mb-4">Contact Us</h2>
                <p className="text-kalahari-charcoal leading-relaxed">
                  If you have any questions about these Terms and Conditions, please contact us at:
                </p>
                <div className="p-4 bg-kalahari-sand/50 rounded-lg mt-4">
                  <p className="text-kalahari-charcoal"><strong>Email:</strong> Kalahariaxarobtours@gmail.com</p>
                  <p className="text-kalahari-charcoal"><strong>Phone:</strong> +264 81 145 6397</p>
                  <p className="text-kalahari-charcoal"><strong>Address:</strong> Swakopmund, Namibia</p>
                </div>
              </section>
            </div>
            
            <div className="mt-12 text-center text-sm text-kalahari-charcoal/70">
              Last updated: March 2025
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Terms; 