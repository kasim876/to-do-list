import React, {useState} from 'react';

import Input from '@ui/input/Input';
import Button from '@ui/button/Button';

import styles from './TodoForm.module.scss';

const TodoForm = ({create}) => {
  const [title, setTitle] = useState('');

  const addNewTodo = (e) => {
    e.preventDefault();

    if (title) {
      const newTodo = {
        id: Date.now(),
        title,
        isCompleted: false,
      };

      create(newTodo);

      setTitle('');
    } else {
      alert('Напишите задачу');
    }
  };

  return (
    <form className={styles.root}>
      <Input
        className={styles.input}
        placeholder="Добавьте задачу"
        value={title}
        type="text"
        onChange={e => setTitle(e.target.value)}
      />
      <Button className={styles.button} onClick={addNewTodo}>Добавить</Button>
    </form>
  );
};

export default TodoForm;