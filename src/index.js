import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const FormuarioConContador = () => {
    return ( 
    <>
    <form action="">
        <div>
            <label htmlfor="nombre">Nombre: 
                <input type="text" name="nombre" id=""/>
            </label>
            
        </div>
        <div>
            <label htmlfor="password">Password: 
                <input type="password" name="password" id=""/>
            </label>            
        </div>

        <button type="submit">Iniciar Sesion</button>
        
    </form>
    </>
    );
} 


ReactDOM.render(<FormuarioConContador/>,document.getElementById('formulario'));