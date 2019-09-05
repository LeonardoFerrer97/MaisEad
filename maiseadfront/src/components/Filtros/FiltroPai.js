import React from 'react';
import { withStyles } from '@material-ui/styles';
import '../../styles/Filtro/Filtro.css'
import FiltrosAvancados from './FiltrosAvançados';
import Filtro from './Filtro';
import Buttons from './Buttons';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getEadFiltered} from '../../actions/index'

const styles = {
    root: {
        backgroundColor: '#910000',
        height: '64px',
    },
};

class FiltroPai extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFiltroAvançado: false,
            curso: '',
            mensalidade:'',
            passoAtual: 0,
            duracao: '',
            url:'',
            pontoDeApoio:'',
            notaMec:0,
            nomeFaculdade:'',
        }
    }

    handleNext= () =>{
        this.setState({passoAtual : this.state.passoAtual +1})
    }

    handleBack= () =>{
        this.setState({passoAtual : this.state.passoAtual -1})
    }

    ClickPesquisaAvançada = () => {
        this.setState({ isFiltroAvançado : !this.state.isFiltroAvançado });
    }
    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    realizarPesquisa = () =>{
        this.props.getEadFiltered(this.state.passoAtual,this.state.duracao,this.state.url,this.state.curso,this.state.mensalidade,this.state.pontoDeApoio,this.state.nomeFaculdade,this.props.successHandler,this.errorHandler)
    }
    errorHandler = () =>{
        console.error('erro')
    };
    

    render() {
        return <div className={'body-filtro'}>
        <div className='titulo-filtro'>Filtre aqui o seu EaD ideal</div>
            {this.state.isFiltroAvançado ?
                <FiltrosAvancados 
                    handleBack={this.handleBack}
                    handleNext={this.handleNext}
                    passoAtual={this.state.passoAtual}
                    handleChange = {this.handleChange}
                    notaMec = {this.state.notaMec}
                    nomeFaculdade = {this.state.nomeFaculdade}
                    url = {this.state.url}
                    pontoDeApoio = {this.state.pontoDeApoio}
                /> :
                <Filtro 
                    handleChange ={this.handleChange}
                    curso = {this.state.curso}
                    duracao = {this.state.duracao}
                    mensalidade = {this.state.mensalidade}
                />

            }
            <Buttons
                ClickPesquisaAvançada={this.ClickPesquisaAvançada}
                isFiltroAvançado={this.state.isFiltroAvançado} 
                realizarPesquisa = {this.realizarPesquisa}
            />
                
        </div>
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getEadFiltered},dispatch)
}

export default connect(null,mapDispatchToProps)(withStyles(styles)(FiltroPai));