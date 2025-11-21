const MEDICINES_KEY = 'medicines';

export function loadMedicines() {
  const raw = localStorage.getItem(MEDICINES_KEY);
  if (raw) return JSON.parse(raw);
  const initial = [
    {
      id: 'med-para-650',
      name: 'Paracetamol 650mg Tablet',
      brand: 'Generic',
      price: 25,
      mrp: 30,
      packSize: '15 tablets',
      imageUrl: '',
      images: [],
      description: 'Paracetamol 650 is an analgesic and antipyretic used to relieve pain and reduce fever.',
      contains: 'Paracetamol 650 mg',
      therapy: 'Analgesic/Antipyretic',
      uses: ['Fever', 'Headache', 'Body ache', 'Toothache'],
      contraindications: ['Severe liver disease', 'Hypersensitivity to paracetamol'],
      sideEffects: ['Nausea', 'Vomiting', 'Stomach upset', 'Allergic reactions (rare)'],
      precautions: [
        { title: 'Liver', advice: 'Use with caution in liver impairment. Do not exceed recommended dose.' },
        { title: 'Alcohol', advice: 'Avoid alcohol; increases risk of liver damage.' }
      ],
      howToUse: 'Swallow with water. Can be taken with or without food.',
      storage: 'Store below 25°C, away from moisture and sunlight.',
      quickTips: [
        'Do not exceed 4,000 mg paracetamol per day in adults.',
        'Check labels of other medicines to avoid duplicate paracetamol.'
      ],
      dosage: {
        overdose: 'Seek immediate medical attention in case of overdose.',
        missedDose: 'Take as soon as remembered. Skip if near next dose.'
      },
      modeOfAction: 'Inhibits prostaglandin synthesis in the CNS and works on the hypothalamic heat-regulating center.',
      interactions: 'Caution with alcohol, warfarin; may enhance anticoagulant effect with prolonged use.',
      productFaqs: [
        { question: 'Is it safe during pregnancy?', answer: 'Generally considered safe when used as directed. Consult your doctor.' },
        { question: 'Can I take it on an empty stomach?', answer: 'Yes, but taking with food may reduce stomach upset.' }
      ]
    }
  ];
  localStorage.setItem(MEDICINES_KEY, JSON.stringify(initial));
  return initial;
}

export function saveMedicines(items) {
  localStorage.setItem(MEDICINES_KEY, JSON.stringify(items));
}
