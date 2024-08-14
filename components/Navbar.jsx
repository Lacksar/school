import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { RiMenuFold3Fill } from "react-icons/ri";

import { motion } from "framer-motion";
import { fadeIn, fadeVariants, fadeInOutVariants } from "@/components/variants";
import React, { useEffect, useRef, useState } from "react";
import { MdMergeType } from "react-icons/md";
import { MdSportsCricket } from "react-icons/md";
import { GiVampireCape } from "react-icons/gi";
import { RiMiniProgramFill } from "react-icons/ri";
import { MdCastForEducation } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { useRouter } from "next/router";

export const Navbar = (props) => {
  const { menuColor = "white" } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const ref = React.useRef();

  const [scrolled, setScrolled] = useState(false);

  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [menu, setMenu] = useState([
    { text: "Faculties", icon: <MdMergeType />, link: "/faculties" },
    { text: "Sports", icon: <MdSportsCricket />, link: "/sports" },
    { text: "ECA", icon: <GiVampireCape />, link: "/eca" },
    { text: "Programmes", icon: <RiMiniProgramFill />, link: "/programmes" },
    { text: "Education", icon: <MdCastForEducation />, link: "/education" },
    { text: "Teachers", icon: <FaChalkboardTeacher />, link: "/teachers" },
    { text: "Gallery", icon: <GrGallery />, link: "/gallery" },
  ]);

  const changeRoute = (link) => {
    router.push(link);
  };

  return (
    <>
      <Flex
        boxShadow={scrolled && "lg"}
        pr={2}
        transitionDuration={"2s"}
        height={["16", "24"]}
        justifyContent={"space-around"}
        alignItems={"center"}
        position={"sticky"}
        top={0}
        zIndex={10}
        backgroundColor={scrolled ? "rgba(255, 255, 255, 0.8)" : "transparent"} // White with 80% opacity
        backdropFilter={scrolled ? "blur(10px)" : "none"} // Blur effect
        direction={"row"} // Ensure children are laid out in a row
      >
        <Flex flex={1} justifyContent={"center"} alignItems={"center"}>
          <motion.div
            variants={fadeIn("down", 0.1, 0.6)}
            initial={"hidden"}
            whileInView={"show"}
          >
            <motion.div
              key={scrolled ? "button" : "text"}
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              {scrolled ? (
                <Button
                  boxShadow={"md"}
                  bg={"none"}
                  _hover={{ border: "2px solid black" }}
                  onClick={onOpen}
                >
                  <RiMenuFold3Fill />
                </Button>
              ) : (
                <Text
                  fontSize={["xl", "xl", "xl", "23px"]}
                  color={
                    scrolled
                      ? "black"
                      : router.pathname === "/"
                      ? "white"
                      : "black"
                  }
                  px={2}
                  border="2px solid transparent"
                  borderRadius={"md"}
                  cursor={"pointer"}
                  transitionDuration={"0.5s"}
                  _hover={{
                    color: scrolled ? "gray.600" : "black",
                    border: "2px",
                    textDecoration: "none",
                  }}
                  onClick={onOpen}
                >
                  Menu
                </Text>
              )}
            </motion.div>
          </motion.div>
        </Flex>

        <Flex
          display={["none", "flex"]}
          flex={1}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {scrolled && (
            <>
              <Flex display={["none", "none", "flex"]} gap={2}>
                {menu.map((x, y) => {
                  return (
                    <Flex
                      flex={1}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <motion.div
                        variants={fadeIn("down", 0.1, 0.6)}
                        initial={"hidden"}
                        whileInView={"show"}
                      >
                        <Text
                          fontSize={["xl", "xl", "xl", "23px"]}
                          color={
                            scrolled
                              ? "black"
                              : router.pathname === "/"
                              ? "white"
                              : "black"
                          }
                          px={2}
                          border="2px solid transparent"
                          borderRadius={"md"}
                          cursor={"pointer"}
                          transitionDuration={"0.5s"}
                          _hover={{
                            color: scrolled ? "gray.600" : "black",
                            border: "2px",
                            textDecoration: "none",
                          }}
                          onClick={() => {
                            changeRoute(x.link);
                          }}
                        >
                          {x.text}
                        </Text>
                      </motion.div>
                    </Flex>
                  );
                })}
              </Flex>
            </>
          )}
        </Flex>

        <Flex></Flex>

        <Flex flex={1} justifyContent={"center"} alignItems={"center"}>
          <motion.div
            variants={fadeIn("down", 0.1, 0.6)}
            initial={"hidden"}
            whileInView={"show"}
          >
            <Text
              fontSize={["xl", "xl", "xl", "23px"]}
              color={
                scrolled ? "black" : router.pathname === "/" ? "white" : "black"
              }
              px={2}
              border="2px solid transparent"
              borderRadius={"md"}
              cursor={"pointer"}
              transitionDuration={"0.5s"}
              _hover={{
                color: scrolled ? "gray.600" : "black",
                border: "2px",
                textDecoration: "none",
              }}
            >
              Contact us
            </Text>
          </motion.div>
        </Flex>
      </Flex>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton mr={4} mt={2} />
          <DrawerHeader
            boxShadow={"md"}
            bg={"gray.50"}
            pl={20}
            fontSize={["24px", "23px"]}
          >
            Menu
          </DrawerHeader>
          {/* <Divider /> */}
          <DrawerBody pl={6} pr={6}>
            <Flex alignItems={"start"} direction="column" gap={1} mt={4}>
              {menu.map((x, y) => {
                return (
                  <Flex
                    boxShadow={"0px 2px 2px whiteSmoke"}
                    cursor={"pointer"}
                    mt={1}
                    h={"10"}
                    fontSize={["20px", "x-large"]}
                    transitionDuration={"0.5s"}
                    _hover={{ bg: "gray.100", transform: "scale(1.1)" }}
                    w={"full"}
                    onClick={() => {
                      changeRoute(x.link);
                      onClose();
                    }}
                    pl={4}
                    pt={2}
                    pb={2}
                  >
                    {x.icon} <Text ml={5}>{x.text}</Text>
                  </Flex>
                );
              })}
            </Flex>
          </DrawerBody>

          <DrawerFooter>{/* Optional footer content */}</DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Flex
        position={"fixed"}
        bottom={2}
        right={5}
        zIndex={10000}
        display={["flex", "flex"]}
        flex={1}
        justifyContent="center"
        alignItems="center"
      >
        {scrolled && (
          <motion.div
            key={scrolled ? "visible" : "hidden"}
            variants={fadeInOutVariants}
            initial="hidden"
            animate={scrolled ? "visible" : "hidden"}
            exit="exit"
            transition={{ duration: 1 }}
          >
            <Heading
              style={{
                boxShadow: "2px 2px 5px gray",
              }}
              fontFamily="Sans, serif, cursive"
              fontWeight="semi-bold"
              fontSize={["xl", "xl", "xl", "23px"]}
              transform="scale(1.4)"
              bg={"gray.200"}
              color={
                scrolled ? "Black" : router.pathname === "/" ? "white" : "black"
              }
              px={2}
              border="2px solid transparent"
              borderRadius="md"
              cursor="pointer"
              transition="color 0.3s, border 0.3s"
            >
              {router.pathname
                .replace(/\//g, "")
                .replace(/^\w/, (c) => c.toUpperCase())}
            </Heading>
          </motion.div>
        )}
      </Flex>
    </>
  );
};
