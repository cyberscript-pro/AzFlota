import React, { ReactNode } from "react";

type ModalButtonProps = {
  children: ReactNode;
  className: string
  onClick: () => void;
  disabled?: boolean;
}

function ModalButton({ children, onClick, className, disabled=false }: ModalButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
}

export default ModalButton;
