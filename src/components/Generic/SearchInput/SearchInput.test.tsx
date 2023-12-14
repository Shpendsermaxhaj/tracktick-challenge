import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchInput from './SearchInput';

describe('SearchInput Component', () => {
    const mockOnChange = jest.fn();

    it('renders with provided value and placeholder', () => {
        const value = 'Test Value';
        const placeholder = 'Test Placeholder';
        const { getByPlaceholderText } = render(<SearchInput value={value} onChange={mockOnChange} placeholder={placeholder} />);

        const input = getByPlaceholderText(placeholder) as HTMLInputElement;
        expect(input.value).toBe(value);
    });

    it('calls onChange when input is changed', () => {
        const { getByPlaceholderText } = render(<SearchInput value="" onChange={mockOnChange} placeholder="Search..." />);

        const input = getByPlaceholderText('Search...') as HTMLInputElement;
        fireEvent.change(input, { target: { value: 'New Value' } });
        expect(mockOnChange).toHaveBeenCalledWith('New Value');
    });

    it('uses default placeholder when none is provided', () => {
        const { getByPlaceholderText } = render(<SearchInput value="" onChange={mockOnChange} />);

        expect(getByPlaceholderText('Search...')).toBeInTheDocument();
    });
});
