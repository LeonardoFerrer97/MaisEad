import axios from 'axios';

export const OBTER_EAD = 'OBTER_EAD'

export function obterListaEad(successHandler, errorHandler) {
    const URL = "https://localhost:5001/api/values";
    axios
        .get(URL)
        .then((result) => successHandler(result.data))
        .catch((error) => errorHandler(error));
    return {
        type: OBTER_EAD,
        payload: null
    };
}

export function obterEadSucesso(listaEad) {
    return {
        type: OBTER_EAD,
        payload: listaEad
    }
}

export function getEadFiltered(NotaMec,Duracao,Url,Nome,PontoApoio,Mensalidade,NomeFaculdade,successHandler,errorHandler) {
    const URL = `https://localhost:5001/api/Curso/Filter?NotaMec=${NotaMec}&Duracao=${Duracao}&Url=${Url}&Nome=${Nome}&PontoApoio=${PontoApoio}&Mensalidade=${Mensalidade}&nomeFaculdade=${NomeFaculdade}`
    axios
        .get(URL)
        .then((result) => successHandler(result.data))
        .catch((error) => errorHandler(error));
    return {
        type: OBTER_EAD,
        payload: null
    };
}