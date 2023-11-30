import React, { useState } from 'react'

const Form = ({nuevaUbicacion}) => {

    const [ciudad,SetCiudad] = useState("");

    const onSubmit = (evento) => {
        evento.preventDefault();
        console.log(ciudad);
        if(ciudad === "" || !ciudad) return;

        nuevaUbicacion(ciudad);
    }

  return (
    <div className='container'>
        <form onSubmit={onSubmit}>
            <div className='input-group mb-3 mx-auto'>
                <input type='text' className='form-control' placeholder='Ingrese su ciudad'onChange={(evento) => SetCiudad(evento.target.value)}/>
                <button className='btn btn-primary input-group-text' type='submit'>Buscar</button>
            </div>
        </form>
    </div>
  )
}

export default Form