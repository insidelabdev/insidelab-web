import React from "react";
import { Modal, ModalContent, ModalBody } from "@nextui-org/react";
import Image from "next/image";

export default function ModalComponent({ src, isOpen, onOpenChange }: any) {
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <Image src={src} height={500} width={500} alt="modal-image" />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
