import { BUY_ICECREAM } from "./iceCreamType";

const initialState = {
    noOfIceCream : 0
}


export const iceCreamReducer = (state = initialState,action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {...state,noOfIceCream:noOfIceCream+1}
        default:
            return state

    }

}