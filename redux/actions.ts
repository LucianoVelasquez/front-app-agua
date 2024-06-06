import axios from 'axios'

export const GET_LOTEOS = 'GET_LOTEOS'
export const GET_MEDIDORES = 'GET_MEDIDORES'
export const GET_MEDIDOR_BY_ID = 'GET_MEDIDOR_BY_ID'
export const PUT_LECTURA_BY_MEDIDOR = 'PUT_LECTURA_BY_MEDIDOR'

const URL_BACK = 'http://127.0.0.1:8000/'

export const get_loteos = () => {
    return async function (dispatch: any) {
        try {
            //Test en Android
            /* const {data} = await axios('https://jsonplaceholder.typicode.com/users') */

            const {data} = await axios('http://127.0.0.1:8000/loteo')
            console.log(data);
            
            dispatch({type: GET_LOTEOS, payload: data})

        } catch (error) {
            console.log("Error get_loteos");
            
        }
        
    }
}

export const get_medidores = () => {
    return async function (dispatch : any) {
        try {
            const { data } = await axios('http://127.0.0.1:8000/medidor');    
            
            dispatch({type: GET_MEDIDORES, payload: data})
        } catch (error) {
            console.log("Error get_medidores");
            
        }
    } 
}

export const get_medidor_by_id = (id: any) => {
    return async function (dispatch : any) {
        const {data} = await axios(`${URL_BACK}medidor/${id}`)
        dispatch({type: GET_MEDIDOR_BY_ID, payload: data})
    }
}

export const put_lectura_by_medidor = (id : any, valor : any) => {
    return async function (dispatch : any) {
        const {data} = await axios.put(`${URL_BACK}medidor/${id}`, valor)
        dispatch({type: PUT_LECTURA_BY_MEDIDOR, payload : data})
    } 
}

export const reset_medidores = () => {
    return async function () {
        const {data} = await axios(`${URL_BACK}reset-medidores/`)
        return data
    }
}