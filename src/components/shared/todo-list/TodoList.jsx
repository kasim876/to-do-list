import React from 'react';

import TodoItem from '../todo-item/TodoItem';

import styles from './TodoList.module.scss';

const TodoList = ({completedTodos, inCompletedTodos, complete, remove}) => {
  return (
    <div className={styles.root}>
      {
        inCompletedTodos.length === 0
        &&
        <h2 className={styles.placeholder}>Добавь задачу</h2>
      }

      {
        inCompletedTodos.length !== 0
        &&
        inCompletedTodos.map(todo => (
          <TodoItem todo={todo} complete={complete} remove={remove} key={todo.id}/>
        ))
      }

      {
        completedTodos.length !== 0
        &&
        <h2 className={styles.subtitle}>Выполненные задачи</h2>
      }

      {
        completedTodos.length !== 0
        &&
        completedTodos.map(todo => (
          <TodoItem todo={todo} complete={complete} remove={remove} key={todo.id}/>
        ))
      }
    </div>
  );
};

export default TodoList;