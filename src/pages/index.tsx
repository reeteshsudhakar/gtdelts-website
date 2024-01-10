import { Container, Heading, Stack, useColorModeValue, Text, HStack, Img } from '@chakra-ui/react'
import Hero from '../components/Hero'
import HomePageInfo from '../components/HomePageInfo'
import FileText from '../components/FileText'

const Index = () => (
  <>
    <Hero
      imagePath='/images/centennial.JPG'
      title='Delta Tau Delta - Georgia Tech'
      subtitle='Committed to Lives of Excellence'
    />
    <Container maxW={'4xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 6, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
          lineHeight={'110%'}>
          Welcome to{' '}
          <Text as={'span'} color={useColorModeValue('#c9a227', '#7851a9')}>
            Delta Tau Delta{' '}
          </Text>
          <Text as={'span'} color={useColorModeValue('#7851a9', '#c9a227')}>
            Gamma Psi
          </Text>
        </Heading>
        <FileText filePath={'/assets/introLetterPart1.txt'} />
        <HStack
          spacing='24px'
          align='center'
        >
          <Img
            boxSize="75px"
            objectFit="cover"
            src="/images/value-symbol-2.png.webp"
            alt="symbol"
          />
          <Img
            boxSize="75px"
            objectFit="cover"
            src="/images/value-symbol-4.png.webp"
            alt="symbol"
          />
          <Img
            boxSize="75px"
            objectFit="cover"
            src="/images/value-symbol-1.png.webp"
            alt="symbol"
          />
          <Img
            boxSize="75px"
            objectFit="cover"
            src="/images/value-symbol-3.png.webp"
            alt="symbol"
          />
        </HStack>
        <FileText filePath={'/assets/introLetterPart2.txt'} />
        <Img
          src='/images/deltHouse.jpg'
          alt='Delt House'
          borderRadius={'lg'}
        />
      </Stack>
    </Container>
  </>
)

export default Index
