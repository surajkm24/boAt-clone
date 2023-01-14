import { Box, Image } from "@chakra-ui/react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper';
import "swiper/css";
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import { carouselImgs } from "../../data/home.data";

export const MainCarousel = () => {
    return (
        <Box px={{ base: "10px", sm: "15px", md: "20px", lg: "30px", xl: "45px" }}
            py={'15px'} position='relative'>
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                pagination={{ clickable: true }}
                navigation
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}>
                {carouselImgs.map((item) => (
                    <SwiperSlide key={item.desk}>
                        <Box display={{ md: "block", base: "none" }} w='100%'>
                            <Image src={item.desk} borderRadius='10px' />
                        </Box>
                        <Box display={{ md: "none", base: "block" }} w='100%'>
                            <Image src={item.tab} borderRadius='10px' />
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    )
}