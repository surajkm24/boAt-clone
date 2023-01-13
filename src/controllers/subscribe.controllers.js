export const subscribeForEmails = (email, toast) => {
    if (!email || !email.includes('@') || !email.includes('.') || email.includes('@.')
        || email.startsWith("@") || email.length < 5) {
        toast({
            title: "Invalid email!",
            duration: 1500,
            isClosable: true,
            status: "error",
            position: "top"
        })
    }
    else {
        toast({
            title: "Subscribed successfully.",
            status: "success",
            duration: 1500,
            position: 'top',
            isClosable: true
        })
    }
}