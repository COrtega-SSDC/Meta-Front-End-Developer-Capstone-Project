import { Flex, Heading, Text, VStack } from "@chakra-ui/react";

function ConfirmedBooking() {
    return (
        <>
            <Flex justifyContent="center" mb="100px" alignItems="center">
                <VStack>
                    <Heading as='h1' color="black">Reservation confirmed</Heading>
                    <Text>We will send you an email confirmation shortly</Text>
                </VStack>

            </Flex>
        </>
    )

}

export default ConfirmedBooking;