import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameGames } from "../actions";

export default  function SearchBar(){
    const dispatch= useDispatch();
    const [name, setName]=useState("")

    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value)
        console.log(name)//sólo para ver cómo cambia

    }

    function handleSubmit(e){
        e.preventDefault();
        if(!name){
            alert("Name required")
        }
        dispatch(getNameGames(name))
        setName("")

    }

    return (
        <div className="searchBar">
            <input 
            type="text"
            placeholder="Videogame..."//ver ésto
            onChange={handleInputChange}
            />
            <button type="submit" onClick={handleSubmit}>Search</button>
        </div>
    )
}

