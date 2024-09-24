import React, {useContext, useState} from "react";
import css from './Login.module.css';
import {Link, useNavigate} from 'react-router-dom';
import {Dados} from "../contexts/context";

function Login(){
    const {fetchData} = useContext(Dados)
    const [nif, setNIF] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate()

    const handleEntrar = async (e) => {
        e.preventDefault()
        console.log('NIF:', nif);
        console.log('Senha:', senha);
        let resp = await fetchData("/login", "POST", {"NIF": nif, "senha": senha})
        setNIF('');
        setSenha('');
        console.log(resp)

        if (!("response" in resp)){
            alert(resp.mensagem)
            return
        }

        if(resp.mensagem == "Login com sucesso"){
            navigate('/')
        }
    };

    return (
        <div className={css.container}>
            <div>
                <div>
                    <img className={css.logo} src="./logoFc.png" alt=""/>
                </div>
                <div className={css.formcontainer}>
                    <h1>Entre</h1>
                </div>
                <form className={css.form} onSubmit={handleEntrar}>

                    <div>
                        <input
                            type="number"
                            id="nif"
                            placeholder={'NIF:'}
                            value={nif}
                            onChange={(e) => setNIF(e.target.value)}
                        />
                    </div>

                    <div>
                        <input
                            type="password"
                            id="senha"
                            placeholder={'Senha:'}
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </div>
                        <button className={css.botao} type="submit" onClick={(e) => handleEntrar(e)}>Entrar</button>
                </form>
            </div>
        </div>
    );
}

export default Login;