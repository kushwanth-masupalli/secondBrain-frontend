import { useEffect, useState } from 'react';
import { getAllIntents } from './api';
import AddIntentForm from './components/AddIntentForm';
import CategoryFilter from './components/CategoryFilter';
import DateFilter from './components/DateFilter';
import IntentList from './components/IntentList';

export default function App() {
  const [intents, setIntents] = useState([]);

  const loadIntents = async () => {
    try {
      const res = await getAllIntents();
      setIntents(res.data);
    } catch (err) {
      console.error(err);
      alert('Could not load intents');
    }
  };

  useEffect(() => {
    loadIntents();
  }, []);

  return (
    <div style={{ padding: '2rem', backgroundColor: '#000', color: '#fff' }}>
      <h1 style={{ color: '#1DB954' }}>Intent Manager</h1>
      <AddIntentForm onAdd={loadIntents} />
      <CategoryFilter onFilter={setIntents} />
      <DateFilter onFilter={setIntents} />
      <IntentList intents={intents} onDelete={loadIntents} />
    </div>
  );
}
