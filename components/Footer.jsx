import {
  Box,
  Stack,
  HStack,
  VStack,
  Link,
  Divider,
  Image,
  Text,
  Button,
  IconButton,
  LinkProps,
  Flex,
} from "@chakra-ui/react";
import { FaGithub, FaLess } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";

const Footer = () => {
  return (
    <Box
      mt={10}
      p={[0, 20]}
      pb={10}
      pt={10}
      maxW="full"
      marginInline="auto"
      bg={"blue.900"}
      borderTopRadius={["40", "100", "100"]}
      // borderRadius={"30"}
    >
      <Stack
        spacing={{ base: 8, md: 0 }}
        justifyContent={["center", "space-around"]}
        direction={{ base: "column", md: "row" }}
      >
        <Flex
          flex={1}
          justifyContent={"center"}
          flexDirection={["column", "row"]}
          alignItems={"center"}
          gap={2}
        >
          <Link href="https://www.facebook.com/shreemahendramabi" isExternal>
            <Image
              w="100px"
              src="/logo.jpg"
              alt="TemplatesKart"
              borderRadius={"lg"}
            />
          </Link>
          <Flex flexDirection={"column"}>
            <Text
              mt={2}
              color="gray.100"
              fontSize={["xl", "md", "md", "x-large"]}
            >
              Shree Mahendra Secondary School
            </Text>
            <Text
              textAlign={["center", "auto"]}
              color="gray.200"
              fontSize={["md", , "md", "md", "xl"]}
            >
              Ratuwamai-10, Morang
            </Text>
          </Flex>
        </Flex>
        <HStack
          mt={[4, 0]}
          spacing={4}
          flex={1}
          d={{ base: "none", sm: "flex" }}
          //   bg={"red"}
          justifyContent={"space-around"}
        >
          <VStack spacing={4} alignItems="flex-start">
            <Text fontSize="xl" fontWeight="bold" color={"white"}>
              About
            </Text>
            <VStack spacing={2} alignItems="flex-start" color="gray.500">
              <CustomLink>Contrinute</CustomLink>
              <CustomLink>Media assets</CustomLink>
              <CustomLink>Changelog</CustomLink>
              <CustomLink>Releases</CustomLink>
            </VStack>
          </VStack>

          <VStack spacing={4} alignItems="flex-start">
            <Text fontSize="xl" fontWeight="bold" color={"white"}>
              About
            </Text>
            <VStack spacing={2} alignItems="flex-start" color="gray.500">
              <CustomLink>Contrinute</CustomLink>
              <CustomLink>Media assets</CustomLink>
              <CustomLink>Changelog</CustomLink>
              <CustomLink>Releases</CustomLink>
            </VStack>
          </VStack>
        </HStack>
      </Stack>

      <Divider my={4} />

      {/* <Stack
        direction={{ base: "column", md: "row" }}
        spacing={3}
        justifyContent="space-between"
      >
        <Text fontSize="md">
          Built by{" "}
          <Link
            href="https://github.com/MA-Ahmad"
            textDecoration="underline"
            _hover={{ textDecoration: "underline" }}
            isExternal
          >
            Muhammad Ahmad
          </Link>
        </Text>
        <Stack spacing={2} direction={{ base: "column", md: "row" }}>
          <Button
            leftIcon={<FaGithub />}
            as={Link}
            href="#"
            rounded="md"
            colorScheme="gray"
          >
            Github Discussions
          </Button>
          <Button
            leftIcon={<BsDiscord />}
            as={Link}
            href="#"
            rounded="md"
            color="white"
            bg="purple.500"
            _hover={{ bg: "purple.600" }}
          >
            Discord community
          </Button>
        </Stack>
      </Stack> */}
    </Box>
  );
};

const CustomLink = ({ children, ...props }) => {
  return (
    <Link
      href="#"
      fontSize={["sm", "sm", "x-large"]}
      _hover={{ textDecoration: "underline", color: "white" }}
      {...props}
    >
      {children}
    </Link>
  );
};

export default Footer;
