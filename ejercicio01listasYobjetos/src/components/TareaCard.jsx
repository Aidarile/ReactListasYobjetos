/* eslint-disable react/prop-types */
const TareaCard = ({tarea, completar, eliminar}) => {
    return (
        <div className="tarea_card">
            {!tarea.completado && <input type="checkbox" onChange={() => completar(tarea.id)} />}
            <p>{tarea.titulo}</p>
            <p>{tarea.descripcion}</p>
            {!tarea.completado && <p>Quedan {tarea.diasRestantes} dias</p>}
            <button onClick={() => eliminar(tarea.id)}>ELIMINAR</button>
        </div>
    )
}

export default TareaCard;