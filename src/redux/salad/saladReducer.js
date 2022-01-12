import { DISPOSE_SALAD, MAKE_SALAD } from "./saladTypes";


const initialState = {
    currentSaladCount: 0
}

export const saladReducer = (state=initialState, action) =>{
    switch(action.type){
        case MAKE_SALAD: 
            return{
                ...state,
                currentSaladCount: state.currentSaladCount + 1
            }
        case DISPOSE_SALAD:
            return{
                ...state,
                currentSaladCount: state.currentSaladCount - 1
            }
        default: return state
    }
}

export default saladReducer