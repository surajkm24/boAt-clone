import { Box, Tab, TabList, TabPanels, Tabs } from "@chakra-ui/react"
import { company, help, shop } from "../../data/footer.data"
import { FooterTabPanel } from "./FooterTabPanel"

export const MobileFooterList = () => {
    return (
        <Box display={{ base: "block", lg: "none" }}
            px={{ base: "10px", sm: "15px", md: "20px", lg: "30px", xl: "45px" }}>
            <Tabs isFitted variant='soft-rounded' size={{ base: "sm", sm: "md" }}>
                <TabList w='100%'>
                    <Tab>SHOP</Tab>
                    <Tab>HELP</Tab>
                    <Tab>COMPANY</Tab>
                </TabList>
                <TabPanels>
                    <FooterTabPanel data={shop} />
                    <FooterTabPanel data={help} />
                    <FooterTabPanel data={company} />
                </TabPanels>
            </Tabs>
        </Box>
    )
}