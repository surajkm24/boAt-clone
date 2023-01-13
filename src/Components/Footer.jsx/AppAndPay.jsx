import { Flex, Image, Stack, Text } from "@chakra-ui/react"
import gplay from '../../assets/googleplay.avif';
import app from '../../assets/appstore.avif';
import pay from '../../assets/pay.png';

export const AppAndPay = () => {
    return (
        <Stack direction={{ base: "column", md: "row" }} justify='space-between'
            borderTop='1px' borderBottom='1px' py='10px' borderColor='rgba(255,255,255,0.5)'>
            <Stack borderBottom={{ base: "1px solid rgba(255,255,255,0.5)", md: "none" }}
                px={{ base: "10px", sm: "15px", md: "20px", lg: "30px", xl: "45px" }}>
                <Text fontWeight={600} w='fit-content' mx={{ base: "auto", md: "0px" }}>
                    Download the App
                </Text>
                <Flex gap='10px' justify={{ base: "center", md: "flex-start" }}
                    pb={{ base: "10px", md: "0px" }}>
                    <Image src={gplay} w={{ base: "42%", sm: '150px' }} cursor='pointer' />
                    <Image src={app} w={{ base: "42%", sm: '150px' }} cursor='pointer' />
                </Flex>
            </Stack>
            <Stack align={{ base: 'center', md: "flex-start" }}
                px={{ base: "10px", sm: "15px", md: "20px", lg: "30px", xl: "45px" }}>
                <Text fontWeight={600} >
                    We Accept
                </Text>
                <Image src={pay} w={{ base: "90%", sm: "450px", md: '400px' }} 
                cursor='pointer' />
            </Stack>
        </Stack>
    )
}