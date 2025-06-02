import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const Header= ({ search, setSearch, user, setUser, cart }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    // Calculate total quantity of items in cart
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser('');
        setDropdownOpen(false);
    };

    const handleProfileClick = () => {
        setDropdownOpen(open => !open);
    };

    const handleLogin = () => {
        setDropdownOpen(false);
        navigate('/login');
    };

    return (
        <div className="flex items-center h-16 bg-black px-8 justify-between">
            <Link className='flex items-center' to="/home">
                {/* <i className="fa-solid fa-house mr-1 text-xl text-white"></i> */}
                <img className='h-15 mr-3 rounded-full' src="" alt="" />
                <h1 className="text-white text-2xl font-bold">Farmer E-cart</h1>
            </Link>
            <div className='flex items-center space-x-8'>
                <div id='search' className='flex items-center border border-white h-10 px-2'>
                    <input
                        type="text"
                        placeholder="Search Products......"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="m-2 text-white font-medium placeholder-white outline-none bg-transparent"
                    />
                    <i className="fa-solid fa-magnifying-glass text-2xl text-white"></i>
                </div>
                {/* Order Button */}
                <div id='order' className='text-white font-semibold relative'>
                    <Link to="/orders" className="flex items-center">
                        <i className="fa-solid fa-box text-xl mr-1"></i>{' '}
                        Orders
                    </Link>
                </div>
                <div id='cart' className='text-white font-semibold relative'>
                    <Link to="/cart" className="flex items-center">
                        <i className="fa-solid fa-cart-shopping text-xl mr-1"></i>
                        Cart
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs rounded-full px-2 py-0.5">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                </div>
                <div id='profile' className="relative" ref={dropdownRef}>
                    <button
                        type="button"
                        className='font-semibold text-white cursor-pointer flex items-center bg-transparent border-none focus:outline-none'
                        onClick={handleProfileClick}
                        aria-haspopup="true"
                        aria-expanded={dropdownOpen}
                    >
                        <i className="fa-solid fa-user text-xl mr-2"></i>
                        {user || 'Login'}
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-10">
                            {user ? (
                                <button
                                    onClick={handleLogout}
                                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                                >
                                    Logout
                                </button>
                            ) : (
                                <button
                                    onClick={handleLogin}
                                    className="block w-full text-left px-4 py-2 text-blue-600 hover:bg-gray-100"
                                >
                                    Login
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
Header.propTypes = {
    search: PropTypes.string.isRequired,
    setSearch: PropTypes.func.isRequired,
    user: PropTypes.string,
    setUser: PropTypes.func.isRequired,
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            quantity: PropTypes.number.isRequired
        })
    ).isRequired
};

export default Header;