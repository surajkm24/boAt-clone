import { Button, Input, useToast, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { changePassword } from "../../controllers/auth.controllers";

export const Password = ({ password, setData, email }) => {
    const toast = useToast();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        let temp = changePassword(email, password, toast);
        if (temp) navigate('/login');
    }

    return (
        <form onSubmit={handleSubmit}>
            <VStack spacing={'20px'} w={{ base: "90%", sm: "400px" }} mx='auto'
                mt={{ base: "30px", md: "45px", xl: "60px" }}>
                <Input placeholder='New Password' value={password} required
                    onChange={(e) => setData(prev => { return { ...prev, password: e.target.value.trim() } })} />
                <Button w='100%' colorScheme='red' type='submit' >
                    UPDATE
                </Button>
            </VStack>
        </form>
    )
}