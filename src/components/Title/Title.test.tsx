import React from 'react';
import { render } from '@testing-library/react';
import TitleComponent from "components/Title/Title";

describe('TitleComponent', () => {
    it('renders the title text', () => {
        const { getByText } = render(<TitleComponent title="Test Title" />);
        expect(getByText('Test Title')).toBeInTheDocument();
    });

    it('applies the default background color when none is provided', () => {
        const { container } = render(<TitleComponent title="Test Title" />);
        expect(container.firstChild).toHaveClass('bg-blue-500');
    });

    it('applies the provided background color', () => {
        const { container } = render(<TitleComponent title="Test Title" backgroundColor="bg-red-500" />);
        expect(container.firstChild).toHaveClass('bg-red-500');
    });
});
