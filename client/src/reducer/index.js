const initialState={
    videogames: [],
    allGames:[],
    name:[],
    rating:[]
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
                        return (a.rating - b.rating);
                    }) :
                    [...state.videogames].sort(function(a,b){
                        return (b.rating - a.rating)
                    })
                   
                    return {
                        ...state,
                        videogames:sortedRating
                    }
                    


        default:
            return state
    }


}
export default rootReducer