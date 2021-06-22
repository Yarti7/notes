import {combineReducers, createStore} from "redux";
import notesReducer from "./notes-reducers";


let reducers = combineReducers({
    notes:  notesReducer
});


const store = createStore(reducers);

window.___store___ = store;

export default store;
