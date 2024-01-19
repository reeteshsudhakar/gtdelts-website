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
                    <FileText filePath='/assets/brotherhoodInvolvements.txt' />
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
                <Text
                    fontWeight={600}
                    fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
                    lineHeight={'110%'}
                    color={useColorModeValue('#c9a227', '#7851a9')}
                    align={'center'}
                >
                    Social Affairs
                </Text>
                <HStack
                    spacing='25px'
                >
                    <VStack
                        spacing='10px'
                    >
                        <Img
                            src='/images/nola-formal-2021.png'
                            alt='Formal'
                            maxW='500px'
                            maxH='300px'
                            borderRadius={'lg'}
                        />
                        <Text as='i' fontSize='small'>Purple Iris Formal - New Orleans - 2021</Text>
                    </VStack>
                    <FileText filePath='/assets/socialAffairs.txt' />
                </HStack>
                <Text
                    fontWeight={600}
                    fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
                    lineHeight={'110%'}
                    color={useColorModeValue('#7851a9', '#c9a227')}
                    align={'center'}
                >
                    Philanthropy and Community Service
                </Text>
                <VStack
                    spacing='25px'
                >
                    <FileText filePath='/assets/philanthropyCommunityService.txt' />
                    <VStack
                        spacing='10px'
                    >
                        <Img
                            src='/images/trees-atlanta.png'
                            alt='Community Service'
                            maxW='600px'
                            borderRadius={'lg'}
                        />
                        <Text as='i' fontSize='small'>Trees Atlanta - Tree Planting Event - Brookline Triangle, January 2024</Text>
                    </VStack>
                </VStack>
            </Stack>

        </Container>
    </>
)

export default CampusInvolvements
