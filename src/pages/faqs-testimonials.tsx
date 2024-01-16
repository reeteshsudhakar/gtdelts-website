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
    useColorModeValue,
    Spacer,
    Avatar,
    chakra,
    SimpleGrid
} from '@chakra-ui/react'
import FileText from '../components/FileText'
import { useState, useEffect } from 'react';

const testimonials = [
    {
        name: 'Harry Schuster',
        role: 'Alumnus - Joined Spring 2017',
        content:
            'Delt has continued to help me in my life even past graduation. In addition to all of the leadership skills I picked up while at the chapter, I also enjoy benefits like being able to drop by the house when I happen to be on campus and having a consistent place to tailgate for when I return for home games. Although it has been a couple of years since I graduated, I always look forward to meeting the new guys since I know our house can pick friendly and quality people to continue on our letters.',
        avatar:
            'images/testimonials/harry.png'
    },
    {
        name: 'Reetesh Sudhakar',
        role: 'Brother - Joined Fall 2021',
        content:
            'Delt has been a community that has helped me constantly grow throughout college. Whether it was figuring out how to handle my course load, opening myself up to others, or getting my first job, I’ve always been able to lean on the brothers for their advice and support. As a Delt, I’m also able to give back to others with countless opportunities like Trees Atlanta, JDRF, or Walk for Diabetes. My time as a Delt has helped me grow to become the best version of myself.',
        avatar:
            'images/testimonials/ree.png'
    },
    {
        name: 'Nicole Caiati',
        role: 'Former Sweetheart - Alpha Xi Delta',
        content:
            'Being around the Delts always makes me so happy because I know that I’m surrounded with a house of guys that will have my back no matter what, and will drop anything to help me at any time. I’ve had some of my best college memories with these guys because they’re truly kind and genuine people that I feel very fortunate to be so close with.',
        avatar:
            'images/testimonials/nicole.png'

    },
    {
        name: 'Laura Jeniski',
        role: 'Alpha Gamma Delta',
        content:
            'My favorite thing about Delt is the people! I’ve had brothers there to pick me up when I fall (literally & figuratively), help when I am stuck on an O-Chem problem, play volleyball in the backyard, and tailgate a football or baseball game. I feel that I am welcomed by everyone and always have a good time hanging out! Can’t wait to smash some more pies at Pelt-A-Delt!',
        avatar:
            'images/testimonials/laura.png'
    },
    {
        name: 'Jason Wang',
        role: 'Alumnus - Joined Fall 2017',
        content:
            'I joined GT Delt back in 2017, and it was the best decision that I made in my college career. The upperclassmen could guide me through my academic and professional development, and the underclassmen gave me support in my day to day life. I was given opportunities as a leader the second that I joined, and was able to cultivate those skills to culminate into serving on the IFC executive board and being the president of our chapter. I made many friends across campus and the nation that I wouldn’t have otherwise through Delt. I have had several jobs throughout college with fortune 25 companies that I wouldn’t have gotten without the help that I received from my fellow brothers. The professional network that we have is one of the most valuable things to have as someone looking to gain real job experience during college. I have met lifelong brothers in this organization, and I can’t think of anyone else that I would’ve wanted to spend my college years with. Here’s to growing our chapter and living lives of excellence, I wish you luck in your college career!',
        avatar:
            'images/testimonials/jason.png'
    },
]
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
            <Flex direction={'column'} textAlign={'justify'} justifyContent={'space-between'}>
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
                height={'80px'}
                width={'80px'}
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
                    color={useColorModeValue('#c9a227', '#7851a9')}
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
                    color={useColorModeValue('#c9a227', '#7851a9')}
                >
                    Testimonials
                </Text>
                <TestimonialBlock />
            </VStack>
        </Container>
    </>
)

export default FAQs
