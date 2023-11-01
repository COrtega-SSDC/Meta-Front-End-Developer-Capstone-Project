
// import { useRoutes } from 'react-router-dom';
// import router from './Router';

import { Routes, Route } from 'react-router-dom';

import HomePage from '../Home/Homepage';
import BookingPage from '../Reservations/Booking Page'

function Main() {

    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/about" element={<BookingPage />}></Route>
                <Route path="/menu" element={<BookingPage />}></Route>
                <Route path="/reservations" element={<BookingPage />}></Route>
                <Route path="/order online" element={<BookingPage />}></Route>
                <Route path="/login" element={<BookingPage />}></Route>
            </Routes>
        </>
    );

}

export default Main;