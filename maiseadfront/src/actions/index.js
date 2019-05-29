import axios from 'axios';

export function obterListaEad(successHandler,errorHandler){
    const URL = "https://localhost:5001/api/values";
    axios
        .get(URL)
        .then((result) => successHandler(result.data))
        .catch((error) => errorHandler(error));
    return {
        type:null,
        payload: null
    };
}