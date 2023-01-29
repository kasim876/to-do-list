import React, {useState, useEffect} from 'react';

import TodoForm from '@shared/todo-form/TodoForm';
import TodoList from '@shared/todo-list/TodoList';

const Home = () => {
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) || []);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [inCompletedTodos, setInCompletedTodos] = useState([]);

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem('todos'));

    if (localStorageData !== todos) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }

    setCompletedTodos(todos.filter(t => t.isCompleted));
    setInCompletedTodos(todos.filter(t => !t.isCompleted));
  }, [todos]);

  const createTodo = (newTodo) => {
    setTodos([
      ...todos,
      newTodo,
    ]);
  };

  const completeTodo = (todo) => {
    const copy = [...todos];

    const current = copy.find(t => t.id === todo.id);
    current.isCompleted = !current.isCompleted;

    setTodos(copy);
  };

  const removeTodo = (todo) => {
    setTodos(todos.filter(t => t.id !== todo.id));
  };

  return (
    <div className="container">
      <TodoForm create={createTodo}/>
      <hr/>
      <TodoList completedTodos={completedTodos} inCompletedTodos={inCompletedTodos} title="Список задач" complete={completeTodo} remove={removeTodo}/>
    </div>
  );
};

export default Home;