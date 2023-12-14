import React from 'react';
import {TextColumnProps} from "models/TextColumn";


const TextColumn: React.FC<TextColumnProps> = ({ title, country, fullName, color = '#000' }) => (
    <div className="flex-grow ml-5">
        <h3 className="text-xl font-semibold mb-2" style={{ color: color  }}>{title}</h3>
        <p>{country}</p>
        <p>{fullName}</p>
    </div>
);

export default TextColumn;
