import MasonryGrid from "@/components/MasonryGrid";
import { Navbar } from "@/components/Navbar";
import { PageHead } from "@/components/PageHead";
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

      <PageHead />
      <Flex justifyContent={"center"}>
        <Flex w={["95vw", "80vw"]}>
          <MasonryGrid images={items} />
        </Flex>
      </Flex>
    </>
  );
}

export default gallery;
