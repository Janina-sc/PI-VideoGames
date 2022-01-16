import React from "react";
import { Link } from "react-router-dom";

export default function GameCard({name, background_image, genres, rating, id}){
    //console.log(genres)
    
    if (typeof genres[0] !=="string") {
        genres = genres.map((elem) => elem.name);
      } else {
        genres = genres;
      }
    return(
        <div className="card">
            <Link to={'/videogame/' + id}>
            <div key={id}/>
            <h3>{name}</h3>
            </Link>
            <img src={background_image } alt="image" width="200px" height="250px" />
            <h5> Genres: { genres?.join(", ")}</h5>
            <h6>Rating: {rating}</h6>
            <h6>ID: {id}</h6>
        </div>
    )
}