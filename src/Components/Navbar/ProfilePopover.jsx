import {
    Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverArrow,
    PopoverCloseButton, Box, IconButton, Button, Text, Divider, useToast
} from '@chakra-ui/react'
import { AiOutlineUser } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext'
import { logout } from '../../controllers/auth.controllers'
const data = ['Orders', 'Wishlist', 'Gift Cards', 'Saved Cards', 'Saved Addresses']
export const ProfilePopover = () => {
    const { auth, setAuth } = useAuth();
    const toast = useToast();
    return (
        <Popover trigger={'hover'}>
            <PopoverTrigger>
                <Box>
                    <IconButton icon={<AiOutlineUser />} p='8px' borderRadius='50%'
                        cursor='pointer' />
                </Box>
            </PopoverTrigger>
            <PopoverContent w={auth.isAuth ? "250px" : '200px'}>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader fontWeight={550} fontSize='17px'>
                    {auth.isAuth ? `Hello ${auth.user?.fName}` : "Hi boAthead!"}
                </PopoverHeader>
                {!auth.isAuth ? (
                    <PopoverBody>
                        <Button as={Link} to='/login' borderRadius='4px' w='100%' fontSize='15px'
                            colorScheme='twitter'>
                            LOGIN
                        </Button>
                        <Button as={Link} to='/signup' borderRadius='4px' w='100%' fontSize='15px'
                            colorScheme='red' mt='10px'>
                            SIGNUP
                        </Button>
                    </PopoverBody>
                ) : (
                    <PopoverBody>
                        <Text fontSize='14px' opacity='0.7'>
                            Access account and manage orders.
                        </Text>
                        <Button borderRadius='4px' w='100%' fontSize='15px' colorScheme='red'
                            mt='10px' onClick={() => logout(toast, setAuth)}>
                            LOGOUT
                        </Button>
                        <Divider bg='white' orientation='horizontal' my='10px' />
                        {data.map((label) => (
                            <Text key={label} fontSize='15px' opacity='0.8' cursor='pointer'
                                _hover={{ opacity: "1" }} lineHeight={'30px'}>
                                {label}
                            </Text>
                        ))}
                    </PopoverBody>
                )}
            </PopoverContent>
        </Popover>
    )
}