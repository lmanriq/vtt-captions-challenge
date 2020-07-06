import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

describe('App', () => {
  it('renders what we expect', () => {
    const { getByText } = render(<App />)
    expect(getByText('VTT Caption Editor')).toBeInTheDocument();
  });
});