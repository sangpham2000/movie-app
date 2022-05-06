import React, { useRef, useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';

import './header.scss';

import logo from '../../assets/logo.png';

const headerNav = [
    {
        display: 'Home',
        icon: 'bx bxs-home-alt-2',
        path: '/',
    },
    {
        display: 'Movies',
        icon: 'bx bxs-movie-play',
        path: '/movie',
    },
    {
        display: 'TV Series',
        icon: 'bx bxs-tv',
        path: '/tv',
    },
    {
        display: 'Login',
        icon: 'bx bxs-user',
        path: '/login',
    },
];

const Header = () => {
    const { pathname } = useLocation();
    const headerRef = useRef(null);

    const active = headerNav.findIndex((e) => e.path === pathname);

    useEffect(() => {
        const shrinkHeader = () => {
            if (
                document.body.scrollTop > 100 ||
                document.documentElement.scrollTop > 100
            ) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        };
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    return (
        <div ref={headerRef} className="header">
            <div className="header__wrap container">
                <div className="logo">
                    <img src={logo} alt="" />
                    <Link to="/">MyMovie</Link>
                </div>
                <ul className="header__nav">
                    {headerNav.map((item, index) => (
                        <li
                            key={index}
                            className={`${index === active ? 'active' : ''}`}
                        >
                            <div className="header__nav__item">
                                <Link to={item.path}>
                                    <i className={`${item.icon}`}></i>
                                    <div className="header__nav__item__title">
                                        {item.display}
                                    </div>
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Header;
