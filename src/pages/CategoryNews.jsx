import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const [categoryNews, setCategoryNews] = useState([]);

    useEffect(() => {
        if (!Array.isArray(data)) return;

        // 1. Show all data
        if (id == "0") {
            setCategoryNews(data);
            return;
        }

        // 2. Filter by category
        const categoryFiltered = data.filter(
            news => news.category_id === Number(id)
        );

        // 3. If category has no data → today pick
        if (categoryFiltered.length === 0) {
            const todayPick = data.filter(
                news => news.others?.is_today_pick === true
            );
            setCategoryNews(todayPick);
        } else {
            setCategoryNews(categoryFiltered);
        }

    }, [data, id]);

    return (
        <div className='mx-3'>
            <h3 className='text-xl font-bold mb-5'>Dragon News Home</h3>
            <div>
                {
                    categoryNews.map(news => (
                        <NewsCard key={news.id} news={news} />
                    ))
                }
            </div>
        </div>
    );
};

export default CategoryNews;
