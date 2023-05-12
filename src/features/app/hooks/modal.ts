import { useState } from "react";

// Represents the state of each modal, where the key is the modal ID and the value is a boolean indicating whether the modal is open or closed
type ModalsState = Record<string, boolean>;

// Represents the methods available for the modal functionality
interface ModalMethods {
  // Checks if a modal with the specified modalId is currently open
  isOpenModal: (modalId: string) => boolean;

  // Opens the modal with the specified modalId
  openModal: (modalId: string) => void;

  // Closes the modal with the specified modalId
  closeModal: (modalId: string) => void;
}

/**
 * Hook for managing multiple modals
 * @param data - Initial state for the modals, where each key represents a modal ID and the value indicates whether the modal is open or closed
 * @returns An object containing methods for managing modals
 */
export const useModal = (data: ModalsState): ModalMethods => {
  const [modals, setModals] = useState<ModalsState>(data);

  const openModal = (modalId: string): void => {
    setModals((prevModals) => ({
      ...prevModals,
      [modalId]: true,
    }));
  };

  const closeModal = (modalId: string): void => {
    setModals((prevModals) => ({
      ...prevModals,
      [modalId]: false,
    }));
  };

  const isOpenModal = (modalId: string): boolean => modals[modalId] || false;

  return {
    isOpenModal,
    openModal,
    closeModal,
  };
};
