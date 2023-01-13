import { Box } from "@chakra-ui/react"
import { AppAndPay } from "./AppAndPay"
import { Bottom } from "./Bottom"
import { FooterMain } from "./FooterMain"
import { Social } from "./Social"
import { Top } from "./Top"

export const Footer = () => {
    return (
        <Box bg='rgb(14,21,37)'>
            <Top />
            <FooterMain />
            <Social />
            <AppAndPay />
            <Bottom />
        </Box>
    )
}