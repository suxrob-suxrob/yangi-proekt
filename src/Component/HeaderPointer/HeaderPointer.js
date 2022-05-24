import React,{useState} from "react";
import "./Hedpointer.scss";
import pointer from "../img/hedimg2.png";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
// import { FaBars, FaTimes  } from 'react-icons/fa';
// import {Container} from '@material-ui/core';
// import menyu from '../img/menyu.jpg'

const HeaderPointer = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };
    return (
        <>
           <header>
               <div className="container">
                    <div className="ka1">
                        <img src={pointer} alt="" />
                    </div> 
                        <select className="form-select form-select-lg mb-1" aria-label=".form-select-lg example">
                                <option className="op" value="1">Uz</option> 
                                <option className="op" value="1">Ru</option>  
                                <option className="op" value="2">En</option>
                        </select>
                        <nav>
                            <div className="menu-icon" onClick={handleClick}>
                                <i className={clicked ? "fas fa-times " : "fas fa-bars"}></i>
                            </div>
                            <div className={clicked ? "menyu-Btn" : "menyu-Btn close"}>
                                <a href="/Asosiy">ASosiY</a>
                                <a href="/Biz haqimizda">Biz haqimizda</a>
                                <a href="/YAngliklar">YAngliklar</a>
                                <a href="/KURSLAR">KURSLAR</a>
                            </div>
                        </nav>
                        
                        <div>
                            {/* <Navbar 
                                color="faded"
                                light
                            >
                                <NavbarToggler
                                className="me-2"
                                onClick={function noRefCheck(){}}
                                />
                                <Collapse navbar>
                                <Nav navbar>
                                    <NavItem>
                                    <NavLink href="#">
                                        Components
                                    </NavLink>
                                      <a href="#">ASosiY</a>
                                    </NavItem>
                                    <NavItem>
                                    <NavLink href="#">
                                        Components
                                    </NavLink>
                                    <a href="#">Biz haqimizda</a>  
                                    </NavItem>
                                    <NavItem>
                                    <NavLink href="#">
                                        Components
                                    </NavLink>
                                    <a href="#">YAngliklar</a>  
                                    </NavItem>
                                    <NavItem>
                                    <NavLink href="#">
                                        Components
                                    </NavLink>
                                    <a href="#">KURSLAR</a>    
                                    </NavItem>
                                    <NavItem>
                                    <NavLink href="#">
                                        Components
                                    </NavLink>      
                                    </NavItem>
                                </Nav>
                                </Collapse>
                            </Navbar> */}
                      </div>
                    </div>    
           </header>
        </>
    )
}
export default HeaderPointer;