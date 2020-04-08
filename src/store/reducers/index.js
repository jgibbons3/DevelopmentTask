import { combineReducers } from 'redux';
import postReducer from "./postReducer";
// import profileReducer from "./profileReducer";


const rootReducer = combineReducers({
    postReducer,
    // profileReducer
})

export default rootReducer;