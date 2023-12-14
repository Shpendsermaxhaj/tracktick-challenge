import {Site} from "./SiteModel";

export interface UseSiteDetailsReturn {
    siteDetails: Site | null;
    loading: boolean;
    error: Error | null;
}
