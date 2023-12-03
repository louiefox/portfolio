import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Image {
  name: string;
  url: string;
}

interface PictureModalProps {
  isOpen: boolean;
  setPictureModal: (isOpen: boolean) => void;
  images: { [key: string]: Image };
  title: string;
}

export default function PictureModal(props: PictureModalProps) {
  const { title, images } = props;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleClose = () => {
    props.setPictureModal(false);
    console.warn(props.isOpen);
  };

  return (
    <Modal
      isOpen={props.isOpen}
      onOpenChange={onOpenChange}
      size="4xl"
      hideCloseButton
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-white">
              {title}
            </ModalHeader>
            <ModalBody>
              <Carousel showThumbs={false}>
                {Object.values(images).map((image, index) => (
                  <div key={index}>
                    <Image width={0} height={0} src={image.url} alt={`Image ${index}`} sizes="100vw" />

                  </div>
                ))}
              </Carousel>
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
  );
}
