import React, { Suspense } from 'react';
import Category from '../Category';
import Loading from '../../pages/Loading';

const LeftAside = () => {
    return (
        <div className=' h-fit sticky top-2'>
            <Suspense fallback={<p>Loading...</p>}>
                <Category />
            </Suspense>
        </div>
    );
};

export default LeftAside;