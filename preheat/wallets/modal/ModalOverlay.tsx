import { Fragment, ReactNode, useCallback, useContext, useEffect } from "react";
import { DialogOverlay } from "@reach/dialog";
import { WalletModalOpenContext } from "../context/WalletModalOpenContext";
import { useThemeConfig } from "../hooks/useThemeConfig";
import { isClientSide } from "../constants";

export const ModalOverlay = ({
  children,
  canClose,
  modalName,
}: {
  children: ReactNode;
  canClose: boolean;
  modalName: string;
}) => {
  const { openModalName, setOpenModalName } = useContext(
    WalletModalOpenContext
  );
  const { getStyles } = useThemeConfig();

  const handleOnDismiss = useCallback(() => {
    console.log("dismiss");
    if (canClose && setOpenModalName) {
      setOpenModalName(null);
    }
  }, [canClose, setOpenModalName]);

  const onEscape = useCallback(
    (e: KeyboardEvent) => {
      if (!canClose) {
        return;
      }

      if (e.key === "Escape") {
        return setOpenModalName(null);
      }
    },
    [canClose, setOpenModalName]
  );

  useEffect(() => {
    if (!isClientSide) {
      return;
    }
    window.document.addEventListener("keydown", onEscape, true);
    return () => {
      window.document.removeEventListener("keydown", onEscape, true);
    };
  });

  return openModalName === modalName ? (
    <DialogOverlay onDismiss={handleOnDismiss} className="fixed top-0 right-0 bottom-0 left-0 p-0 m-0 z-50 overflow-auto bg-backgroundDim flex text-center">
      {children}
    </DialogOverlay>
  ) : (
    <Fragment />
  );
};