import React from "react";
import css from './ExibirCard.module.css';
function ExibirCard(){
    return (
        <div className={css.container}>
            <img className={css.logo} src="./logoFc.png" alt=""/>
        </div>
    );
}

export default ExibirCard;