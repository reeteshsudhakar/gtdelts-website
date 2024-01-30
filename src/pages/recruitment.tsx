import {
    Link as ChakraLink,
    Text,
    Code,
    List,
    ListIcon,
    ListItem,
    Container,
    Flex,
    VStack,
    HStack,
    Stack,
    useColorModeValue,
    Heading
} from '@chakra-ui/react'
import Warning from '../components/Warning'
import Hero from '../components/Hero'
import FileText from '../components/FileText'

const Recruitment = () => (
    <>
        <Hero
            imagePath='images/rush.jpg'
            title='Recruitment'
            subtitle='Join the Brotherhood of Delts'
        />
        <Container maxW={'4xl'}>
            <Stack
                spacing={{ base: 6, md: 10 }}
                py={{ base: 20, md: 28 }}
            >
                <Heading
                    fontWeight={600}
                    fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
                    lineHeight={'110%'}
                >
                    <Text align='center' color={useColorModeValue('#7851a9', '#c9a227')}>
                        Gamma Psi
                    </Text>
                </Heading>
                <FileText filePath='assets/recruitment.txt' />
            </Stack>
        </Container>
    </>
)

export default Recruitment
