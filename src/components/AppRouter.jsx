import {Routes, Route, Navigate} from 'react-router-dom';

import {HOME_ROUTE} from '@utils/consts';

import {ROUTES} from '@/routes';

const AppRouter = () => {
  return (
    <Routes>
      {ROUTES.map(({path, element}) => <Route key={path} path={path} element={element} /> )}

      <Route
        element={<Navigate to={HOME_ROUTE} />}
        path="*"
      />
    </Routes>
  );
};

export default AppRouter;