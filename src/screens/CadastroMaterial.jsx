import React from 'react';
import css from './CadastroMaterial.module.css';
import Header from "../components/Header";

const FormScreen = () => {
    return (
        <div className={css.formscreencontainer}>
            <div className={css.header}>
                <Header></Header>
            </div>

            <div className={css.tudao}>
                <h2 className={css.formtitle}>Cadastre um novo material</h2>
                <div className={css.formwrapper}>
                    <form className={css.form}>
                        <input type="text" placeholder="Nome do material" className={css.input}/>
                        <select className={css.dropdown}>
                            <option value="">Unidade de medida</option>
                            <option value="unidade">Unidade</option>
                            <option value="kg">Kg</option>
                            <option value="litro">Litro</option>
                        </select>
                        <input type="text" placeholder="Valor" className={css.input}/>
                        <button type="submit" className={css.button}>Cadastrar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormScreen;