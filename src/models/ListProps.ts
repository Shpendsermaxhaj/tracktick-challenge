import {Site} from "./SiteModel";

export interface ListProps {
    sites: Site[];
    loading: boolean;
    currentPage: number;
    onPageChange: (page: number) => void;
}
