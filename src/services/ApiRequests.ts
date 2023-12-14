import api from './ApiService';
import { AxiosResponse } from 'axios';
import { Site } from 'models/SiteModel';
import { PaginationParams } from 'models/PaginationParams';

export const getSiteList = ({
                                page,
                                pageSize,
                                query,
                            }: PaginationParams): Promise<AxiosResponse<Site[]>> => {
    const params: any = {
        _page: page,
        _limit: pageSize,
    };

    if (query) {
        params.q = query;
    }

    return api.get('/sites', { params });
};

export const getSiteDetails = (id: string): Promise<AxiosResponse<Site>> => {
    return api.get(`/sites/${id}`);
};
