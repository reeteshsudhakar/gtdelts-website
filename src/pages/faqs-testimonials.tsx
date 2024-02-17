import {
    Link as ChakraLink,
    Text,
    Container,
    Flex,
    Stack,
    VStack,
    useColorModeValue,
    Avatar,
    chakra,
    SimpleGrid,
    useBreakpointValue
} from '@chakra-ui/react'
import FileText from '../components/FileText'
import { useState, useEffect } from 'react';
import { testimonials } from '../utils/constants';
import { deltGold, deltPurple } from '../utils/constants';

interface TestimonialCardProps {
    name: string
    role: string
    content: string
    avatar: string
    index: number
}

function TestimonialCard(props: TestimonialCardProps) {
    const { name, role, content, avatar, index } = props
    return (
        <Flex
            boxShadow={'lg'}
            maxW={'inherit'}
            direction={{ base: 'column-reverse', md: 'row' }}
            width={'full'}
            rounded={'xl'}
            p={10}
            justifyContent={'space-between'}
            position={'relative'}
            bg={useColorModeValue('white', 'gray.800')}
        >
            <Flex direction={'column'} textAlign={useBreakpointValue({ base: 'center', md: 'justify' })} justifyContent={'space-between'}>
                <chakra.p fontWeight={'medium'} fontSize={'15px'} pb={4}>
                    {content}
                </chakra.p>
                <chakra.p fontWeight={'bold'} fontSize={14}>
                    {name}
                    <chakra.span fontWeight={'medium'} color={'gray.500'}>
                        {' '}
                        - {role}
                    </chakra.span>
                </chakra.p>
            </Flex>
            <Avatar
                src={avatar}
                height={'150px'}
                width={'150px'}
                alignSelf={'center'}
                m={{ base: '0 0 35px 0', md: '0 0 0 50px' }}
            />
        </Flex>
    )
}

function TestimonialBlock() {
    return (
        <Flex
            textAlign={'center'}
            justifyContent={'center'}
            direction={'column'}
            width={'full'}
            overflow={'hidden'}
        >
            <SimpleGrid columns={{ base: 1, xl: 1 }} spacing={'20'} mt={16} mb={16} mx={'auto'}>
                {testimonials.map((cardInfo, index) => (
                    <TestimonialCard key={index} {...cardInfo} index={index} />
                ))}
            </SimpleGrid>
        </Flex>
    )
}

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
                color={useColorModeValue(deltGold, deltPurple)}
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
                    color={useColorModeValue(deltGold, deltPurple)}
                >
                    FAQs and Testimonials
                </Text>
                <FileText filePath='assets/faqs/faqsBlurb.txt' />
            </Stack>
            <VStack
                spacing={'20px'}
                align={'center'}
                padding={{ base: 4, md: 4 }}
            >
                <Text
                    fontWeight={400}
                    fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
                    lineHeight={'110%'}
                    color={useColorModeValue(deltGold, deltPurple)}
                >
                    FAQs
                </Text>
            </VStack>
            <VStack
                spacing={'20px'}
                align={'left'}
            >
                <FAQBlock filePath='assets/faqs/faq-1.txt' />
                <FAQBlock filePath='assets/faqs/faq-2.txt' />
                <FAQBlock filePath='assets/faqs/faq-3.txt' />
                <FAQBlock filePath='assets/faqs/faq-4.txt' />
                <FAQBlock filePath='assets/faqs/faq-5.txt' />
            </VStack>
            <VStack
                padding={'40px'}
            >
                <Text
                    fontWeight={400}
                    fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
                    lineHeight={'110%'}
                    color={useColorModeValue(deltGold, deltPurple)}
                >
                    Testimonials
                </Text>
                <TestimonialBlock />
            </VStack>
        </Container>
    </>
)

export default FAQs
