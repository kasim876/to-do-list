import React from 'react';

import Checkbox from '@ui/checkbox/Checkbox';
import Button from '@ui/button/Button';

import styles from './TodoItem.module.scss';

import './TodoItemAnimate.scss';

const TodoItem = ({todo, complete, remove}) => {
  return (
    <div className={styles.root}>
      <Checkbox
        className={styles.checkbox}
        isCompleted={todo.isCompleted}
        onClick={() => complete(todo)}
      />
      <div>
        <h3 className={`${styles.name}${todo.isCompleted ? ` ${styles['name-cross']}` : ''}`}>{todo.title}</h3>
        {
          todo.descr
            ?
            <p className={styles.descr}>{todo.descr}</p>
            :
            ''
        }
      </div>
      <Button className={styles.button} onClick={() => remove(todo)}>Удалить</Button>
    </div>
  );
};

export default TodoItem;