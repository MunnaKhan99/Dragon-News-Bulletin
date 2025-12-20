import React from 'react';
import SocialLogin from './SocialLogin';
import SocialMedia from './SocialMedia';
import Ozone from './Ozone';

const RightAside = () => {
    return (
        <div className='h-fit sticky top-2'>
            <section>
                <SocialLogin />
                <SocialMedia />
                <Ozone />
            </section>
        </div>
    );
};

export default RightAside;