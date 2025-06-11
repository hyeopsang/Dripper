import { ChevronLeft } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

import { ModalWrapper } from '../components/modal-wrapper';
import { BioEdit } from '../components/profileEdit/bio-edit';
import { NickNameEdit } from '../components/profileEdit/nickname-edit';
import { PhotoEdit } from '../components/profileEdit/photo-edit';
import { PhotoModal } from '../components/profileEdit/photo-modal';

export const ProfileEdit = () => {
  const [photoModal, setPhotoModal] = useState(false);

  return (
    <section className="mx-auto h-dvh max-w-200">
      <div className="relative w-full border-b border-[#c1c1c1]/30 py-3 text-center">
        <Link to="/profile">
          <ChevronLeft className="absolute top-3 left-[2%] h-6 w-6" />
        </Link>
        <h2>프로필 편집</h2>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 pt-4">
        <PhotoEdit onOpenPhotoModal={() => setPhotoModal(true)} />
        <NickNameEdit />
        <BioEdit />
      </div>

      {photoModal && (
        <ModalWrapper>
          <PhotoModal onClose={() => setPhotoModal(false)} />
        </ModalWrapper>
      )}
    </section>
  );
};
