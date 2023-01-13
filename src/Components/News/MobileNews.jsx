import { Box, Image, Stack, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import { news } from '../../data/news.data';
import { useEffect, useRef } from 'react';

export const MobileNews = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        window.addEventListener('resize', () => {
            swiperRef?.current?.autoplay?.start()
        })
    }, [])
    return (
        <Box display={{ lg: "none", base: "block" }} mt='20px' mb='10px' position='relative'>
            <Swiper
                modules={[Autoplay, Pagination, Scrollbar, Navigation]}
                autoplay={{ delay: 3000 }}
                navigation={{
                    prevEl: ".swiper-prev-btn",
                    nextEl: ".swiper-next-btn"
                }}
                pagination={{ clickable: true, type: "bullets" }}
                scrollbar={{ draggable: true }}
                loop={true}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper
                }}
                style={{ height: "130px" }}
            >
                {news.map((ele) => (
                    <SwiperSlide key={ele.content}>
                        <Stack align='center'>
                            <Text fontWeight={600} textAlign='center'>
                                {ele.content}
                            </Text>
                            <Image src={ele.img} w='100px'
                                bg={"whiteAlpha.800"} p='5px' borderRadius='10px' />
                        </Stack>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box >
    )
}