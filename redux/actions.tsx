import axios from 'axios'

export const GET_LOTEOS = 'GET_LOTEOS'
export const GET_MEDIDORES = 'GET_MEDIDORES'


export const get_loteos = () => {
    return async function (dispatch: any) {
        const {data} = await axios('http://127.0.0.1:8000/loteo')
        console.log(data);
        
        dispatch({type: GET_LOTEOS, payload: data})
    }
}

export const get_medidores = () => {
    return async function (dispatch : any) {
        const {data} = await axios('http://127.0.0.1:8000/medidor')
        dispatch({type: GET_MEDIDORES, payload: data})
    } 
}