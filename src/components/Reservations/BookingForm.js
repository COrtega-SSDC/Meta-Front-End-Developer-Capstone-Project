import { Button, Flex, FormControl, FormLabel, Input, Select, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { fetchAPI} from "../../api";


function BookingForm({ availableTimes, dispatch, submitForm }) {
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

    const [isFormValid, setIsFormValid] = useState(false);


    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setDate(newDate);
    
        fetchAPI(newDate)
            .then(times => {
                dispatch({ type: 'SET_TIMES', payload: times });
            })
            .catch(error => {
                console.error('Failed to fetch times for the selected date: ', error);
            });
    };
    const handleTime = (e) => {
        setTime(e.target.value)
    }

    const handleGuests = (e) => setGuests(e.target.value)

    const handleOccasion = (e) => setOccasion(e.target.value)

    const handleSubmit = e => {
        e.preventDefault();
        const formData = { date, time, guests, occasion };
        submitForm(formData); // Call the submitForm function passed via props
    }

    useEffect(() => {
        const validateForm = () => {
          const isValid = date && time && guests > 0;
          setIsFormValid(isValid);
        };
    
        validateForm();
      }, [date, time, guests]);


    return (
        <>
            <Flex justifyContent="center" alignItems="center">
                <form onSubmit={handleSubmit} noValidate>
                    <VStack style={style}>
                        <FormControl>
                            <FormLabel htmlFor="res-date">Choose Date</FormLabel>
                            <Input type="date" id="res-date" value={date} onChange={handleDateChange} />
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
                            <Input type="number" min={1} max={10} id="guests" value={guests} onChange={handleGuests} required/>
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="occasion">Occasion</FormLabel>
                            <Select id="occasion" value={occasion} onChange={handleOccasion}>
                                <option disabled>Please Select</option>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                                <option>Graduation</option>
                            </Select>
                        </FormControl>
                        <Button type="submit" value="Make Your Reservation" bg="#F4CE14" isDisabled={!isFormValid}>Book Now!</Button>
                    </VStack>
                </form>

            </Flex>

        </>
    );

}
export default BookingForm;
