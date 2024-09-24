import React from "react";
import css from './Header.module.css';
function Header(){
    return (
        <div className={css.container}>
            <img className={css.logo} src="./logoFc.png" alt=""/>
        </div>
    );
}

export default Header;