import { useState, useEffect, useNavigate} from "react";
import { Flex, Text, VStack, FormControl, FormLabel, Input, Button, FormErrorMessage } from "@chakra-ui/react";

import { submitAPI } from "../../api";

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [isFormValid, setIsFormValid] = useState(false)
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const validateForm = () => {
        let newErrors = {}
        if (!email) {
            newErrors.email = "Email is required";
        } else if (!isValidEmail(email)) {
            newErrors.email = "Invalid email format";
        }
        if (!password) newErrors.password = "Password is required"

        setErrors(newErrors);
        setIsFormValid(Object.keys(newErrors).length === 0)
    }

    const handleEmail = (e) => setEmail(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)
    const handleSubmit = (e) => {
        e.preventDefault()
        validateForm()
        if (isFormValid) {
            const formData = { email, password };
            submitForm(formData);
        }
    }

    const isValidEmail = (email) => {
        // Simple email validation using a regular expression
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    };

    const submitForm = formData => {
        const submissionResult = submitAPI(formData);
        if (submissionResult) {
          navigate('/portal'); // Navigate to the booking confirmed page
        }
      };

    useEffect(validateForm, [email, password])

    return (
        <>
            <Flex height="800px" justifyContent="center">
                <form onSubmit={handleSubmit} noValidate>
                    <VStack spacing={0} align="flex-start" textAlign="left" mt={0} gap="15px">
                        <Text as='h1' color="#495E57">Log In</Text>
                        <FormControl isInvalid={!!errors.email}>
                            <FormLabel as="h6">Email address</FormLabel>
                            <Input type='email' onChange={handleEmail} />
                            {errors.email && <FormErrorMessage id="email-error">{errors.email}</FormErrorMessage>}
                        </FormControl>
                        <FormControl isInvalid={!!errors.password}>
                            <FormLabel as="h6">Password</FormLabel>
                            <Input type='password' onChange={handlePassword}/>
                            {errors.password && <FormErrorMessage id="password-error">{errors.password}</FormErrorMessage>}
                        </FormControl>
                        <Button type="submit" value="Login" bg="#F4CE14" width="full" mt="15px" as="h5" isDisabled={!isFormValid}>Login</Button>
                    </VStack>
                </form>
            </Flex>
        </>
    )

}

export default Login;