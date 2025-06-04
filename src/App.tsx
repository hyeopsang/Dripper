import { OverlayProvider } from '@toss/use-overlay';
import { RouterProvider } from 'react-router';

import { AppRouter } from './AppRouter';

export function App() {
  return (
    <OverlayProvider>
      <RouterProvider router={AppRouter} />
    </OverlayProvider>
  );
}
