import { createBrowserRouter } from 'react-router';

import { ProfileFeed } from './components/profile/profile-feed';
import { ProfileTag } from './components/profile/profile-tag';
import { Home } from './pages/home';
import { Profile } from './pages/profile';
import { ProfileEdit } from './pages/profile-edit';

const RouterInfo = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/profile',
    element: <Profile />,
    children: [
      {
        index: true,
        element: <ProfileFeed />,
      },
      {
        path: 'feed',
        element: <ProfileFeed />,
      },
      {
        path: 'tag',
        element: <ProfileTag />,
      },
    ],
  },
  {
    path: '/profile-edit',
    element: <ProfileEdit />,
  },
];

export const AppRouter = createBrowserRouter(RouterInfo);
