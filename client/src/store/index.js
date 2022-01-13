import {createStore, applyMiddleware} from "redux";
import {componseWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducer";

export const store= createStore(rootReducer, componseWithDevTools(applyMiddleware(thunk)))