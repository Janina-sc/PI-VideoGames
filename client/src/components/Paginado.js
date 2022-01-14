import React from "react";
import styles from "./Paginado.module.css";

export default function Paginado({gamesPerPage, allGames, paginado}){
    const pageNumbers= []
    for (let i=1; i<=Math.ceil(allGames/gamesPerPage); i++){
        pageNumbers.push(i+1)
    }
    return (
        <nav>
            <ul className={styles.paginado}>
                {pageNumbers && pageNumbers.map(number=>{
                    <li className="number" key={number}>
                    <a onClick={()=>paginado(number)}>{number}</a>
                    </li>
                })}
            </ul>
        </nav>
    )
}