import { getByCategory } from '../api';

export default function CategoryFilter({ onFilter }) {
  const handleChange = async (e) => {
    const intent = e.target.value;
    if (!intent) return;
    try {
      const res = await getByCategory(intent);
      onFilter(res.data);
    } catch (err) {
      console.error(err);
      alert('Failed to filter by category');
    }
  };

  return (
    <select onChange={handleChange} style={{ padding: '0.5rem', marginBottom: '1rem' }}>
      <option value="">Filter by Category</option>
      <option value="quiz">Quiz</option>
      <option value="assignment">Assignment</option>
      <option value="meeting">Meeting</option>
      <option value="hackathon">Hackathon</option>
      <option value="other">Other</option>
    </select>
  );
}
