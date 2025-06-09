import { RouterProvider } from 'react-router';

import { AppRouter } from './AppRouter';

export function App() {
  return <RouterProvider router={AppRouter} />;
}
