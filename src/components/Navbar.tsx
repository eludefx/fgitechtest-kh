"use client";

import {
  Box,
  Flex,
  Image,
  useColorModeValue,
  Container,
  Stack,
} from "@chakra-ui/react";
<<<<<<< HEAD
=======
import ThemeToggle from "./ThemeToggle";
>>>>>>> 2fe92b7238b1fbb4519453d80a8b1b611e68fc28

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
<<<<<<< HEAD
=======
  const logoImg = `/images/fox-group-logo${useColorModeValue("", "-white")}.svg`;
>>>>>>> 2fe92b7238b1fbb4519453d80a8b1b611e68fc28
  return (
    <>
      <Container
        as={Stack}
        maxW={"6xl"}
<<<<<<< HEAD
        py={10}
        justify={"center"}
        align={"center"}
      >
        <Box
          bg={useColorModeValue("gray.100", "gray.900")}
          px={10}
          justifyContent={"center"}
        >
          <Flex h={25} alignItems={"center"} justifyContent={"space-between"}>
            <Image
              src="https://foxgroup.international/_next/image?url=%2Fimages%2Fbrand%2Ffox-group-logo.svg&w=96&q=75"
              w={{ base: "200px", md: "20%" }}
              mt={15}
              mb={0}
              alt="Fox Group International"
            />
          </Flex>
        </Box>
      </Container>
    </>
  );
}
=======
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
>>>>>>> 2fe92b7238b1fbb4519453d80a8b1b611e68fc28
