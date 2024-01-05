'use client'

import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    IconProps,
    useColorModeValue,
    HStack,
    Img
} from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'

interface IntroLetterProps {
    filePath: string;
}

const IntroLetter = ({ filePath }: IntroLetterProps) => {
    const [fileText, setFileText] = useState<string>('');

    useEffect(() => {
        fetch(filePath)
            .then(response => response.text())
            .then(text => setFileText(text))
            .catch(error => console.error('Error fetching text file:', error));
    }, [filePath]);

    const renderTextLines = (text: string) => {
        return text.split('\n').map((line, index) => (
            <Text
                key={index}
                mb={2}
                color={useColorModeValue('#000000', '#FFFFFF')}
                maxW={'3xl'}
                align={'justify'}
            >
                {line}
            </Text>
        ));
    };

    return (
        <Stack>
            {renderTextLines(fileText)}
        </Stack>
    );
};


export default function HomePageInfo() {
    return (
        <Container maxW={'4xl'}>
            <Stack
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 6, md: 10 }}
                py={{ base: 20, md: 28 }}>
                <Heading
                    fontWeight={600}
                    fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
                    lineHeight={'110%'}>
                    Welcome to{' '}
                    <Text as={'span'} color={useColorModeValue('#c9a227', '#7851a9')}>
                        Delta Tau Delta{' '}
                    </Text>
                    <Text as={'span'} color={useColorModeValue('#7851a9', '#c9a227')}>
                        Gamma Psi
                    </Text>
                </Heading>
                <IntroLetter filePath={'/assets/introLetterPart1.txt'} />
                <HStack
                    spacing='24px'
                    align='center'
                >
                    <Img
                        boxSize="75px"
                        objectFit="cover"
                        src="/images/value-symbol-2.png.webp"
                        alt="symbol"
                    />
                    <Img
                        boxSize="75px"
                        objectFit="cover"
                        src="/images/value-symbol-4.png.webp"
                        alt="symbol"
                    />
                    <Img
                        boxSize="75px"
                        objectFit="cover"
                        src="/images/value-symbol-1.png.webp"
                        alt="symbol"
                    />
                    <Img
                        boxSize="75px"
                        objectFit="cover"
                        src="/images/value-symbol-3.png.webp"
                        alt="symbol"
                    />
                </HStack>
                <IntroLetter filePath={'/assets/introLetterPart2.txt'} />
                <Img
                    src='/images/deltHouse.jpg'
                    alt='Delt House'
                    borderRadius={'lg'}
                />
            </Stack>
        </Container>
    )
}