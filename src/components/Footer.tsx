'use client'

import {
    Box,
    Container,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'
import { FaInstagram, FaMapMarkedAlt, FaFacebook, FaLinkedin } from 'react-icons/fa'
import SocialButton from './SocialButton'
import { deltSocials } from '../utils/constants'

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
                {/* I# 1738 */}
                <Text>Delta Tau Delta Fraternity. Made with ♥ by Reetesh Sudhakar.</Text>
                <Stack direction={'row'} spacing={6}>
                    <SocialButton label={'Address'} href={deltSocials.address}>
                        <FaMapMarkedAlt />
                    </SocialButton>
                    <SocialButton label={'Facebook'} href={deltSocials.facebook}>
                        <FaFacebook />
                    </SocialButton>
                    <SocialButton label={'LinkedIn'} href={deltSocials.linkedin}>
                        <FaLinkedin />
                    </SocialButton>
                    <SocialButton label={'Instagram'} href={deltSocials.instagram}>
                        <FaInstagram />
                    </SocialButton>
                </Stack>
            </Container>
        </Box>
    )
}
