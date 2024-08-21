import React, { useState, useEffect, useMemo } from "react";
import {
  Box,
  Grid,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";

const MasonryImageGrid = ({ images }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState(null);

  const columns = useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 4 });

  const spanValues = useMemo(
    () => images.map(() => Math.floor(Math.random() * 3) + 1),
    [images]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleImageClick = (src) => {
    setSelectedImage(src);
    onOpen();
  };

  return (
    <>
      <Grid
        p={[1, 2, 4]}
        templateColumns={`repeat(${columns}, 1fr)`}
        gap={10}
        sx={{
          display: "grid",
          gridAutoFlow: "dense",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridAutoColumns: "minmax(0, 1fr)",
          "& > div": {
            gridColumn: "span 1",
          },
        }}
      >
        {images.map((src, index) => (
          <Box
            transitionDuration={"1s"}
            key={index}
            position="relative"
            overflow="hidden"
            borderRadius="sm"
            boxShadow={"sm"}
            sx={{
              gridRowEnd: `span ${spanValues[index]}`,
              cursor: "pointer",
            }}
            _hover={{
              borderRadius: "10px",
            }}
            onClick={() => handleImageClick(src)}
          >
            <Image
              loading="lazy"
              src={src}
              alt={`Image ${index}`}
              objectFit="cover"
              width="100%"
              height="100%"
              _hover={{ filter: "contrast(80%)" }}
            />
          </Box>
        ))}
      </Grid>

      {selectedImage && (
        <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton
              bg={"gray.100"}
              color={"black"}
              _hover={{ bg: "gray.600", color: "white" }}
            />
            <ModalBody boxShadow={"lg"}>
              <Image
                src={selectedImage}
                alt="Popup Image"
                objectFit="contain"
                width="100%"
                height="100%"
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default MasonryImageGrid;
