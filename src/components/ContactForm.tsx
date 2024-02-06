'use client'

import React from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    useColorModeValue,
} from '@chakra-ui/react'
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
} from 'react-icons/md'
import { BsPerson } from 'react-icons/bs'

export default function Contact() {
    return (
        <Flex>
            <Box
                bg={useColorModeValue('#c9a227', '#7851a9')}
                color="white"
                borderRadius="lg"
                m={{ sm: 4, md: 8, lg: 10 }}
                p={{ sm: 5, md: 5, lg: 16 }}
            >
                <Box p={4}>
                    <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                        <WrapItem>
                            <Box bg="white" borderRadius="lg" width='500px'>
                                <Box m={8} color="#0B0E3F">
                                    <VStack spacing={5}>
                                        <FormControl id="name">
                                            <FormLabel>Your Name</FormLabel>
                                            <InputGroup borderColor="#E0E1E7">
                                                <InputLeftElement pointerEvents="none">
                                                    <BsPerson color="gray.800" />
                                                </InputLeftElement>
                                                <Input type="text" size="md" />
                                            </InputGroup>
                                        </FormControl>
                                        <FormControl id="name">
                                            <FormLabel>Mail</FormLabel>
                                            <InputGroup borderColor="#E0E1E7">
                                                <InputLeftElement pointerEvents="none">
                                                    <MdOutlineEmail color="gray.800" />
                                                </InputLeftElement>
                                                <Input type="text" size="md" />
                                            </InputGroup>
                                        </FormControl>
                                        <FormControl id="name">
                                            <FormLabel>Message</FormLabel>
                                            <Textarea
                                                borderColor="gray.300"
                                                _hover={{
                                                    borderRadius: 'gray.300',
                                                }}
                                                placeholder="message"
                                            />
                                        </FormControl>
                                        <FormControl id="name" float="right">
                                            <Button variant="solid" bg="#0D74FF" color="white" _hover={{}}>
                                                Send Message
                                            </Button>
                                        </FormControl>
                                    </VStack>
                                </Box>
                            </Box>
                        </WrapItem>
                    </Wrap>
                </Box>
            </Box>
        </Flex >
    )
}