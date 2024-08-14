import { Inter } from "next/font/google";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Navbar } from "@/components/Navbar";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/variants";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [bg, setBg] = useState("");

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {scrolled && <Navbar />}
      <Box
        height="100vh"
        width="full"
        overflow="hidden"
        bgImage="/school2.jpg"
        bgSize="cover"
        bgPos="center"
        backgrou
        bgRepeat="no-repeat"
        backgroundBlendMode={"darken"}
      >
        <Box height={["16", "24"]}>{!scrolled && <Navbar />}</Box>

        <Flex
          h={"100vh"}
          flexDirection={"column"}
          mt={30}
          textShadow={"2px 2px 5px black"}
        >
          <Flex
            position={"relative"}
            height={"70vh"}
            color={"white"}
            alignItems={"center"}
            flexDirection={"column"}
            justifyContent={"center"}
            rowGap={4}
          >
            <motion.div
              variants={fadeIn("right", 0.1, 0.6)}
              initial={"hidden"}
              whileInView={"show"}
            >
              <Text
                fontSize={["sm", "md", "lg", "xx-large"]}
                letterSpacing={["2px", "2"]}
                textAlign={"center"}
                textShadow={"0px 0px 10px black"}
                transitionDuration={"1s"}
                fontWeight={"semibold"}
                _hover={{ color: "yellow", transform: "scale(1.1)" }}
              >
                Shree Mahendra Secondary School
              </Text>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.1, 0.6)}
              initial={"hidden"}
              whileInView={"show"}
            >
              <Heading
                textAlign={"center"}
                fontSize={["xx-large", "xxx-large", "6xl"]}
                fontWeight={"semibold"}
              >
                Clear Path for Education
              </Heading>
            </motion.div>
          </Flex>
        </Flex>
      </Box>

      <Box h={"100vh"}>dsa dsa das dsa addEventListenerdsa d</Box>
    </>
  );
}
