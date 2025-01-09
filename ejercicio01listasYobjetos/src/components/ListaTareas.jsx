/* eslint-disable react/prop-types */
import TareaCard from "./TareaCard";

const ListaTareas = ({listaTareas, completadas, completar, eliminar}) => {
    return (
        <div className="contenedor_lista">
            <h1>{completadas ? "TAREAS COMPLETADAS" : "TAREAS PENDIENTES"}</h1>
                <div className="lista_tareas">
                    {
                        listaTareas.map((t) => {
                            return t.completado === completadas ? (<TareaCard tarea={t} eliminar={eliminar} completar={completar}/> ) : null;
                        })
                    }
                </div>
        </div>
    )
}

export default ListaTareas;

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