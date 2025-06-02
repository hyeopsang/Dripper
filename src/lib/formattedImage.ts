interface FormattedImageProps {
  file: File;
}
export const FormattedImage = ({
  file,
}: FormattedImageProps): Promise<File> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = URL.createObjectURL(file);

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext('2d');
      if (!ctx) return reject('Canvas context 오류');

      ctx.drawImage(img, 0, 0);

      canvas.toBlob(
        (blob) => {
          if (!blob) return reject('WebP 변환 실패');

          const webpFile = new File([blob], 'profile.webp', {
            type: 'image/webp',
          });
          resolve(webpFile);
        },
        'image/webp',
        0.8
      );
    };

    img.onerror = () => reject('이미지 로딩 실패');
  });
};
