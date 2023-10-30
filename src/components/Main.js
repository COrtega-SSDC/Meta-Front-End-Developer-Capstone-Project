
import { useRoutes } from 'react-router-dom';
import router from './Router';

import { Routes, Route } from 'react-router-dom';

function Main() {

    return (
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/booking" element={<BookingPage />}></Route>
        </Routes>
    );

}

export default Main;