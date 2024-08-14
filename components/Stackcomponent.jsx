import React from "react";
import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

export const Stackcomponent = (props) => {
  const { title, image, description } = props;

  return (
    <Flex
      px={[6, 4, 4, 2]}
      gap={5}
      overflow={"hidden"}
      minH={"80vh"}
      flexDirection={["column-reverse", "column-reverse", "row", "row"]}
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
      <Flex flex={1} h={"80vh"}>
        <Image
          borderRadius={"md"}
          objectFit={"cover"}
          alt={"Sports Image"}
          src={image ? image : "/sports/sports2.jpg"}
        />
      </Flex>
    </Flex>
  );
};
