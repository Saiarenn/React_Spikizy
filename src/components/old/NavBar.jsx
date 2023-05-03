import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../index";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { PopContext } from "../../App";
import { COURSE_ROUTE, USER_ROUTE } from "../../utils/consts";

const NavBar = observer(() => {
    const { user } = useContext(Context)
    const pop = useContext(PopContext)
    const router = useNavigate()

    const [expanded, setExpanded] = useState(false)
    const [dataState, setDataState] = useState('closed')

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        router('/')
    }

    // hamburger

    const toggle = () => {
        expanded ? closeMenu() : openMenu();
    };

    function openMenu() {
        setExpanded(true)
        setDataState('opened')
    }

    function closeMenu() {
        setExpanded(false)
        setDataState('closed')
    }

    return (
        <nav id="nav-wrap">

            <div className="logo" onClick={() => router('/')}>
                <div className="logo__circle">
                    SZ
                </div>
                <span className="logo__text">Spikizy</span>
            </div>

            <ul id="nav" className="nav">
                <li><a className="navlink" href="#hero" key="home">Home</a></li>
                <li><a className="navlink" onClick={() => router(COURSE_ROUTE)} key="courses">Courses</a></li>
                <li><a className="navlink" href="#category" key="category">Category</a></li>
                <li><a className="navlink" href="" key="about">About Us</a></li>
            </ul>


            {!user.isAuth
                ?
                <div className="container">
                    <button className="login" onClick={() => pop.setLoginVisible(true)}><i className="fa-solid fa-lock"></i>
                        Login</button>
                    <button className="signup" onClick={() => pop.setRegVisible(true)}>Sign up for Free</button>
                </div>
                :
                <div id="menuToggle">

                    <button className="menu-toggle" aria-expanded={expanded} id="menuBtn" onClick={() => toggle()}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <div className="menu" id="menu" data-state={dataState}>
                        <a className="hamburgerlink" onClick={() => router(USER_ROUTE + '/' + user.user.id)}>
                            <i className="fa-solid fa-user"></i> Profile</a>
                        <a className="hamburgerlink" href="#">
                            <i className="fa-solid fa-address-card"></i> About</a>
                        <a className="hamburgerlink" href="#">
                            <i className="fa-solid fa-gear"></i> Settings</a>
                        <form className="logout-form" method="post">
                            <button className="hamburgerlink" onClick={() => logOut()}>
                                <i className="fa-solid fa-right-from-bracket"></i> Log Out
                            </button>
                        </form>
                    </div>
                </div>
            }
        </nav>
    );
})

export default NavBar;
