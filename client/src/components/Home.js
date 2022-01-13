import React from "react";
import {useState, useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import {getGames} from "../actions";
import {Link} from "react-router-dom"

export default function Home(){
    const  dispatch = useDispatch()
    const allGames= useSelector((state)=>state.videogames)

    useEffect(()=>{
        dispatch(getGames())//equivale al mapDispatchToProps
    }, [dispatch])

     function handleClick(e){
         e.preventDefault();
         dispatch(getGames())//resetea para que traiga todos los games de nuevo cuando se buggea

     }

    return (
        <div>
            <Link to="/createvideogame">Create videogame</Link>
            <h1>We love Playing!</h1>
            <button onClick={e=>{handleClick(e)}}>
                All Games
            </button>
            <div>
                <label> Genres:</label>
                <select name="filtergenres" defaultValue={"default"}/>
                <option value="default" name="default">Genres</option>
                <option value="all"></option>
                {/* //dejé acá */}
                {  }
                <select>
                    <option value = "asc" >A-Z Games</option>
                    <option value = "desc" >Z-A Games</option>
                </select>
                <select>
                    <option value="asc">Increasing Rating</option>
                    <option value="des">Decreasing Rating</option>
                </select>
            </div>

        </div>
    )
}