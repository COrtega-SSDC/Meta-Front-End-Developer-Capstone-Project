
// import { useRoutes } from 'react-router-dom';
// import router from './Router';

import { Routes, Route } from 'react-router-dom';
import { useReducer} from 'react';

import HomePage from '../Home/Homepage';
import BookingPage from '../Reservations/Booking Page'

function Main() {

    const [availableTimes, dispatch] = useReducer(updateTimes,initializeTimes())

    function initializeTimes () {
        return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
    }
    
    function updateTimes (state, action) {
        switch (action.type) {
            case 'UPDATE_TIMES':
                // For now, just return the same times regardless of the action's payload
                // Later, you will update this logic to return different times based on the action's payload
                return state;
            default:
                return state;
        }
    }

    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/about" element={<BookingPage />}></Route>
                <Route path="/menu" element={<BookingPage />}></Route>
                <Route path="/reservations" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch}/>}></Route>
                <Route path="/order" element={<BookingPage />}></Route>
                <Route path="/login" element={<BookingPage />}></Route>
            </Routes>
        </>
    );

}

export default Main;