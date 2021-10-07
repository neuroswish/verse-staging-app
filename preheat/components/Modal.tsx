//import { Modal as ModalStates, Platforms } from "@utils/enums";
import axios from "axios";
//import { MainButton } from "components/Buttons";
//import Spacer from "components/Spacer";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
//import { jsNumberForAddress } from "react-jazzicon";
//import Jazzicon from "react-jazzicon/lib/Jazzicon";
import { Modal } from "react-responsive-modal";
//import { toast } from "react-toastify";
//import { eth, party } from "state/index";
import styles from "styles/components/Modal.module.scss";
//import { ETHInput, RandomizedInput, URLInput } from "./Inputs";


export default function ModalCard({...props}) {
  const [modalOpen, setModalOpen] = useState(false)
  const onOpenModal = () => setModalOpen(true)
  const onCloseModal = () => setModalOpen(false)

  return (
    <Modal
      center
      open={modalOpen}
      onClose={onCloseModal}
    >
      {props}
    </Modal>
  );
}


