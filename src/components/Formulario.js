import React, { Fragment, useState } from 'react';
import uuid from 'uuid/v4';

const Formulario  = ({crearCita}) => {

    //Crear State de Citas
    const [ cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [ error, actualizarError] = useState(false)

    //Crear la funcion que se activa cuando el usuario cambia el input
    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name] : e.target.value
        })
    }



    //Extraer los valores
    const {mascota, propietario, fecha, hora, sintomas} = cita;
    //Funcion cuando el usuario presiona el boton
    const submitCita = e =>{
        e.preventDefault();
        //validar
        if(mascota.trim() ==='' || propietario.trim() ==='' || fecha.trim() ==='' ||hora.trim() ==='' || sintomas.trim() ===''){
            actualizarError(true);
            return;
        }
        //eliminar el mensaje previo
        actualizarError(false);

        //asigna un id
        cita.id = uuid();

        //crear la cita
        crearCita(cita);

        //reiniciar el form
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
    }
    
    return ( 
        <Fragment>
             <h2>Crear cita</h2>

             { error ?  <p className="alerta-error">Todos los campos son obligatorios</p>  : null  }
             <form
                onSubmit={submitCita}
             >
                <label>Nombre Mascota</label>
                <input
                    type='text'
                    name='mascota'
                    className='u-full-width'
                    placeholder='Nombre Mascota'
                    onChange = {actualizarState}
                    value={mascota}
                />
                <label>Nombre Dueño</label>
                <input
                    type='text'
                    name='propietario'
                    className='u-full-width'
                    placeholder='Nombre Dueño Mascota'
                    onChange = {actualizarState}
                    value={propietario}
                />
                <label>Fecha</label>
                <input
                    type='date'
                    name='fecha'
                    className='u-full-width'
                    onChange = {actualizarState}
                    value={fecha}
                />
                <label>Hora</label>
                <input
                    type='time'
                    name='hora'
                    className='u-full-width'
                    onChange = {actualizarState}
                    value={hora}
                />
                <label>Sintomas</label>
                <textarea
                    name='sintomas'
                    className='u-full-width'
                    placeholder='Síntomas'
                    onChange = {actualizarState}
                    value={sintomas}
                ></textarea>
                <button
                    type='submit'
                    className='u-full-width button-primary'
                >Agregar cita</button>

             </form>


        </Fragment>
       
     );
}
 
export default Formulario;