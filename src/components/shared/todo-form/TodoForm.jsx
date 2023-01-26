import React, {useState} from 'react';

import Input from '@ui/input/Input';
import Button from '@ui/button/Button';

import styles from './TodoForm.module.scss';

const TodoForm = ({create}) => {
  const [todo, setTodo] = useState({title: '', descr: ''});

  const addNewTodo = (e) => {
    e.preventDefault();

    if (todo.title) {
      const newTodo = {
        id: Date.now(),
        ...todo,
      };

      create(newTodo);

      setTodo({title: '', descr: ''});
    } else {
      alert('Введите название задачи!');
    }
  };

  return (
    <form className={styles.root}>
      <Input
        className={styles.input}
        placeholder="Название задачи"
        value={todo.title}
        type="text"
        onChange={e => setTodo({...todo, title: e.target.value})}
      />
      <Input
        className={styles.input}
        placeholder="Описание"
        value={todo.descr}
        type="text"
        onChange={e => setTodo({...todo, descr: e.target.value})}
      />
      <Button className={styles.button} onClick={addNewTodo}>Добавить</Button>
    </form>
  );
};

export default TodoForm;