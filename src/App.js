import './App.css';
import React from 'react';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import {DadosProvider} from "./contexts/context";
import Login from "./screens/Login"
import Dashboard from "./screens/Dashboard";
import CadastroFuncionario from "./screens/CadastroFuncionario";

function App() {
  return (
    <div className="App">
      <DadosProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Login />} path="/login"/>
              <Route element={<Dashboard />} path="/dashboard"/>
              <Route element={<CadastroFuncionario />} path="/"/>
          </Routes>
        </BrowserRouter>
      </DadosProvider>
    </div>
  );
}

export default App;
