'use client'

import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
} from '@chakra-ui/react'
import { FaInstagram, FaMapMarkedAlt, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { ReactNode } from 'react'

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
            bg={useColorModeValue('purple.100', '#daa520')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            target='_blank'
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('purple.400', '#ffdf33'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    )
}

export default function SmallWithSocial() {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <Text>Delta Tau Delta Fraternity. Made with ♥ by Reetesh Sudhakar.</Text>
                <Stack direction={'row'} spacing={6}>
                    <SocialButton label={'Address'} href={'https://maps.app.goo.gl/Ki8RYu1s7pTNLtR98'}>
                        <FaMapMarkedAlt />
                    </SocialButton>
                    <SocialButton label={'Facebook'} href={'https://www.facebook.com/GTDelt'}>
                        <FaFacebook />
                    </SocialButton>
                    <SocialButton label={'LinkedIn'} href={'https://www.linkedin.com/groups/965207/'}>
                        <FaLinkedin />
                    </SocialButton>
                    <SocialButton label={'Instagram'} href={'https://www.instagram.com/gtdelts'}>
                        <FaInstagram />
                    </SocialButton>
                </Stack>
            </Container>
        </Box>
    )
}