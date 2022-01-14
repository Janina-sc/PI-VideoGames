import React from "react";
import { Link } from "react-router-dom";

export default function GameCard({name, image, genre}){
    return(
        <div className="card">
            {/* <Link to={'/videogame/' + id}>descomentar cuando tenga id */}
            <h3>{name}</h3>
            <img src={image? image : image} alt="image not found" width="200px" height="250px" />
            <h5>{genre}</h5>
            {/* </Link> */}
        </div>
    )
}