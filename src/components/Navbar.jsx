import React from 'react';
import {Link} from "react-router-dom";
import {FaSearch, FaBook, FaUserAlt, FaShoppingCart, } from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'

function Navbar(props) {
    return (
        <header className="header">

            <div className="header-1">

                <Link to={'/'}>
                    <a href="#" className="logo"> <FaBook/> bookly </a>
                </Link>

                <form action="" className='search-form'>
                    <input type="search" placeholder='search here...' id='search-box'/>
                    <label htmlFor="search-box" > <FaSearch/></label>
                </form>

                <div className="icons">
                    <div><FaShoppingCart/></div>
                    <Link to={'/login'}>
                         <FaUserAlt/>
                    </Link>
                    <div><FiLogOut/></div>
                </div>

            </div>

            <div className="header-2">
                <nav className="navbar">
                    <Link to={'/'}>
                        <a href="">home</a>
                    </Link>
                    <Link to={'/featured'}>
                        <a href="">featured</a>
                    </Link>
                    <Link to={'/arrivals'}>
                        <a href="">arrivals</a>
                    </Link>
                    <Link to={'/blogs'}>
                        <a href="">blogs</a>
                    </Link>
                </nav>
            </div>

        </header>
    );
}

export default Navbar;