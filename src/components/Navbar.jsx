import React, { use } from 'react';
import UserIcon from "../assets/user.png"
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
const Navbar = () => {
    const { user } = use(AuthContext);

    return (
        <div className='flex justify-between items-center'>
            <div>
                {user && user.email}
            </div>
            <div>
                <ul className='flex gap-5'>
                    <NavLink to="/" className='text-primary'>Home</NavLink>
                    <NavLink to="/about" className='text-primary'>About</NavLink>
                    <NavLink to="/career" className='text-primary'>Career</NavLink>
                </ul>
            </div>
            <div className='flex justify-center items-center gap-2'>
                <img src={UserIcon} alt="" />
                <Link to="/auth/login"
                    className='text-white bg-primary border-none rounded-none py-1 px-10'
                >Login</Link>
            </div>
        </div>
    );
};

export default Navbar;