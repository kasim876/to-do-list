import {BrowserRouter} from 'react-router-dom';

import '@styles/App.scss';

import AppRouter from '@components/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
