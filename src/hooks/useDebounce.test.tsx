import React, { useState } from 'react';
import { render, act, waitFor } from '@testing-library/react';
import useDebounce from './useDebounce';

// Test component to utilize the useDebounce hook
function TestComponent({ value, delay }: { value: string; delay: number }) {
    const debouncedValue = useDebounce<string>(value, delay);
    return <div>{debouncedValue}</div>;
}

describe('useDebounce', () => {
    jest.useFakeTimers();

    it('should initially render the initial value', () => {
        const { getByText } = render(<TestComponent value="initial" delay={500} />);
        expect(getByText('initial')).toBeInTheDocument();
    });

    it('should debounce value changes', async () => {
        let setValue: React.Dispatch<React.SetStateAction<string>>;
        const Test = () => {
            const [value, _setValue] = useState('initial');
            setValue = _setValue;
            return <TestComponent value={value} delay={500} />;
        };

        const { getByText, queryByText } = render(<Test />);

        act(() => {
            setValue('changed');
            jest.advanceTimersByTime(500); // Advance the timers by the debounce delay
        });

        // Use waitFor to allow time for the state to update
        await waitFor(() => {
            expect(queryByText('initial')).not.toBeInTheDocument();
            expect(getByText('changed')).toBeInTheDocument();
        });
    });

    jest.useRealTimers();
});
