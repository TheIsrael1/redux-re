
import { MAKE_SALAD } from "./saladTypes"
import { DISPOSE_SALAD } from "./saladTypes"


export const makeSalad = () =>{
    return{
        type: MAKE_SALAD
    }
}

export const disposeSalad = () => {
    return{
        type: DISPOSE_SALAD
    }
}