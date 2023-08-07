'use client'

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Wrap,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { ReactNode } from 'react'
import { Image } from "@chakra-ui/image"


const SocialButton = ({
  children,
  label,
  href,

}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200')

      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function SmallCentered() {
  const logoImg = `/images/fox-group-logo${useColorModeValue("-white", "")}.svg`;
  return (
    <Box
      bg={useColorModeValue('#000', '#fff')}
      color={useColorModeValue('#fff', '#000')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}>
        <Image src={logoImg} w={'30%'} mt={4} mb={4} alt="Fox Group International"/>
        <Stack direction={'row'} spacing={6}>
          <Box as="a" href={'https://foxgroup.international/'} _hover={{color: '#E186E9' }}>
            Home
          </Box>
          <Box as="a" href={'https://foxgroup.international/about'} _hover={{color: '#E186E9'}}>
            About
          </Box>
          <Box as="a" href={'https://foxgroup.international/news'} _hover={{color: '#E186E9'}}>
            News
          </Box>
          <Box as="a" href={'https://apply.workable.com/fox-group-international/'} _hover={{color: '#E186E9'}}>
            Careers
          </Box>
          <Box as="a" href={'#'} _hover={{color: '#E186E9'}}>
            Contact
          </Box>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
            <Stack alignItems="center" mt={5}>  
                <Text fontSize="15px" _hover={{color: '#E186E9'}}><a href="https://foxgroup.international/terms">Terms & Privacy</a></Text>
                <Text fontSize="15px" _hover={{color: '#E186E9'}}><a href="https://foxgroup.international/warranties">Warranties</a></Text>
            </Stack>
          <Text fontSize="13px" mt={5} align="center" justifyItems={'center'}>Copyright © 2023 - Fox Group International</Text>
          <Stack direction={'row'} spacing={10} mt={5}>
            <SocialButton label={'Instagram'} href={'https://www.instagram.com/foxgroup.international'}>
              <FaInstagram />
            </SocialButton>
            <SocialButton label={'Facebook'} href={'https://www.facebook.com/Fox-Group-241120733437193'}>
              <FaFacebook />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'https://www.instagram.com/foxgroup.international'}>
              <FaLinkedin />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}