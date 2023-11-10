import '@testing-library/jest-dom';
import { useEffect } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import {initializeTimes, updateTimes} from '../components/Semantic Elements/Main'
import * as api from '../api.js'

import BookingForm from '../components/Reservations/BookingForm'


const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
const mockDispatch = jest.fn()

jest.mock('../api.js', () => ({
  ...jest.requireActual('../api.js'), 
  fetchAPI: jest.fn().mockResolvedValue(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']),
}))

test('Renders the BookingForm heading', () => {
  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />)
  const labelElement = screen.getByText(/Choose Date/i)
  expect(labelElement).toBeInTheDocument()
})

test('initializeTimes initializes with fetched times', async () => {
  api.fetchAPI.mockResolvedValue(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'])
  await initializeTimes()
  expect(api.fetchAPI).toHaveBeenCalled()
})

test('updateTimes handles SET_TIMES action', () => {
  const prevState = [];
  const mockTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
  const action = { type: 'SET_TIMES', payload: mockTimes }
  const newState = updateTimes(prevState, action)
  expect(newState).toEqual(mockTimes)
});

describe('BookingForm', () => {
  const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
  const mockDispatch = jest.fn()

  test('BookingForm renders with available times', () => {
    render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />)

    // Now when BookingForm tries to map over availableTimes, it won't be undefined
    mockAvailableTimes.forEach(time => {
      expect(screen.getByText(time)).toBeInTheDocument()
    })
  })


  test('date input has the correct type', () => {
    // Make sure to pass the mockAvailableTimes prop
    render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />)
    const dateInput = screen.getByLabelText(/Choose Date/i)
    expect(dateInput).toHaveAttribute('type', 'date')
  })

  test('guests input has the correct type and min attribute', () => {
    render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);
    const guestsInput = screen.getByLabelText(/Number of Guests/i);
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('min', '1');
  });

  test('form shows invalid state when guests input is less than 1', () => {
    render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />)
    const guestsInput = screen.getByLabelText(/Number of Guests/i)
    fireEvent.change(guestsInput, { target: { value: '0' } })
  })

  test('form shows valid state when guests input is greater than or equal to 1', () => {
    render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />)
    const guestsInput = screen.getByLabelText(/Number of Guests/i)
    fireEvent.change(guestsInput, { target: { value: '1' } })
  })
})