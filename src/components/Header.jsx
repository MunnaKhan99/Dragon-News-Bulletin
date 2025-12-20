import React from 'react';
import logo from "../assets/logo.png"
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center '>
            <img className='w-87' src={logo} alt="" />
            <p className='text-accent my-3'>Journalism Without Fear or Favour</p>
            <p className='font-semibold text-accent'>{format(new Date(), "EEEE,MMMM MM, yyyy")}</p>
        </div>
    );
};

export default Header;