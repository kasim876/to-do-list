import React from 'react';

import Button from '@ui/button/Button';

import styles from './TodoItem.module.scss';

const TodoItem = ({todo, remove}) => {
  return (
    <div className={styles.root}>
      <div>
        <h3 className={styles.name}>{todo.title}</h3>
        <p className={styles.descr}>{todo.descr}</p>
      </div>
      <Button className={styles.button} onClick={() => remove(todo)}>Удалить</Button>
    </div>
  );
};

export default TodoItem;