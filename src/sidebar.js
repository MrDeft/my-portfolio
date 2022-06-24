import React, { useEffect, useState } from "react";
import myphoto from './icon/20190307_092019.jpg';
import { Link } from 'react-router-dom';
import './icon/bootstrap-icons.css'


function SideBar() {
    let a
    let list = document.getElementsByClassName('sidebar-list')
    setInterval(() => {
        a = window.location.pathname
        if (a === '/') list[0].classList.add('active-sidebar');
        if (a === '/about') list[1].classList.add('active-sidebar');
        if (a === '/resume') list[2].classList.add('active-sidebar');
        if (a === '/portfolios') list[3].classList.add('active-sidebar');
        if (a === '/blogs') list[4].classList.add('active-sidebar');
        if (a === '/contact') list[5].classList.add('active-sidebar');
    }, 100);


    function addclass(e) {
        for (let i = 0; i < list.length; i++) {
            list[i].classList.remove('active-sidebar')
        }
    }


    let k = false
    // let sideBarComponent = document.getElementById('sidebar');
    const [classes, handler] = useState('sidebar');

    useEffect(menuBars, [])

    function menuBars() {
        if (k) {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            k = false;
            handler('sidebar-show')
        } else {
            k = true
            handler('sidebar')
        }

        // if(sideBarComponent.classList[0] === 'sidebar-show') {
        //     sideBarComponent.className = 'sidebar';
        // } else {
        //     sideBarComponent.className = 'sidebar-show'
        // }
    }

    return (
        <div id="sidebar" className={`${classes}`} >
            <button onClick={menuBars} id="menu-bars"><i className="bi bi-list"></i></button>
            <ul>
                <li className="sidebar-myimages"><img src={myphoto} alt='img' /></li>
                <li onClick={addclass} className="sidebar-list">
                    <Link to="/" >Home</Link>
                </li>
                <li onClick={addclass} className="sidebar-list">
                    <Link to="/about" >About</Link>
                </li>
                <li onClick={addclass} className="sidebar-list">
                    <Link to="/resume" >Resume</Link>
                </li>
                <li onClick={addclass} className="sidebar-list">
                    <Link to="/portfolios" >Portfolios</Link>
                </li>
                <li onClick={addclass} className="sidebar-list">
                    <Link to="/blogs" >Blogs</Link>
                </li>
                <li onClick={addclass} className="sidebar-list">
                    <Link to="/contact" >Contact</Link>
                </li>
            </ul>
            {/* <Outlet /> */}
        </div>
    )
}
export default SideBar