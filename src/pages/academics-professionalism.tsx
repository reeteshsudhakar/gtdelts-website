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
import FileText from '../components/FileText'

const AcademicsProfessionalism = () => (
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
                    Academics and Professionalism
                </Text>
                <FileText filePath='assets/academicsProfessionalism.txt' />
            </Stack>
        </Container>
    </>
)

export default AcademicsProfessionalism
