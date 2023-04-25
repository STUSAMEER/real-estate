/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Header.css";
import {BiMenuAltRight} from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false)

    const getMenuStyle = (menuOpened) => {
        if (document.documentElement.clientWidth <= 800)
        {
            return {right: !menuOpened && "-100%"}
        }
    }
  return (
    <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
            <h1 className="orangeText">Real Estate</h1>

            <OutsideClickHandler
            onOutsideClick={()=> {
                setMenuOpened(false)
            }}
            >
                <div className="h-menu flexCenter" style={getMenuStyle(menuOpened)}>
                    <a href=""> Residencies </a>
                    <a href=""> Our Value </a>
                    <a href=""> Contact Us </a>
                    <a href=""> Get Started </a>
                    <button className="button">
                        <a href="">Contact</a>
                    </button>
                </div>
            </OutsideClickHandler>

            <div className="menu-icon" onClick= {()=>setMenuOpened((prev)=>!prev)}>
                <BiMenuAltRight size={30} />
            </div>
        </div>
    </section>
    );
};

export default Header;