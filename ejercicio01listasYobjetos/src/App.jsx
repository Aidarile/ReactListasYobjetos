
import { useState } from 'react';
import './App.css'
import ListaTareas from './components/ListaTareas';
import Tarea from './models/Tarea';

function App() {
  const [listaTareas, setListaTareas] = useState([])
  const [titulo, setTitulo] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [fechaLimite, setFechaLimite] = useState(Date.now)

  const handleTituloChange = (e) => {
    setTitulo(e.target.value);
  }

  const handleDescripcion = (e) => {
    setDescripcion(e.target.value);
  }

  const handleFechaLimiteChange = (e) => {
    setFechaLimite(Date.parse(e.target.value));
  } 

  const handleCompletarChange = (id) => {
    /*Actualizamos el estado de la lista de tareas e introducimos
    una nueva lista de tareas. Por cada tarea, compruebo si su id es
    el que pasamos como parametro. Si lo es, devolvemos el objeto
    con el valor de completado cambiado. Si no lo es, devolvemos el 
    objeto tal cual está*/
    setListaTareas(
      listaTareas.map((t) => {
        if(t.id === id) {
          t.completado = !t.completado;
          return t;
        }
        return t;
      })
    )
  }

  const handleEliminarClick = (id) => {
    /*Filtro las tareas y solo cojo las que el id no sea igual
    que el que pasamos como parametro*/
    setListaTareas(listaTareas.filter((t) => t.id !== id))
  }

  const handleAgregarClick = () => {
    setListaTareas([
      ...listaTareas, //esto copia todos los elementos de dentro del array y los pega
      new Tarea(crypto.randomUUID(), titulo, descripcion, fechaLimite, false)
    ])
  }

  return (
    <>
      <div className='contenedor_header'> 
        <h1>CONTROL TAREAS</h1>
      </div>
      <div className='contenedor_inputs'>
        <p>Titulo</p>
        <input type='text' onChange={handleTituloChange} /> 
        <p>Descripcion</p>
        <input type='text' onChange={handleDescripcion}/>
        <p>Fecha limite</p>
        <input type='date' onChange={handleFechaLimiteChange} />
        <button onClick={handleAgregarClick}>AGREGAR</button>
      </div>

      <div className="contenedor_listas">
        <ListaTareas listaTareas={listaTareas} completadas={false} eliminar={handleEliminarClick} completar={handleCompletarChange} />
        <ListaTareas listaTareas={listaTareas} completadas={true} eliminar={handleEliminarClick} completar={handleCompletarChange} />

      </div>
    </>
  )
}

export default App;


// Ejercicio 1:
// Desarrolla una web para el control de tareas pendientes. De las tareas queremos
// almacenar el título, la descripción, si esta completada y la fecha límite. Los objetos los
// crearemos a través de una clase Tarea.
// La web Tendrá 3 inputs y un botón. Cuando se pulse el botón comprobaremos si los
// campos están completados, si hay algún campo vacío se le notificara al usuario con un
// alert y no se agregará la tarea a la lista de tareas pendiente. Si la fecha límite ya ha
// pasado (es anterior a la fecha actual) se le notificara con un alert que no puede usar una
// fecha anterior a la actual y no se creara la tarea. Si ha introducido toda la información y
// esta correcta se añadirá la tarea a un array donde se almacenarán todas las tareas.
// Tendremos que mostrar 2 lista, una con las tareas por completar y otra con las tareas
// completadas.
// En la lista de las tareas por completar, por cada tarea mostraremos el título, la
// descripción, un mensaje diciéndole al usuario cuantos días quedan para completar la
// tarea, un checkbox para completar la tarea y un icono para eliminarla. Si se ha pasado la
// fecha límite para realizar la tarea, donde se muestran los días restantes mostrar un
// mensaje que ponga “te has pasado X días” y que este mensaje este en rojo.
// En la lista de tareas completadas, por cada tarea, se mostrará el título, la descripción y
// un icono para eliminarla.