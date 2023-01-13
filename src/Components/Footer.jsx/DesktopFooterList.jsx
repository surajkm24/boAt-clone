import { Box, Flex, Text } from "@chakra-ui/react"
import { company, help, shop } from "../../data/footer.data"

export const DesktopFooterList = () => {
    return (
        <Flex gap='15px' pr={{ md: "20px", lg: "30px", xl: "45px" }}
        display={{base:"none",lg:"flex"}}>
            <Box borderRight='1px solid rgba(255,255,255,0.4)' pr='15px'>
                <Text fontWeight={600}>
                    SHOP
                </Text>
                <Flex >
                    <Box borderRight='1px solid rgba(255,255,255,0.4)' pr='15px'>
                        {shop.first.map((ele) => (
                            <Text fontSize='13px' lineHeight='30px' key={ele} opacity='0.8'
                            cursor='pointer' _hover={{opacity:"1"}}>
                                {ele}
                            </Text>
                        ))}
                    </Box>
                    <Box pl='15px'>
                        {shop.second.map((ele) => (
                            <Text fontSize='13px' lineHeight='30px' key={ele} opacity='0.8'
                            cursor='pointer' _hover={{opacity:"1"}}>
                                {ele}
                            </Text>
                        ))}
                    </Box>
                </Flex>
            </Box>
            <Box borderRight='1px solid rgba(255,255,255,0.4)' pr='15px'>
                <Text fontWeight={600}>
                    HELP
                </Text>
                <Flex >
                    <Box borderRight='1px solid rgba(255,255,255,0.4)' pr='15px'>
                        {help.first.map((ele) => (
                            <Text fontSize='13px' lineHeight='30px' key={ele} opacity='0.8'
                            cursor='pointer' _hover={{opacity:"1"}}>
                                {ele}
                            </Text>
                        ))}
                    </Box>
                    <Box pl='15px'>
                        {help.second.map((ele) => (
                            <Text fontSize='13px' lineHeight='30px' key={ele} opacity='0.8'
                            cursor='pointer' _hover={{opacity:"1"}}>
                                {ele}
                            </Text>
                        ))}
                    </Box>
                </Flex>
            </Box>
            <Box>
                <Text fontWeight={600}>
                    COMPANY
                </Text>
                {company.first.map((ele) => (
                    <Text fontSize='13px' lineHeight='30px' key={ele} opacity='0.8'
                    cursor='pointer' _hover={{opacity:"1"}}>
                        {ele}
                    </Text>
                ))}
                {company.second.map((ele) => (
                    <Text fontSize='13px' lineHeight='30px' key={ele} opacity='0.8'
                    cursor='pointer' _hover={{opacity:"1"}}>
                        {ele}
                    </Text>
                ))}
            </Box>
        </Flex>
    )
}