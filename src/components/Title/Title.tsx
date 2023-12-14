import React from "react";
import {TitleProps} from "models/TitleProps";


const TitleComponent: React.FC<TitleProps> = ({ title, backgroundColor = 'bg-blue-500' }) => {
    return (
        <div className={`w-full flex justify-center items-center ${backgroundColor} py-2`}>
            <h1 className="text-3xl font-bold text-white">{title}</h1>
        </div>
    );
};

export default TitleComponent;
