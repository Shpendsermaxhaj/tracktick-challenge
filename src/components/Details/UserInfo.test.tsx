import React from 'react';
import { render } from '@testing-library/react';
import UserInfo from './UserInfo';

describe('UserInfo', () => {
    const userInfoProps = {
        name: 'John Doe',
        jobTitle: 'Software Engineer',
        phone: '123-456-7890',
        email: 'john.doe@example.com',
        address: '1234 Main St, Anytown, USA'
    };

    it('renders the user info correctly', () => {
        const { getByText } = render(<UserInfo {...userInfoProps} />);

        expect(getByText(userInfoProps.name)).toBeInTheDocument();
        expect(getByText(userInfoProps.jobTitle)).toBeInTheDocument();
        expect(getByText(userInfoProps.phone)).toBeInTheDocument();
        expect(getByText(userInfoProps.email)).toBeInTheDocument();
        expect(getByText(userInfoProps.address)).toBeInTheDocument();
    });
});
