import { BUY_CAKE } from "./Caketypes";


const initialState = {
    no_of_cakes:10
}

const cakeReducer = (state = initialState,action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {...state,no_of_cakes:state.no_of_cakes-1}    
        default:
            break;
    }
}



export default cakeReducer;