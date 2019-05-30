import axios from 'axios';

export const OBTER_EAD = 'OBTER_EAD'

export function obterListaEad(successHandler,errorHandler){
    const URL = "https://localhost:5001/api/values";
    axios
        .get(URL)
        .then((result) => successHandler(result.data))
        .catch((error) => errorHandler(error));
    return {
        type:OBTER_EAD,
        payload: null
    };
}

export function obterEadSucesso(listaEad){
    console.log(listaEad)
    return{
        type:OBTER_EAD,
        payload:listaEad
    }
}