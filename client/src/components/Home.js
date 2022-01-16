import React from "react";
import {useState, useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import {getGames, filterByCreation, sortByName, sortByRating, getGenres, filterByGenre} from "../actions";
import {Link} from "react-router-dom";
import Card from "./Card";
import Paginado from "./Paginado";

export default function Home(){
    const  dispatch = useDispatch();
    const allGames= useSelector((state)=>state.videogames)
    const genres= useSelector((state)=>state.genres)//equivale al mapStateToProps
    //console.log(genres)

    const [orden, setOrden]=useState("")//estado local vacío,cuando seteo la app me modifica el estado local y se renderiza
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

    useEffect(()=>{
        dispatch(getGenres())
    },[dispatch])

    

     function handleClick(e){
         e.preventDefault();
         dispatch(getGames())//resetea para que traiga todos los games de nuevo cuando se buggea

     }
     function handleFilterByGenres(e){
         e.preventDefault()
         dispatch(filterByGenre(e.target.value))
         setCurrentPage(1)
         setOrden(`Ordenado ${e.target.value}`)
     }
     function handleFilterByCreation(e){
         e.preventDefault();
         dispatch(filterByCreation(e.target.value))//lo que viene del select, el payload
         setCurrentPage(1);
         setOrden(`Ordenado ${e.target.value}`)
     }
     function handleSortByName(e){
         e.preventDefault();
         dispatch(sortByName(e.target.value))
         setCurrentPage(1);
         setOrden(`Ordenado ${e.target.value}`)

     }
     function handleSortByRating(e){
         e.preventDefault();
         dispatch(sortByRating(e.target.value))
         setCurrentPage(1);
         setOrden(`Ordenado ${e.target.value}`)
     }

     return (
         <div>
                
            <Link to='/createvideogame'>Create videogame</Link>
            <h1>We love Playing!</h1>
            <button onClick={e=>{handleClick(e)}}>
                All Games
            </button>
            <div>
                <label> Choose a Game by Genre:</label>
                <select name="filtergenres" defaultValue={"default"}
                onChange={(e)=>handleFilterByGenres(e)}>
                {/* <option value="default">All Genres</option> */}
                <option value="all">All Genres</option>
                { 
                genres?.map((genres) =>{
                   // console.log(genres)
                    return (
                        <option key={genres} value={genres}>{genres}</option>
                        )
                    })}
                    </select>
                    
                <label>Choose by source of creation:</label>
                <select onChange={handleFilterByCreation}>
                    <option value="All">All</option>
                    <option valu="Api">Api</option>
                    <option value= "Created">Created</option>
                </select>
                <Paginado
                gamesPerPage={gamesPerPage}//son las props que el Paginado necesita
                allGames={allGames.length}
                paginado={paginado}
                />
                <select onChange={handleSortByName}>
                    <option value = "asc" >A-Z Videogames</option>
                    <option value = "desc" >Z-A Videogames</option>
                </select>
                <select onChange={handleSortByRating}>
                    <option value="asc">Increasing Rating</option>
                    <option value="desc">Decreasing Rating</option>
                </select>
                {
                   currentGames?.map(elem=>{
                       return (
                           
                       <Card 

                       name={elem.name}
                       background_image={elem.background_image}
                       genres={elem.genres}
                       rating={elem.rating}
                       id={elem.id}
                       key={elem.id}/>
                       )
                   })
                }
            </div>

        </div>
    )
}