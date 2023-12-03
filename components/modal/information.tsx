import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";


interface InformationModalProps {
  isOpen: boolean;
  setReadMoreModal: (isOpen: boolean) => void;
  title: string;
  description: string;
}

export default function InformationModal(props: InformationModalProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleClose = () => {
    props.setReadMoreModal(false);
    console.warn(props.isOpen);
  };

  return (
    <Modal isOpen={props.isOpen} onOpenChange={onOpenChange} hideCloseButton>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-white">{props.title}</ModalHeader>
            <ModalBody>
              <p className="text-white">
                {props.description}
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={handleClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )

}