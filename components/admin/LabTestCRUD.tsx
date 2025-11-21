// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { loadLabTests, saveLabTests } from './LabTestData';

const emptyTest = {
  id: '',
  name: '',
  alias: '',
  testCount: 1,
  fasting: '',
  reportTime: '',
  price: 0,
  mrp: 0,
  discount: '',
  sampleType: '',
  tubeType: '',
  description: '',
  whyItMatters: '',
  parameters: '',
  category: '',
  rating: 0,
  reviewCount: 0
};

const LabTestCRUD = () => {
  const [items, setItems] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyTest);

  useEffect(() => {
    setItems(loadLabTests());
  }, []);

  const startEdit = (t) => {
    setEditingId(t.id);
    setForm({
      id: t.id,
      name: t.name,
      alias: t.alias,
      testCount: t.testCount,
      fasting: t.fasting,
      reportTime: t.reportTime,
      price: t.price,
      mrp: t.mrp,
      discount: t.discount,
      sampleType: t.sampleType,
      tubeType: t.tubeType,
      description: t.description,
      whyItMatters: t.whyItMatters,
      parameters: (t.parameters || []).join('\n'),
      category: t.category,
      rating: t.rating,
      reviewCount: t.reviewCount
    });
  };

  const resetForm = () => {
    setEditingId(null);
    setForm(emptyTest);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: name === 'price' || name === 'mrp' || name === 'rating' || name === 'reviewCount' || name === 'testCount' ? Number(value) : value }));
  };

  const parseFormToModel = () => {
    const id = editingId || `lab-${Date.now()}`;
    return {
      id,
      name: form.name,
      alias: form.alias,
      testCount: Number(form.testCount) || 1,
      fasting: form.fasting,
      reportTime: form.reportTime,
      price: Number(form.price) || 0,
      mrp: Number(form.mrp) || 0,
      discount: form.discount,
      sampleType: form.sampleType,
      tubeType: form.tubeType,
      description: form.description,
      whyItMatters: form.whyItMatters,
      parameters: form.parameters ? form.parameters.split('\n').map(s => s.trim()).filter(Boolean) : [],
      category: form.category,
      rating: Number(form.rating) || 0,
      reviewCount: Number(form.reviewCount) || 0
    };
  };

  const save = () => {
    if (!form.name) return;
    const model = parseFormToModel();
    let next = [...items];
    const idx = next.findIndex(i => i.id === model.id);
    if (idx >= 0) next[idx] = model; else next.unshift(model);
    setItems(next);
    saveLabTests(next);
    try { window.dispatchEvent(new Event('labtests:updated')); } catch { }
    resetForm();
  };

  const remove = (id) => {
    const next = items.filter(i => i.id !== id);
    setItems(next);
    saveLabTests(next);
    try { window.dispatchEvent(new Event('labtests:updated')); } catch { }
    if (editingId === id) resetForm();
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-primary">Lab Tests</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* List */}
        <div className="bg-white border rounded-xl p-4 max-h-[70vh] overflow-auto">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold">All Lab Tests</h3>
            <button onClick={resetForm} className="text-sm text-primary hover:underline">New</button>
          </div>
          <ul className="divide-y">
            {items.map(t => (
              <li key={t.id} className="py-3 flex items-start justify-between gap-3">
                <div>
                  <div className="font-medium">{t.name}</div>
                  <div className="text-xs text-gray-500">₹{t.price} • {t.category}</div>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => startEdit(t)} className="text-blue-600 text-sm">Edit</button>
                  <button onClick={() => remove(t.id)} className="text-red-600 text-sm">Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Form */}
        <div className="bg-white border rounded-xl p-4 space-y-3">
          <h3 className="font-semibold mb-2">{editingId ? 'Edit Test' : 'New Test'}</h3>
          <div className="grid grid-cols-2 gap-3">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="border rounded p-2 col-span-2" />
            <input name="alias" value={form.alias} onChange={handleChange} placeholder="Alias" className="border rounded p-2" />
            <input name="testCount" type="number" value={form.testCount} onChange={handleChange} placeholder="Test count" className="border rounded p-2" />
            <input name="fasting" value={form.fasting} onChange={handleChange} placeholder="Fasting" className="border rounded p-2" />
            <input name="reportTime" value={form.reportTime} onChange={handleChange} placeholder="Report time" className="border rounded p-2" />
            <input name="price" type="number" value={form.price} onChange={handleChange} placeholder="Price" className="border rounded p-2" />
            <input name="mrp" type="number" value={form.mrp} onChange={handleChange} placeholder="MRP" className="border rounded p-2" />
            <input name="discount" value={form.discount} onChange={handleChange} placeholder="Discount" className="border rounded p-2" />
            <input name="sampleType" value={form.sampleType} onChange={handleChange} placeholder="Sample type" className="border rounded p-2" />
            <input name="tubeType" value={form.tubeType} onChange={handleChange} placeholder="Tube type" className="border rounded p-2" />
            <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="border rounded p-2 col-span-2 h-20" />
            <textarea name="whyItMatters" value={form.whyItMatters} onChange={handleChange} placeholder="Why it matters" className="border rounded p-2 col-span-2 h-20" />
            <textarea name="parameters" value={form.parameters} onChange={handleChange} placeholder="Parameters (one per line)" className="border rounded p-2 col-span-2 h-24" />
            <input name="category" value={form.category} onChange={handleChange} placeholder="Category" className="border rounded p-2 col-span-2" />
            <input name="rating" type="number" value={form.rating} onChange={handleChange} placeholder="Rating" className="border rounded p-2" />
            <input name="reviewCount" type="number" value={form.reviewCount} onChange={handleChange} placeholder="Review count" className="border rounded p-2" />
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

export default LabTestCRUD;
