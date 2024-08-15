// src/context/ModalContext.tsx
import  { createContext, useContext, useState, ReactNode } from 'react';

type ModalContextType = {
  isNavbarModalOpen: boolean;
  openNavbarModal: () => void;
  closeNavbarModal: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isNavbarModalOpen, setIsNavbarModalOpen] = useState(false);

  const openNavbarModal = () => setIsNavbarModalOpen(true);
  const closeNavbarModal = () => setIsNavbarModalOpen(false);

  return (
    <ModalContext.Provider value={{ isNavbarModalOpen, openNavbarModal, closeNavbarModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// Custom hook to use the modal context
export const useModalContextNew = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModalContext must be used within a ModalProvider');
  }
  return context;
};
