import React, { useState } from 'react';

// --- [ START OF MOCK DATA AND TYPES ] ---

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface Precaution {
  title: string;
  advice: string;
}

export interface Dosage {
  overdose: string;
  missedDose: string;
}

export interface Medicine {
  id: string;
  name: string;
  brand: string;
  packSize: string;
  imageUrl: string;
  images?: string[];
  mrp: number;
  price: number;
  description: string;
  contains: string;
  uses: string[];
  sideEffects: string[];
  therapy: string;
  contraindications: string[];
  precautions: Precaution[];
  howToUse: string;
  storage: string;
  quickTips: string[];
  dosage: Dosage;
  modeOfAction: string;
  interactions: string;
  productFaqs: ProductFAQ[];
}

export const MOCK_MEDICINE: Medicine = {
  id: 'PARA-650',
  name: 'Paracetamol 650mg Tablet',
  brand: 'HealthCo Pharma',
  packSize: 'Strip of 15 tablets',
  imageUrl:
    'https://via.placeholder.com/300x200/58c9b9/ffffff?text=Paracetamol+650mg',
  images: [
    'https://via.placeholder.com/64/58c9b9/ffffff?text=Front',
    'https://via.placeholder.com/64/58c9b9/ffffff?text=Back',
    'https://via.placeholder.com/64/58c9b9/ffffff?text=Strip',
  ],
  mrp: 35.0,
  price: 29.75,
  description:
    'Paracetamol 650mg Tablet is a medicine used to relieve pain and to reduce fever. It is used to treat many conditions such as headache, body ache, toothache, and common cold.',
  contains: 'Paracetamol (Acetaminophen) 650mg',
  uses: [
    'Fever',
    'Pain relief (e.g., headache, muscle ache, dental pain)',
    'Common cold',
  ],
  sideEffects: ['Stomach pain', 'Nausea', 'Vomiting', 'Allergic reaction (rare)'],
  therapy: 'Analgesic & Antipyretic',
  contraindications: [
    'Severe liver impairment',
    'Known allergy to Paracetamol',
    'Severe kidney impairment',
  ],
  precautions: [
    {
      title: 'Alcohol Warning',
      advice:
        'Avoid consuming alcohol while taking this medicine as it may increase the risk of liver damage.',
    },
    {
      title: 'Pregnancy',
      advice:
        'It is generally considered safe to use during pregnancy. Consult your doctor before use.',
    },
    {
      title: 'Breastfeeding',
      advice:
        'Safe to use during breastfeeding. Limited data suggests the drug poses no significant risk to the baby.',
    },
  ],
  howToUse:
    'Take this medicine in the dose and duration as advised by your doctor. Swallow it as a whole. Do not chew, crush or break it. Paracetamol 650mg Tablet may be taken with or without food.',
  storage: 'Store below 30°C in a cool and dry place. Keep out of reach of children.',
  quickTips: [
    'Do not exceed the recommended dose as it can be harmful to your liver.',
    'It provides fast relief but the effect lasts for a limited time.',
    'Consult your doctor if fever or pain persists for more than 3 days.',
  ],
  dosage: {
    overdose:
      'Seek emergency medical attention if you suspect an overdose. Symptoms can include nausea, vomiting, loss of appetite, and stomach pain.',
    missedDose:
      'If you miss a dose, take it as soon as you remember. However, do not take two doses at the same time to make up for a missed dose.',
  },
  modeOfAction:
    'It blocks the release of certain chemical messengers that cause pain and fever in the brain.',
  interactions:
    'This medicine can interact with certain blood thinners (like warfarin) and other medications. Always inform your doctor about all other medicines you are taking.',
  productFaqs: [
    {
      question: 'Is Paracetamol an antibiotic?',
      answer:
        'No, Paracetamol is an analgesic (pain reliever) and antipyretic (fever reducer). It is not an antibiotic and does not treat bacterial infections.',
    },
    {
      question: 'Can I take it for a cough?',
      answer:
        'It will help with fever and body aches associated with a cold or cough, but it does not directly treat the cough itself.',
    },
  ],
};

// --- [ END MOCK DATA ] ---

interface MedicineDetailProps {
  medicine: Medicine;
  onBack: () => void;
}

const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 9l-7 7-7-7"
    ></path>
  </svg>
);

const InfoSection: React.FC<{
  title: string;
  children: React.ReactNode;
  id: string;
}> = ({ title, children, id }) => (
  <div id={id} className="pt-6 scroll-mt-24">
    <h2 className="text-xl font-extrabold text-gray-800 mb-3 border-b pb-1">
      {title}
    </h2>
    <div className="text-gray-600 space-y-2 prose prose-sm max-w-none">
      {children}
    </div>
  </div>
);

