import { useState } from 'react';
import { addIntent } from '../api';

export default function AddIntentForm({ onAdd }) {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!input.trim()) return alert('Please enter a prompt');
    setLoading(true);
    try {
      await addIntent({ input });
      setInput('');
      onAdd();
    } catch (err) {
      console.error(err);
      alert('Failed to add intent');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter prompt..."
        style={{ padding: '0.5rem', width: '60%' }}
      />
      <button
        onClick={handleSubmit}
        disabled={loading}
        style={{ background: '#1DB954', color: '#fff', marginLeft: '0.5rem', padding: '0.5rem 1rem', border: 'none' }}
      >
        + Add Intent
      </button>
    </div>
  );
}
