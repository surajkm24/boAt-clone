export const handleLoginValidation = (email, password, toast) => {
    if (!email) {
        toast({
            title: "Email is required.",
            status: "error",
            duration: 2000,
            isClosable: true,
            position: "top"
        })
    }
    else if (!email.includes('@') || !email.includes('.') || email.includes('@.')
        || email.startsWith("@") || email.length < 5) {
        toast({
            title: "Invalid email.",
            status: "error",
            duration: 2000,
            isClosable: true,
            position: "top"
        })
    }
    else if (!password) {
        toast({
            title: "Password is required.",
            status: "error",
            duration: 2000,
            isClosable: true,
            position: "top"
        })
    }
    else if (password.length < 8) {
        toast({
            title: "Weak password.",
            description: "It must have at least 8 characters.",
            status: "error",
            duration: 2000,
            isClosable: true,
            position: "top"
        })
    }
    else return true;
}

export const loginUser = (email, password, toast) => {
    let users = JSON.parse(localStorage.getItem('sfqwyr329rirdhkweflewjorfhiw')) || []
    let user = users.find(ele => ele.email === email && ele.password === password);
    if (!user) {
        toast({
            title: "User doesn't exists.",
            duration: 2000,
            isClosable: true,
            status: "error",
            position: "top"
        })
    }
    else {
        toast({
            title: "Login successful.",
            duration: 2000,
            isClosable: true,
            status: "success",
            position: "top"
        })
        localStorage.setItem('sadudqw029e2qop;w9rq0qw0w-12928e', JSON.stringify(user))
    }
}