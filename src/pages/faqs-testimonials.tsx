import {
    Link as ChakraLink,
    Text,
    Code,
    List,
    ListIcon,
    ListItem,
    Container,
    Flex,
    Stack,
    VStack,
    useBreakpointValue,
    useColorModeValue
} from '@chakra-ui/react'
import FileText from '../components/FileText'
import { useState, useEffect } from 'react';

interface FAQBlockProps {
    filePath: string;
}

const FAQBlock = ({ filePath }: FAQBlockProps) => {
    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string[]>([]);

    useEffect(() => {
        fetch(filePath)
            .then(response => response.text())
            .then(text => {
                const lines = text.split('\n');
                if (lines.length > 0) {
                    setTitle(lines[0]);
                    setBody(lines.slice(1));
                }
            })
            .catch(error => console.error('Error fetching text file:', error));
    }, [filePath]);

    return (
        <Stack
            textAlign={'left'}
            align={'left'}
        >
            <Text
                fontWeight={400}
                fontSize={{ base: '2xl', sm: '1xl', md: '3xl' }}
                lineHeight={'110%'}
                color={useColorModeValue('#c9a227', '#7851a9')}
            >
                {title}
            </Text>
            {body.map((line, index) => (
                <Text key={index} align='justify'>{line}</Text>
            ))}
        </Stack>
    );
}


const FAQs = () => (
    <>
        <Container
            maxW={'5xl'}
            padding={{ base: 8, md: 8 }}
        >
            <Stack
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 4, md: 4 }}
                py={{ base: 10, md: 10 }}
            >
                <Text
                    fontWeight={600}
                    fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
                    lineHeight={'110%'}
                    color={useColorModeValue('#7851a9', '#c9a227')}
                >
                    FAQs and Testimonials
                </Text>
            </Stack>
            <VStack
                spacing={'20px'}
                align={'left'}
            >
                <FAQBlock filePath='assets/faqs/faq-1.txt' />
                <FAQBlock filePath='assets/faqs/faq-2.txt' />
            </VStack>
        </Container>
    </>
)

export default FAQs
