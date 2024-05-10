import "./Card.css"
import { Link } from "react-router-dom"

export const Card = (props) => {
    return(
        <div className="card">
            <Link to={props.titulo}>
            <h3>{props.titulo}</h3>
            </Link>
            <p>{props.descripcion}</p>
            <img className="imagen" src={props.imagen}/>
        </div>
    )
}