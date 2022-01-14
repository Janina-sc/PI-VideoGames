import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState,useEffect } from "react";
import {newGame, getGenres, getPlatforms } from '../actions';

function validate(input){
    let errors={};

    return errors;
}

export default function CreateGame(){
    const dispatch=useDispatch();
    const genres= useSelector((state)=> state.genres)
    const plaforms=useSelector(state => state.plaforms)//traigo el estado
    const [errors, setErrors]=useState({});
    const [input, setInput]=useState({
        name:"",
        description:"",
        released:"",
        rating:"",
        createdInDb:true,
        genres:[],//para agregar más de uno
        platforms:[]
})
useEffect(()=>{
    dispatch(newGame())
},[dispatch])

useEffect(()=>{
    dispatch(getGenres())
}, [dispatch])
useEffect(()=>{
    dispatch(getPlatforms())
}, [dispatch])
return (
    <div>
        <h1> Create a new Game</h1>

        <form>
            <div>
                <label> Name:</label>
                <input
                key="name"
                name="name"
                type="text"
                placeholder="Name the game..."
                value={input.name}
                required>
                </input>
            </div>
            <div>
                <label>Description:</label>
                <input
                key="description"
                name="description"
                type="text"
                placeholder="Describe the game..."
                value={input.description}
                required>
                </input>
            </div>
            <div>
                <label>Released: </label>
                <input
                key="released"
                name="released"
                type="date"
                placeholder="Released at..."
                value={input.released}
                required>
                </input>
            </div>
            <div>
                <label>Rating: </label>
                <input
                key="rating"
                name="rating"
                type="number"
                placeholder="..."
                value={input.rating}
                required>
                </input>
            </div>

        </form>
    </div>
)
}