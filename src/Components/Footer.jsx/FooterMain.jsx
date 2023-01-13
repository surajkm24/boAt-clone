import { Stack } from "@chakra-ui/react"
import { FooterContent } from "./FooterContent"
import { Subscribe } from "./Subscribe"

export const FooterMain = () => {
    return (
        <Stack direction={{ base: "column", lg: "row" }} justify='space-between' py='20px' >
            <Subscribe />
            <FooterContent />
        </Stack>
    )
}