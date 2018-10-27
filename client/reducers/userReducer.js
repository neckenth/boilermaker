import axios from 'axios'

const GET_USERS = 'GET_USERS'
const ADD_USER = 'ADD_USER'
const REMOVE_USER = 'REMOVE_USER'

export const gotUsers = (users) => ({type: GET_USERS, users})
export const addedUser = (user) => ({type: ADD_USER, user})
export const removededUser = (userId) => ({type: REMOVE_USER, userId})

export const fetchUsers = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/users')
        const allUsers = res.data
        return dispatch(gotUsers(allUsers))
    } catch (error) {
        console.log('oops something went wrong fetching users')
    }
}

export const postUser = (user) => async (dispatch) => {
    try {
        const res = await axios.post('/api/users', user)
        const newUser = res.data
        return dispatch(addedUser(newUser))
    } catch (error) {
        console.log('oops something went wrong adding a user')
    }
}

export const deleteUser = (userId) => async (dispatch) => {
    try {
        await axios.delete(`/api/users/:${userId}`, userId)
        return dispatch(removedUser(userId))
    } catch (error) {
        console.log('oops something went wrong deleting a user')
    }
}

const userReducer = (state = {users: []}, action) => {
    switch (action.type) {
        case GET_USERS: {
            return {...state, users: [...state.users].concat(action.users)}
        } case ADD_USER: {
            return {...state, users: [...state.users, action.user]}
        } case REMOVE_USER: {
            return {...state, users: state.users.filter(elem => elem.id !== action.userId)}
        } default: {
            return state
        }
    }
}

export default userReducer