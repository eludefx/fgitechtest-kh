"use client";

<<<<<<< HEAD
import { Box, Heading, Container, Text, Stack } from "@chakra-ui/react";
=======
import { Box, Heading, Container, Text, Stack, useColorModeValue, } from "@chakra-ui/react";
>>>>>>> 2fe92b7238b1fbb4519453d80a8b1b611e68fc28

export default function HeroSection() {
  return (
    <>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 10, md: 10 }}
          py={{ base: 10, md: 10 }}
          px={{ base: 5, md: 20 }}
          pt={{ base: 20, md: 20 }}
        >
          <Heading
            fontWeight={700}
            fontSize={{ base: "6xl", sm: "6xl", md: "6xl" }}
            lineHeight={"105%"}
            color="#E186E9"
          >
            Contact Us
          </Heading>
<<<<<<< HEAD
          <Text color={"#000"} fontSize={{ base: "17px" }} fontWeight={"600"}>
=======
          <Text 
            color={useColorModeValue('#000', '#fff')}
            fontSize={{ base: "17px" }}
            fontWeight={600}>
>>>>>>> 2fe92b7238b1fbb4519453d80a8b1b611e68fc28
            Enter your details below and send us a message.
          </Text>
        </Stack>
      </Container>
    </>
  );
}
