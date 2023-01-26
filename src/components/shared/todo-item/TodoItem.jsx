import React from 'react';

import {ReactComponent as BinIcon} from '@assets/images/svg/bin.svg';

import Checkbox from '@ui/checkbox/Checkbox';
import Button from '@ui/button/Button';

import styles from './TodoItem.module.scss';

const TodoItem = ({todo, complete, remove}) => {
  return (
    <div className={styles.root}>
      <Checkbox
        className={styles.checkbox}
        isCompleted={todo.isCompleted}
        onClick={() => complete(todo)}
      />
      <span
        className={`${styles.title}${todo.isCompleted ? ` ${styles.titleCross}` : ''}`}
      >
        {todo.title}
      </span>
      <Button className={styles.button} onClick={() => remove(todo)}>
        <BinIcon className={styles.icon}/>
      </Button>
    </div>
  );
};

export default TodoItem;