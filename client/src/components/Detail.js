import React from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import {getDetail, getGenres, getPlatforms} from '../actions/index';
 import styles from './Detail.css'

export default function GameDetail(){

    const {id}=useParams();
    const dispatch= useDispatch();
    const detailedGame=useSelector((state)=>state.detail)
    console.log(detailedGame)
    const genres=useSelector(state=>state.genres)
    console.log(genres)
    const platforms=useSelector(state=>state.platforms)

    useEffect(()=>{
        dispatch(getDetail(id))
    },[id, dispatch])
    useEffect(()=>{
        dispatch(getGenres())
    }, [dispatch])
    useEffect(()=>{
        dispatch(getPlatforms)
    }, [dispatch])

    
//     if( (detailedGame.id).length >7){
//       genres = genres.map((elem) => elem.name);
// } else {
//     genres = genres;
// }
  
    
    return (
        <div className="container">
            

           
         {
            detailedGame ?
            <div className="game" key={detailedGame.id}>
                <h1>Game name: {detailedGame.name}</h1>
                 <img src={detailedGame.background_image} alt="game" width="200px" height="250px" /> 
                 
                     {/* <h4>Genres: { detailedGame.genres && detailedGame.genres.map(genres=>genres.name).join(", ")}</h4>    */}
                     <h4>Genres: { detailedGame.genres}</h4>      

                  <p>Description: {detailedGame.description }</p>
                 <p>Released at : {detailedGame.released }</p>
                 <p>Rating: {detailedGame.rating }</p>
                 <h4>Platforms: {detailedGame.platforms}</h4>
                 <p>ID: {detailedGame.id}</p>  
                 </div> : <p>Loading...</p> 
        }  
         <div className="detail-link">
            <Link to= "/home">
                <button> Go back</button>
            </Link> 
         </div> 

        </div>
       
    )

}