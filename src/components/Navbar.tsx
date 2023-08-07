"use client";

import {
  Box,
  Flex,
  Image,
  useColorModeValue,
  Container,
  Stack,
} from "@chakra-ui/react";
import ThemeToggle from "./ThemeToggle";

interface Props {
  children: React.ReactNode;
}

const NavLink = (props: Props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

export default function Nav() {
  const logoImg = `/images/fox-group-logo${useColorModeValue("", "-white")}.svg`;
  return (
    <>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        align={"center"}
      >
        
          <Flex h={25} w={'100%'} alignItems={"center"} justifyContent={"space-between"}>
            <Image
              src={logoImg}
              w={'200px'}
              mt={0}
              mb={0}
              alt="Fox Group International"
            />
            <ThemeToggle />
          </Flex>
        
      </Container>
    </>
  );
}