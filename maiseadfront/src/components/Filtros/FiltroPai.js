import React from 'react';
import { withStyles } from '@material-ui/styles';
import '../../styles/Filtro/Filtro.css'
import FiltrosAvancados from './FiltrosAvançados';
import Filtro from './Filtro';
import Buttons from './Buttons';

import deburr from 'lodash/deburr';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getEadFiltered, getAllTipos } from '../../actions/index'

const styles = {
    root: {
        backgroundColor: '#910000',
        height: '64px',
    },
};

let tiposOficial;

class FiltroPai extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFiltroAvançado: true,
            curso: '',
            mensalidade: '',
            passoAtual: 0,
            duracao: '',
            url: '',
            pontoDeApoio: '',
            notaMec: 0,
            nomeFaculdade: '',
            tipoCurso: 0,
            tiposOficial: [],
            tipos: []
        }
    }
    componentDidMount() {
        this.props.getAllTipos(this.successTipo, this.errorHandler)
    }
    handleNext = () => {
        this.setState({ passoAtual: this.state.passoAtual + 1 })
    }

    successTipo(result) {
        tiposOficial = result 
    }

    handleBack = () => {
        this.setState({ passoAtual: this.state.passoAtual - 1 })
    }

    ClickPesquisaAvançada = () => {
        this.setState({ isFiltroAvançado: !this.state.isFiltroAvançado });
    }
    handleChange = name => event => {
        if(event.target)
            this.setState({ [name]: event.target.value });
        else
            this.setState({ [name]: event });
    };

    realizarPesquisa = () => {
        this.props.getEadFiltered(this.state.passoAtual, this.state.tipoCurso,this.state.duracao, this.state.url, this.state.curso, this.state.mensalidade, this.state.pontoDeApoio, this.state.nomeFaculdade, this.props.successHandler, this.errorHandler)
    }
    errorHandler = () => {
        console.error('erro')
    };



    getSuggestions (value, { showEmpty = false } = {}) {
        const inputValue = deburr(value.trim()).toLowerCase();
        const inputLength = inputValue.length;
        let count = 0;
        console.log(tiposOficial)
        return inputLength === 0
            ? []
            :
            tiposOficial.filter((x) => { return count < 1 && x.nomeTipo.includes(inputValue) })
    }



    render() {
        return <div className={'body-filtro'}>
            <div className='titulo-filtro'>Filtre aqui o seu EaD ideal</div>
            {!this.state.isFiltroAvançado ?
                <FiltrosAvancados
                    handleBack={this.handleBack}
                    handleNext={this.handleNext}
                    passoAtual={this.state.passoAtual}
                    handleChange={this.handleChange}
                    notaMec={this.state.notaMec}
                    nomeFaculdade={this.state.nomeFaculdade}
                    url={this.state.url}
                    pontoDeApoio={this.state.pontoDeApoio}
                /> :
                <Filtro
                    handleChange={this.handleChange}
                    curso={this.state.curso}
                    duracao={this.state.duracao}
                    mensalidade={this.state.mensalidade}
                    tipoCurso={this.state.tipoCurso}
                    getSuggestions={this.getSuggestions}
                    tipos={this.state.tipos}
                />

            }
            <Buttons
                ClickPesquisaAvançada={this.ClickPesquisaAvançada}
                isFiltroAvançado={this.state.isFiltroAvançado}
                realizarPesquisa={this.realizarPesquisa}
            />

        </div>
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getEadFiltered, getAllTipos }, dispatch)
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(FiltroPai));