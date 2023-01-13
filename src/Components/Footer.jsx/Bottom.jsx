import { Box, Text } from "@chakra-ui/react"

export const Bottom = () => {
    return (
        <Box py='10px' px={{ base: "10px", sm: "15px", md: "20px", lg: "30px", xl: "45px" }} >
            <Text textAlign='center' fontSize='14px'>
                © 2023 surajkm24. All Rights Reserved.
            </Text>
        </Box>
    )
}