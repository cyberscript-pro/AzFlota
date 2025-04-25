import React, { ReactNode } from "react";

type ModalButtonProps = {
  children: ReactNode;
  className: string
  onClick: () => void;
}

function ModalButton({ children, onClick, className }: ModalButtonProps) {
  return (
    <button
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
}

export default ModalButton;
