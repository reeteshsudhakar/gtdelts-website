import Warning from '../components/warning'
import Hero from '../components/Hero'
import PersonProfile from '../components/PersonProfile'
import { Container, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/color-mode'

const Officers = () => {
    return (
        <>
            <Hero
                imagePath={'/images/hughie.jpeg'}
                title={'Officers'}
                subtitle={'The Chairmen of Gamma Psi'}
            />
            <Container maxW={'4xl'}>
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
                        Executive Board - 2023-24
                    </Text>
                    <Text
                        color={useColorModeValue('#000000', '#FFFFFF')}
                        maxW={'3xl'}
                        align={'justify'}
                    >
                        The Executive Board is the governing body of the chapter. They are responsible for the day-to-day operations of the chapter and are elected by the chapter on a yearly basis. Each member of the Executive Board is responsible for a specific area of the chapter's operations, with various chair positions reporting to them to help the chapter succeed as a whole. Each of our brothers either holds a position or actively participates in a committee to help the chapter run smoothly.
                    </Text>
                    <VStack>
                        <HStack
                            spacing={'25px'}
                        >
                            <PersonProfile
                                name={'Kerem Edis'}
                                position={'President'}
                                imagePath={'/images/exec/president.png'}
                                backgroundPath={'/images/gold-background.png'}
                                socials={['https://www.instagram.com/kerem_edis/', 'https://www.linkedin.com/in/keremedis/']}
                                major={'Mechanical Engineering'}
                            />
                            <PersonProfile
                                name={'Julien Zappulla'}
                                position={'Vice President'}
                                imagePath={'/images/exec/vice-president.png'}
                                backgroundPath={'/images/purple-background.png'}
                                socials={['https://www.instagram.com/julienzappulla10/', 'https://www.linkedin.com/in/julienzappulla/']}
                                major={'Mechanical Engineering'}
                            />
                            <PersonProfile
                                name={'Reetesh Sudhakar'}
                                position={'Director of Member Development'}
                                imagePath={'/images/exec/dmd.png'}
                                backgroundPath={'/images/gold-background.png'}
                                socials={['https://www.instagram.com/reeteshsudhakar/', 'https://www.linkedin.com/in/reetesh-sudhakar/']}
                                major={'Computer Science'}
                            />
                        </HStack>
                        <HStack
                            spacing={'25px'}
                        >
                            <PersonProfile
                                name={'Jong Liu'}
                                position={'Rush Chairman'}
                                imagePath={'/images/exec/rush-chair.png'}
                                backgroundPath={'/images/purple-background.png'}
                                socials={['https://www.instagram.com/jongliu930/', 'https://www.linkedin.com']}
                                major={'Biomedical Engineering'}
                            />
                            <PersonProfile
                                name={'Jake Mertz'}
                                position={'Treasurer'}
                                imagePath={'/images/exec/treasurer.png'}
                                backgroundPath={'/images/gold-background.png'}
                                socials={['https://www.instagram.com', 'https://www.linkedin.com/in/jake-mertz-22bb9b260/']}
                                major={'Mechanical Engineering'}
                            />
                            <PersonProfile
                                name={'Eric Dong'}
                                position={'Sergeant at Arms'}
                                imagePath={'/images/exec/sergeant-at-arms.png'}
                                backgroundPath={'/images/purple-background.png'}
                                socials={['https://www.instagram.com/belericant/', 'https://www.linkedin.com/in/eric-r-dong/']}
                                major={'Computer Science'}
                            />
                        </HStack>
                        <HStack
                            spacing={'25px'}
                        >
                            <PersonProfile
                                name={'Truett Brown'}
                                position={'Risk Manager'}
                                imagePath={'/images/exec/risk-manager.png'}
                                backgroundPath={'/images/gold-background.png'}
                                socials={['https://www.instagram.com/truettbrown/', 'https://www.linkedin.com/in/truett-brown/']}
                                major={'Mechanical Engineering'}
                            />
                            <PersonProfile
                                name={'Liam Adams'}
                                position={'House Manager'}
                                imagePath={'/images/exec/house-manager.png'}
                                backgroundPath={'/images/purple-background.png'}
                                socials={['https://www.instagram.com/_.liamadams._/', 'https://www.linkedin.com/in/liam-adams-396730232/']}
                                major={'Mechanical Engineering'}
                            />
                            <PersonProfile
                                name={'Victor Cavalletti'}
                                position={'Director of Communications'}
                                imagePath={'/images/exec/director-of-communications.png'}
                                backgroundPath={'/images/gold-background.png'}
                                socials={['https://www.instagram.com/victor___cavalletti/', 'https://www.linkedin.com/in/victorcavalletti/']}
                                major={'Industrial Design'}
                            />
                        </HStack>
                        <HStack>
                            <PersonProfile
                                name={'Lucas Deal'}
                                position={'Assistant Treasurer'}
                                imagePath={'/images/exec/assistant-treasurer.png'}
                                backgroundPath={'/images/gold-background.png'}
                                socials={['https://www.instagram.com/real.charlieepic/', 'https://www.linkedin.com/in/lucas-deal/']}
                                major={'Aerospace Engineering'}
                            />
                        </HStack>
                    </VStack>
                </Stack>
            </Container>
        </>
    )
}

export default Officers
