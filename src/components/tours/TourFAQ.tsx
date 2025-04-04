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
      question: "What is the maximum number of travelers per tour?",
      answer: "Our Guided Historical Tour and Guided Township Tour accommodate a maximum of 6 travelers, while the Cruise Liner Shore Excursion can accommodate up to 40 travelers. Minimum numbers may apply for tour operation."
    },
    {
      question: "What tour options do you offer?",
      answer: "We offer three distinct tour options: 1) Guided Historical Tour (5 hours) - focuses on Swakopmund historical sites with pickup/drop-off at your Swakopmund accommodation, includes a light meal, and has a maximum of 6 travelers. 2) Cruise Liner Shore Excursion (8 hours) - designed for cruise ship passengers, includes lagoon visit, Dune 7, and historical sites, with a light meal, and can accommodate up to 40 travelers. 3) Guided Township Tour (4 hours) - explores Mondesa township culture, includes visits to Herero cultural experience and traditional herbalist, with a light meal, and has a maximum of 6 travelers."
    },
    {
      question: "What meals are included in the tours?",
      answer: "All tours include a light meal and non-alcoholic beverages. Vegetarian and vegan options are available upon request at the time of booking."
    },
    {
      question: "What happens if my cruise ship's schedule changes?",
      answer: "We monitor cruise ship arrivals closely. If your ship's schedule changes, please contact us as soon as possible, and we will do our best to accommodate your new arrival time or offer alternatives."
    },
    {
      question: "Will I be back to my ship on time?",
      answer: "Yes, all our tours are designed to ensure you return to your ship with plenty of time before departure. We maintain close communication with the harbor to track departure times."
    },
    {
      question: "Who is the tour guide?",
      answer: "All tours are led by Mr. Michael, who is a descendant of the native Namaqua tribe. He is knowledgeable about the local history and culture, particularly regarding the 1904-1908 Nama and Ovaherero Genocide."
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
          
          <div className="mt-10 p-6 bg-sand-custom rounded-lg border border-brown-light text-center w-full max-w-xs mx-auto sm:max-w-none sm:mx-0">
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
