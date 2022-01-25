import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.css"

export default function GameCard({name, background_image, genres, rating, id}){
    console.log(genres)
    
    if (typeof genres[0] !=="string") {
        genres = genres.map((elem) => elem.name);
      } else {
        genres = genres;
      }
    return(
        <div className="card">
            <Link to={'/videogame/' + id}>
            <div key={id}/>
            <h3 className="card-name" >{name}</h3>
            </Link>
            <img className="card-image" src={background_image } alt="image" width="200px" height="250px" />
            <h5 className="card-genres"> Genres: { genres.join(", ")}</h5>
            <h6 className="card-rating">Rating: {rating}</h6>
            <h6>ID: {id}</h6>
        </div>
    )
}