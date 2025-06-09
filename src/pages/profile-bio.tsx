import { ChevronLeft } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';

import { useProfileStore } from '../stores/useProfileStore';

export const ProfileBio = () => {
  const { bio, setProfile } = useProfileStore();
  const [text, setText] = useState(bio || '');
  const navigate = useNavigate();

  const handleSave = () => {
    setProfile('bio', text);
    navigate('/profile-edit');
  };

  return (
    <section>
      <div className="relative w-full border-b border-[#c1c1c1]/30 py-3 text-center">
        <Link to="/profile-edit">
          <ChevronLeft className="absolute top-3 left-[2%] h-6 w-6" />
        </Link>
        <h2>프로필 소개</h2>

        <button
          type="button"
          onClick={handleSave}
          className="absolute top-3 right-[2%] px-3 text-sm text-blue-500 sm:text-lg md:text-xl"
        >
          완료
        </button>
      </div>

      <div className="px-[5%] pt-4">
        <div className="relative mx-auto w-full max-w-md rounded-xl border-2 border-black px-3 py-2 sm:px-4">
          <textarea
            rows={4}
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            className="w-full resize-none text-sm outline-0 sm:text-base"
            placeholder="프로필 소개를 입력하세요 (예: 안녕하세요! 바리스타 OOO입니다.)"
          />
        </div>
        <p className="mt-2 text-xs text-gray-500 sm:text-sm">
          프로필 소개는 최대 200자까지 입력 가능합니다.
        </p>
      </div>
    </section>
  );
};
