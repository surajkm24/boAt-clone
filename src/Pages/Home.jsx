import { Box } from "@chakra-ui/react"
import { MainCarousel } from "../Components/HomeComponents/MainCarousel"
import { News } from "../Components/News/News"

export const Home = () => {
    return (
        <Box>
            <MainCarousel />
            <News />
        </Box>
    )
}