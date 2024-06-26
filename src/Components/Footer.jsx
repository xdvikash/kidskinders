import { Button, HStack, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <Stack
      color={"white"}
      justifyContent={"space-evenly"}
      alignItems={"center"}
      bgColor={"black"}
      direction={{ base: "column", md: "row" }}
      p={4}
      spacing={6}
    >
      <Heading color={"orange"}>KidKinder</Heading>
      <Text textAlign={{ base: "center", md: "left" }} maxW={{ base: "100%", md: "40%" }}>
        Labore dolor amet ipsum ea, erat sit ipsum duo eos. Volup amet ea dolor
        et magna dolor, elitr rebum duo est sed diam elitr. Stet elitr stet diam
        duo eos rebum ipsum diam ipsum elitr.
      </Text>
      <VStack alignItems={"center"} spacing={2}>
        <Text fontWeight={"bold"}>Socials</Text>
        <HStack spacing={4}>
          <FaLinkedin />
          <Text>LinkedIn</Text>
        </HStack>
        <HStack spacing={4}>
          <FaFacebook />
          <Text>Facebook</Text>
        </HStack>
        <HStack spacing={4}>
          <FaWhatsapp />
          <Text>WhatsApp</Text>
        </HStack>
      </VStack>
      <VStack alignItems={"center"} spacing={2}>
        <Text fontWeight={"bold"}>Inquiries</Text>
        <Text textAlign="center">
          For any inquiries, questions or commendations, please mail us{" "}
          <a
            href="mailto:Ankit170400@gmail.com"
            style={{ textDecoration: "underline" }}
          >
            here
          </a>.
        </Text>
      </VStack>
      <Button colorScheme="orange">Reach Me</Button>
    </Stack>
  );
};

export default Footer;
