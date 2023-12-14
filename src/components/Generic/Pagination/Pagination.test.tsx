import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Pagination from './Pagination';

describe('Pagination Component', () => {
    const mockOnPageChange = jest.fn();

    it('renders current page number', () => {
        const currentPage = 2;
        const { getByText } = render(<Pagination currentPage={currentPage} onPageChange={mockOnPageChange} />);
        expect(getByText(`Page ${currentPage}`)).toBeInTheDocument();
    });

    it('disables the first and previous page buttons on the first page', () => {
        const currentPage = 1;
        const { getByText } = render(<Pagination currentPage={currentPage} onPageChange={mockOnPageChange} />);

        const firstPageButton = getByText('First Page');
        expect(firstPageButton).toBeDisabled();

        const previousPageButton = getByText('Previous Page');
        expect(previousPageButton).toBeDisabled();
    });

    it('enables next page button on the first page', () => {
        const currentPage = 1;
        const { getByText } = render(<Pagination currentPage={currentPage} onPageChange={mockOnPageChange} />);

        const nextPageButton = getByText('Next Page');
        expect(nextPageButton).not.toBeDisabled();
        fireEvent.click(nextPageButton);
        expect(mockOnPageChange).toHaveBeenCalledWith(currentPage + 1);
    });

    it('calls onPageChange with correct page number when a button is clicked', () => {
        const currentPage = 3;
        const { getByText } = render(<Pagination currentPage={currentPage} onPageChange={mockOnPageChange} />);

        const previousPageButton = getByText('Previous Page');
        fireEvent.click(previousPageButton);
        expect(mockOnPageChange).toHaveBeenCalledWith(currentPage - 1);

        const firstPageButton = getByText('First Page');
        fireEvent.click(firstPageButton);
        expect(mockOnPageChange).toHaveBeenCalledWith(1);
    });
});
