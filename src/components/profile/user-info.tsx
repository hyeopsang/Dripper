import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

import { ProfileEditButton } from './profile-edit-button';

export const UserInfo = () => {
  const [bio, setBio] = useState(
    '안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.'
  );
  const [openBio, setOpenBio] = useState(false);
  const defaultBio = bio.slice(0, 12);
  const handleChangeFullBio = () => {
    setOpenBio(!openBio);
  };
  const arrowUpDown = openBio ? (
    <ChevronUp className="h-4 w-4" />
  ) : (
    <ChevronDown className="h-4 w-4" />
  );

  return (
    <div className="backdrop-blur-custom bg-sand/30 shadow-sand/30 flex-center mx-auto h-fit w-full flex-col gap-2 rounded-xl py-4 text-xs font-thin text-white shadow">
      <div className="aspect-square w-25 overflow-hidden rounded-full">
        <img
          alt="임시 프로필"
          src="/img/profile.jpg"
          className="w-full object-cover"
        />
      </div>
      <p className="text-lg font-semibold drop-shadow">nickname</p>
      <div className="flex gap-1 px-6">
        <p className="text-truncate mx-auto line-clamp-1 w-30 drop-shadow">
          {bio}
        </p>
        <button className="font-thin" onClick={handleChangeFullBio}>
          더보기
        </button>
      </div>

      <div className="flex-center gap-2 pb-2">
        <div className="flex gap-1">
          <p>팔로잉</p>
          <p className="font-normal">99</p>
        </div>
        <div className="flex gap-1">
          <p>팔로워</p>
          <p className="font-normal">99</p>
        </div>
      </div>
      <ProfileEditButton />
      {openBio && (
        <p className="fixed top-[50%] left-[50%] w-100 -translate-[50%] bg-[#121212]/80 p-2.5 text-center">
          {bio}
        </p>
      )}
    </div>
  );
};
