import { useState } from 'react';

import { BioEdit } from '../components/profileEdit/bio-edit';
import { NickNameEdit } from '../components/profileEdit/nickname-edit';
import { PhotoEdit } from '../components/profileEdit/photo-edit';

export const ProfileEdit = () => {
  const [profilePhoto, setProfilePhoto] = useState<File | undefined>(undefined);
  return (
    <section className="mx-auto h-dvh max-w-200">
      <form>
        <PhotoEdit setProfilePhoto={setProfilePhoto} />
        <NickNameEdit />
        <BioEdit />
        <button>완료</button>
      </form>
    </section>
  );
};
