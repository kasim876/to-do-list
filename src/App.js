import {BrowserRouter} from 'react-router-dom';

import '@styles/App.scss';

import AppRouter from '@components/AppRouter';

import CalendarWrapper from '@ui/calendar-wrapper/CalendarWrapper';
import React from 'react';

import CalendarState from '@/context/calendar/CalendarState';

const App = () => {
  return (
    <CalendarState>
      <BrowserRouter>
        <CalendarWrapper/>
        <AppRouter />
      </BrowserRouter>
    </CalendarState>
  );
};

export default App;
