import React from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import {getDetail, getGenres, getPlatforms} from '../actions/index';
// import styles from './Detail.css'

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
    },[dispatch, id])
    useEffect(()=>{
        dispatch(getGenres())
    }, [dispatch])
    useEffect(()=>{
        dispatch(getPlatforms)
    }, [dispatch])
    
    const imageByDefault= "https://www.semana.com/tecnologia/articulo/por-que-los-videojuegos-son-hoy-la-mayor-industria-del-entretenimiento/301806/"

    
    return (
        <div>
            
        {
            detailedGame ?
            <div>
                <h1>Game {detailedGame.name}</h1>
                <img src={detailedGame.background_image? detailedGame.background_image : imageByDefault} alt="game" width="200px" height="250px" />
                 
                  <h3>Genres: {detailedGame.genres}</h3> 
                  <p>Description: {detailedGame.description }</p>
                 <p>Released at :{detailedGame.released }</p>
                 <p>Rating: {detailedGame.rating }</p>
                 <h3>Platforms: {detailedGame.platforms}</h3>
                 <p>ID: {detailedGame.id}</p>
                 </div> : <p>Loading...</p>
        }  
         <div>
            <Link to= "/home">
                <button> Go back</button>
            </Link> 
         </div>

        </div>
       
    )

}