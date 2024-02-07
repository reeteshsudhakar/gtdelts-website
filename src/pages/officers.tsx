import Hero from '../components/Hero'
import PersonProfile from '../components/PersonProfile'
import { Container, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { exec } from '../utils/constants'

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
                        {exec.description}
                    </Text>
                    <VStack>
                        <HStack
                            spacing={'25px'}
                        >
                            <PersonProfile
                                name={exec.president.name}
                                position={exec.president.position}
                                imagePath={exec.president.imagePath}
                                backgroundPath={exec.president.backgroundPath}
                                socials={exec.president.socials}
                                major={exec.president.major}
                            />
                            <PersonProfile
                                name={exec.vicePresident.name}
                                position={exec.vicePresident.position}
                                imagePath={exec.vicePresident.imagePath}
                                backgroundPath={exec.vicePresident.backgroundPath}
                                socials={exec.vicePresident.socials}
                                major={exec.vicePresident.major}
                            />
                            <PersonProfile
                                name={exec.directorOfMemberDevelopment.name}
                                position={exec.directorOfMemberDevelopment.position}
                                imagePath={exec.directorOfMemberDevelopment.imagePath}
                                backgroundPath={exec.directorOfMemberDevelopment.backgroundPath}
                                socials={exec.directorOfMemberDevelopment.socials}
                                major={exec.directorOfMemberDevelopment.major}
                            />
                        </HStack>
                        <HStack
                            spacing={'25px'}
                        >
                            <PersonProfile
                                name={exec.rushChairman.name}
                                position={exec.rushChairman.position}
                                imagePath={exec.rushChairman.imagePath}
                                backgroundPath={exec.rushChairman.backgroundPath}
                                socials={exec.rushChairman.socials}
                                major={exec.rushChairman.major}
                            />
                            <PersonProfile
                                name={exec.treasurer.name}
                                position={exec.treasurer.position}
                                imagePath={exec.treasurer.imagePath}
                                backgroundPath={exec.treasurer.backgroundPath}
                                socials={exec.treasurer.socials}
                                major={exec.treasurer.major}
                            />
                            <PersonProfile
                                name={exec.sergeantAtArms.name}
                                position={exec.sergeantAtArms.position}
                                imagePath={exec.sergeantAtArms.imagePath}
                                backgroundPath={exec.sergeantAtArms.backgroundPath}
                                socials={exec.sergeantAtArms.socials}
                                major={exec.sergeantAtArms.major}
                            />
                        </HStack>
                        <HStack
                            spacing={'25px'}
                        >
                            <PersonProfile
                                name={exec.houseManager.name}
                                position={exec.houseManager.position}
                                imagePath={exec.houseManager.imagePath}
                                backgroundPath={exec.houseManager.backgroundPath}
                                socials={exec.houseManager.socials}
                                major={exec.houseManager.major}
                            />
                            <PersonProfile
                                name={exec.riskManager.name}
                                position={exec.riskManager.position}
                                imagePath={exec.riskManager.imagePath}
                                backgroundPath={exec.riskManager.backgroundPath}
                                socials={exec.riskManager.socials}
                                major={exec.riskManager.major}
                            />
                            <PersonProfile
                                name={exec.directorOfCommunications.name}
                                position={exec.directorOfCommunications.position}
                                imagePath={exec.directorOfCommunications.imagePath}
                                backgroundPath={exec.directorOfCommunications.backgroundPath}
                                socials={exec.directorOfCommunications.socials}
                                major={exec.directorOfCommunications.major}
                            />
                        </HStack>
                        <HStack>
                            <PersonProfile
                                name={exec.assistantTreasurer.name}
                                position={exec.assistantTreasurer.position}
                                imagePath={exec.assistantTreasurer.imagePath}
                                backgroundPath={exec.assistantTreasurer.backgroundPath}
                                socials={exec.assistantTreasurer.socials}
                                major={exec.assistantTreasurer.major}
                            />
                        </HStack>
                    </VStack>
                </Stack>
            </Container>
        </>
    )
}

export default Officers
