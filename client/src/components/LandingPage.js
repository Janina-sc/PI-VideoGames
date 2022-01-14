import React from "react";
import {Link} from "react-router-dom";

export default function Landing(){
    return(
        //la imagen de fondo la pongo en estilos de landing
        <div >
        
            <h1>Wellcome!</h1>
            <div className="image-landingpage"></div>
            <Link to='/home'>
                <button className="botonIngresar">Let's go</button>
            </Link>    
        </div>
    )
}