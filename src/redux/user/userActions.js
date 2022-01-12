import axios from 'axios'
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes"

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST   
    }
}

export const fetchUsersSuccess = users =>{
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = error =>{
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

//async action creator, does't need to be pure.
//i.e it can have side effects.
//returns another function instead on an action object and can contain api
//calls

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest)
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res=> {
            const users = res.data
            dispatch(fetchUsersSuccess(users))
        })
        .catch(err => {
            const errMsg = err.message
            dispatch(fetchUsersFailure(errMsg))
        })
    }
}