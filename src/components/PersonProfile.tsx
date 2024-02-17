'use client'

import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    useColorModeValue,
    HStack,
} from '@chakra-ui/react'
import SocialButton from './SocialButton'
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

interface PersonProfileProps {
    imagePath: string;
    backgroundPath: string;
    position: string;
    name: string;
    socials: string[];
    major: string;
}


export default function PersonProfile({ imagePath, backgroundPath, position, name, socials, major }: PersonProfileProps) {
    return (
        <Center py={6}>
            <Box
                w={'270px'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}>
                <Image
                    h={'120px'}
                    w={'full'}
                    src={backgroundPath}
                    objectFit="cover"
                    alt="#"
                />
                <Flex justify={'center'} mt={-12}>
                    <Avatar
                        size={'2xl'}
                        src={imagePath}
                        css={{
                            border: '2px solid white',
                        }}
                    />
                </Flex>

                <Box p={6}>
                    <Stack spacing={0} align={'center'} mb={5}>
                        <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                            {name}
                        </Heading>
                        <Text color={'gray.750'} fontSize={'sm'}>{position}</Text>
                        <Text color={'gray.500'} fontSize={'smaller'}>{major}</Text>
                    </Stack>

                    <HStack>
                        <SocialButton label={'Instagram'} href={socials[0]}>
                            <FaInstagram />
                        </SocialButton>
                        <SocialButton label={'LinkedIn'} href={socials[1]}>
                            <FaLinkedin />
                        </SocialButton>
                    </HStack>
                </Box>
            </Box>
        </Center>
    )
}