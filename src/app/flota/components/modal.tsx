'use client';

import { useEffect } from 'react';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    
        // Limpiar al desmontar
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Fondo oscuro */}
        <div 
            className="fixed inset-0 bg-gray-500/50 bg-opacity-50 transition-opacity" 
            onClick={onClose}
        />
        
        {/* Contenedor del modal */}
        <div className="flex min-h-full items-center justify-center p-4 text-center">
            <div 
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
            >
            {children}
            </div>
        </div>
        </div>
    );
}