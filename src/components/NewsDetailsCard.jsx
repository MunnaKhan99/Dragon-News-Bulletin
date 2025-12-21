import React from "react";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
    const {
        title,
        image_url,
        details,
        category_id,
    } = news;

    return (
        <div className="bg-base-100 rounded-xl shadow-md border border-base-300 max-w-4xl">

            {/* Image */}
            <img
                src={image_url}
                alt={title}
                className="w-full h-87.5 object-cover rounded-t-xl"
            />

            {/* Content */}
            <div className="p-6 space-y-4">

                <h2 className="text-2xl font-bold text-base-content">
                    {title}
                </h2>

                <p className="text-sm text-gray-600 leading-relaxed">
                    {details}
                </p>

                
                <Link to={`/category/${category_id}`}
                className="btn btn-sm bg-red-600 hover:bg-red-700 text-white"
                >
                    All news in this category
                </Link>
            </div>
        </div>
    );
};

export default NewsDetailsCard;
