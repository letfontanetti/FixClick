import React from "react";
import css from './CadastroFuncionario.module.css';
import Header from "../components/Header";
import { useState } from 'react'


function CadastroFuncionario(){
    return (
        <div className={css.container}>
            <Header></Header>
            <div className={css.tudo}>
                <h1 className={css.titulo}>Cadastre um novo funcionário</h1>
                <div className={css.form}>
                    <div className={css.Divform}>
                        <div className={css.formulario}>
                            <input
                                className={css.input}
                                type="text"
                                placeholder={'Nome do funcionário'}
                            />
                            <input
                                type="number"
                                placeholder={'NIF do funcionário'}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CadastroFuncionario;