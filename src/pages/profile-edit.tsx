import { useState } from 'react';

import { ModalWrapper } from '../components/modal-wrapper';
import { BioEdit } from '../components/profileEdit/bio-edit';
import { NickNameEdit } from '../components/profileEdit/nickname-edit';
import { PhotoEdit } from '../components/profileEdit/photo-edit';
import { PhotoModal } from '../components/profileEdit/photo-modal';

export const ProfileEdit = () => {
  const [photoModal, setPhotoModal] = useState(false);

  return (
    <section className="mx-auto h-dvh max-w-200">
      <form>
        <PhotoEdit onOpenPhotoModal={() => setPhotoModal(true)} />
        <NickNameEdit />
        <BioEdit />
        <button type="submit">완료</button>
      </form>

      {photoModal && (
        <ModalWrapper>
          <PhotoModal onClose={() => setPhotoModal(false)} />
        </ModalWrapper>
      )}
    </section>
  );
};
