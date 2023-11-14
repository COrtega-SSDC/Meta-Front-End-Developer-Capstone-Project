import { Heading, Flex, VStack } from "@chakra-ui/react";
import BookingForm from "./BookingForm";

function BookingPage({ availableTimes, dispatch, submitForm }) {

    return (
        <>
            <Flex justifyContent="center">
                <VStack gap={10} mb={20}>
                    <Heading as='h1' color="black">Reservations</Heading>
                    <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
                </VStack>

            </Flex>
        </>

    );

}

export default BookingPage;