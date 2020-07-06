import React from 'react';
import { render } from '@testing-library/react';
import CueCard from './CueCard';
import '@testing-library/jest-dom';

describe('CueCard', () => {
  it('renders what we expect', () => {
    const { getByText } = render(<CueCard capt="Thank you very much" timeStamp="00:18:04.303 --> 00:18:08.303" updateCaption={jest.fn()}/>)
    expect(getByText('Thank you very much')).toBeInTheDocument();
  });
});