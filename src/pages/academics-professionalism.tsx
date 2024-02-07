import {
    Link as ChakraLink,
    Text,
    Container,
    Stack,
    useColorModeValue,
    Img
} from '@chakra-ui/react'
import FileText from '../components/FileText'
import { deltPurple, deltGold } from '../utils/constants'

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
                    color={useColorModeValue(deltPurple, deltGold)}
                >
                    Academics and Professionalism
                </Text>
                <FileText filePath='assets/academicsProfessionalism.txt' />
                <Img
                    src={'images/jobs-light.jpg'}
                    alt='Jobs Blurb'
                    borderRadius={'lg'}
                />
            </Stack>
        </Container>
    </>
)

export default AcademicsProfessionalism
