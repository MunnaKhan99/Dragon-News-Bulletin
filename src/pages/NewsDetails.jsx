import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RightAside from '../components/HomeLayout/RightAside';
import NewsDetailsCard from '../components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();

    const [news, setNews] = useState(null);

    useEffect(() => {
        const newsDetails = data.find(
            singleNews => singleNews.id == id
        );
        setNews(newsDetails);
    }, [data, id]);

    return (
        <div>
            <Header />

            <main className="w-11/12 mx-auto grid grid-cols-12 gap-6 mt-6">
                <section className="col-span-12 lg:col-span-9">
                    <h2 className="text-2xl font-bold mb-4">
                        News Details
                    </h2>

                    {news && <NewsDetailsCard news={news} />}
                </section>

                <aside className="col-span-12 lg:col-span-3">
                    <RightAside />
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;
