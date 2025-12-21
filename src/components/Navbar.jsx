import React, { use } from 'react';
import UserIcon from "../assets/user.png"
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
const Navbar = () => {
    const navigate = useNavigate();
    const { user, logOut } = use(AuthContext);
    const handleLogout = () => {
        // console.log("user trying to logout.");
        logOut()
            .then(() => {
                alert("Logout successfully");
                navigate("/auth/login")
            })
            .catch((error) => {
                alert(error.message);
            })
    }

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
                <img className='w-10 rounded-full mr-2'
                    src={user ? user.photoUrl : UserIcon} alt="" />
                {
                    user ? <button
                        className='text-white bg-primary border-none rounded-none py-1 px-10'
                        onClick={handleLogout}
                    >Logout</button>
                        :
                        <Link to="/auth/login"
                            className='text-white bg-primary border-none rounded-none py-1 px-10'
                        >Login</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;