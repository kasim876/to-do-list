import React from 'react';

import CalendarStore from '@store/CalendarStore';

import {CalendarContext} from './calendarContext';

const CalendarState = ({children}) => {
  return (
    <CalendarContext.Provider value={new CalendarStore()}>
      {children}
    </CalendarContext.Provider>
  );
};

export default CalendarState;