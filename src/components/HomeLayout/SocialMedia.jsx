import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div>
            <h3 className='text-xl  font-bold'>Find Us On</h3>
            <div className="join join-vertical grid grid-cols-1 ">
                <button className="btn bg-base-100 text-primary join-item "> <span><FaFacebook /></span>Facebook</button>
                <button className="btn bg-base-100 text-primary join-item"> <span><FaTwitter /></span>Twitter</button>
                <button className="btn bg-base-100 text-primary join-item"><span><FaInstagram /></span>instagram</button>
            </div>
        </div>
    );
};

export default SocialMedia;