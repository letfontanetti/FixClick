import './App.css';
import React from 'react';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import {DadosProvider} from "./contexts/context";
import Login from "./screens/Login"
import Dashboard from "./screens/Dashboard";
import CadastroFuncionario from "./screens/CadastroFuncionario";
import CadastroMaterial from "./screens/CadastroMaterial";

function App() {
  return (
      <DadosProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Login />} path="/"/>
            <Route element={<Dashboard />} path="/dashboard"/>
            <Route element={<CadastroFuncionario />} path="/funcionario"/>
            <Route element={<CadastroMaterial/>} path="/material"/>
          </Routes>
        </BrowserRouter>
      </DadosProvider>
  );
}

export default App;
