import TodoItem from './TodoItem';
import type { Todo } from '../type';

type Props = {
  todos: Todo[];
  addedItemId: number | null;
  deletingIds: number[];
  editingId: number | null;
  editingValue: string;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onStartEdit: (id: number, text: string) => void;
  onEditChange: (text: string) => void;
  onEditFinish: (id: number) => void;
};

export default function TodoList({
  todos,
  addedItemId,
  deletingIds,
  editingId,
  editingValue,
  onToggle,
  onDelete,
  onStartEdit,
  onEditChange,
  onEditFinish,
}: Props) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          isNew={addedItemId === todo.id}
          isDeleting={deletingIds.includes(todo.id)}
          isEditing={editingId === todo.id}
          editingValue={editingValue}
          onToggle={() => onToggle(todo.id)}
          onDelete={() => onDelete(todo.id)}
          onStartEdit={() => onStartEdit(todo.id, todo.text)}
          onEditChange={onEditChange}
          onEditFinish={() => onEditFinish(todo.id)}
        />
      ))}
    </ul>
  );
}
