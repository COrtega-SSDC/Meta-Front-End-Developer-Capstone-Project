import { render, screen } from '@testing-library/react';
import {initializeTimes, updateTimes} from '../components/Semantic Elements/Main'

import App from '../App';
import BookingForm from '../components/Reservations/BookingForm';

const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
const mockDispatch = jest.fn();

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('Renders the BookingForm heading', () => {
  // Pass the mock props to BookingForm
  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);
  const labelElement = screen.getByText(/Choose Date/i); // Using regex for case-insensitive match
  expect(labelElement).toBeInTheDocument();
});

test('initializeTimes returns the initial array of times', () => {
  const initialTimes = initializeTimes();
  expect(initialTimes).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

test('updateTimes returns the current state when action is not recognized', () => {
  const state = ['17:00', '18:00'];
  const newState = updateTimes(state, { type: 'UNKNOWN_ACTION' });
  expect(newState).toEqual(state);
});