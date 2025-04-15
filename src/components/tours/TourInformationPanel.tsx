import React from "react";
import { CheckCircle } from "lucide-react";

interface TourInformationPanelProps {
  selectedTour: "cruise" | "historical" | "township";
}

const TOUR_INFO: Record<string, { title: string; items: string[] }> = {
  cruise: {
    title: "Cruise Liner Shore Excursion Information",
    items: [
      "English speaking local guide (descendant of the native Namaqua tribe)",
      "Transportation in air-conditioned vehicle",
      "Full meal and non-alcoholic beverages",
      "Pickup and drop-off at Walvis Bay Harbor",
      "Maximum 40 travelers"
    ]
  },
  historical: {
    title: "Guided Historical Tour Information",
    items: [
      "English speaking local guide (descendant of the native Namaqua tribe)",
      "Transportation in air-conditioned vehicle",
      "Snacks and drinks",
      "Pickup and drop-off at your Swakopmund accommodation",
      "Minimum 4, Maximum 6 travelers"
    ]
  },
  township: {
    title: "Guided Township Tour Information",
    items: [
      "English speaking local guide (descendant of the native Namaqua tribe)",
      "Transportation in air-conditioned vehicle",
      "Snacks and drinks",
      "Pickup and drop-off at your Swakopmund accommodation",
      "Minimum 4, Maximum 6 travelers"
    ]
  }
};

const TourInformationPanel: React.FC<TourInformationPanelProps> = ({ selectedTour }) => {
  const info = TOUR_INFO[selectedTour];
  return (
    <div className="sticky top-6">
      <div className="bg-white border-kalahari-brown/10 shadow-md w-full max-w-xs mx-auto sm:max-w-none sm:mx-0">
        <div className="bg-kalahari-darkbrown text-white px-6 py-4 rounded-t">
          <h4 className="font-serif text-xl text-center">{info.title}</h4>
        </div>
        <div className="flex flex-col items-start bg-sand-custom px-6 py-4 border-t border-kalahari-brown/10 rounded-b">
          <ul className="space-y-2 text-sm text-kalahari-charcoal">
            {info.items.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <CheckCircle size={16} className="mr-2 text-kalahari-brown mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TourInformationPanel;
