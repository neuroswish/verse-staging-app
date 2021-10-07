import { createContext } from "react";

export const WALLET_MODAL_NAME = "WALLET";

type ModalNameType = string | null;

// here we create a new context using a generic
// we set the default value to null, and the function doesn't return anything, it just changes the value
export const WalletModalOpenContext = createContext<{
  openModalName: ModalNameType;
  setOpenModalName: (modalName: ModalNameType) => void;
}>({
  openModalName: null,
  setOpenModalName: (_modalName: ModalNameType) => {
    throw new Error("Open Modal Context Not Setup");
  },
});