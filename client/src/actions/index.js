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
//         .catch((err) => {
//           console.log(err))
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

    export function sortByName(payload){
        return{
            type: "SORT_BY_NAME",
            payload

        }
    }
    export function sortByRating(payload){
        return {
            type: "SORT_BY_RATING",
            payload
        }
    }
    export function getNameGames(payload){
        return async function(dispatch){
            try {
                var json= await axios.get("http://localhost:3001/videogames?name=" + payload) //ruta por query del back
                return dispatch({
                    type: "GET_NAME_GAMES",
                    payload:json.data

                })
            } catch (err) {
                alert("Videogame not found")
            }
        }
    }

   export function getGenres(){
       return async function(dispatch){
           try {
               const response= await axios.get("http://localhost:3001/genres");
               return dispatch({
                   type: "GET_GENRES",
                   payload:response.data
               })
           } catch (err) {
               console.log(err)
               
           }


       }
   }
    export function filterByGenre(payload){
        return {
            type: "FILTER_BY_GENRE", 
            payload
        }

    }

   export function getPlatforms(){
       return async function(dispatch){
           try {
               console.log(responseMaped)
               const response= await axios.get("http://localhost:3001/videogames");
               const responseMaped=  response.map(platforms=>platforms)
               return dispatch({
                   type: "GET_PLATFORMS",
                   payload:responseMaped.data
               })
               
           } catch (err) {
               console.log(err)
               
           }
       }
   }
    export function filterByPlatforms(payload){
        return{
        type: "FILTER_BY_PLATFORMS",
        payload
    }
}


    export function newGame(payload){
        return async function(dispatch){
            try {
                const response= await axios.post("http://localhost:3001/videogame", payload)
                console.log(response)
                return dispatch({
                    type: "CREATE_GAME",
                    payload: response.data
                })
            } catch (err) {
                console.log(err)
                
            }
        }
    }
    export function getDetail(id){
        return async function(dispatch){
            try {
                var json=await axios.get("http://localhost:3001/videogame/" + id)
                return dispatch({
                    type: "GET_DETAIL",
                    payload:json.data
                })
            } catch (err) {
                alert("Game ID not found")
                
            }
        }

    }
   

