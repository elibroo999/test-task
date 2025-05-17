type Props = {
  filter: 'all' | 'active' | 'completed';
  onChange: (value: 'all' | 'active' | 'completed') => void;
};

export default function Filters({ filter, onChange }: Props) {
  return (
    <div className="filters">
      <button
        className={filter === 'all' ? 'active' : ''}
        onClick={() => onChange('all')}
      >
        All
      </button>
      <button
        className={filter === 'active' ? 'active' : ''}
        onClick={() => onChange('active')}
      >
        Active
      </button>
      <button
        className={filter === 'completed' ? 'active' : ''}
        onClick={() => onChange('completed')}
      >
        Completed
      </button>
    </div>
  );
}
