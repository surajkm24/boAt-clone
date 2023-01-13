import { Box, Flex, TabPanel, Text } from "@chakra-ui/react"

export const FooterTabPanel = ({ data }) => {
    return (
        <TabPanel>
            <Flex >
                <Box borderRight='1px solid rgba(255,255,255,0.4)' w='50%'>
                    {data.first.map((ele) => (
                        <Text fontSize='13px' lineHeight='30px' key={ele} opacity='0.8'
                            cursor='pointer' _hover={{ opacity: "1" }}>
                            {ele}
                        </Text>
                    ))}
                </Box>
                <Box pl='15px' w='50%'>
                    {data.second.map((ele) => (
                        <Text fontSize='13px' lineHeight='30px' key={ele} opacity='0.8'
                            cursor='pointer' _hover={{ opacity: "1" }}>
                            {ele}
                        </Text>
                    ))}
                </Box>
            </Flex>
        </TabPanel>
    )
}