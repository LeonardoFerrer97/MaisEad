import React from 'react';
import * as _ from 'lodash';
import Avalie from '../../components/Avalie/Avalie';
import '../../styles/Compare/EadCompare.css';
import history from '../../components/Common/history';
class Avaliacao extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Nota:0,
            Infra:0,
            Material:0,
            Organizacao:0,
            isAvaliar:false,
        }
    }

    handleChange = name => event => {
        if(event.target)
            this.setState({ [name]: event.target.value });
        else
            this.setState({ [name]: event });
    };

    onClickAvaliar =() =>{
        if(!this.state.isAvaliar)
            this.setState({isAvaliar:true})
        else
            console.log('to do')
    }

    onClickVoltar =() =>{
        if(!this.state.isAvaliar)
            history.push('/')
        else
            console.log('to do')
    }

    render(){
        if(!_.isEmpty(this.props.ead))
            return <Avalie ead={this.props.ead} isAvaliar ={this.state.isAvaliar}></Avalie> 
        else return <div></div>
    }
}



export default Avaliacao;