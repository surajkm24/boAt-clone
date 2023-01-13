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

export const handleSignupValidation = (fName, lName, email, password, toast) => {
    if (!fName || !lName) {
        toast({
            title: "Name is required.",
            status: "error",
            duration: 2000,
            isClosable: true,
            position: "top"
        })
    }
    else if (!email) {
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

export const signupUser = (fName, lName, email, password, toast) => {
    let users = JSON.parse(localStorage.getItem('sfqwyr329rirdhkweflewjorfhiw')) || []
    let check = users.find((ele) => ele.email === email);
    if (check) {
        toast({
            title: "Email is already registered.",
            duration: 2000,
            isClosable: true,
            status: "error",
            position: "top"
        })
    }
    else {
        toast({
            title: "Account created.",
            duration: 2000,
            isClosable: true,
            status: "success",
            position: "top"
        })
        let user = { fName, lName, email, password }
        localStorage.setItem('sadudqw029e2qop;w9rq0qw0w-12928e', JSON.stringify(user))
        users.push(user);
        localStorage.setItem('sfqwyr329rirdhkweflewjorfhiw', JSON.stringify(users));
    }
}