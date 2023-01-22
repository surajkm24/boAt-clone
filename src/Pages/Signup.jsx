import { Box, Heading, Text, IconButton, Flex, Input, VStack, Button, useToast } from "@chakra-ui/react"
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { handleSignupValidation, signupUser } from "../controllers/auth.controllers";
import { useAuth } from "../Context/AuthContext";

export const Signup = () => {
    const [{ email, password, fName, lName }, setFormData] = useState({
        email: "", password: "",
        fName: "", lName: ""
    })
    const toast = useToast();
    const { auth,setAuth } = useAuth();
    const handleSubmit = (e) => {
        e.preventDefault();
        let temp = handleSignupValidation(fName, lName, email, password, toast);
        if (temp) {
            signupUser(fName, lName, email, password, toast, setAuth)
        }
    }
    if (auth.isAuth) {
        return <Navigate to='/' />
    }
    return (
        <Box px={{ base: "10px", sm: "15px", md: "20px", lg: "30px", xl: "45px" }}>
            <Heading textAlign='center' my='15px'
                fontSize={{ base: "25px", sm: "28px", md: "35px", lg: "40px" }}>
                Register
            </Heading>
            <Text textAlign='center' pb='20px'>
                Please fill in the fields below:
            </Text>
            <Flex justify='center' my='20px' gap='10px'>
                <IconButton icon={<FcGoogle />} borderRadius='50%' cursor='pointer' />
                <IconButton icon={<FaFacebookF />} borderRadius='50%' cursor='pointer' p='5px'
                    colorScheme='facebook' />
            </Flex>
            <form onSubmit={handleSubmit}>
                <Box w={{ base: "90%", sm: "400px" }} mx='auto'>
                    <VStack spacing={5}>
                        <Input placeholder='First Name' value={fName}
                            onChange={(e) => setFormData(prev => { return { ...prev, fName: e.target.value.trim() } })} />
                        <Input placeholder='Last Name' value={lName}
                            onChange={(e) => setFormData(prev => { return { ...prev, lName: e.target.value.trim() } })} />
                        <Input placeholder='Email Address' value={email}
                            onChange={(e) => setFormData(prev => { return { ...prev, email: e.target.value.trim() } })} />
                        <Input placeholder='Password' value={password} type='password'
                            onChange={(e) => setFormData(prev => { return { ...prev, password: e.target.value.trim() } })} />
                    </VStack>
                    <Button w='100%' colorScheme='red' mt='35px' type='submit' >
                        CREATE ACCOUNT
                    </Button>
                </Box>
            </form>
            <Flex justify='center' my='15px' gap='5px' wrap='wrap' opacity='0.8'>
                <Text>Already have an account?</Text>
                <Link to='/login'>
                    <Text textDecoration='underline'>Login</Text>
                </Link>
            </Flex>
        </Box>
    )
}