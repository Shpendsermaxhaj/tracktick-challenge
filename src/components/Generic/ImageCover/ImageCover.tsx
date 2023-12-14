import React from 'react';
import {ImageCoverProps} from "models/ImageCoverProps";

const ImageCover: React.FC<ImageCoverProps> = ({ imageUrl, alt }) => {
    return (
        <div className="flex flex-col items-center m-1">
            <img src={imageUrl} alt={alt} className="h-55 w-full" style={{ maxHeight: '450px' }} />
        </div>
    );
};

export default ImageCover;
