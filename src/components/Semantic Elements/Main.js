
// import { useRoutes } from 'react-router-dom';
// import router from './Router';

import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useReducer } from 'react';
import { fetchAPI, submitAPI } from '../../api';

import HomePage from '../Home/Homepage';
import BookingPage from '../Reservations/Booking Page'
import ConfirmedBooking from '../Reservations/Confirmed Booking';
import About from '../Pages/About';
import Login from '../Pages/Login'
import Portal from '../Pages/Portal'
import OnlineOrder from '../Pages/OnlineOrder'
import Menu from '../Pages/Menu';

function Main() {

  const [availableTimes, dispatch] = useReducer(updateTimes, []);
  const navigate = useNavigate(); // Hook for navigation


  // function initializeTimes() {
  //   return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
  // }

  const submitForm = formData => {
    const submissionResult = submitAPI(formData);
    if (submissionResult) {
      navigate('/confirmation'); // Navigate to the booking confirmed page
    }
  };

  useEffect(() => {
      initializeTimes(dispatch);
    }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" title="homepage" element={<HomePage />}></Route>
        <Route path="/about" title="about Little Lemon" element={<About />}></Route>
        <Route path="/menu" title="Little Lemon Menu" element={<Menu />}></Route>
        <Route path="/reservations" title="Reserve a Table" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>}></Route>
        <Route path="/order" title="Order Online" element={<OnlineOrder />}></Route>
        <Route path="/login" title="Login" element={<Login />}></Route>
        <Route path="/confirmation" title=" Reservation Confirmed" element={<ConfirmedBooking />}></Route>
        <Route path="/maintenance" title="Login Dashboard" element={<Portal/>}></Route>
      </Routes>
    </>
  );

}

export function initializeTimes(dispatch) {
  const today = new Date();
  const formattedDate = ((today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear());
  
  fetchAPI(formattedDate)
    .then(times => {
      dispatch({ type: 'SET_TIMES', payload: times });
    })
    .catch(error => {
      console.error('Failed to fetch times:', error);
    });
};

export function updateTimes(state, action) {
  switch (action.type) {
    case 'SET_TIMES':
      return action.payload;
    default:
      return state;
  }
}

export default Main;