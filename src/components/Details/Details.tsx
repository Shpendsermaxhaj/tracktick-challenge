import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSiteDetails } from 'hooks/useSiteDetails';
import Image from "../Generic/Image/Image";
import TextColumn from "../Generic/TextColumn/TextColumn";
import UserInfo from "./UserInfo";
import Spinner from "../Generic/Spinner/Spinner";
import ImageCover from "../Generic/ImageCover/ImageCover";

const Details: React.FC = () => {
    const { id } = useParams<{ id?: string }>();
    const { siteDetails, loading } = useSiteDetails({ id: id ?? null });

    if (loading) {
        return <Spinner />;
    }

    if (!siteDetails) {
        return <div>No site details found.</div>;
    }

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4">Site Details</h1>
            <Link to={`/`}>
                <div className="flex items-center bg-blue-500 p-5">
                    <Image src={siteDetails.images[0]} alt={siteDetails.title} showImage chevronColor={"white"} showChevron chevronDirection={'left'} imageFirst={true} />
                    <TextColumn
                        color={"#fff"}
                        title={siteDetails.title}
                        country={siteDetails.address.country}
                        fullName={`${siteDetails.contacts.main.firstName} ${siteDetails.contacts.main.lastName}`}
                    />
                </div>
            </Link>
            <ImageCover imageUrl={siteDetails.images[0]} alt={siteDetails.title}/>
            <UserInfo
                name={`${siteDetails.contacts.main.firstName} ${siteDetails.contacts.main.lastName}`}
                jobTitle={siteDetails.contacts.main.jobTitle}
                phone={siteDetails.contacts.main.phoneNumber}
                email={siteDetails.contacts.main.email}
                address={siteDetails.address.street}
            />
        </div>
    );
};

export default Details;
