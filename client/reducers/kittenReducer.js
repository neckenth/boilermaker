import axios from 'axios'

const GET_KITTENS = 'GET_KITTENS'
const ADD_KITTEN = 'ADD_KITTEN'
const REMOVE_KITTEN = 'REMOVE_KITTEN'

export const gotKittens = (kittens) => ({type: GET_KITTENS, kittens})
export const addedKitten = (kitten) => ({type: ADD_KITTEN, kitten})
export const removedKitten = (kittenId) => ({type: REMOVE_KITTEN, kittenId})

export const fetchKittens = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/kittens')
        const allKittens = res.data
        return dispatch(gotKittens(allKittens))
    } catch (error) {
        console.log('oops something went wrong fetching kittens')
    }
}

export const postKitten = (kitten) => async (dispatch) => {
    try {
        const res = await axios.post('/api/kittens', kitten)
        const newKitten = res.data
        return dispatch(addedKitten(newKitten))
    } catch (error) {
        console.log('oops something went wrong adding a kitten')
    }
}

export const deleteKitten = (kittenId) => async (dispatch) => {
    try {
        await axios.delete(`/api/kittens/:${kittenId}`, kittenId)
        return dispatch(removedKitten(kittenId))
    } catch (error) {
        console.log('oops something went wrong deleting a kitten')
    }
}

const kittenReducer = (state = {kittens: []}, action) => {
    switch (action.type) {
        case GET_KITTENS: {
            return {...state, kittens: [...state.kittens].concat(action.kittens)}
        } case ADD_KITTEN: {
            return {...state, kittens: [...state.kittens, action.kittens]}
        } case REMOVE_KITTEN: {
            return {...state, kittens: state.kittens.filter(elem => elem.id !== action.kittenId)}
        } default: {
            return state
        }
    }
}

export default kittenReducer;