import { IconButton, Stack } from "@chakra-ui/react"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export const Social = () => {
    return (
        <Stack direction='row' borderTop="1px solid rgba(255,255,255,0.5)" py='10px'
            justify={{ base: "center", md: "flex-start" }}
            px={{ base: "10px", sm: "15px", md: "20px", lg: "30px", xl: "45px" }}>
            <IconButton icon={<FaFacebookF />} colorScheme='facebook' />
            <IconButton icon={<FaTwitter />} colorScheme='twitter' />
            <IconButton icon={<FaInstagram />} colorScheme='orange' />
            <IconButton icon={<FaYoutube />} colorScheme='red' />
            <IconButton icon={<FaLinkedinIn />} colorScheme='linkedin' />
        </Stack>
    )
}