import {BrowserRouter} from 'react-router-dom';

import '@styles/App.scss';

import AppRouter from '@components/AppRouter';

import CalendarState from '@/context/calendar/CalendarState';

const App = () => {
  return (
    <CalendarState>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </CalendarState>
  );
};

export default App;
