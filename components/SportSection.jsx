import React from "react";
import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

export default function SportSection(props) {
  const { title, imgSrc, description, imageFirst } = props;

  return (
    <>
      <Flex
        bg={["gray.50", "gray.50", "none", "none"]}
        mb={5}
        px={[6, 4, 4, 2]}
        borderRadius={5}
        pb={2}
        pt={2}
        gap={5}
        overflow={"hidden"}
        minH={"80vh"}
        flexDirection={[
          "column",
          "column",
          imageFirst ? "row-reverse" : "row",
          imageFirst ? "row-reverse" : "row",
        ]}
        ml={[5, 10, 5, 5]}
        mr={[5, 10, 5, 5]}
      >
        <Flex flex={1} align={["start", "center"]} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              textAlign={["center", "left", "left"]}
            >
              <br />
              <Text
                color={"gray.900"}
                as={"span"}
                textAlign={["center", "left", "left"]}
              >
                {title ? title : "Sports and Athletics"}
              </Text>
            </Heading>
            <Text
              fontSize={{ base: "md", lg: "lg" }}
              color={"gray.600"}
              textAlign={"justify"}
            >
              {description
                ? description
                : "Our school is dedicated to promoting a healthy and active lifestyle through sports and athletics. We offer a variety of programs and teams for students to engage in, from competitive sports to recreational activities. Join us to stay active, build teamwork skills, and enjoy the excitement of sports!"}
            </Text>
          </Stack>
        </Flex>
        <Flex
          flex={["auto", "auto", 1, 1]}
          h={"80vh"}
          justifyContent={"center"}
        >
          <Image
            loading="lazy"
            borderRadius={"md"}
            objectFit={"cover"}
            alt={"Sports Image"}
            src={imgSrc ? imgSrc : "/sports/sports2.jpg"}
          />
        </Flex>
      </Flex>
    </>
  );
}
