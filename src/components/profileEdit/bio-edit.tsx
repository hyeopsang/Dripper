import { Link } from 'react-router';

import { useProfileStore } from '../../stores/useProfileStore';

export const BioEdit = () => {
  const { bio } = useProfileStore();

  return (
    <Link
      to="/profile-bio"
      className="mx-auto flex w-[90%] flex-row items-center text-sm"
    >
      <label className="flex h-6 w-1/4 items-center pb-3">프로필 소개</label>
      <div className="flex h-6 w-3/4 items-center border-b border-[#c1c1c1]/30 pb-3 text-left">
        <p className="w-full truncate">{bio}</p>
      </div>
    </Link>
  );
};
