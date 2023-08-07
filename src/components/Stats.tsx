"use client";

import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Container,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { PiChartBarFill } from "react-icons/pi";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";

interface StatsCardProps {
  title: string;
  stat: string;
  icon: ReactNode;
}

function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontSize={"1xl"} fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={{ base: "4xl", md: "3xl" }} fontWeight={"bold"}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
          justifyContent={"center"}
          px={3}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function BasicStatistics() {
  return (
    <Container maxW="100%" backgroundColor={"#eee"}>
      <Box
        maxW="7xl"
        mx={"auto"}
        pt={5}
        pb={10}
        px={{ base: 2, sm: 12, md: 17 }}
        backgroundColor={"#eee"}
      >
        <chakra.h1
          textAlign={"center"}
          fontSize={{ base: "4xl", sm: "5xl", md: "5xl" }}
          py={5}
          fontWeight={"bold"}
        >
          The Numbers
        </chakra.h1>
        <chakra.p
          textAlign={"center"}
          pt={0}
          pb={10}
          color={"#000"}
          fontSize={{ base: "16px", md: "20px" }}
          px={{ base: "", md: "20" }}
        >
          Driven by a passion for aesthetics and cosmetics, in just 4 years
          we’ve grown from humble beginnings to become a driving force and
          trusted voice in the aesthetics industry.
        </chakra.p>
        <SimpleGrid
          columns={{ base: 1, md: 1, lg: 3 }}
          spacing={{ base: 5, lg: 8 }}
        >
          <StatsCard
            title={"Year-on-Year Financial Growth"}
            stat={"313%"}
            icon={<PiChartBarFill size={"3em"} color={"#E186E9"} />}
          />
          <StatsCard
            title={"Individual Products Sold Per Year"}
            stat={"5,000,000+"}
            icon={<BsFillBoxSeamFill size={"2.75em"} color={"#E186E9"} />}
          />
          <StatsCard
            title={"Turnover Growth between 2017/19"}
            stat={"16x"}
            icon={<GiReceiveMoney size={"3em"} color={"#E186E9"} />}
          />
        </SimpleGrid>
      </Box>
    </Container>
  );
}
