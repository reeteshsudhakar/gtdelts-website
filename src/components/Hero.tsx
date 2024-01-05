'use client'

import {
    Stack,
    Flex,
    Text,
    VStack,
    useBreakpointValue,
    useColorModeValue
} from '@chakra-ui/react'

export default function Hero() {
    const heroTextColor = useColorModeValue('#c9a227', '#DFB2F4')

    return (
        <Flex
            w={'full'}
            h={'100vh'}
            backgroundImage={
                '/centennial.JPG'
            }
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
                        fontSize={{ base: '3vw', sm: '5vw', md: '3vw' }}
                    >
                        Delta Tau Delta - Georgia Tech
                    </Text>
                    <Text
                        color={'white'}
                        fontWeight={600}
                        lineHeight={1.2}
                        fontSize={{ base: '1.5vw', sm: '3vw', md: '1.5vw' }}
                        textAlign={'left'}
                    >
                        Committed to Lives of Excellence.
                    </Text>
                </Stack>
            </VStack>
        </Flex>
    )
}