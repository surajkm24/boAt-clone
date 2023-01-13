import { Box, Text } from "@chakra-ui/react"

export const Top = () => {
    return (
        <Box p='10px' borderTop='1px solid rgba(255,255,255,0.6)'
            borderBottom='1px solid rgba(255,255,255,0.6)'>
            <Text textAlign='center' mx='auto' w={{ base: "90%", md: "70%" }} opacity='0.8' 
            fontSize='14px'>
                India's fastest growing audio & wearables brand. The most incredible range of
                wireless earphones, earbuds, headphones, smart watches, and home audio. From
                workouts to adventures, boAt will get you sailing!
            </Text>
        </Box>
    )
}