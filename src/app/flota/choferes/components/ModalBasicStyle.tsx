import React, { ReactNode } from "react";

type ModalBasicStyleProps = {
  title?:string;
  classNameTitle?: string;
  classNameContainer?: string;
  children: ReactNode;
}

function ModalBasicStyle({ title, classNameTitle, classNameContainer, children }: ModalBasicStyleProps) {
  return (
    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
      <div className="sm:flex sm:items-start">
        <div className={`mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full ${classNameContainer}`}>
          <h3 className={`text-base font-semibold leading-6 ${classNameTitle}`}>
            {title}
          </h3>
          {children}
        </div>
      </div>
    </div>
  );
}

export default ModalBasicStyle;
