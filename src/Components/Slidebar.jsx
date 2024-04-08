import React, { useState } from 'react';
import { AiFillHome } from "react-icons/ai";
import { BsMenuButtonWideFill } from "react-icons/bs";
import { CiViewList } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<AiFillHome/>
        },
        {
            path:"/MasterData",
            name:"MasterData",
            icon:<BsMenuButtonWideFill/>
        },
        {
            path:"/Products",
            name:"Products",
            icon:<FaShoppingCart/>
        },
        {
            path:"/Guides",
            name:"Guides",
            icon:<IoDocumentTextOutline/>
        },
        {
            path:"/WorkOrders",
            name:"WorkOrders",
            icon:<CiViewList/>
        },
        // {
        //     path:"/About",
        //     name:"About",
        //     icon:<FaShoppingBag/>
        // },
    ]
    return (
        <div className="contain">
           <div style={{width: isOpen ? "300px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo"><img className='image1' src='https://img.freepik.com/premium-vector/bird-colorful-gradient-logo-vector-design_343694-1253.jpg?w=360' alt=''/></h1>
                   <div style={{marginLeft: isOpen ? "150px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;