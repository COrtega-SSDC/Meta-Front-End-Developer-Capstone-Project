import { Flex, Heading, Text, VStack } from "@chakra-ui/react";

function Portal() {
    return (
        <>
            <Flex justifyContent="center" mb="100px" alignItems="center">
                <VStack spacing={10}>
                    <Heading as='h1' color="black">Under Maintenance</Heading>
                    <Text>We are working on adding this feature in the near future!</Text>
                </VStack>

            </Flex>
        </>
    )

}

export default Portal;