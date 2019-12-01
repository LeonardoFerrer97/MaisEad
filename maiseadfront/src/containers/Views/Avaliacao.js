import React from 'react';
import * as _ from 'lodash';
import Avalie from '../../components/Avalie/Avalie';
import '../../styles/Compare/EadCompare.css';
import {avaliarCurso} from '../../actions/index'
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
            snackBarToEnd:false,
        }
    }

    handleChange = (event,name) => {
        this.setState({ [name]: event });
    };

    handleClose =()=>{

        this.setState({showSnackbar:false})
    }

    onClickAvaliar =() =>{
        if(!this.state.isAvaliar){
           if (this.props.auth.isAuthenticated()) {
                this.setState({isAvaliar:true})
            }
            else
              this.setState({showSnackbar:true})
        }
        else
            avaliarCurso(this.props.ead, this.state.Nota,this.state.Organizacao,this.state.Infra,this.state.Material, this.onAvaliarAcabar, () => { })
    }

    onAvaliarAcabar = () =>
    {
        this.setState({snackBarToEnd:true});
        setTimeout(function () {
            this.setState({snackBarToEnd:false})
            history.push('/')
        }, 2000);
    }

    onClickVoltar =() =>{
        if(!this.state.isAvaliar)
            history.push('/')
        else
            this.setState({isAvaliar:false})
    }

    render(){
        if(!_.isEmpty(this.props.ead))
            return <Avalie 
                            ead={this.props.ead} 
                            isAvaliar ={this.state.isAvaliar}
                            handleChange ={this.handleChange}
                            Nota={this.state.Nota}
                            Infra={this.state.Infra}
                            Material={this.state.Material}
                            Organizacao={this.state.Organizacao}
                            onClickAvaliar = {this.onClickAvaliar}
                            onClickVoltar = {this.onClickVoltar}
                            handleClose = {this.handleClose}
                            showSnackbar = {this.state.showSnackbar}
                            snackBarToEnd = {this.state.snackBarToEnd}
                            >
                            </Avalie> 
        else return <div></div>
    }
}



export default Avaliacao;