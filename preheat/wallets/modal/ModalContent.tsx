import { DialogContent, DialogContentProps } from "@reach/dialog";
import { ReactNode } from "react";
import { useThemeConfig } from "../hooks/useThemeConfig";

export interface ModalContentProps extends DialogContentProps {
  className?: string;
  title?: string;
  size?: "small" | "normal";
  ariaLabel?: string;
  canClose?: boolean;
}

export const ModalContent = ({
  title,
  ariaLabel,
  children,
}: {
  title: string;
  ariaLabel: string;
  children: ReactNode;
}) => {
  const { getStyles } = useThemeConfig();
  return (
    <DialogContent
      aria-label={ariaLabel}
      title={title}
      className="px-4 py-5 max-h-full w-full flex bg-white px-8 md:px-28 pt-12 pb-8 w-full max-w-lg md:rounded-2xl shadow-lg focus:outline-none hover:outline-none"
    >
      {children}
    </DialogContent>
  );
};