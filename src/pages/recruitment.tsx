import {
    Link as ChakraLink,
    Text,
    Container,
    HStack,
    Stack,
    useColorModeValue,
    Heading
} from '@chakra-ui/react'
import Hero from '../components/Hero'
import FileText from '../components/FileText'
import PersonProfile from '../components/PersonProfile'
import { deltPurple, deltGold } from '../utils/constants'

const Recruitment = () => (
    <>
        <Hero
            imagePath='images/rush.jpg'
            title='Recruitment'
            subtitle=''
        />
        <Container maxW={'5xl'}>
            <Stack
                py={{ base: 10, md: 16 }}
                align='center'
            >
                <Heading
                    fontWeight={600}
                    fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
                    lineHeight={'110%'}
                >
                    <Text align='center' color={useColorModeValue(deltPurple, deltGold)}>
                        Join the Brotherhood
                    </Text>
                </Heading>
                <FileText filePath='assets/recruitment.txt' />
                <Stack
                    align={'center'}
                    spacing={8}
                    direction={{ base: 'column', md: 'row' }}
                >
                    <PersonProfile
                        name={'Jong Liu'}
                        position={'Rush Chairman'}
                        imagePath={'/images/exec/rush-chair.png'}
                        backgroundPath={useColorModeValue('/images/purple-background.png', '/images/gold-background.png')}
                        socials={['https://www.instagram.com/jongliu930/', 'https://www.linkedin.com']}
                        major={'Biomedical Engineering'}
                    />
                    <PersonProfile
                        name={'Alex Lin'}
                        position={'Asst. Rush Chairman'}
                        imagePath={'/images/exec/asst-rush-chair.png'}
                        backgroundPath={useColorModeValue('/images/gold-background.png', '/images/purple-background.png')}
                        socials={['https://www.instagram.com/alexlin130/', 'https://www.linkedin.com']}
                        major={'Industrial Engineering'}
                    />

                </Stack>
            </Stack>
        </Container>
    </>
)

export default Recruitment
