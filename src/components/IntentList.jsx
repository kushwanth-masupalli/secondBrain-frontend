import { deleteIntent } from '../api';

export default function IntentList({ intents, onDelete }) {
  if (!intents.length) return <p>No intents found.</p>;

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {intents.map((item) => (
        <li
          key={item._id}
          style={{
            marginBottom: '1rem',
            padding: '1rem',
            background: '#111',
            borderRadius: '8px',
            color: '#fff'
          }}
        >
          <p><strong>Intent:</strong> {item.intent}</p>
          <p><strong>Description:</strong> {item.description}</p>
          <p><strong>Date:</strong> {item.date}</p>
          <button
            onClick={() => {
              deleteIntent(item._id).then(onDelete).catch(err => {
                console.error(err);
                alert('Delete failed');
              });
            }}
            style={{ background: 'red', color: 'white', padding: '0.5rem 1rem', border: 'none' }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}