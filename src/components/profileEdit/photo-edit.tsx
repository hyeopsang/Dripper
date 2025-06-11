import { UserRound } from 'lucide-react';

import { useProfileStore } from '../../stores/useProfileStore';
interface PhotoEditProps {
  onOpenPhotoModal: () => void;
}

export const PhotoEdit = ({ onOpenPhotoModal }: PhotoEditProps) => {
  const { profileImage } = useProfileStore();

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative flex aspect-square w-32 items-center justify-center overflow-hidden rounded-full bg-[#c1c1c1]">
        {profileImage ? (
          <img
            src={profileImage}
            alt="프로필 사진"
            className="h-full w-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '';
            }}
          />
        ) : (
          <UserRound className="absolute -bottom-4 h-full w-full fill-white text-transparent" />
        )}
      </div>

      <button
        className="text-xs text-blue-500"
        type="button"
        onClick={onOpenPhotoModal}
      >
        사진 수정
      </button>
    </div>
  );
};
