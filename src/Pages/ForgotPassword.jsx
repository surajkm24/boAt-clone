import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { Email } from "../Components/ForgotPassword/Email"
import { Password } from "../Components/ForgotPassword/Password"
import { useAuth } from "../Context/AuthContext"

export const ForgotPassword = () => {
    const [{ email, password }, setData] = useState({ email: "", password: "" })
    const [emailVerified, setEmailVerified] = useState(false)
    const { auth } = useAuth();

    if (auth.isAuth) {
        return <Navigate to='/' />
    }
    return (
        <Box px={{ base: "10px", sm: "15px", md: "20px", lg: "30px", xl: "45px" }} >
            <Heading textAlign='center' my='15px'
                fontSize={{ base: "25px", sm: "28px", md: "35px", lg: "40px" }}>
                Recover Password
            </Heading>
            <Text textAlign='center' pb='20px'>
                {!emailVerified ? "Please enter your e-mail:" : (
                    "Enter new password:"
                )}
            </Text>
            <Box>
                {emailVerified ? (
                    <Password email={email} setData={setData} password={password} />
                ) : (
                    <Email email={email} setData={setData} setEmailVerified={setEmailVerified}
                    />
                )}
            </Box>
            <Flex justify='center' my='15px' gap='5px' wrap='wrap' opacity='0.8'>
                <Text>Remember password?</Text>
                <Link to='/login'>
                    <Text textDecoration='underline'>Back to login</Text>
                </Link>
            </Flex>
        </Box>
    )
}