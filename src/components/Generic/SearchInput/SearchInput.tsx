import React from 'react';
import {SearchInputProps} from "models/SearchInputProps";

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange, placeholder = "Search..." }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="p-2 border rounded"
        />
    );
};

export default SearchInput;
