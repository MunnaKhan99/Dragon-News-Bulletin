import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/HomeLayout/LeftAside';
import RightAside from '../components/HomeLayout/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header />
                {/* latest news */}
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews />
                </section>
                {/* Navbar */}
                <nav className='w-11/12 mx-auto my-3'>
                    <Navbar />
                </nav>
            </header>

            <main className='w-11/12 mx-auto  grid grid-cols-12 gap-'>
                <aside className='col-span-3'>
                    <LeftAside />
                </aside>
                <section className='main col-span-6'>
                    <Outlet />
                </section>
                <aside className='col-span-3'>
                    <RightAside />
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;