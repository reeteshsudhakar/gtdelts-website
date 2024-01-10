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
    useColorModeValue,
    Img,
    HStack,
    VStack
} from '@chakra-ui/react'
import Hero from '../components/Hero'
import FileText from '../components/FileText'

const About = () => (
    <>
        <Hero
            imagePath={'/images/about-background.jpg'}
            title={'About our Chapter'}
            subtitle={'Fraternity Information, Chapter History and more'}
        />
        <Container
            maxW={'4xl'}
        >
            <Stack
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 6, md: 10 }}
                py={{ base: 20, md: 28 }}
            >
                <Text
                    fontWeight={600}
                    fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
                    lineHeight={'110%'}
                    color={useColorModeValue('#7851a9', '#c9a227')}
                >
                    About Delta Tau Delta
                </Text>
                <Text
                    fontWeight={400}
                    fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
                    lineHeight={'110%'}
                    color={useColorModeValue('#c9a227', '#7851a9')}
                >
                    Chapter History
                </Text>
                <HStack>
                    <VStack>
                        <Img
                            src='images/about/Luther.png.webp'
                            alt='Luther D. Wallis'
                        />
                        <Text as='i'>Luther D. Wallis</Text>
                    </VStack>
                    <VStack>
                        <Img
                            src='images/about/Stanley.png.webp'
                            alt='Luther D. Wallis'
                        />
                        <Text as='i'>Stanley S. Simpson</Text>
                    </VStack>
                </HStack>
                <FileText filePath='/assets/chapterHistory.txt' />
                <Text
                    fontWeight={400}
                    fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
                    lineHeight={'110%'}
                    color={useColorModeValue('#c9a227', '#7851a9')}
                >
                    Fraternity History
                </Text>
                <FileText filePath='/assets/fraternityHistory.txt' />
                <Text
                    fontWeight={400}
                    fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
                    lineHeight={'110%'}
                    color={useColorModeValue('#c9a227', '#7851a9')}
                >
                    Founder's House
                </Text>
                <VStack spacing={'15px'}>
                    <HStack spacing={'15px'}>
                        <VStack>
                            <Img
                                src='images/about/cunningham.png.webp'
                                alt='William R. Cunningham'
                            />
                            <Text as='i' fontSize={'small'}>William R. Cunningham</Text>
                        </VStack>
                        <VStack>
                            <Img
                                src='images/about/earle.png.webp'
                                alt='Alexander C. Earle'
                            />
                            <Text as='i' fontSize={'small'}>Alexander C. Earle</Text>
                        </VStack>
                        <VStack>
                            <Img
                                src='images/about/alfred.png.webp'
                                alt='Richard H. Alfred'
                            />
                            <Text as='i' fontSize={'small'}>Richard H. Alfred</Text>
                        </VStack>
                        <VStack>
                            <Img
                                src='images/about/bell.png.webp'
                                alt='Henry K. Bell'
                            />
                            <Text as='i' fontSize={'small'}>Henry K. Bell</Text>
                        </VStack>
                    </HStack>
                    <HStack spacing={'15px'}>
                        <VStack>
                            <Img
                                src='images/about/johnson.png.webp'
                                alt='John C. Johnson'
                            />
                            <Text as='i' fontSize={'small'}>John C. Johnson</Text>
                        </VStack>
                        <VStack>
                            <Img
                                src='images/about/lowe.png.webp'
                                alt='Jacob S. Lowe'
                            />
                            <Text as='i' fontSize={'small'}>Jacob S. Lowe</Text>
                        </VStack>
                        <VStack>
                            <Img
                                src='images/about/tarr.png.webp'
                                alt='Eugene Tarr'
                            />
                            <Text as='i' fontSize={'small'}>Eugene Tarr</Text>
                        </VStack>
                        <VStack>
                            <Img
                                src='images/about/hunt.png.webp'
                                alt='John L.N. Hunt'
                            />
                            <Text as='i' fontSize={'small'}>John L.N. Hunt</Text>
                        </VStack>
                    </HStack>
                </VStack>
                <FileText filePath='/assets/foundersHouse.txt' />
            </Stack>

        </Container>

    </>
)

export default About
