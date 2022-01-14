const initialState={
    videogames: [],
    allGames:[],
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
            // const filterCreation= action.payload==="Created" ? allGames.filter(elem=>elem.createdInDb) : videogames.filter(elem=> !elem.createdInDb)
            // return {
            //     ...state,
            //     games:action.payload==="All"?state.videogames:filterCreation
            // }
            const filterCreation=action.payload==="All"? //la lógica antes del return
            state.videogames :action.payload==="Api"?
            state.videogames.filter(elem=>!elem.createdInDb) :
            state.videogames.filter(elem=>elem.createdInDb);
            return{
                ...state,
                videogames:action.payload ==="All"? state.videogames: filterCreation
            };
        default:
            return state
    }


}
export default rootReducer