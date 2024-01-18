import {
    Link as ChakraLink,
    Text,
    Code,
    List,
    ListIcon,
    ListItem,
    Container,
    Flex,
    useColorModeValue,
    Stack,
    HStack,
    Img,
    VStack
} from '@chakra-ui/react'
import Hero from '../components/Hero'
import FileText from '../components/FileText'

const CampusInvolvements = () => (
    <>
        <Hero
            imagePath='/images/old-bwii.jpg'
            title='Campus Involvements'
            subtitle='Social Affairs, Brotherhood Events, and more'
        />
        <Container
            maxW='6xl'
            padding={{ base: 16, md: 16 }}
        >
            <Stack
                spacing={{ base: 4, md: 4 }}
            >
                <Text
                    fontWeight={600}
                    fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
                    lineHeight={'110%'}
                    color={useColorModeValue('#7851a9', '#c9a227')}
                    align={'center'}
                >
                    Brotherhood Involvements
                </Text>
                <HStack
                    spacing='25px'
                >
                    <FileText filePath='/assets/brotherhood.txt' />
                    <VStack
                        spacing='10px'
                    >
                        <Img
                            src='/images/brotherhood-sc.png'
                            alt='Brotherhood'
                            maxW='500px'
                            borderRadius={'lg'}
                        />
                        <Text as='i' fontSize='small'>Brotherhood Spring Break Trip - South Carolina</Text>
                    </VStack>
                </HStack>
            </Stack>

        </Container>
    </>
)

export default CampusInvolvements
