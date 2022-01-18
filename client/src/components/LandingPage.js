import React from "react";
import {Link} from "react-router-dom";
import styles from "./Landing.css"

export default function Landing(){
    return(
        //la imagen de fondo la pongo en estilos de landing
        <div >
        
            <h1>Welcome!</h1>
            <div className="image-landingpage"></div>
            <Link to='/home'>
                <button className="botonIngresar">Let's go</button>
            </Link>    
        </div>
    )
}