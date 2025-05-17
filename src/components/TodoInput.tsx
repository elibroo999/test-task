type Props = {
  inputValue: string;
  onChange: (value: string) => void;
  onAdd: () => void;
};

export default function TodoInput({ inputValue, onChange, onAdd }: Props) {
  return (
    <div className="todo-input">
      <input
        type="text"
        placeholder="What needs to be done?"
        value={inputValue}
        onChange={(e) => onChange(e.target.value)}
      />
      <button onClick={onAdd}>Enter</button>
    </div>
  );
}
