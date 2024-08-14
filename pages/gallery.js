import MasonryGrid from "@/components/MasonryGrid";
import { Navbar } from "@/components/Navbar";
import { Stackcomponent } from "@/components/Stackcomponent";
import { Button, Flex, Grid, Heading, Image } from "@chakra-ui/react";
import Head from "next/head";

const items = [
  "/gallery/photo1.jpg",
  "/gallery/photo2.jpg",
  "/gallery/photo3.jpg",
  "/gallery/photo4.jpg",
  "/gallery/photo5.jpg",
  "/gallery/photo6.jpg",
  "/gallery/photo7.jpg",
  "/gallery/photo1.jpg",
  "/gallery/photo2.jpg",
  "/gallery/photo3.jpg",
  "/gallery/photo4.jpg",
  "/gallery/photo5.jpg",
  "/gallery/photo6.jpg",
  "/gallery/photo7.jpg",
];

function gallery() {
  return (
    <>
      <Head>
        <title>Gallery</title>
      </Head>
      {/* <Heading
        fontWeight={"semi-bold"}
        textAlign={"center"}
        fontFamily={"serif"}
        zIndex={2}
      >
        Gallery
      </Heading> */}

      <Stackcomponent
        description=" Explore our vibrant photo gallery to see highlights from various school events, activities, and everyday moments. Our gallery showcases the spirit of our school community and the achievements of our students. Dive into the memories and experience the moments that make our school special!"
        title={"Photo Gallery"}
        image={"/gallery/head.jpg"}
      />

      <Flex
        // bgColor={"#2A2A2A"}
        style={{ padding: "16px" }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Flex w={["95vw", "80vw"]}>
          <MasonryGrid images={items} />
        </Flex>
      </Flex>
    </>
  );
}

export default gallery;
