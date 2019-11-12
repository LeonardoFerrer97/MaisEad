import React from 'react';
import {getComentarioByCursoId,postComentario} from '../../actions/index'
import * as _ from 'lodash';


class Comentario extends React.Component{

    constructor(props){
        super(props);
        this.state={comments:[],user:''}
    }

    onPostComment(commentTxT)
    {
        let comment = [{
            id:0,
            cursoId :this.props.ead.id,
            commenTxt : commentTxT,
            userName : this.state.user,
        }]

        postComentario(comment,()=>{},()=>{})
    }

    successHandlerGetComments(comments){
        this.setState({comments})
    }

    componentDidMount(){
        if(!_.isEmpty(this.props.user) && !_.isEmpty(this.props.ead)){
            getComentarioByCursoId(this.props.ead.id,this.successHandlerGetComments,()=>{})
            this.setState({user :this.props.user.email})
        }
    }
    
    render(){
        return <div></div>     
    }
}




export default Comentario;