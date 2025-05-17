import { useEffect, useState } from 'react';
import { Store } from '../library/store';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import Footer from './Footer';
import type  { Todo } from '../type';
import '../App.css';

type State = {
  todos: Todo[];
};

const savedTodos = localStorage.getItem('todos');
const initialState: State = {
  todos: savedTodos ? JSON.parse(savedTodos) : [],
};

const store = new Store<State>(initialState);

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>(store.getState().todos);
  const [inputValue, setInputValue] = useState('');
  const [addedItemId, setAddedItemId] = useState<number | null>(null);
  const [deletingIds, setDeletingIds] = useState<number[]>([]);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingValue, setEditingValue] = useState('');

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const state = store.getState();
      setTodos(state.todos);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    });
    return unsubscribe;
  }, []);

  const addTodo = () => {
    if (inputValue.trim() === '') return;
    const newTodo: Todo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };
    store.setState({ todos: [...store.getState().todos, newTodo] });
    setInputValue('');
    setAddedItemId(newTodo.id);
    setTimeout(() => setAddedItemId(null), 300);
  };

  const toggleTodo = (id: number) => {
    const updated = store.getState().todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    store.setState({ todos: updated });
  };

  const deleteTodo = (id: number) => {
    setDeletingIds((prev) => [...prev, id]);
    setTimeout(() => {
      const filtered = store.getState().todos.filter((todo) => todo.id !== id);
      store.setState({ todos: filtered });
      setDeletingIds((prev) => prev.filter((delId) => delId !== id));
    }, 300);
  };

  const clearCompleted = () => {
    const remaining = store.getState().todos.filter((todo) => !todo.completed);
    store.setState({ todos: remaining });
    localStorage.setItem('todos', JSON.stringify(remaining));
  };

  const startEdit = (id: number, currentText: string) => {
    setEditingId(id);
    setEditingValue(currentText);
  };

  const finishEdit = (id: number) => {
    const trimmed = editingValue.trim();
    if (trimmed === '') {
      setEditingId(null);
      return;
    }
    const updated = store.getState().todos.map((todo) =>
      todo.id === id ? { ...todo, text: trimmed } : todo
    );
    store.setState({ todos: updated });
    setEditingId(null);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <>
      <h1 style={{ textAlign: 'center' }} className="app-title">TODOS</h1>
      <div className="app-container">
        <TodoInput
          inputValue={inputValue}
          onChange={setInputValue}
          onAdd={addTodo}
        />
        <TodoList
          todos={filteredTodos}
          addedItemId={addedItemId}
          deletingIds={deletingIds}
          editingId={editingId}
          editingValue={editingValue}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onStartEdit={startEdit}
          onEditChange={setEditingValue}
          onEditFinish={finishEdit}
        />
        <Footer
          remaining={todos.filter((t) => !t.completed).length}
          filter={filter}
          onFilterChange={setFilter}
        />
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={clearCompleted}
            className="clear-button"
          >
            Clear Completed
          </button>
        </div>
      </div>
      <p className="note">Double-click to edit a todo<br />Written by Matvey</p>
    </>
  );
}
