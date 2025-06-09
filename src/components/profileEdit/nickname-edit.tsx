import { Link } from 'react-router';

import { useProfileStore } from '../../stores/useProfileStore';

export const NickNameEdit = () => {
  const { nickname } = useProfileStore();

  return (
    <Link
      to="/profile-nickname"
      className="mx-auto flex w-[90%] flex-row items-center text-sm"
    >
      <label className="flex h-6 w-1/4 items-center pb-3">프로필 이름</label>
      <div className="flex h-6 w-3/4 items-center border-b border-[#c1c1c1]/30 pb-3 text-left">
        <p className="w-full">{nickname}</p>
      </div>
    </Link>
  );
};
