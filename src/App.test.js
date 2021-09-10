import React from 'react';
import ReactDOM from 'react-dom';
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import App from './App';

test('clicking adds an "x"', () => {
  render(<App />);
  userEvent.click(screen.getByTestId('square-0'))
  expect(screen.getByTestId('square-0')).toHaveTextContent('x');
});
