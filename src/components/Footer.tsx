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
import SocialButton from './SocialButton'

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