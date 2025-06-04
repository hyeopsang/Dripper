import { useProfileStore } from '../../stores/useProfileStore';

interface PhotoEditProps {
  onOpenPhotoModal: () => void;
}

export const PhotoEdit = ({ onOpenPhotoModal }: PhotoEditProps) => {
  const { profileImage } = useProfileStore();

  return (
    <div className="flex flex-col items-center">
      <div className="flex aspect-square w-1/2 items-center justify-center overflow-hidden rounded-full bg-[#c1c1c1]">
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
          <span className="text-white">사진 없음</span>
        )}
      </div>

      <button type="button" onClick={onOpenPhotoModal}>
        수정
      </button>
    </div>
  );
};
