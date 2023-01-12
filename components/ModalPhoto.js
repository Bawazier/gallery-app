import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Image from "next/image";
import { Box } from "@chakra-ui/react";

const ModalPhoto = (props) => {
  const { isOpen, onClose, previewPhoto } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full">
      <ModalOverlay
        bg="none"
        backdropFilter="auto"
        backdropInvert="80%"
        backdropBlur="2px"
      />
      <ModalContent backgroundColor="transparent">
        <ModalHeader color="white">
          {previewPhoto?.title?.toUpperCase()}
        </ModalHeader>
        <ModalCloseButton color="white" />
        <ModalBody display="flex" alignItems="center" justifyContent="center">
          <Box w="-moz-fit-content" overflow="hidden" borderRadius="sm">
            <Image
              src={previewPhoto?.url + ".png"}
              alt={previewPhoto?.title}
              width={600}
              height={600}
            />
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalPhoto;
