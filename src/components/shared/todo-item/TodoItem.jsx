import React from 'react';
import clsx from 'clsx';

import {ReactComponent as BinIcon} from '@assets/images/svg/bin.svg';

import Checkbox from '@ui/checkbox/Checkbox';
import Button from '@ui/button/Button';

import getFullDate from '@utils/getFullDate';

import styles from './TodoItem.module.scss';

const TodoItem = ({todo, complete, remove}) => {
  const checkDeadline = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today.getTime() + 86400000);

    date = typeof date === 'object' ? date : new Date(date);

    return today.getTime() <= date.getTime();
  };

  return (
    <div className={styles.root}>
      <Checkbox
        className={styles.checkbox}
        isCompleted={todo.isCompleted}
        onClick={() => complete(todo)}
      />
      <div className={styles.info}>
        <span
          className={clsx(styles.title, todo.isCompleted && styles.titleCross)}
        >
          {todo.title}
        </span>
        {todo.date && <small className={clsx(!checkDeadline(todo.date) && styles.deadlineOver)}>{checkDeadline(todo.date) ? 'Срок:' : 'Просрочено:'} {getFullDate(todo.date)}</small>}
      </div>
      <Button className={styles.button} onClick={() => remove(todo)}>
        <BinIcon className={styles.icon}/>
      </Button>
    </div>
  );
};

export default TodoItem;