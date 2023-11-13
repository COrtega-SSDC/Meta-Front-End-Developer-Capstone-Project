import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, Select, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { fetchAPI } from "../../api";


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
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let newErrors = {};
        if (!date) newErrors.date = "Date is required";
        if (!time) newErrors.time = "Time is required";
        if (guests < 1) newErrors.guests = "At least one guest is required";
        if (!occasion) newErrors.occasion = "Occasion is required";

        setErrors(newErrors);
        setIsFormValid(Object.keys(newErrors).length === 0);
    };


    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setDate(newDate);

        const selectedDate = new Date(newDate);

        const currentDate = new Date();

        if (selectedDate < currentDate) {
            console.error('Selected date is in the past');
            setDate('');
        } else {
            fetchAPI(newDate)
                .then(times => {
                    dispatch({ type: 'SET_TIMES', payload: times });
                })
                .catch(error => {
                    console.error('Failed to fetch times for the selected date: ', error);
                });
        }
    };
    const handleTime = (e) => {
        setTime(e.target.value)
    }

    const handleGuests = (e) => setGuests(e.target.value)

    const handleOccasion = (e) => setOccasion(e.target.value)

    const handleSubmit = e => {
        e.preventDefault();
        validateForm();
        if (isFormValid) {
            const formData = { date, time, guests, occasion };
            submitForm(formData);
        }
    }

    function getCurrentDate() {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    useEffect(validateForm, [date, time, guests, occasion]);

    // useEffect(() => {
    //     const validateForm = () => {
    //       const isValid = date && time && guests > 0;
    //       setIsFormValid(isValid);
    //     };

    //     validateForm();
    //   }, [date, time, guests]);


    return (
        <>
            <Flex justifyContent="center" alignItems="center">
                <form onSubmit={handleSubmit} noValidate>
                    <VStack style={style}>
                        <FormControl isInvalid={!!errors.date}>
                            <FormLabel as="h6" htmlFor="res-date">Choose Date</FormLabel>
                            <Input type="date" id="res-date" value={date} onChange={handleDateChange} aria-live="polite" required min={getCurrentDate()} />
                            {errors.date && <FormErrorMessage id="date-error">{errors.date}</FormErrorMessage>}
                        </FormControl >
                        <FormControl isInvalid={!!errors.time}>
                            <FormLabel as="h6" htmlFor="res-time">Choose Time</FormLabel>
                            <Select id="res-time" value={time} onChange={handleTime} aria-live="polite">
                                {availableTimes.map((availableTime) => (
                                    <option key={availableTime} value={availableTime}>
                                        {availableTime}
                                    </option>
                                ))}
                            </Select>
                            {errors.time && <FormErrorMessage id="time-error">{errors.time}</FormErrorMessage>}
                        </FormControl>
                        <FormControl isInvalid={!!errors.guests}>
                            <FormLabel as="h6" htmlFor="guests">Number of Guests</FormLabel>
                            <Input type="number" min={1} max={10} id="guests" value={guests} onChange={handleGuests} aria-live="polite" required/>
                            {errors.guests && <FormErrorMessage id="guest-error">{errors.guests}</FormErrorMessage>}
                        </FormControl>
                        <FormControl isInvalid={!!errors.occasion}>
                            <FormLabel as="h6" htmlFor="occasion">Occasion</FormLabel>
                            <Select id="occasion" value={occasion} onChange={handleOccasion} aria-live="polite" required >
                                <option disabled>Please Select</option>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                                <option>Graduation</option>
                            </Select>
                            {errors.occasion && <FormErrorMessage id="occasion-error">{errors.occasion}</FormErrorMessage>}
                        </FormControl>
                        <Button type="submit" value="Make Your Reservation" bg="#F4CE14" as="h5" isDisabled={!isFormValid} width="full" mt="15px">Book Now!</Button>
                    </VStack>
                </form>

            </Flex>

        </>
    );

}
export default BookingForm;
