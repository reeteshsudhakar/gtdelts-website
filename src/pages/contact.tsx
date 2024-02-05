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
    useColorModeValue
} from '@chakra-ui/react'
import Warning from '../components/Warning'

const Contact = () => (
    <>
        <Flex
            w={'full'}
            h={'35vh'}
            backgroundImage={'/images/contact-hero.png'}
            backgroundSize={'cover'}
            backgroundPosition={'center center'}>
        </Flex>
        <Container
            maxW={'5xl'}
            padding={{ base: 8, md: 8 }}
        >
            <Stack
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 6, md: 8 }}
                py={{ base: 10, md: 10 }}
            >
                <Text
                    fontWeight={600}
                    fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
                    lineHeight={'110%'}
                    color={useColorModeValue('#7851a9', '#c9a227')}
                >
                    Contact Us
                </Text>
            </Stack>
        </Container>

        {/* <Warning title={'Contact'} /> */}
    </>
)

export default Contact
