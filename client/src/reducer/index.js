const initialState={
    videogames: [],
    allGames:[],
    name:[],
    ratings_count:[],
    genres:[],
    platforms:[],
    detail:[]
}


function rootReducer(state=initialState, action){
    switch(action.type){
        case "GET_GAMES":
        return {
            ...state,
            videogames:action.payload,//se guarda todo lo que manda el payload de la action
            allGames:action.payload//cuando se dispara esta acción se cargan los 2 estados, sirve para los filtros
        }
        case "FILTER_BY_CREATION":
            
            const filterCreation=action.payload==="All"? //la lógica antes del return
            state.videogames :action.payload==="Api"?
            state.videogames.filter(elem=>!elem.createdInDb) :
            state.videogames.filter(elem=>elem.createdInDb);
            return{
                ...state,
                videogames:action.payload ==="All"? state.videogames: filterCreation
            };

            case "SORT_BY_NAME":
                let sortedName= action.payload==="asc" ?
                [...state.videogames].sort(function(a,b){
                    if(a.name.toLowerCase() > b.name.toLowerCase()){
                        return 1;
                    }
                    if(b.name.toLowerCase()>a.name.toLowerCase()){
                        return -1;
                    }
                    return 0;
                }) : [...state.videogames].sort(function(a,b){
                    if(a.name.toLowerCase() > b.name.toLowerCase()){
                        return -1;
                    } if(b.name.toLowerCase() > a.name.toLowerCase()){
                        return 1;
                    }
                    return 0;
                })
                return{
                    ...state,
                    videogames:sortedName
                }
                
                case "SORT_BY_RATING":
                    let sortedRating=action.payload==="asc"?
                    [...state.videogames].sort(function(a,b){
                        return (a.ratings_count - b.ratings_count);
                    }) :
                    [...state.videogames].sort(function(a,b){
                        return (b.ratings_rating_count - a.ratings_count)
                    })
                   
                    return {
                        ...state,
                        videogames:sortedRating
                    }
                    case "GET_NAME_GAMES":
                        return {
                            ...state,
                            videogames:action.payload//videogames es  el arreglo que va a filtrar
                        }
                        case "GET_GENRES":
                            
                            return {
                                
                                ...state,
                                genres:action.payload,
                            }
                            
                            
                         case "FILTER_BY_GENRES":
                             let genre = action.payload === "all" ? state.allGames : state.allGames.filter((elem)=>elem.genres.includes(action.payload))
                             
                             return {
                                 ...state,
                                 videogames:genre,
                                 
                                }
                                case "GET_PLATFORMS":
                                    const platf = action.payload.map(elem => elem.platforms).flat()
                                    const platformsMaped = [...new Set(platf)]
                                  return {
                                       ...state,
                                        platforms: platformsMaped,
                                        
                                    }
                                    
                            
                                
                                 
                                
                        case "CREATE_GAME":
                            return{
                                ...state,
                                
                                
                            }
                            case "GET_DETAIL":
                                return {
                                    ...state,
                                    detail:action.payload
                                }

                    


        default:
            return state
    }


}
export default rootReducer