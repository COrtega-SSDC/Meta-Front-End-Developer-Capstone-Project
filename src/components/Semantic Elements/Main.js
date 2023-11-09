
// import { useRoutes } from 'react-router-dom';
// import router from './Router';

import { Routes, Route } from 'react-router-dom';
import { useEffect, useReducer } from 'react';
import { fetchAPI } from '../../api';

import HomePage from '../Home/Homepage';
import BookingPage from '../Reservations/Booking Page'
import ConfirmedBooking from '../Reservations/Confirmed Booking';

function Main() {

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());


  function initializeTimes() {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
  }

  //   function updateTimes(state, action) {
  //     switch (action.type) {
  //       case 'SET_TIMES':
  //         return action.payload;
  //       case 'UPDATE_TIMES':
  //         window.fetchAPI(new Date(action.payload))
  //           .then(times => {
  //             dispatch({ type: 'SET_TIMES', payload: times });
  //           })
  //           .catch(error => {
  //             console.error('Failed to fetch times: ', error);
  //           });
  //         // Important: Don't change the state yet, it will be changed by the SET_TIMES action.
  //         return state;
  //       default:
  //         return state;
  //     }
  //   }

  function updateTimes(state, action) {
    switch (action.type) {
      case 'SET_TIMES':
        return action.payload;
      default:
        return state;
    }
  }

  // useEffect(() => {
  //     initializeTimes();
  //   }, []);

  useEffect(() => {
    const today = new Date();
    const formattedDate = ((today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear());
    fetchAPI(formattedDate)
      .then(times => {
        dispatch({ type: 'SET_TIMES', payload: times });
      })
      .catch(error => {
        console.error('Failed to fetch times:', error);
      });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<BookingPage />}></Route>
        <Route path="/menu" element={<BookingPage />}></Route>
        <Route path="/reservations" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />}></Route>
        <Route path="/order" element={<ConfirmedBooking />}></Route>
        <Route path="/login" element={<BookingPage />}></Route>
      </Routes>
    </>
  );

}

export default Main;