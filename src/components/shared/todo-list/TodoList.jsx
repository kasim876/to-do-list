import React from 'react';

import TodoItem from '../todo-item/TodoItem';

import styles from './TodoList.module.scss';

const TodoList = ({todos, complete, remove}) => {
  const completedTodos = todos.filter(t => t.isCompleted === true);
  const unCompletedTodos = todos.filter(t => t.isCompleted === false);

  return (
    <div>
      <div className={styles.root}>
        {
          unCompletedTodos.length === 0
            ?
            <h2 className={styles.placeholder}>Нет задач</h2>
            :
            unCompletedTodos.map(todo => (
              <TodoItem todo={todo} complete={complete} remove={remove} key={todo.id}/>
            ))
        }
        {
          completedTodos.length !== 0
            ?
            <>
              <h2 className={styles.subtitle}>Завершенные</h2>
              {
                completedTodos.map(todo => (
                  <TodoItem todo={todo} complete={complete} remove={remove} key={todo.id}/>
                ))
              }
            </>
            :
            ''
        }
      </div>
    </div>
  );
};

export default TodoList;