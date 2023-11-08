import { Button, Flex, FormControl, FormLabel, Input, Select, VStack } from "@chakra-ui/react";
import { useState } from "react";


function BookingForm({availableTimes, dispatch}) {

    const style = {
        maxWidth: 200,
        gap: 15,
        margin: "auto"
    }

    //States 
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [guests, setGuests] = useState(1)
    const [occasion, setOccasion] = useState('')


    const handleDate = (e) => {
        setDate(e.target.value)
        dispatch({ type: 'UPDATE_TIMES', payload: e.target.value });
    }

    const handleTime = (e) => setTime(e.target.value)

    const handleGuests = (e) => setGuests(e.target.value)

    const handleOccasion = (e) => setOccasion(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()

    }


    return (
        <>
            <Flex justifyContent="center" alignItems="center">
                <form onSubmit={handleSubmit}>
                    <VStack style={style}>
                        <FormControl>
                            <FormLabel htmlFor="res-date">Choose Date</FormLabel>
                            <Input type="date" id="res-date" value={date} onChange={handleDate} />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="res-time">Choose Time</FormLabel>
                            <Select id="res-time" value={time} onChange={handleTime}>
                                {availableTimes.map((availableTime) => (
                                    <option key={availableTime} value={availableTime}>
                                        {availableTime}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="guests">Number of Guests</FormLabel>
                            <Input type="number" min={1} max={10} id="guests" value={guests} onChange={handleGuests} />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="occasion">Occasion</FormLabel>
                            <Select id="occasion" value={occasion} onChange={handleOccasion}>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </Select>
                        </FormControl>
                        <Button type="submit" value="Make Your Reservation" bg="#F4CE14">Book Now!</Button>
                    </VStack>
                </form>

            </Flex>

        </>
    );

}
export default BookingForm;
