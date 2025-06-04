import { Link } from 'react-router';

import { useProfileStore } from '../../stores/useProfileStore';

export const BioEdit = () => {
  const { bio } = useProfileStore();

  return (
    <Link to="/profile-bio" className="mx-auto flex w-[90%] flex-col">
      <label>프로필 소개</label>
      <p>{bio}</p>
    </Link>
  );
};
