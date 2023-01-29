import React, {useContext, useState, useRef} from 'react';
import {observer} from 'mobx-react-lite';

import {ReactComponent as CalendarIcon} from '@assets/images/svg/calenadar.svg';

import Input from '@ui/input/Input';
import Button from '@ui/button/Button';

import getFullDate from '@utils/getFullDate';

import styles from './TodoForm.module.scss';

import {CalendarContext} from '@/context/calendar/calendarContext';

const TodoForm = observer(({create}) => {
  const [title, setTitle] = useState('');

  const calendar = useContext(CalendarContext);

  const dateButtonNode = useRef(null);

  const openCalendar = () => {
    const x = dateButtonNode.current.getBoundingClientRect().left;
    const y = dateButtonNode.current.getBoundingClientRect().bottom;

    calendar.setCoords(x, y);
    calendar.toggleVisible();
  };

  const addNewTodo = (e) => {
    e.preventDefault();
    if (title) {
      const newTodo = {
        id: Date.now(),
        title,
        date: calendar.value && calendar.value.toJSON(),
        isCompleted: false,
      };

      create(newTodo);

      setTitle('');
      calendar.setValue(null);
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
      <div className={styles.addBar}>
        <Button
          aria-haspopup={true}
          className={styles.dateButton}
          onClick={openCalendar}
          type="button"
          ref={dateButtonNode}
        >
          <CalendarIcon className={styles.icon}/>
          {
            calendar.value && <span>{getFullDate(calendar.value)}</span>
          }
        </Button>
        <Button
          className={styles.addButton}
          onClick={addNewTodo}
        >
          Добавить
        </Button>
      </div>
    </form>
  );
});

export default TodoForm;