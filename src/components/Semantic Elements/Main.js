
// import { useRoutes } from 'react-router-dom';
// import router from './Router';

import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useReducer } from 'react';
import { fetchAPI, submitAPI } from '../../api';

import HomePage from '../Home/Homepage';
import BookingPage from '../Reservations/Booking Page'
import ConfirmedBooking from '../Reservations/Confirmed Booking';

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
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<BookingPage />}></Route>
        <Route path="/menu" element={<BookingPage />}></Route>
        <Route path="/reservations" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>}></Route>
        <Route path="/order" element={<BookingPage />}></Route>
        <Route path="/login" element={<BookingPage />}></Route>
        <Route path="/confirmation" element={<ConfirmedBooking />}></Route>
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