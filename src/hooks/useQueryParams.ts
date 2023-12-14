import { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {QueryParams} from "models/QueryParams";

const useQueryParams = (defaultPage: number = 1, defaultSearch: string = ''): [QueryParams, (newPage: number, newSearch?: string) => void] => {
    const location = useLocation();
    const navigate = useNavigate();

    // Parse query params from URL or set to defaults
    const getQueryParams = useCallback(() => {
        const queryParams = new URLSearchParams(location.search);
        const page = parseInt(queryParams.get('page') || `${defaultPage}`, 10);
        const search = queryParams.get('search') || defaultSearch;
        return { page, search };
    }, [location.search, defaultPage, defaultSearch]);

    // State for the query params
    const [queryParams, setQueryParams] = useState<QueryParams>(getQueryParams());

// Update the URL with new query params
    const updateUrl = useCallback((newPage: number, newSearch?: string) => {
        const queryParams = new URLSearchParams(location.search);

        // Update 'page' parameter
        queryParams.set('page', `${newPage}`);

        // Update 'search' parameter only if newSearch is provided
        if (newSearch !== undefined) {
            if (newSearch.trim() !== '') {
                queryParams.set('search', newSearch.trim());
            } else {
                queryParams.delete('search');
            }
        }

        navigate({
            pathname: location.pathname,
            search: `?${queryParams.toString()}`
        });

        setQueryParams(prev => ({
            page: newPage,
            search: newSearch !== undefined ? newSearch : prev.search
        }));
    }, [navigate, location.search, location.pathname]);



    // Update state when URL changes
    useEffect(() => {
        setQueryParams(getQueryParams());
    }, [getQueryParams]);

    return [queryParams, updateUrl];
};

export default useQueryParams;
