import { Box } from "@chakra-ui/react"
import { DesktopFooterList } from "./DesktopFooterList"
import { MobileFooterList } from "./MobileFooterList"

export const FooterContent = () => {
    return (
        <Box>
            <DesktopFooterList />
            <MobileFooterList />
        </Box>
    )
}