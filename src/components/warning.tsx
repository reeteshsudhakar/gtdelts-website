'use client'

import { Box, Heading, Text } from '@chakra-ui/react'
import { WarningTwoIcon } from '@chakra-ui/icons'


const Warning = ({ title }: { title: string }) => {
    return (
        <Box textAlign="center" py={10} px={6}>
            <WarningTwoIcon boxSize={'50px'} color={'orange.300'} />
            <Heading as="h2" size="xl" mt={6} mb={2}>
                🚧 Whoops...
            </Heading>
            <Text color={'gray.500'}>
                The {title} page is under construction! Check back soon for updates.
            </Text>
        </Box>
    )
}

export default Warning