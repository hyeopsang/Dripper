import { createBrowserRouter } from 'react-router';

import { ProfileFeed } from './components/profile/profile-feed';
import { ProfileTag } from './components/profile/profile-tag';
import { Home } from './pages/home';
import { Profile } from './pages/profile';
import { ProfileBio } from './pages/profile-bio';
import { ProfileEdit } from './pages/profile-edit';
import { ProfileNickName } from './pages/profile-nickname';

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
  {
    path: 'profile-nickname',
    element: <ProfileNickName />,
  },
  {
    path: 'profile-bio',
    element: <ProfileBio />,
  },
];

export const AppRouter = createBrowserRouter(RouterInfo);
