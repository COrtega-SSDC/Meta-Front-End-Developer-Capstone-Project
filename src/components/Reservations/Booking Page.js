import { Heading, Flex, VStack } from "@chakra-ui/react";
import BookingForm from "./BookingForm";

function BookingPage({ availableTimes, dispatch }) {

    return (
        <>
            <Flex justifyContent="center">
                <VStack gap={20} mb={20}>
                    <Heading as='h1' color="black">Reservations</Heading>
                    <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
                </VStack>

            </Flex>
        </>

    );

}

export default BookingPage;