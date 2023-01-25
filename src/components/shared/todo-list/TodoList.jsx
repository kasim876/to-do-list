import React from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

import TodoItem from '../todo-item/TodoItem';

import styles from './TodoList.module.scss';

const TodoList = ({todos, title, remove}) => {

  return (
    <div>
      <h1 align="center" className={styles.title}>{title}</h1>
      <div className={styles.root}>
        {todos.length === 0
          ?
          <h2 className={styles.placeholder}>Нет задач</h2>
          :
          <TransitionGroup>
            {
              todos.map(todo => (
                <CSSTransition
                  key={todo.id}
                  timeout={500}
                  classNames="todo"
                >
                  <TodoItem remove={remove} todo={todo}/>
                </CSSTransition>
              ))
            }
          </TransitionGroup>
        }
      </div>
    </div>
  );
};

export default TodoList;