import { chakra, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

export const PageHead = () => {
  return (
    <Flex>
      <Flex
        justifyContent={["start", "start", "center"]}
        alignItems={["start", "center"]}
        flex={[1, 1, 1, 0.8]}
        w={"lg"}
        // bg="green"
        flexDirection={"column"}
        rowGap={5}
        boxSizing="border-box"
        pl={[10, 4, 10]}
        pt={[5, 4, 10]}
        pb={[5, 4, 10]}
        bg={["blue.400", "none", "none"]}
        color={["white", "black", "black"]}
        borderBottom={"1px solid black"}
        // borderRight={"1px solid black"}
        mb={2}
        m={3}
        borderRadius={"lg"}
      >
        <Heading
          fontWeight={["semi-bold"]}
          fontSize={["xx-large", "xx-large", "xxx-large"]}
        >
          Photo gallery
        </Heading>
        <Text
          color={["blue.200", "blue.500"]}
          fontSize={["md", "xl", "x-large"]}
        >
          {"MSS >"}{" "}
          <chakra.span color={["blue.100", "blue.200"]}>
            {" "}
            photo gallery
          </chakra.span>
        </Text>
      </Flex>
      <Flex flex={[0, 1, 1, 1]}></Flex>
    </Flex>
  );
};
