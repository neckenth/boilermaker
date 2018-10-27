import axios from 'axios'

const GET_PUPPIES = 'GET_PUPPIES'
const ADD_PUPPY = 'ADD_PUPPY'
const REMOVE_PUPPY = 'REMOVE_PUPPY'

export const gotPuppies = (puppies) => ({type: GET_PUPPIES, puppies})
export const addedPuppy = (puppy) => ({type: ADD_PUPPY, puppy})
export const removedPuppy = (puppyId) => ({type: REMOVE_PUPPY, puppyId})

export const fetchPuppies = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/puppies')
        const allPuppies = res.data
        return dispatch(gotPuppies(allPuppies))
    } catch (error) {
        console.log('oops something went wrong fetching puppies')
    }
}

export const postPuppy = (puppy) => async (dispatch) => {
    try {
        const res = await axios.post('/api/puppies', puppy)
        const newPuppy = res.data
        return dispatch(addedPuppy(newPuppy))
    } catch (error) {
        console.log('oops something went wrong adding a puppy')
    }
}

export const deletePuppy = (puppyId) => async (dispatch) => {
    try {
        axios.delete(`/api/puppies/:${puppyId}`, puppyId)
        return dispatch(removedPuppy(puppyId))
    } catch (error) {
        console.log('oops something went wrong deleting a puppy')
    }
}

const puppyReducer = (state = {puppies: []}, action) => {
    switch (action.type) {
        case GET_PUPPIES: {
            return {...state, puppies: [...state.puppies].concat(action.puppies)}
        } case ADD_PUPPY: {
            return {...state, puppies: [...state.puppies, action.puppy]}
        } case REMOVE_PUPPY: {
            return {...state, puppies: state.puppies.filter(elem => elem.id !== action.puppyId)}
        } default: {
            return state
        }
    }
}

export default puppyReducer