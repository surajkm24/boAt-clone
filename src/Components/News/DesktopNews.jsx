import { Box, Flex, Image, Text } from "@chakra-ui/react"
import { useState } from "react"
import { news } from "../../data/news.data"

export const DesktopNews = () => {
    const [slide, setSlide] = useState(0)
    return (
        <Box my='20px' display={{base:"none",lg:"block"}} >
            <Text fontWeight={600}>
                {news[slide].content}
            </Text>
            <Flex justify='space-evenly' my='20px'>
                {news.map((ele, i) => (
                    <Image src={ele.img} key={i + 1} w='150px' cursor='pointer'
                        bg={i===slide?"whiteAlpha.900":'whiteAlpha.400'} p='5px' borderRadius='10px'
                        onMouseOver={() => setSlide(i)} />
                ))}
            </Flex>
        </Box>
    )
}