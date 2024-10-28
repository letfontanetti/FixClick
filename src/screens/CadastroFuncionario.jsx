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
                <div className={css.divfilho1}>
                    <form className={css.form}>
                        <input type="text" placeholder="Nome do funcionário" className={css.input}/>
                        <input type="number" placeholder="NIF do funcionário" className={css.input}/>
                        <div className={css.divSelect}>
                            <select className={css.dropdown}>
                                <option value="">Selecione o tipo de funcionário</option>
                                <option value="geral">Geral/Professor</option>
                                <option value="manutencao">Manutenção</option>
                            </select>
                            <select className={css.dropdown}>
                                <option value="">Função do funcionário da manutenção</option>
                                <option value="supervisor">Supervisor de manutenção</option>
                                <option value="oficial">Oficial de manutenção elétrica</option>
                                <option value="auxiliar">Auxiliar de manutenção</option>
                                <option value="nenhum">Nenhuma função</option>
                            </select>
                        </div>
                        <button type="submit" className={css.button}>Cadastrar</button>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default CadastroFuncionario;