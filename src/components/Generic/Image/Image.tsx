import React from 'react';
import {ImageProps} from "models/ImageProps";

const Image: React.FC<ImageProps> = ({
                                         src,
                                         alt,
                                         showChevron = false,
                                         chevronDirection = 'right',
                                         chevronColor = 'black',
                                         showImage = true,
                                         imageFirst = true
                                     }) => {
    const chevronClass = chevronColor === 'white' ? 'text-white' : 'text-black';
    const containerClass = imageFirst ? 'flex-row' : 'flex-row-reverse';

    return (
        <div className={`flex items-center justify-center ${containerClass}`}>
            {showChevron && (
                <i className={`fas fa-chevron-${chevronDirection} text-2xl ${chevronClass} mx-2`}></i>
            )}
            {showImage && (
                <img src={src} alt={alt} className="w-12 h-12 rounded-full object-cover mx-2" />
            )}
        </div>
    );
};

export default Image;
