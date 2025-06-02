import React from 'react';

import { FormattedImage } from '../../lib/formattedImage';

interface PhotoEditProps {
  setProfilePhoto: React.Dispatch<React.SetStateAction<File | undefined>>;
}

export const PhotoEdit = ({ setProfilePhoto }: PhotoEditProps) => {
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const formatted = await FormattedImage({ file });
        setProfilePhoto(formatted);
      } catch (err) {
        console.error('이미지 포맷 변환 실패:', err);
      }
    }
  };

  return (
    <div>
      <label htmlFor="photoInput">
        <img alt="프로필 사진 편집" />
      </label>
      <input
        id="photoInput"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />
    </div>
  );
};