const ProductFAQSection: React.FC<{ faqs: ProductFAQ[] }> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <div id="product-faqs" className="pt-6 scroll-mt-24">
      <h2 className="text-xl font-extrabold text-gray-800 mb-3 border-b pb-1">
        Frequently Asked Questions
      </h2>
      <div className="space-y-3 mt-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-sm bg-white"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center p-4 text-left font-semibold text-gray-800 transition-colors hover:bg-gray-50"
            >
              <span className="text-base">{faq.question}</span>
              <ChevronDownIcon
                className={`w-5 h-5 text-teal-600 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? 'max-h-96 opacity-100'
                  : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-4 pt-0 border-t border-gray-100">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ----------------------------------------------------------
// ---------------------- MAIN COMPONENT ---------------------
// ----------------------------------------------------------

const MedicineDetail: React.FC<MedicineDetailProps> = ({
  medicine,
  onBack,
}) => {
  const [mainImage, setMainImage] = useState(medicine.imageUrl);
  const [added, setAdded] = useState(false);

  const discount = Math.round(
    ((medicine.mrp - medicine.price) / medicine.mrp) * 100
  );

  const handleAddToCart = () => {
    try {
      const key = 'patient_cart';
      const stored = localStorage.getItem(key);
      const cart: Array<{
        id: number | string;
        name: string;
        price: string;
        image: string;
      }> = stored ? JSON.parse(stored) : [];

      const item = {
        id: medicine.id,
        name: medicine.name,
        price: String(medicine.price),
        image: medicine.imageUrl || '',
      };

      cart.push(item);
      localStorage.setItem(key, JSON.stringify(cart));
      window.dispatchEvent(new Event('cart:updated'));

      setAdded(true);
      setTimeout(() => setAdded(false), 1500);
    } catch {}
  };

  return (
    <div className="p-6">
      {/* Top */}
      <button
        onClick={onBack}
        className="mb-4 px-4 py-2 bg-gray-200 rounded-lg font-semibold"
      >
        Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Sidebar */}
        <div className="lg:col-span-1 bg-white shadow-lg p-4 rounded-xl border">
          <img
            src={mainImage}
            alt={medicine.name}
            className="w-full rounded-lg shadow"
          />

          <div className="flex gap-3 mt-4">
            {medicine.images?.map((img) => (
              <img
                key={img}
                src={img}
                onClick={() => setMainImage(img)}
                className="w-16 h-16 border rounded-lg cursor-pointer hover:opacity-80"
              />
            ))}
          </div>

          <div className="mt-4">
            <p className="text-xl font-bold">{medicine.name}</p>
            <p className="text-sm text-gray-600">{medicine.brand}</p>

            <div className="mt-4 flex items-center gap-3">
              <p className="text-2xl font-bold text-teal-700">
                ₹{medicine.price}
              </p>
              <p className="line-through text-gray-500">₹{medicine.mrp}</p>
              <span className="text-green-600 font-semibold">
                {discount}% OFF
              </span>
            </div>

            <button
              onClick={handleAddToCart}
              className="mt-4 w-full py-2 bg-teal-600 text-white rounded-lg font-bold shadow"
            >
              {added ? 'Added!' : 'Add to Cart'}
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg border">
          <h2 className="text-xl font-extrabold text-gray-800 border-b pb-1">
            Description
          </h2>
          <p className="mt-4 text-sm text-gray-600">{medicine.description}</p>

          <div className="mt-6 border-b pb-4">
            <h2 className="text-xl font-extrabold text-gray-800 mb-3 border-b pb-1">
              Product Summary
            </h2>

            <table className="w-full text-sm">
              <tbody>
                <tr className="border-b">
                  <td className="py-2 pr-2 font-semibold text-gray-600 w-1/3">
                    Contains
                  </td>
                  <td className="py-2 text-teal-600 font-bold">
                    {medicine.contains}
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-2 font-semibold text-gray-600">Uses</td>
                  <td className="py-2 text-gray-800">
                    {medicine.uses.join(', ')}
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-2 font-semibold text-gray-600">
                    Side Effects
                  </td>
                  <td className="py-2 text-gray-800">
                    {medicine.sideEffects.join(', ')}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-2 font-semibold text-gray-600">
                    Therapy
                  </td>
                  <td className="py-2 text-gray-800">{medicine.therapy}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Detailed Sections */}
          <InfoSection title={`Uses of ${medicine.name}`} id="uses">
            <ul className="list-disc pl-5">
              {medicine.uses.map((use) => (
                <li key={use}>{use}</li>
              ))}
            </ul>
          </InfoSection>

          <InfoSection title="Contraindications" id="contraindications">
            <ul className="list-disc pl-5">
              {medicine.contraindications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </InfoSection>

          <InfoSection title="Side effects" id="side-effects">
            <ul className="list-disc pl-5">
              {medicine.sideEffects.map((effect) => (
                <li key={effect}>{effect}</li>
              ))}
            </ul>
          </InfoSection>

          <InfoSection title="Precautions and Warnings" id="precautions">
            {medicine.precautions.map((p) => (
              <div
                key={p.title}
                className="p-3 border rounded-lg bg-gray-50 mb-3"
              >
                <h4 className="font-bold text-gray-700">{p.title}</h4>
                <p className="text-sm mt-1">{p.advice}</p>
              </div>
            ))}
          </InfoSection>

          <InfoSection title="Directions for Use" id="how-to-use">
            <p>{medicine.howToUse}</p>
          </InfoSection>

          <InfoSection title="Storage and Disposal" id="storage">
            <p>{medicine.storage}</p>
          </InfoSection>

          <InfoSection title="Quick Tips" id="quick-tips">
            <ul className="list-disc pl-5">
              {medicine.quickTips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </InfoSection>

          <InfoSection title="Dosage" id="dosage">
            <h4 className="font-bold">Overdose</h4>
            <p>{medicine.dosage.overdose}</p>
            <h4 className="font-bold mt-3">Missed Dose</h4>
            <p>{medicine.dosage.missedDose}</p>
          </InfoSection>

          <InfoSection title="Mode of Action" id="mode-of-action">
            <p>{medicine.modeOfAction}</p>
          </InfoSection>

          <InfoSection title="Interactions" id="interactions">
            <p>{medicine.interactions}</p>
          </InfoSection>

          <ProductFAQSection faqs={medicine.productFaqs} />
        </div>
      </div>
    </div>
  );
};

// Example usage
const App = () => {
  const handleBack = () => alert('Navigating back to the main list!');
  return <MedicineDetail medicine={MOCK_MEDICINE} onBack={handleBack} />;
};

export default App;
