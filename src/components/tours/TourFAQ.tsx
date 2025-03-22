import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const TourFAQ: React.FC = () => {
  const faqs = [
    {
      question: "What is the cancellation policy?",
      answer: "You can cancel up to 28 full days in advance of the experience for a full refund. If you cancel less than 28 days before the experience's start time, the amount you pay will not be refunded. Any changes made less than 28 full days before the experience's start will not be accepted."
    },
    {
      question: "What should I bring on the tour?",
      answer: "We recommend bringing sunscreen, a hat for shade, comfortable walking shoes, a light jacket (the coastal areas can be windy), and a camera. All food and beverages are included in the tour."
    },
    {
      question: "Is the tour suitable for everyone?",
      answer: "Our tours require a moderate fitness level as they involve some walking. The tours are not wheelchair accessible. If you have specific mobility concerns, please contact us before booking."
    },
    {
      question: "How many people will be on the tour?",
      answer: "Our Half Day Tour accommodates a maximum of 6 travelers, while the Cruise Liner Shore Excursion can accommodate up to 20 travelers. Minimum numbers may apply for tour operation."
    },
    {
      question: "What's the difference between the two tour options?",
      answer: "We offer two distinct tour options: 1) Half Day Tour (4 hours) - focuses on Swakopmund historical sites with pickup/drop-off at your Swakopmund accommodation, includes a light finger meal, and has a maximum of 6 travelers. 2) Cruise Liner Shore Excursion (8 hours) - includes Walvis Bay Lagoon, Dune 7, and Swakopmund sites with pickup/drop-off at Walvis Bay Harbor, includes lunch, and has a maximum of 20 travelers."
    },
    {
      question: "What happens if my cruise ship's schedule changes?",
      answer: "We monitor cruise ship arrivals closely. If your ship's schedule changes, please contact us as soon as possible, and we will do our best to accommodate your new arrival time or offer alternatives."
    },
    {
      question: "Are meals included in the tour?",
      answer: "Yes, the Half Day Tour includes a light finger meal and non-alcoholic beverages, while the Cruise Liner Shore Excursion includes a full lunch and non-alcoholic beverages. Vegetarian and vegan options are available upon request when booking."
    },
    {
      question: "Will I be back to my ship on time?",
      answer: "Yes, all our tours are designed to ensure you return to your ship with plenty of time before departure. We maintain close communication with the harbor to track departure times."
    },
    {
      question: "Who is the tour guide?",
      answer: "All tours are led by Mr. Rooi, who is a descendant of the native Namaqua tribe. He is knowledgeable about the local history and culture, particularly regarding the 1904-1908 Nama and Ovaherero Genocide."
    }
  ];

  return (
    <section className="w-full py-20 bg-lightbrown-light">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-brown-custom text-center mb-10">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-brown-light">
                <AccordionTrigger className="text-darkbrown-custom font-medium py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-charcoal-custom pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-10 p-6 bg-sand-custom rounded-lg border border-brown-light text-center">
            <h3 className="font-serif text-brown-custom text-xl mb-3">Still have questions?</h3>
            <p className="text-charcoal-custom mb-4">We're happy to help with any other questions you might have about our tours.</p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-darkbrown-custom hover:bg-brown-custom text-white font-medium transition-colors rounded-full py-2.5 px-5"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourFAQ;
