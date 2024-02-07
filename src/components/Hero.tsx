'use client'

import {
    Stack,
    Flex,
    Text,
    VStack,
    useBreakpointValue,
    useColorModeValue
} from '@chakra-ui/react'
import { deltGold, deltLightPurple } from '../utils/constants';

interface HeroProps {
    imagePath: string;
    title: string;
    subtitle: string;
}

export default function Hero({ imagePath, title, subtitle }: HeroProps) {
    const heroTextColor = useColorModeValue(deltGold, deltLightPurple)

    return (
        <Flex
            w={'full'}
            h={'100vh'}
            backgroundImage={imagePath}
            backgroundSize={'cover'}
            backgroundPosition={'center center'}>
            <VStack
                w={'full'}
                justify={'center'}
                px={useBreakpointValue({ base: 4, md: 8 })}
                bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
                    <Text
                        color={heroTextColor}
                        fontWeight={700}
                        lineHeight={1.2}
                        fontSize={{ base: '45px', sm: '45px', md: '45px' }}
                    >
                        {title}
                    </Text>
                    <Text
                        color={'white'}
                        fontWeight={300}
                        lineHeight={1.2}
                        fontSize={{ base: '30px', sm: '30px', md: '30px' }}
                        textAlign={'left'}
                    >
                        {subtitle}
                    </Text>
                </Stack>
            </VStack>
        </Flex>
    )
}