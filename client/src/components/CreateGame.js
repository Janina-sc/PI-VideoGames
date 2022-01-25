import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState,useEffect } from "react";
import {newGame, getGenres, getPlatforms } from '../actions';
import styles from './CreateGame.css'

function validate(input){
    let errors={};//estado local
    if(!input.name ){//input es estado local
        errors.name="The game must have a name"
        
    }
    else if(!input.description){
    errors.description="Must add a description"
    }
    else if(!input.released) {
        errors.released="You must declare a released date"
    }
    else if(!input.rating){
        errors.rating="You must declare a rating value"
    } 
    
    else if(!input.platforms){
        errors.platforms="Must add at least one platform"
    }
    else if(!input.genres){
        errors.genres="Must add at least one genre"
    }
    return errors;
}
export default function CreateGame(){
    const dispatch=useDispatch();
    const genres= useSelector((state)=> state.genres)
    // console.log(genres)
    const platforms=useSelector(state => state.platforms)//traigo el estado global
    //  console.log(platforms)
    const [errors, setErrors]=useState({});
    const [input, setInput]=useState({
        name:"",
        description:"",
        released:"",
        rating:"",
        genres:[],//para agregar más de uno
        platforms:[],
        createdInDb:true
    })
    function handleSubmit(e){
        e.preventDefault();
        setErrors(validate({
            ...input,
            [e.target.value]:e.target.value
        }))
        console.log(input, "input")
        dispatch(newGame(input))
        alert("Game successfully created")
        setInput({
            name:"",
            description:"",
            released:"",
            rating:"",
            genres:[],
            platforms:[],
            createdInDb:true
            
        })
    }
    function clearForm(){
        setInput({
            name:"",
            description:"",
            released:"",
            rating:"",
            genres:[],
            platforms:[],
            
        });
        setErrors({});
    }
    function handleSelectGenres(e){
        e.preventDefault()
        setInput({
            ...input,
            genres:[...input.genres, e.target.value]//concatena en el array lo que vaya guardando
        })
        setErrors(
            validate({
                ...input,
                [e.target.genres]:e.target.value,
            })
            )
        }
        function handleDeleteGenres(elem){
            setInput({
                ...input,
                genres:input.genres.filter((genres)=>genres !==elem)
            })
        }
        function handleSelectPlatforms(e){
            e.preventDefault()
            setInput({
                ...input,
                platforms:[...input.platforms.concat(e.target.value)]//concatena en el array lo que vaya guardando
            })
            setErrors(
                validate({
                    ...input,
                    [e.target.platforms]:e.target.value,
                })
                )
            }
            function handleDeletePlatforms(elem){
                setInput({
                    ...input,
                    platforms:input.platforms.filter((platforms)=>platforms !==elem)
                })
            }
            function handleChange(e){// al estado input se le agrega lo que se está modificando
                //console.log("funciona")
                setInput({
                    ...input,
                    [e.target.name]:e.target.value
                })
                setErrors( validate({
                    ...input,
                    [e.target.name]:e.target.value
                    
                    
                }))
            }
            
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
                <div className="container">
        <div className="link">
        <Link to= '/home'><button>Go Home</button></Link>
        </div>
        <h1> Create a new Game</h1>

        <form className="form" onSubmit={handleSubmit}>
            <div>
                <label> Name:</label>
                <input
                key="name"
                name="name"
                type="text"
                placeholder="Name the game..."
                value={input.name}
                required
                onChange={handleChange}>
                </input>
                {errors.name && (
                    <p>{errors.name}</p>
                )}
            </div>
            
            <div>
                <label>Description:</label>
                <input
                key="description"
                name="description"
                type="text"
                placeholder="Describe the game..."
                value={input.description}
                required
                onChange={handleChange}>
                </input>
                {errors.description && (
                    <p>{errors.description}</p>
                )}
            </div>
            <div>
                <label>Released: </label>
                <input
                key="released"
                name="released"
                type="date"
                placeholder="Released at..."
                value={input.released}
                required
                onChange={handleChange}>
                </input>
                {errors.released && (
                    <p>{errors.released}</p>
                )}
            </div>
            <div>
                <label>Rating: </label>
                <input
                key="rating"
                name="rating"
                type="number" 
                placeholder="..."
                value={input.rating}
                required
                onChange={handleChange}>
                </input>
                {errors.rating && (
                    <p>{errors.rating}</p>
                )}
            </div>
            <div>
            <label>Genres:</label>
                <select name="genres" multiple required
                onChange={(e)=>handleSelectGenres(e)}>
                    <option value="default" name="default"></option>
                <option value="all"></option>
                    {
                    genres?.map((genres)=>(
                        <option 
                         key={genres.id}
                        value={genres}>{genres + ", "}</option>
                    ))}
                    {errors.genres&&(
                        <p>{errors.genres}</p>
                    )}

           <li>{input.genres.name + ", " }</li>
                </select>
            </div>
            <div>
            {input.genres.map(elem=>
                <div key={genres.id}> 
                    <p>{elem}</p>
                    <button type="button" onClick={()=> handleDeleteGenres(elem)}>X</button>
                    </div>)}
            </div>
            <div>
                <label>Platforms:</label>
                <select name="platforms" multiple required
                onChange={(e)=>handleSelectPlatforms(e)}>
                    <option value="default" name="default"></option>
                <option value="all"></option>
                    {platforms?.map((platforms)=>(
                        <option 
                         key={platforms.name}
                        value={platforms}>{platforms + ", "}</option>
                    ))}
                    {errors.platforms && (
                        <p>{errors.platforms}</p>
                    )}
                    

                <li>{input.platforms.map(elem=>elem + ", ")}</li>
                </select>
                   </div>
            <div key={platforms.name}>
            {input.platforms.map(elem=>
                <div>
                    <p>{elem}</p>
                    <button type="button" onClick={()=> handleDeletePlatforms(elem)}>X</button>
                    </div>
                    )}
                    <div>
                        {
                            !(errors.name && errors.description && errors.released 
                                && errors.rating) &&
                        
                     <button className="submit" type= "submit">Submit</button> 
                            }
                    </div>
                    <div>
       <button className="reset"
              type="reset"
              value = "limpiarform"
              onClick = {clearForm}>
               Reset
              </button>

        </div>
            </div>
            

        </form>
        
    </div>
)
}