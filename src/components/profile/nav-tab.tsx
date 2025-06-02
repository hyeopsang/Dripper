import { Grid3x3, Tag } from 'lucide-react';
import { Link } from 'react-router';
import { useLocation } from 'react-router';

export const NavTab = () => {
  const location = useLocation();
  const isFeedActive = location.pathname === `/profile`;
  const isTagActive = location.pathname.includes(`/profile/tag`);
  return (
    <nav className="grid w-full grid-cols-2 border-[#c1c1c1] text-[#c1c1c1]">
      <Link
        to={'/profile'}
        className={`${isFeedActive ? 'text-[#121212]' : ''} place-items-center border-b-2 py-2.5`}
      >
        <Grid3x3 className="h-6 w-6" />
      </Link>
      <Link
        to={'/profile/tag'}
        className={`${isTagActive ? 'text-[#121212]' : ''} place-items-center border-b-2 py-2.5`}
      >
        <Tag className="h-6 w-6" />
      </Link>
    </nav>
  );
};
