import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//import MiFieldSet from './MiFieldSet.jsx'
import Formulario from './Formulario.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<App
    
    <form action="">
    <MiFieldSet titulo="datos personales" txt1="nombre" txt2="password"/>
    <MiFieldSet titulo="datos personales" txt1="nombre" txt2="password"/>
    <input type="submit"></input>
    </form>
    
    />*/}
    
    <Formulario></Formulario>
  </React.StrictMode>,
)
