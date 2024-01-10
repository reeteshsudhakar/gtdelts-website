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

interface FileTextProps {
    filePath: string;
}

const FileText = ({ filePath }: FileTextProps) => {
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

export default FileText;