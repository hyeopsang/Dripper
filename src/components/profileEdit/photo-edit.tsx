import { useProfileStore } from '../../stores/useProfileStore';
import { UserRound } from 'lucide-react';
interface PhotoEditProps {
  onOpenPhotoModal: () => void;
}

export const PhotoEdit = ({ onOpenPhotoModal }: PhotoEditProps) => {
  const { profileImage } = useProfileStore();

  return (
    <div className="flex flex-col gap-3 items-center">
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
            <UserRound className="h-full w-full text-transparent fill-white absolute -bottom-5" />
        )}
      </div>

      <button className='text-blue-500 text-xs' type="button" onClick={onOpenPhotoModal}>
        사진 수정
      </button>
    </div>
  );
};
