import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('When user not logged in', () => {
    const { getByText, queryByText } = render(<App />);
    expect(getByText('Please login!')).toBeInTheDocument();
    expect(getByText('Log in')).toBeInTheDocument();

    expect(queryByText('Hello,')).not.toBeInTheDocument();
    expect(queryByText('Log out')).not.toBeInTheDocument();
    expect(queryByText('Check me in the console!')).not.toBeInTheDocument();
});