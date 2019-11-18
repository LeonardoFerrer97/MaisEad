import axios from 'axios';

export const OBTER_EAD = 'OBTER_EAD'
export const USER = 'user'

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

export function loginUser(user) {
    return {
        type: USER,
        payload: user
    }
}

export function getComentarioByCursoId(cursoId, successHandler, errorHandler) {
    const URL = `https://localhost:5001/api/Comentario/curso/${cursoId}`;
    axios
        .get(URL)
        .then((result) => successHandler(result.data))
        .catch((error) => errorHandler(error));
    return {
        type: null,
        payload: null
    };
}
export function postComentario(comment, successHandler, errorHandler) {
    const URL = `https://localhost:5001/api/Comentario`;
    axios
        .post(URL, comment)
        .then((result) => successHandler(result.data))
        .catch((error) => errorHandler(error));
    return {
        type: null,
        payload: null
    };
}




export function getEadFiltered(NotaMec, TipoId, Duracao, Url, Nome, PontoApoio, Mensalidade, NomeFaculdade, successHandler, errorHandler) {
    const URL = `https://localhost:5001/api/Curso/Filter?NotaMec=${NotaMec}&TipoId=${TipoId}&Duracao=${Duracao}&Url=${Url}&Nome=${Nome}&PontoApoio=${PontoApoio}&Mensalidade=${Mensalidade}&nomeFaculdade=${NomeFaculdade}`
    axios
        .get(URL)
        .then((result) => successHandler(result.data))
        .catch((error) => errorHandler(error));
    return {
        type: OBTER_EAD,
        payload: null
    };
}

export function postUsuario(email, successHandler, errorHandler) {

    const URL = `https://localhost:5001/api/Usuario`
    let body = {
        id: 0, email: email
    }
    axios
        .post(URL, body)
        .then((result) => successHandler(result.data))
        .catch((error) => errorHandler(error));
    return {
        type: OBTER_EAD,
        payload: null
    };

}


export function getAllTipos(successHandler, errorHandler) {
    const URL = 'https://localhost:5001/api/TipoCurso'
    axios
        .get(URL)
        .then((result) => successHandler(result.data))
        .catch((error) => errorHandler(error));
    return {
        type: OBTER_EAD,
        payload: null
    };
}


export function avaliarCurso(ead, nota, successHandler, errorHandler) {
    const URL = 'https://localhost:5001/api/AvaliacaoUsuario';
    let body = [{

        cursoId: ead.id,
        nota: nota
    }]
    axios
        .post(URL, body)
        .then((result) => successHandler(result.data))
        .catch((error) => errorHandler(error));
    return {
        type: OBTER_EAD,
        payload: null
    };
}


