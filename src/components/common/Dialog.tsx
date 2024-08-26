import { ReactNode, useState } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  isOpen: boolean;
  setIsOpen(isOpen: boolean): void;
  title: ReactNode;
  content: ReactNode;
  footer: ReactNode;
}

const Dialog = ({ isOpen, setIsOpen, title, content, footer }: Props) => {
  return createPortal(
    isOpen ? (
      <div
        data-dialog-backdrop="dialog"
        data-dialog-backdrop-close="true"
        className={`pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60${
          isOpen ? '' : ' opacity-0'
        } backdrop-blur-sm transition-opacity duration-300`}
      >
        <div
          data-dialog="dialog"
          className="relative m-4 w-4/5 rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl"
        >
          <div className="flex justify-center items-center p-4 font-sans text-xl antialiased font-semibold leading-snug text-blue-gray-900">
            {title}
          </div>
          <div className="relative p-4 font-sans text-base antialiased font-light leading-relaxed border-t border-b border-t-blue-gray-100 border-b-blue-gray-100 text-blue-gray-500">
            {content}
          </div>
          <div className="flex flex-wrap items-center justify-end p-4 shrink-0 text-blue-gray-500">
            {footer}
          </div>
        </div>
      </div>
    ) : null,
    document.getElementById('h-dialog') as HTMLDivElement
  );
};

export default Dialog;
