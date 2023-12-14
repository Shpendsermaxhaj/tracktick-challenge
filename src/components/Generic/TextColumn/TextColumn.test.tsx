import React from 'react';
import { render } from '@testing-library/react';
import TextColumn from './TextColumn';

describe('TextColumn Component', () => {
    it('renders with provided title, country, and fullName', () => {
        const props = {
            title: 'Test Title',
            country: 'Test Country',
            fullName: 'Test Name'
        };
        const { getByText } = render(<TextColumn {...props} />);

        expect(getByText(props.title)).toBeInTheDocument();
        expect(getByText(props.country)).toBeInTheDocument();
        expect(getByText(props.fullName)).toBeInTheDocument();
    });

    it('applies provided color to title', () => {
        const color = '#123456';
        const { getByText } = render(<TextColumn title="Test Title" color={color} />);

        const titleElement = getByText('Test Title');
        expect(titleElement).toHaveStyle(`color: ${color}`);
    });

    it('uses default color when none is provided', () => {
        const { getByText } = render(<TextColumn title="Test Title" />);

        const titleElement = getByText('Test Title');
        expect(titleElement).toHaveStyle('color: #000');
    });
});
