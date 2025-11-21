// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { loadMedicines, saveMedicines } from './MedicineData';

const emptyMed = {
  id: '',
  name: '',
  brand: '',
  price: 0,
  mrp: 0,
  packSize: '',
  imageUrl: '',
  images: [],
  description: '',
  contains: '',
  therapy: '',
  uses: '',
  contraindications: '',
  sideEffects: '',
  precautions: '',
  howToUse: '',
  storage: '',
  quickTips: '',
  overdose: '',
  missedDose: '',
  modeOfAction: '',
  interactions: '',
  faqs: ''
};

const MedicineCRUD = () => {
  const [items, setItems] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyMed);
  const [error, setError] = useState('');

  useEffect(() => {
    setItems(loadMedicines());
  }, []);

  const startEdit = (m) => {
    setEditingId(m.id);
    setForm({
      id: m.id,
      name: m.name,
      brand: m.brand,
      price: m.price,
      mrp: m.mrp,
      packSize: m.packSize,
      imageUrl: m.imageUrl || '',
      images: (m.images || []).join(','),
      description: m.description,
      contains: m.contains,
      therapy: m.therapy || '',
      uses: (m.uses || []).join('\n'),
      contraindications: (m.contraindications || []).join('\n'),
      sideEffects: (m.sideEffects || []).join('\n'),
      precautions: (m.precautions || []).map(p => `${p.title}: ${p.advice}`).join('\n'),
      howToUse: m.howToUse,
      storage: m.storage,
      quickTips: (m.quickTips || []).join('\n'),
      overdose: m.dosage?.overdose || '',
      missedDose: m.dosage?.missedDose || '',
      modeOfAction: m.modeOfAction,
      interactions: m.interactions,
      faqs: (m.productFaqs || []).map(f => `${f.question} | ${f.answer}`).join('\n')
    });
  };

  const resetForm = () => {
    setEditingId(null);
    setForm(emptyMed);
    setError('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const parseFormToModel = () => {
    const id = editingId || `med-${Date.now()}`;
    return {
      id,
      name: form.name,
      brand: form.brand,
      price: Number(form.price) || 0,
      mrp: Number(form.mrp) || 0,
      packSize: form.packSize,
      imageUrl: form.imageUrl,
      images: form.images ? form.images.split(',').map(s => s.trim()).filter(Boolean) : [],
      description: form.description,
      contains: form.contains,
      therapy: form.therapy,
      uses: form.uses ? form.uses.split('\n').map(s => s.trim()).filter(Boolean) : [],
      contraindications: form.contraindications ? form.contraindications.split('\n').map(s => s.trim()).filter(Boolean) : [],
      sideEffects: form.sideEffects ? form.sideEffects.split('\n').map(s => s.trim()).filter(Boolean) : [],
      precautions: form.precautions ? form.precautions.split('\n').map(row => {
        const [title, ...rest] = row.split(':');
        return { title: (title || '').trim(), advice: rest.join(':').trim() };
      }).filter(p => p.title || p.advice) : [],
      howToUse: form.howToUse,
      storage: form.storage,
      quickTips: form.quickTips ? form.quickTips.split('\n').map(s => s.trim()).filter(Boolean) : [],
      dosage: {
        overdose: form.overdose,
        missedDose: form.missedDose
      },
      modeOfAction: form.modeOfAction,
      interactions: form.interactions,
      productFaqs: form.faqs ? form.faqs.split('\n').map(row => {
        const [q, ...a] = row.split('|');
        return { question: (q || '').trim(), answer: a.join('|').trim() };
      }).filter(f => f.question || f.answer) : []
    };
  };

  const save = () => {
    // Basic validation: require all fields
    const requiredFields = [
      'name', 'brand', 'price', 'mrp', 'packSize', 'description', 'contains', 'therapy', 'uses', 'sideEffects', 'contraindications', 'precautions', 'howToUse', 'storage', 'quickTips', 'overdose', 'missedDose', 'modeOfAction', 'interactions', 'faqs'
    ];
    for (const f of requiredFields) {
      const v = String(form[f] ?? '').trim();
      if (!v || (['price', 'mrp'].includes(f) && Number(form[f]) <= 0)) {
        setError(`Please fill ${f} (and make sure numbers are greater than 0).`);
        return;
      }
    }
    setError('');
    if (!form.name) return;
    const model = parseFormToModel();
    let next = [...items];
    const idx = next.findIndex(i => i.id === model.id);
    if (idx >= 0) next[idx] = model; else next.unshift(model);
    setItems(next);
    saveMedicines(next);
    try { window.dispatchEvent(new Event('medicines:updated')); } catch { }
    resetForm();
  };

  const remove = (id) => {
    const next = items.filter(i => i.id !== id);
    setItems(next);
    saveMedicines(next);
    try { window.dispatchEvent(new Event('medicines:updated')); } catch { }
    if (editingId === id) resetForm();
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-primary">Medicines</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* List */}
        <div className="bg-white border rounded-xl p-4 max-h-[70vh] overflow-auto">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold">All Medicines</h3>
            <button onClick={resetForm} className="text-sm text-primary hover:underline">New</button>
          </div>
          <ul className="divide-y">
            {items.map(m => (
              <li key={m.id} className="py-3 flex items-start justify-between gap-3">
                <div>
                  <div className="font-medium">{m.name}</div>
                  <div className="text-xs text-gray-500">{m.brand} • ₹{m.price}</div>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => startEdit(m)} className="text-blue-600 text-sm">Edit</button>
                  <button onClick={() => remove(m.id)} className="text-red-600 text-sm">Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Form */}
        <div className="bg-white border rounded-xl p-4 space-y-3">
          <h3 className="font-semibold mb-2">{editingId ? 'Edit Medicine' : 'New Medicine'}</h3>
          {error && <div className="text-red-600 text-sm">{error}</div>}
          <div className="grid grid-cols-2 gap-3">
            <input required name="name" value={form.name} onChange={handleChange} placeholder="Name" className="border rounded p-2 col-span-2" />
            <input required name="brand" value={form.brand} onChange={handleChange} placeholder="Brand" className="border rounded p-2" />
            <input required name="price" type="number" value={form.price} onChange={handleChange} placeholder="Price" className="border rounded p-2" />
            <input required name="mrp" type="number" value={form.mrp} onChange={handleChange} placeholder="MRP" className="border rounded p-2" />
            <input required name="packSize" value={form.packSize} onChange={handleChange} placeholder="Pack size" className="border rounded p-2" />
            <input name="imageUrl" value={form.imageUrl} onChange={handleChange} placeholder="Image URL" className="border rounded p-2" />
            <textarea name="images" value={form.images} onChange={handleChange} placeholder="More image URLs, comma separated" className="border rounded p-2 col-span-2 h-20" />
            <textarea required name="description" value={form.description} onChange={handleChange} placeholder="Description" className="border rounded p-2 col-span-2 h-20" />
            <input required name="contains" value={form.contains} onChange={handleChange} placeholder="Contains" className="border rounded p-2 col-span-2" />
            <input required name="therapy" value={form.therapy} onChange={handleChange} placeholder="Therapy" className="border rounded p-2 col-span-2" />
            <textarea required name="uses" value={form.uses} onChange={handleChange} placeholder="Uses (one per line)" className="border rounded p-2 col-span-2 h-24" />
            <textarea required name="sideEffects" value={form.sideEffects} onChange={handleChange} placeholder="Side effects (one per line)" className="border rounded p-2 col-span-2 h-24" />
            <textarea required name="contraindications" value={form.contraindications} onChange={handleChange} placeholder="Contraindications (one per line)" className="border rounded p-2 col-span-2 h-24" />
            <textarea required name="precautions" value={form.precautions} onChange={handleChange} placeholder="Precautions (Format: Title: Advice per line)" className="border rounded p-2 col-span-2 h-24" />
            <textarea required name="howToUse" value={form.howToUse} onChange={handleChange} placeholder="How to use" className="border rounded p-2 col-span-2 h-20" />
            <textarea required name="storage" value={form.storage} onChange={handleChange} placeholder="Storage" className="border rounded p-2 col-span-2 h-20" />
            <textarea required name="quickTips" value={form.quickTips} onChange={handleChange} placeholder="Quick tips (one per line)" className="border rounded p-2 col-span-2 h-24" />
            <textarea required name="overdose" value={form.overdose} onChange={handleChange} placeholder="Overdose" className="border rounded p-2 col-span-2 h-20" />
            <textarea required name="missedDose" value={form.missedDose} onChange={handleChange} placeholder="Missed dose" className="border rounded p-2 col-span-2 h-20" />
            <textarea required name="modeOfAction" value={form.modeOfAction} onChange={handleChange} placeholder="Mode of action" className="border rounded p-2 col-span-2 h-20" />
            <textarea required name="interactions" value={form.interactions} onChange={handleChange} placeholder="Interactions" className="border rounded p-2 col-span-2 h-20" />
            <textarea required name="faqs" value={form.faqs} onChange={handleChange} placeholder="FAQs (Format: Question | Answer per line)" className="border rounded p-2 col-span-2 h-24" />
          </div>
          <div className="flex gap-3">
            <button onClick={save} className="bg-primary text-white px-4 py-2 rounded">Save</button>
            <button onClick={resetForm} className="border px-4 py-2 rounded">Clear</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicineCRUD;
