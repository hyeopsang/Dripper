import { motion } from 'framer-motion';
import { useRef } from 'react';

interface SelectModalProps {
  setSelectModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleDeleteImage: () => void;
  handleImageChange: (file: File) => void;
}

export const SelectModal = ({
  setSelectModal,
  handleDeleteImage,
  handleImageChange,
}: SelectModalProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const onLibrarySelect = () => {
    fileInputRef.current?.click();
  };

  const onTakePhoto = () => {
    cameraInputRef.current?.click();
  };

  const onDelete = () => {
    handleDeleteImage();
    setSelectModal(false);
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleImageChange(file);
    }
  };

  return (
    <motion.div
      initial={{ scale: 0.3, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.1, ease: 'easeOut' }}
      className="bg-sand h-fit w-1/2 rounded-2xl p-2 shadow"
      onClick={(e) => e.stopPropagation()}
    >
      <ul className="flex flex-col gap-1">
        <li
          className="cursor-pointer rounded-2xl px-3 py-2 hover:bg-gray-200"
          onClick={onLibrarySelect}
        >
          라이브러리에서 선택
        </li>
        <li
          className="cursor-pointer rounded-2xl px-3 py-2 hover:bg-gray-200"
          onClick={onTakePhoto}
        >
          사진 찍기
        </li>
        <li
          className="cursor-pointer rounded-2xl px-3 py-2 text-red-600 hover:bg-gray-200"
          onClick={onDelete}
        >
          삭제
        </li>
      </ul>

      <input
        type="file"
        accept="image/*"
        className="hidden"
        ref={fileInputRef}
        onChange={onFileChange}
      />
      <input
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        ref={cameraInputRef}
        onChange={onFileChange}
      />
    </motion.div>
  );
};
