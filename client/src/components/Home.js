import React from "react";
import {useState, useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import {getGames, filterByCreation} from "../actions";
import {Link} from "react-router-dom";
import Card from "./Card";
import Paginado from "./Paginado";

export default function Home(){
    const  dispatch = useDispatch();
    const allGames= useSelector((state)=>state.videogames)//equivale al mapStateToProps
    const [currentPage, setCurrentPage]=useState(1);//estado local,el usestate es 1 porque es donde arranca
    const [gamesPerPage, setGamesPerPage]= useState(15);//estado local:los que renderiza por página
    const indexOfLastGame= currentPage * gamesPerPage//15
    const indexOfFirstGame= indexOfLastGame - gamesPerPage//0
    const currentGames= allGames.slice(indexOfFirstGame, indexOfLastGame)//vip

    const paginado= (pageNumber)=>{//ayuda a renderizar
        setCurrentPage(pageNumber)
    }

    useEffect(()=>{//traemos los vg cuando el componente se monta
        dispatch(getGames())//equivale al mapDispatchToProps
    }, [dispatch])//para evitar loops infinitos

     function handleClick(e){
         e.preventDefault();
         dispatch(getGames())//resetea para que traiga todos los games de nuevo cuando se buggea

     }
     function handleFilterByCreation(e){
         dispatch(filterByCreation(e.target.value))//lo que viene del select, el payload
     }

    return (
        <div>
            <Link to='/createvideogame'>Create videogame</Link>
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
                <select onChange={handleFilterByCreation}>
                    <option>All</option>
                    <option>Api</option>
                    <option>Created</option>
                </select>
                <Paginado
                gamesPerPage={gamesPerPage}//son las props que el Paginado necesita
                allGames={allGames.length}
                paginado={paginado}
                />
                <select>
                    <option value = "asc" >A-Z Videogames</option>
                    <option value = "desc" >Z-A Videogames</option>
                </select>
                <select>
                    <option value="asc">Increasing Rating</option>
                    <option value="des">Decreasing Rating</option>
                </select>
                {
                   currentGames?.map(elem=>{
                       return (
                       <Card 
                       name={elem.name}
                       image={elem.img}
                       genre={elem.genre}/>
                       )
                   })
                }
            </div>

        </div>
    )
}