import React from 'react';
import {PaginationProps} from "models/PaginationProps";


const Pagination: React.FC<PaginationProps> = ({ currentPage, onPageChange }) => {
    const createPaginationButton = (page: number, text: string, isDisabled: boolean, additionalClasses: string = '') => {
        const baseClasses = "px-4 py-2 font-semibold border rounded focus:outline-none ";
        const enabledClasses = "bg-blue-500 text-white ";
        const disabledClasses = "bg-gray-300 cursor-not-allowed text-gray-700 ";

        return (
            <button
                onClick={() => onPageChange(page)}
                disabled={isDisabled}
                className={`${baseClasses} ${isDisabled ? disabledClasses : enabledClasses} ${additionalClasses}`}
            >
                {text}
            </button>
        );
    };

    return (
        <div className="flex items-center justify-center mt-4">
            {createPaginationButton(1, 'First Page', currentPage === 1, 'mr-2')}
            {createPaginationButton(currentPage - 1, 'Previous Page', currentPage === 1, 'mr-2')}
            <span className="text-lg font-semibold text-gray-700">Page {currentPage}</span>
            {createPaginationButton(currentPage + 1, 'Next Page', false, 'ml-2')}
        </div>
    );
};

export default Pagination;
