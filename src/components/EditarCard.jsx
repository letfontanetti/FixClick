import React from "react";
import css from './EditarCard.module.css';
function EditarCard(){
    return (
        <div className={css.container}>
            <img className={css.logo} src="./logoFc.png" alt=""/>
        </div>
    );
}

export default EditarCard;