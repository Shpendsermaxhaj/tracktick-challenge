import { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';
import { Site } from '../models/SiteModel';
import {getSiteList} from "../services/ApiRequests";

interface UseSiteListProps {
    currentPage: number;
    pageSize: number;
    debouncedSearchQuery: string;
}

interface UseSiteListReturn {
    sites: Site[];
    loading: boolean;
    error: Error | null;
}

export const useSiteList = ({ currentPage, pageSize, debouncedSearchQuery }: UseSiteListProps): UseSiteListReturn => {
    const [sites, setSites] = useState<Site[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response: AxiosResponse<Site[]> = await getSiteList({ page: currentPage, pageSize, query: debouncedSearchQuery });
                setSites(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [currentPage, pageSize, debouncedSearchQuery]);

    return { sites, loading, error };
};
