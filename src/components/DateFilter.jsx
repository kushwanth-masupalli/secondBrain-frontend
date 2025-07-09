import { useState } from 'react';
import { getByDate } from '../api';

export default function DateFilter({ onFilter }) {
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFilter = async () => {
    if (!date) return alert('Enter a date in dd/mm/yyyy format');
    setLoading(true);
    try {
      const res = await getByDate(date);
      onFilter(res.data);
    } catch (err) {
      console.error(err);
      alert('Failed to filter by date');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="dd/mm/yyyy"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={{ padding: '0.5rem' }}
      />
      <button
        onClick={handleFilter}
        disabled={loading}
        style={{ background: '#1DB954', color: '#fff', marginLeft: '0.5rem', padding: '0.5rem 1rem', border: 'none' }}
      >
        Filter by Date
      </button>
    </div>
  );
}
