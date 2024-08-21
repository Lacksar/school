import { Stackcomponent } from "@/components/Stackcomponent";
import React from "react";
import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { SportSection } from "@/components/SportSection";

export default function sports() {
  return (
    <>
      <Stackcomponent />

      <Heading
        borderRadius={10}
        mt={10}
        bg={"blue.400"}
        color={"white"}
        mb={10}
        textDecoration={"underline"}
        textAlign={"center"}
        fontSize={"xxx-large"}
        fontWeight={"semi-bold"}
      >
        Our Sports
      </Heading>
      <SportSection
        imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu10m2z28Gi3KfLF3Bisc_Hws0qHS15l9ORA&s"
        title="Volleyball"
        description="Volleyball is a fast-paced sport that focuses on teamwork and skill. Our program offers competitive and recreational leagues to boost coordination and strength. Join us for an exciting experience of spiking and setting!"
        imageFirst={true}
      />
      <SportSection
        imgSrc="https://static1.straitstimes.com.sg/s3fs-public/styles/large30x20/public/articles/2021/11/19/nf-soccer-191121.jpg?VersionId=ThykI4xY8L7Y_1hT0Dadk.l97ZFza350"
        title="Football"
        description="Football combines strategy and fitness. Our program enhances teamwork and game skills. Be part of a dedicated team and improve your tactical abilities on the field."
        imageFirst={false}
      />
      <SportSection
        imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL3oRGdmXHSYyxWlq16YwoOZZ8HpSHU1siKg&s"
        title="Marathon"
        description="Marathon running tests endurance and mental strength. Our program provides tailored training and support to help you achieve your running goals and push your limits."
        imageFirst={true}
      />
      <SportSection
        imgSrc="https://www.bpmcdn.com/f/files/cloverdale/import/2022-05/29183178_web1_220526-SUL-kabaddischools-main_1.jpg"
        title="Kabaddi"
        description="Kabaddi is a dynamic sport blending strategy and agility. Our program focuses on teamwork and quick decision-making, offering a vibrant community for enthusiasts."
        imageFirst={false}
      />
    </>
  );
}
