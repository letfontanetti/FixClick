import React, {useContext, useState} from "react";
import css from './Dashboard.module.css';

function Dashboard(){
    return (
        <div className={css.container}>
            <div className={css.header}>
                <img className={css.logo} src="./logoFc.png" alt=""/>
                <button className={css.botao}>Cadastre novo funcionário</button>
            </div>
            <div className={css.divmae}>
                <div>
                    <h1>Em aberto</h1>
                </div>
                <div>
                    <h1>Paulo</h1>
                </div>
                <div>
                    <h1>Silvio</h1>
                </div>
                <div>
                    <h1>José</h1>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;