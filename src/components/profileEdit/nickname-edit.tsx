import { Link } from 'react-router';

import { useProfileStore } from '../../stores/useProfileStore';

export const NickNameEdit = () => {
  const { nickname } = useProfileStore();

  return (
    <Link to="/profile-nickname" className="mx-auto flex w-[90%] flex-col">
      <label>프로필 이름</label>
      <p>{nickname}</p>
    </Link>
  );
};
