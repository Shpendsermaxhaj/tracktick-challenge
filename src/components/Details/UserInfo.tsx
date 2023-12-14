import React from 'react';
import {UserInfoProps} from "models/UserInfoProps";

const UserInfo: React.FC<UserInfoProps> = ({ name, jobTitle, phone, email, address }) => {
    return (
        <div className="flex flex-col space-y-4 m-5">
            <div className="flex items-center space-x-2">
                <i className="fas fa-user icon"></i>
                <div>
                    <div className="font-semibold">{name}</div>
                    <div className="text-sm text-gray-600">{jobTitle}</div>
                </div>
            </div>

            <div className="flex items-center space-x-2">
                <i className="fas fa-phone icon"></i>
                <span>{phone}</span>
            </div>

            <div className="flex items-center space-x-2">
                <i className="fas fa-envelope icon"></i>
                <span>{email}</span>
            </div>

            <div className="flex items-center space-x-2">
                <i className="fas fa-map-marker-alt icon"></i>
                <span>{address}</span>
            </div>
        </div>
    );
};

export default UserInfo;
