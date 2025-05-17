import type {Todo}  from '../type';

type Props = {
  todo: Todo;
  isNew: boolean;
  isDeleting: boolean;
  isEditing: boolean;
  editingValue: string;
  onToggle: () => void;
  onDelete: () => void;
  onStartEdit: () => void;
  onEditChange: (text: string) => void;
  onEditFinish: () => void;
};

export default function TodoItem({
  todo,
  isNew,
  isDeleting,
  isEditing,
  editingValue,
  onToggle,
  onDelete,
  onStartEdit,
  onEditChange,
  onEditFinish
}: Props) {
  const className = `todo-item ${isNew ? 'enter' : ''} ${isDeleting ? 'exit' : ''}`;

  return (
    <li className={className}>
      <input type="checkbox" checked={todo.completed} onChange={onToggle} />

      {isEditing ? (
        <input
          type="text"
          value={editingValue}
          autoFocus
          onChange={(e) => onEditChange(e.target.value)}
          onBlur={onEditFinish}
          onKeyDown={(e) => {
            if (e.key === 'Enter') onEditFinish();
          }}
          style={{ flex: 1 }}
        />
      ) : (
        <span
          className={`todo-text ${todo.completed ? 'completed' : ''}`}
          onDoubleClick={onStartEdit}
        >
          {todo.text}
        </span>
      )}

      <div className="todo-actions">
        <button onClick={onDelete}>🗑</button>
      </div>
    </li>
  );
}
