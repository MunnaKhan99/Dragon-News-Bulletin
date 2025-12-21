import React from 'react';
import { FaStar, FaEye, FaBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from 'react-router';

const NewsCard = ({ news }) => {
    const PREVIEW_LENGTH = 180;

    const {
        id,
        title,
        thumbnail_url,
        total_view,
        rating,
        author,
        others,
        details
    } = news;

    const displayedText =
        details.length > PREVIEW_LENGTH
            ? details.slice(0, PREVIEW_LENGTH) + "..."
            : details;

    return (
        <div className="bg-base-100 rounded-xl shadow-md p-4 space-y-4 mb-5 border border-base-300">

            {/* Author */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <p className="font-semibold text-sm">{author.name}</p>
                        <p className="text-xs text-gray-500">
                            {new Date(author.published_date).toDateString()}
                        </p>
                    </div>
                </div>

                <div className="flex gap-3 text-gray-500">
                    <FaBookmark />
                    <FaShareAlt />
                </div>
            </div>

            {/* Title */}
            <h2 className="text-lg font-bold text-primary">
                {title}
            </h2>

            {/* Image */}
            <img
                src={thumbnail_url}
                alt={title}
                className="w-full h-52 object-cover rounded-lg"
            />

            {/* Details preview */}
            <p className="text-sm text-gray-600">
                {displayedText}
            </p>

            {details.length > PREVIEW_LENGTH && (
                <Link
                    to={`/news-details/${id}`}
                    className="text-sm font-semibold text-orange-500"
                >
                    Read More
                </Link>
            )}

            <hr />

            {/* Footer */}
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-1 text-orange-500">
                    {[...Array(rating.number)].map((_, i) => (
                        <FaStar key={i} />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">
                        {rating.number}.0
                    </span>

                    {others.is_trending && (
                        <span className="ml-2 text-xs text-red-500 font-semibold">
                            Trending
                        </span>
                    )}
                </div>

                <div className="flex items-center gap-1 text-gray-500">
                    <FaEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
