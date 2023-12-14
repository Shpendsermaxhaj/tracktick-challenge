import { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';
import { Site } from '../models/SiteModel';
import { getSiteDetails } from '../services/ApiRequests';
import {UseSiteDetailsProps} from "models/UseSiteDetailsProps";
import {UseSiteDetailsReturn} from "models/UseSiteDetailsReturn";

export const useSiteDetails = ({ id }: UseSiteDetailsProps): UseSiteDetailsReturn => {
    const [siteDetails, setSiteDetails] = useState<Site | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!id) {
                // Handle the case where id is undefined or null
                setError(new Error('No ID provided for fetching site details'));
                return;
            }

            try {
                setLoading(true);
                const response: AxiosResponse<Site> = await getSiteDetails(id);
                setSiteDetails(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    return { siteDetails, loading, error };
};
