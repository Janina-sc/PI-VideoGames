import React from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import {getDetail, getGenres, getPlatforms} from '../actions/index';
// import styles from './Detail.css'

export default function GameDetail(){

    const dispatch= useDispatch();
    const {id}=useParams();
    const detailedGame=useSelector((state)=>state.detail)
    const genres=useSelector(state=>state.genres)
    const plataforms=useSelector(state=>state.plataforms)

    useEffect(()=>{
        dispatch(getDetail(id))
    },[id, dispatch])
    useEffect(()=>{
        dispatch(getGenres())
    }, [dispatch])
    useEffect(()=>{
        dispatch(getPlatforms())
    },[dispatch])

    return (
        <div>
        {
            detailedGame.length>0 ?
            <div>
                <h1>Game {detailedGame.name}</h1>
                <img src={background_image} alt="image" width="200px" height="250px" />
                 <h3>Genres: {genres.join(", ")}</h3>
                 <p>Description: {description}</p>
                 <p>Released at {released}</p>
                 <p>Rating {rating}</p>
                 <h3>Platforms: {plataforms.join(", ")}</h3>
                 </div>
        } : <p>Loading...</p>

        </div>
       
    )

}