import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { disposeSalad, makeSalad } from '../redux'



const SaladShop = () => {
    
    const saladCount = useSelector(state => state.salad.currentSaladCount)
    const dispatch = useDispatch()

    return (
        <div>
        <h2>Current salad in stock: {saladCount} </h2>
        <button onClick={()=>dispatch(makeSalad())}>
            add salad
        </button>
        
        <button onClick={()=>dispatch(disposeSalad())}>
            dispose salad
        </button>
        </div>
    )
}

export default SaladShop
