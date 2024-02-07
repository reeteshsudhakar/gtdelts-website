'use client'

import React from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
    Flex,
    Box,
    Button,
    VStack,
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
import { MdOutlineEmail } from 'react-icons/md'
import { BsPerson } from 'react-icons/bs'
import { deltPurple, deltGold } from '../utils/constants'
import { isValidEmail, isValidName, isValidMessage } from '../utils/helpers'

export default function ContactForm() {
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [message, setMessage] = React.useState('')

    const handleNameChange = (e) => setName(e.target.value)
    const handleEmailChange = (e) => setEmail(e.target.value)
    const handleMessageChange = (e) => setMessage(e.target.value)
    const templateParams = {
        from_name: name,
        to_name: "Gamma Psi Delt",
        from_email: email,
        message: message,
    }

    function submitForm() {
        if (!isValidName(name)) {
            toast.error('Please enter a valid name')
            return
        }
        if (!isValidEmail(email)) {
            toast.error('Please enter a valid email')
            return
        }
        if (!isValidMessage(message)) {
            toast.error('Please enter a valid message')
            return
        }

        emailjs.send(
            process.env.NEXT_PUBLIC_YOUR_SERVICE_ID,
            process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID,
            templateParams,
            process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY
        )
            .then((result) => {
                console.log(result.text)
                toast.success('Message sent successfully')
                setName('')
                setEmail('')
                setMessage('')
            }, (error) => {
                console.log(error.text)
                toast.error('Message failed to send')
            })
    }

    return (
        <Flex>
            <Box
                bg={useColorModeValue(deltGold, deltPurple)}
                color="white"
                borderRadius="lg"
                m={{ sm: 4, md: 4, lg: 8 }}
                p={{ sm: 5, md: 5, lg: 10 }}
            >
                <Box p={4}>
                    <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                        <WrapItem>
                            <Box bg="white" borderRadius="lg" width={{ base: '500px', sm: '300px', md: '500px', lg: '750px' }}>
                                <Box m={8} color="#0B0E3F">
                                    <VStack spacing={5}>
                                        <FormControl id="name">
                                            <FormLabel>Your Name</FormLabel>
                                            <InputGroup borderColor="#E0E1E7">
                                                <InputLeftElement pointerEvents="none">
                                                    <BsPerson color="gray.800" />
                                                </InputLeftElement>
                                                <Input type="text" size="md" value={name} onChange={handleNameChange} />
                                            </InputGroup>
                                        </FormControl>
                                        <FormControl id="name">
                                            <FormLabel>Your Email</FormLabel>
                                            <InputGroup borderColor="#E0E1E7">
                                                <InputLeftElement pointerEvents="none">
                                                    <MdOutlineEmail color="gray.800" />
                                                </InputLeftElement>
                                                <Input type="text" size="md" value={email} onChange={handleEmailChange} />
                                            </InputGroup>
                                        </FormControl>
                                        <FormControl id="name">
                                            <FormLabel>Your Message</FormLabel>
                                            <Textarea
                                                borderColor="gray.300"
                                                _hover={{
                                                    borderRadius: 'gray.300',
                                                }}
                                                placeholder="message"
                                                value={message}
                                                onChange={handleMessageChange}
                                            />
                                        </FormControl>
                                        <FormControl id="name" float="right">
                                            <Button variant="solid" bg={useColorModeValue(deltPurple, deltGold)} color="white" _hover={{ opacity: '0.8' }} onClick={submitForm}>
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
            <ToastContainer />
        </Flex >
    )
}