import React, {useState} from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

const NewCakeContainer = ({numOfCakes, buyCake}) => {

    const[number, setNumber] = useState(1)

    return (
        <div>
            <h2>Number of Cakes: {numOfCakes}</h2>
            <input type="text" value={number} onChange={e => setNumber(e.target.value)}></input>
            <button onClick={ () => buyCake(number)}>Buy {number} Cakes</button>
        </div>  
    )
}

const mapStateToProps = state => {
    return{
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        buyCake: number => dispatch(buyCake(number))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)
(NewCakeContainer)
