import {Fragment, useState} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {
  //arreglo de todas las citas
  const [citas, guardarCitas] = useState([]);

  //funcion que tome las citas actuales y agregue la nueva
  const crearCita = cita =>{
    guardarCitas([ ...citas,  cita ] );
  } 

  //Funcion que elimina cita por su id
  const eliminarCita = id =>{
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);
  }

  return (
    <Fragment>
       <h1>Administrador de pacientes</h1>
        <div className="container">
          <div className='row'>
            <div className='one-half column'>
              <Formulario 
                crearCita={crearCita}
              />

            </div>
            <div className='one-half column'>
              <h2>Administra tus citas</h2>
              {citas.map( cita => (
                <Cita 
                  key={cita.id}
                  cita={cita}
                  eliminarCita={eliminarCita}
                />
              ))}
              
              
            </div>


          </div>

        </div>


    </Fragment>
       
  );
}

export default App;
