const LABTESTS_KEY = 'labtests';

export function loadLabTests() {
  const raw = localStorage.getItem(LABTESTS_KEY);
  if (raw) return JSON.parse(raw);
  const initial = [
    {
      id: 'lab-cbc',
      name: 'Complete Blood Count (CBC)',
      alias: 'CBC',
      testCount: 1,
      fasting: 'No fasting required',
      reportTime: '24 hours',
      price: 250,
      mrp: 300,
      discount: '17% off',
      sampleType: 'Blood',
      tubeType: 'EDTA',
      description: 'Measures components of your blood like RBC, WBC, and platelets.',
      whyItMatters: 'Helps diagnose infections, anemia, and many other conditions.',
      parameters: ['Hemoglobin', 'WBC count', 'Platelet count'],
      category: 'Hematology',
      rating: 4.7,
      reviewCount: 120
    }
  ];
  localStorage.setItem(LABTESTS_KEY, JSON.stringify(initial));
  return initial;
}

export function saveLabTests(items) {
  localStorage.setItem(LABTESTS_KEY, JSON.stringify(items));
}
