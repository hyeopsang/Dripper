import { Link } from 'react-router';

export const ProfileEditButton = () => {
  return (
    <Link
      to={'/profile-edit'}
      className="border-sand w-9/10 rounded-xl border bg-transparent py-2.5 text-center"
    >
      프로필 편집
    </Link>
  );
};
