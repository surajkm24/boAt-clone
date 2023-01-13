import { Box, Heading, Text, IconButton, Flex, Input, VStack, Button, useToast } from "@chakra-ui/react"
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { useState } from "react";
import { Link } from "react-router-dom";
import { handleLoginValidation, loginUser } from "../controllers/auth.controllers";

export const Login = () => {
    const [{ email, password }, setFormData] = useState({ email: "", password: "" })
    const toast = useToast();
    const handleSubmit = (e) => {
        e.preventDefault();
        let temp = handleLoginValidation(email, password, toast);
        if (temp) {
            loginUser(email, password, toast)
        }
    }

    return (
        <Box px={{ base: "10px", sm: "15px", md: "20px", lg: "30px", xl: "45px" }}>
            <Heading textAlign='center' my='15px'
                fontSize={{ base: "25px", sm: "28px", md: "35px", lg: "40px" }}>
                Login
            </Heading>
            <Text textAlign='center' pb='20px'>
                Please enter your e-mail and password:
            </Text>
            <Flex justify='center' my='20px' gap='10px'>
                <IconButton as={FcGoogle} borderRadius='50%' cursor='pointer' />
                <IconButton as={FaFacebookF} borderRadius='50%' cursor='pointer' p='5px'
                    colorScheme='facebook' />
            </Flex>
            <form onSubmit={handleSubmit}>
                <Box w={{ md: "30%" }} mx='auto'>
                    <VStack spacing={5}>
                        <Input placeholder='Email Address' value={email}
                            onChange={(e) => setFormData(prev => { return { ...prev, email: e.target.value } })} />
                        <Input placeholder='Password' value={password}
                            onChange={(e) => setFormData(prev => { return { ...prev, password: e.target.value } })} />
                    </VStack>
                    <Button w='100%' colorScheme='red' mt='35px' type='submit' >
                        LOGIN
                    </Button>
                </Box>
            </form>
            <Flex justify='center' my='15px' gap='5px' wrap='wrap' opacity='0.8'>
                <Text>New Customer?</Text>
                <Link to='/signup'>
                    <Text textDecoration='underline'>Create an account</Text>
                </Link>
            </Flex>
            <Link to='/change-password' >
                <Text textDecoration='underline' textAlign='center' opacity='0.8' mb='20px'>
                    Forgot Password?
                </Text>
            </Link>
        </Box>
    )
}