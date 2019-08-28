import React from 'react';
import { withStyles } from '@material-ui/styles';
import '../../styles/Filtro/Filtro.css'
import FiltrosAvancados from './FiltrosAvançados';
import Filtro from './Filtro';
import Buttons from './Buttons';

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
            duracao: 0,
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
    render() {
        return <div className='body-filtro'>
        <div className='titulo-filtro'>Filtre aqui o seu EaD ideal</div>
            {this.state.isFiltroAvançado ?
                <FiltrosAvancados 
                    handleBack={this.handleBack}
                    handleNext={this.handleNext}
                    passoAtual={this.state.passoAtual}
                    handleChange = {this.handleChange}
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
                isFiltroAvançado={this.state.isFiltroAvançado} />
        </div>
    }
}

export default withStyles(styles)(FiltroPai)