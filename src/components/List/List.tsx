import React from 'react';
import { Link } from 'react-router-dom';
import Pagination from "../Generic/Pagination/Pagination";
import Image from "../Generic/Image/Image";
import TextColumn from "../Generic/TextColumn/TextColumn";
import Spinner from "../Generic/Spinner/Spinner";
import {ListProps} from "models/ListProps";


const List: React.FC<ListProps> = ({ sites, loading, currentPage, onPageChange }) => {
    if (loading) {
        return (
            <Spinner/>
        );
    }

    if (sites.length === 0 && !loading) {
        return <div className="text-center py-10">Results not found</div>;
    }


    return (
        <div className="container mx-auto">
            <ul className="grid gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {sites.map((site) => (
                    <li key={site.id} className="bg-white rounded shadow-md border p-3 col-span-full mb-0 hover:bg-gray-100 transition duration-300">
                        <Link to={`/details/${site.id}`} className="flex justify-between items-center w-full">
                            <div className="flex items-center mx-2"> {/* Updated classes for vertical centering and horizontal margin */}
                                <Image
                                    src={site.images[0]}
                                    alt={site.title}
                                    showChevron={false}
                                    showImage
                                />
                                <TextColumn
                                    title={site.title}
                                    country={site.address.country}
                                    fullName={`${site.contacts.main.firstName} ${site.contacts.main.lastName}`}
                                />
                            </div>
                            <Image
                                src={site.images[0]}
                                alt={site.title}
                                showChevron
                                chevronDirection={'right'}
                                showImage={false}
                                chevronColor={'black'}
                            />
                        </Link>
                    </li>
                ))}
            </ul>
            <Pagination currentPage={currentPage} onPageChange={onPageChange} showPagination={sites.length > 0} />
        </div>
    );
};

export default List;
