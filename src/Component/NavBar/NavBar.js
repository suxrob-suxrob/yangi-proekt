import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import Pointer from "../img/hedimg2.png";
import {MenyuList} from "./MenyuList";
import "./Navbar.css";

const NavBar = () => {
    const [clicked, setClicked] = useState(false);

    const menyuList = MenyuList.map(({url, title}, index) => {
        return (
            <li key={index}>
                <NavLink exact to={url} activeClossName="active">{title}</NavLink>
            </li>
        );
    });

    const handleClick = () => {
        setClicked(!clicked);
    }

    const closeMobile = () => {
        setClicked(false);
    }
     return (
         <nav>
             <div className="logo">
                 <img src={Pointer} alt="" />
             </div>
             <div className="menu-icon" onClick={handleClick}>
                 <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
             </div>
             <div className="Mobile" onClick={closeMobile}>
                <ul className={clicked ?"menyu-list" : "menyu-list close" }>{menyuList}</ul>
             </div>
             
         </nav>
     );
};

export default NavBar