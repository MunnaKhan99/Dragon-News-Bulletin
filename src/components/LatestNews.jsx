import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <section className='bg-base-200 flex items-center gap-2 p-3'>
            <div className='left'>
                <p className='bg-secondary px-3 py-2 text-white'>Latest</p>
            </div>
            <div className='right'>
                <Marquee pauseOnHover={true}>
                    <p className='font-bold text-primary'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
                    <p className='font-bold text-primary'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
                    <p className='font-bold text-primary'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
                </Marquee>
            </div>
        </section>
    );
};

export default LatestNews;