import { Box, Heading } from "@chakra-ui/react"
import { DesktopNews } from "./DesktopNews"
import { MobileNews } from "./MobileNews"

export const News = () => {
    return (
        <Box px={{ base: "10px", sm: "15px", md: "20px", lg: "30px", xl: "45px" }}
            py={{ base: "10px", md: "20px" }}>
            <Heading fontSize={{ base: "lg", lg: "xl", xl: "2xl" }}
                textAlign={{ base: "center", lg: "left" }}>
                In The Press
            </Heading>
            <DesktopNews />
            <MobileNews />
        </Box>
    )
}