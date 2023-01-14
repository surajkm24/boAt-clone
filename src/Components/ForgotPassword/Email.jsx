import { Button, Input, VStack, useToast } from "@chakra-ui/react"
import { verifyEmail } from "../../controllers/auth.controllers";

export const Email = ({ email, setData, setEmailVerified }) => {
    const toast = useToast();
    const handleSubmit = (e) => {
        e.preventDefault();
        let temp = verifyEmail(email, toast);
        if (temp) {
            setEmailVerified(true)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <VStack spacing={'20px'} w={{ base: "90%", sm: "400px" }} mx='auto'
                mt={{ base: "30px", md: "45px", xl: "60px" }}>
                <Input placeholder='Email Address' value={email} required
                    onChange={(e) => setData(prev => { return { ...prev, email: e.target.value.trim() } })} />
                <Button w='100%' colorScheme='red' type='submit' >
                    RECOVER
                </Button>
            </VStack>
        </form>
    )
}