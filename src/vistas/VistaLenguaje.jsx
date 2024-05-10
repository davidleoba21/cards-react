import React from "react";
import "./VistaLenguaje.css"

export const VistaLenguaje = ({len}) => {
    return(
        <div className="card2">
            <img className="imagen" src={len.imagen} alt={len.imagen + "Imagen"}/>
            <h1>{len.nombre}</h1>
            <h2>{len.comentario}</h2>
        </div>
    )
}