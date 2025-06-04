import React from 'react';
import ReactDOM from 'react-dom';

interface ModalWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const ModalWrapper = ({
  children,
  className = '',
}: ModalWrapperProps) => {
  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <div
      className="backdrop-blur-custom2 fixed inset-0 z-100 flex items-center justify-center bg-black/30 text-sm"
      aria-modal="true"
      role="dialog"
    >
      <div className={`relative h-full w-full shadow-xl ${className}`}>
        {children}
      </div>
    </div>,
    modalRoot
  );
};
