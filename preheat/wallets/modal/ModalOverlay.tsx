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
    <DialogOverlay onDismiss={handleOnDismiss} className="z-10 fixed w-screen h-full top-0 left-0 flex justify-start items-start pb-36 bg-gray-300 bg-opacity-50 md:items-center md:justify-center md:h-100 md:pb-0">
      {children}
    </DialogOverlay>
  ) : (
    <Fragment />
  );
};