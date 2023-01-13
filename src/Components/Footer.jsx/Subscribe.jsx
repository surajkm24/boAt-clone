import { Box, Button, Flex, Image, Input, Text, useToast } from "@chakra-ui/react"
import { useState } from "react";
import logo from '../../assets/boat-logo.avif';
import { subscribeForEmails } from "../../controllers/subscribe.controllers";

export const Subscribe = () => {
    const [email, setEmail] = useState('');
    const toast = useToast();
    return (
        <Box px={{ base: "10px", sm: "15px", md: "20px", lg: "30px", xl: "45px" }}
            w={{ base: "100%", lg: "30%" }} py={{ base: "15px", lg: "0px" }}>
            <Image src={logo} w='70px' />
            <Text opacity='0.7' fontSize='14px' mt='10px'>
                Subscribe to email alerts. We promise not to spam your inbox.
            </Text>
            <Flex border='2px' p='5px' borderRadius='25px' mt='5px' pl='20px'
                borderColor='rgb(254,178,178)'
                w={{ base: "100%", sm: "400px", md: "500px", lg: "100%" }}>
                <Input placeholder='Email Address' variant='unstyled' type='email'
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                <Button colorScheme='red' borderRadius='15px' h='30px' fontSize='13px'
                    onClick={() => subscribeForEmails(email, toast)} px='25px'>
                    SUBSCRIBE
                </Button>
            </Flex>
        </Box >
    )
}