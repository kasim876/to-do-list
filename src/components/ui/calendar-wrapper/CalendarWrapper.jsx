import React, {useContext} from 'react';
import {observer} from 'mobx-react-lite';

import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';

import styles from './CalendarWrapper.module.scss';

import {CalendarContext} from '@/context/calendar/calendarContext';

const CalendarWrapper = observer(() => {
  const calendar = useContext(CalendarContext);

  if (!calendar.visible) {
    return null;
  }

  return (
    <div
      className={styles.root}
      style={{position: 'absolute', left: calendar.coords.x, top: calendar.coords.y + 15}}
    >
      <Calendar
        value={calendar.value || new Date()}
        minDate={new Date()}
        className={styles.calendar}
        prev2Label={null}
        next2Label={null}
        onClickDay={
          (value) => {
            calendar.setValue(value);
            calendar.toggleVisible();
          }
        }
      />
    </div>
  );
});

export default CalendarWrapper;