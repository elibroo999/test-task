import Filters from './Filters';

type Props = {
  remaining: number;
  filter: 'all' | 'active' | 'completed';
  onFilterChange: (value: 'all' | 'active' | 'completed') => void;
};

export default function Footer({ remaining, filter, onFilterChange }: Props) {
  return (
    <div className="footer">
      <span>{remaining} item left</span>
      <Filters filter={filter} onChange={onFilterChange} />
    </div>
  );
}
