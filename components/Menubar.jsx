import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  MenuDivider,
  MenuItem,
  MenuList,
  Menu,
} from "@chakra-ui/react";
import { FaBook } from "react-icons/fa";
import React from "react";

export const Menubar = (props) => {
  const { ref, onOpen, onClose, isOpen } = props;

  return (
    <>
      <Drawer
        size={"md"}
        isOpen={isOpen}
        placement="left"
        ref={ref}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader
            borderBottomWidth="1px"
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            fontSize={["xl", "xx-large"]}
          >
            <FaBook height={"full"} />
            Menu
          </DrawerHeader>

          <DrawerBody>
            <Button
              py={6}
              w={"100%"}
              bg={"none"}
              fontSize={"xl"}
              fontWeight={"semibold"}
            >
              Faculties
            </Button>
            <hr />
            <Button
              py={6}
              w={"100%"}
              bg={"none"}
              fontSize={"xl"}
              fontWeight={"semibold"}
            >
              Faculties
            </Button>
            <hr />
            <Button
              py={6}
              w={"100%"}
              bg={"none"}
              fontSize={"xl"}
              fontWeight={"semibold"}
            >
              Faculties
            </Button>
            <hr />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
