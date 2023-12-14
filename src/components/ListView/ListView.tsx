import React, { useState} from 'react';
import TitleComponent from "components/Title/Title";
import List from  "components/List/List"
import SearchInput from "components/Generic/SearchInput/SearchInput";
import {useSiteList} from "hooks/useSiteList";
import useDebounce from "hooks/useDebounce";
import {pageSize, searchDelay} from "config/PaginationConfig";
import useQueryParams from "hooks/useQueryParams";

const ListView: React.FC = () => {
    const [{ page: currentPage, search: currentSearch }, updateQueryParams] = useQueryParams();
    const [searchQuery, setSearchQuery] = useState<string>(currentSearch);
    const debouncedSearchQuery = useDebounce(searchQuery, searchDelay);
    const { sites, loading, error } = useSiteList({ currentPage, pageSize, debouncedSearchQuery });

    const handlePageChange = (newPage: number) => {
        updateQueryParams(newPage);
    };


    const handleSearchChange = (newValue: string) => {
        setSearchQuery(newValue);
        updateQueryParams(currentPage, newValue);
    };

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="container mx-auto p-5">
            <TitleComponent title="Sites" />
            <SearchInput
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search sites..."
            />
            <List
                sites={sites}
                loading={loading}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default ListView;
