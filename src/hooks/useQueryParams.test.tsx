import { useNavigate, useLocation } from 'react-router-dom';
import useQueryParams from './useQueryParams';
import {  act, renderHook } from '@testing-library/react';

jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
    useLocation: jest.fn()
}));

describe('useQueryParams', () => {
    const mockNavigate = jest.fn();
    const defaultPage = 1;
    const defaultSearch = '';

    beforeEach(() => {
        (useNavigate as jest.Mock).mockImplementation(() => mockNavigate);
        (useLocation as jest.Mock).mockImplementation(() => ({
            search: '?page=2&search=test',
            pathname: '/testpath'
        }));
    });

    it('initializes with default query parameters', () => {
        const { result } = renderHook(() => useQueryParams(defaultPage, defaultSearch));
        expect(result.current[0].page).toBe(2);
        expect(result.current[0].search).toBe('test');
    });

    it('updates query parameters and URL', () => {
        const newPage = 3;
        const newSearch = 'newSearch';

        const { result } = renderHook(() => useQueryParams(defaultPage, defaultSearch));
        act(() => {
            result.current[1](newPage, newSearch);
        });

        expect(result.current[0].page).toBe(newPage);
        expect(result.current[0].search).toBe(newSearch);
        expect(mockNavigate).toHaveBeenCalledWith({
            pathname: '/testpath',
            search: `?page=${newPage}&search=${newSearch}`
        });
    });
});
