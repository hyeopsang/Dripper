import { Outlet } from 'react-router';

import { NavTab } from '../components/profile/nav-tab';
import { ProfileOverView } from '../components/profile/profile-overview';

export const Profile = () => {
  return (
    <main className="mx-auto h-dvh max-w-200 shadow">
      <div className="flex-center h-120 bg-[url(/img/cat.jpg)]">
        <ProfileOverView />
      </div>
      <NavTab />
      <Outlet />
    </main>
  );
};
