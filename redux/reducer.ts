import {GET_LOTEOS, GET_MEDIDORES, GET_MEDIDOR_BY_ID} from './actions'

const initialState = {
    loteos: ["hola"],
    medidores: [],
    medidor_detail: []
}

const rootReducer = (state = initialState, action : any) => {
    switch (action.type) {
        case GET_LOTEOS:
            return {...state, loteos: action.payload}

        case GET_MEDIDORES:
            return {...state, medidores: action.payload} 
            
        case GET_MEDIDOR_BY_ID:
            return {...state, medidor_detail: action.payload}

        default:
            return {...state}
    }
}

export default rootReducer