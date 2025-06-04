import { ChevronLeft, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';

import { useProfileStore } from '../stores/useProfileStore';

export const ProfileNickName = () => {
  const { nickname, setProfile } = useProfileStore();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState(nickname || '');

  const handleSave = () => {
    setProfile('nickname', inputValue);
    navigate('/profile-edit');
  };

  return (
    <section>
      <div className="relative w-full border-b border-[#c1c1c1]/30 py-4 text-center">
        <Link to="/profile-edit">
          <ChevronLeft className="absolute top-3 left-[2%] h-8 w-8" />
        </Link>
        <h2>프로필 이름</h2>

        <button
          type="button"
          onClick={handleSave}
          className="absolute top-4 right-[2%] px-3 text-base text-blue-500 sm:text-lg md:text-xl"
        >
          완료
        </button>
      </div>

      <div className="px-[5%] pt-4">
        <div className="mx-auto flex w-full max-w-md items-center justify-between rounded-xl border-2 border-black px-3 py-2 sm:px-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            className="w-full text-sm outline-0 sm:text-base"
            placeholder="닉네임을 입력하세요"
          />
          <X
            onClick={() => setInputValue('')}
            className="ml-2 aspect-square w-4 cursor-pointer sm:w-5"
          />
        </div>
        <p className="mt-2 text-xs text-gray-500 sm:text-sm">
          프로필 이름은 7일 후에 다시 변경이 가능합니다.
        </p>
      </div>
    </section>
  );
};
