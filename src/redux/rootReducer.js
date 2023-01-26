import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer  from "./icecream/iceCreamReducer";

const rootreducer = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer
})


export default rootreducer


