import React from "react";
import Image from "next/image";
import { Box } from "@chakra-ui/react";

const CardPhoto = (props) => {
  const { title, thumbnailUrl, url, onOpen, setPreviewPhoto } = props;

  const handlePreviewPhoto = () => {
    setPreviewPhoto({ title, url });
    onOpen();
  };

  return (
    <Box
      w="-moz-fit-content"
      overflow="hidden"
      borderRadius="sm"
      cursor="pointer"
      onClick={handlePreviewPhoto}
    >
      <Image src={thumbnailUrl + ".png"} alt={title} width={150} height={150} />
    </Box>
  );
};

export default CardPhoto;
