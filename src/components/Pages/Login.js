import { Flex, Text, Box, VStack, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

import logo from '../../images/logo.svg'

function Login() {
    return (
        <>
            <Flex height="800px" justifyContent="center">
                <section>
                    <VStack spacing={0} align="flex-start" textAlign="left" mt={0} gap="15px">
                        <Text as='h1' color="#495E57">Log In</Text>
                        <FormControl>
                            <FormLabel as="h6">Email address</FormLabel>
                            <Input type='email' />
                        </FormControl>
                        <FormControl>
                            <FormLabel as="h6">Password</FormLabel>
                            <Input type='password' />
                        </FormControl>
                        <Button type="submit" value="Login" bg="#F4CE14" width="full" mt="15px" as="h5">Login</Button>
                    </VStack>
                </section>

            </Flex>
        </>
    )

}

export default Login;