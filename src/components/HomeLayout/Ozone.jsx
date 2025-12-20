import React from 'react';
import Swimming from "../../assets/swimming.png"
import Class from "../../assets/class.png"
import Playground from "../../assets/playground.png"

const Ozone = () => {
    return (
        <div className='bg-base-200 p-4 mt-5'>
            <h3>Q-Zone</h3>
            <div>
                <img src={Swimming} alt="" />
            </div>

            <div>
                <img src={Class} alt="" />
            </div>

            <div>
                <img src={Playground} alt="" />
            </div>
        </div>
    );
};

export default Ozone;