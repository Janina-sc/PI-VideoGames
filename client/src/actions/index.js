import axios from "axios";


export function getGames(){
    return async function(dispatch){
        try{
        var json= await axios.get("http://localhost:3001/videogames") //acá se conecta el front y el back

        return dispatch({
            type: "GET_GAMES",
            payload:json.data
        })

    }catch(err){
        console.log(err)
    }
}
}

// export function getVideoGames() {
//     return function (dispatch) {
//       return fetch("http://localhost:3001/videogames")
//         .then((response) => {
//           dispatch({
//             type: "GET_GAMES",
//             payload: response.data,
//           });
  
//         })
//         .catch((error) => {
//           alert("Get VideoGames not Working")
//         }
//         )
//     }
//   }

export function filterByCreation(payload){
    return {
        type: "FILTER_BY_CREATION",
        payload,
    };
   
}
