import { Box, Button, Icon, IconButton, Image, Stack, Tooltip } from "@chakra-ui/react"
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import logo from '../../assets/boat-logo.avif';
import { ProfilePopover } from "./ProfilePopover";

export const Navbar = () => {
    return (
        <Stack bg='rgb(14,21,37)'
            px={{ base: "10px", sm: "15px", md: "20px", lg: "30px", xl: "45px" }}
            py={{ base: "5px", md: "10px" }} direction='row' align='center'
            justify='space-between'>
            <Box w='70px' cursor='pointer'>
                <Image src={logo} width='100%' />
            </Box>
            <Stack align='center' direction='row' spacing={4}>
                <Tooltip label='Search'>
                    <Box>
                        <IconButton icon={<AiOutlineSearch />} p='8px' borderRadius='50%'
                            cursor='pointer' />
                    </Box>
                </Tooltip>
                <Tooltip label='Cart'>
                    <Box>
                        <IconButton icon={<AiOutlineShoppingCart />} p='8px' borderRadius='50%'
                            cursor='pointer' />
                    </Box>
                </Tooltip>
                <ProfilePopover />
            </Stack>
        </Stack>
    )
}