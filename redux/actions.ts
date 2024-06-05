import axios from 'axios'

export const GET_LOTEOS = 'GET_LOTEOS'
export const GET_MEDIDORES = 'GET_MEDIDORES'
export const GET_MEDIDOR_BY_ID = 'GET_MEDIDOR_BY_ID'

const URL_BACK = 'http://127.0.0.1:8000/'

export const get_loteos = () => {
    return async function (dispatch: any) {
        const {data} = await axios('http://127.0.0.1:8000/loteo')
        
        dispatch({type: GET_LOTEOS, payload: data})
    }
}

export const get_medidores = () => {
    return async function (dispatch : any) {
        const {data} = await axios('http://127.0.0.1:8000/medidor')
        dispatch({type: GET_MEDIDORES, payload: data})
    } 
}

export const get_medidor_by_id = (id: any) => {
    return async function (dispatch : any) {
        const {data} = await axios(`${URL_BACK}medidor/${id}`)
        dispatch({type: GET_MEDIDOR_BY_ID, payload: data})
    }
}