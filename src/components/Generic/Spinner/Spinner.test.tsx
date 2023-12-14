import React from 'react';
import { render } from '@testing-library/react';
import Spinner from './Spinner';

describe('Spinner Component', () => {
    it('renders the spinner', () => {
        const { getByRole } = render(<Spinner />);

        // Check if the spinner is in the document
        const spinner = getByRole('status');
        expect(spinner).toBeInTheDocument();

        // Check for accessibility features
        const accessibilityText = spinner.querySelector('span.sr-only');
        expect(accessibilityText).toBeInTheDocument();
        expect(accessibilityText).toHaveTextContent('Loading...');
    });
});
