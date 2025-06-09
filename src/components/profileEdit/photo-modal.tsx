import { motion } from 'framer-motion';
import { Pencil, UserRound } from 'lucide-react';
import { useState } from 'react';

import { FormattedImage } from '../../lib/formattedImage';
import { useProfileStore } from '../../stores/useProfileStore';
import { SelectModal } from './select-modal';

interface PhotoModalProps {
  onClose: () => void;
}

export const PhotoModal = ({ onClose }: PhotoModalProps) => {
  const { profileImage, setProfile, resetProfile } = useProfileStore();
  const [selectModal, setSelectModal] = useState(false);

  const handleImageChange = async (file: File) => {
    try {
      const formatted = await FormattedImage({ file });
      const url = URL.createObjectURL(formatted);
      setProfile('profileImage', url);
      setSelectModal(false);
    } catch (err) {
      console.error('이미지 포맷 변환 실패:', err);
    }
  };

  const handleDeleteImage = () => {
    setProfile('profileImage', null);
    setSelectModal(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      onClick={() => {
        if (selectModal) {
          setSelectModal(false);
        } else {
          onClose();
        }
      }}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.3, opacity: 0, y: 0 }}
        animate={{ scale: 1, opacity: 1, y: selectModal ? -20 : 0 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="relative z-10 flex w-2/3 max-w-xs flex-col items-center gap-4"
      >
        <div className="relative flex aspect-square w-full items-center justify-center rounded-full bg-[#c1c1c1]">
          {profileImage ? (
            <img
              src={profileImage}
              alt="업로드된 프로필"
              loading="lazy"
              onError={() => setProfile('profileImage', null)}
              className="aspect-square h-full w-full overflow-hidden rounded-full object-cover"
            />
          ) : (
            <div className='w-full h-full relative overflow-hidden rounded-full'>
              <UserRound className="absolute -bottom-8 h-full w-full fill-white text-transparent" />
            </div>
          )}
          <div
            onClick={() => setSelectModal(true)}
            className="bg-sand absolute right-3 bottom-3 z-50 flex aspect-square w-10 items-center justify-center rounded-full shadow"
          >
            <Pencil />
          </div>
        </div>
      </motion.div>

      {selectModal && (
        <SelectModal
          setSelectModal={setSelectModal}
          handleDeleteImage={handleDeleteImage}
          handleImageChange={handleImageChange}
        />
      )}
    </div>
  );
};
